#!/usr/bin/env python3
"""Copy the published portfolio, preserving content and adapting URL roots."""
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
from pathlib import Path, PurePosixPath
from urllib.parse import urljoin, urlsplit, urlunsplit, unquote
from urllib.request import Request, urlopen
import collections
import hashlib
import json
import re
import shutil
import time

ORIGIN = "https://elfie-lab-portfolio.roundotter8.chatgpt.site"
BASE = "/elfie-zoungrana-projets-experiences-numeriques/"
DESTINATION = "https://elfie-portfolio.github.io" + BASE
OUT = Path(".migration/export")
OUT.mkdir(parents=True, exist_ok=True)
EXTENSIONS = {".html", ".css", ".js", ".mjs", ".json", ".svg", ".png", ".jpg",
              ".jpeg", ".webp", ".gif", ".avif", ".ico", ".pdf", ".mp4", ".mov",
              ".webm", ".mp3", ".wav", ".otf", ".ttf", ".woff", ".woff2", ".txt",
              ".xml", ".webmanifest", ".wasm"}
TEXT_EXTENSIONS = {".html", ".css", ".js", ".mjs", ".json", ".svg", ".txt",
                   ".xml", ".webmanifest"}
ORIGIN_PARTS = urlsplit(ORIGIN)
seen = set()
pending = {ORIGIN + "/"}
resources = {}
external_links = set()

def resolve(raw, parent):
    raw = raw.strip().replace("&amp;", "&").replace("\\/", "/")
    if not raw or raw.startswith(("#", "data:", "blob:", "mailto:", "tel:", "javascript:")):
        return None
    if "$" + "{" in raw:
        if "?" in raw and "$" + "{" not in raw.split("?", 1)[0]:
            raw = raw.split("?", 1)[0]
        else:
            return None
    parsed = urlsplit(urljoin(parent, raw))
    if parsed.scheme not in {"http", "https"}:
        return None
    if parsed.netloc != ORIGIN_PARTS.netloc:
        external_links.add(urlunsplit(parsed))
        return None
    path = parsed.path or "/"
    if path.startswith(("/cdn-cgi/", "/_/", "/api/")):
        return None
    suffix = PurePosixPath(unquote(path)).suffix.lower()
    if path != "/" and suffix not in EXTENSIONS:
        return None
    return urlunsplit((ORIGIN_PARTS.scheme, ORIGIN_PARTS.netloc, path, "", ""))

class HTMLLinks(HTMLParser):
    def __init__(self):
        super().__init__()
        self.values = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        for key in ("href", "src", "poster", "data-src", "data-poster", "action"):
            if attrs.get(key):
                self.values.append(attrs[key])
        if attrs.get("srcset"):
            self.values.extend(item.strip().split()[0] for item in attrs["srcset"].split(",") if item.strip())

def discover(text, parent, suffix):
    values = []
    if suffix == ".html":
        parser = HTMLLinks()
        parser.feed(text)
        values.extend(parser.values)
    values.extend(match.group(2) for match in re.finditer(
        r"""(["'\x60])((?:https?://|/|\./|\.\./)[^"'\x60<>\s]+)""", text))
    values.extend(match.group(1).strip("\"'") for match in re.finditer(
        r"url\(\s*([^)\s]+)\s*\)", text, re.I))
    values.extend(match.group(1) for match in re.finditer(
        r"""(?:from\s*|import\s*\(\s*)['"]([^'"]+)['"]""", text))
    return {url for raw in values if (url := resolve(raw, parent))}

def remove_host_challenge(text):
    return re.sub(r"<script\b[^>]*>.*?</script>",
                  lambda m: "" if "__CF$cv$params" in m.group(0) or
                  "/cdn-cgi/challenge-platform/" in m.group(0) else m.group(0),
                  text, flags=re.I | re.S)

def portable(text, suffix):
    if suffix == ".html":
        text = remove_host_challenge(text)
    text = re.sub(r"""(["'\x60])/(?!/|>)""", lambda m: m.group(1) + BASE, text)
    text = re.sub(r"url\(\s*/(?!/)", "url(" + BASE, text)
    text = text.replace(ORIGIN + "/", DESTINATION).replace(ORIGIN, DESTINATION.rstrip("/"))
    return text

def fetch(url):
    last = None
    for attempt in range(3):
        try:
            req = Request(url, headers={"User-Agent": "Mozilla/5.0 (portfolio owner migration)",
                                        "Accept-Encoding": "identity"})
            with urlopen(req, timeout=90) as response:
                data = response.read()
                mime = response.headers.get("Content-Type", "")
                final_url = response.url
            if urlsplit(final_url).netloc != ORIGIN_PARTS.netloc:
                raise RuntimeError("Unexpected external redirect: " + url)
            path = unquote(urlsplit(url).path).lstrip("/") or "index.html"
            if ".." in PurePosixPath(path).parts or path.startswith((".git/", ".github/")):
                raise RuntimeError("Unsafe published path: " + path)
            suffix = PurePosixPath(path).suffix.lower()
            if suffix != ".html" and "text/html" in mime:
                raise RuntimeError("A required asset returned HTML: " + path)
            if len(data) > 90 * 1024 * 1024:
                raise RuntimeError("Published asset exceeds GitHub's regular file limit: " + path)
            text = data.decode("utf-8") if suffix in TEXT_EXTENSIONS else None
            if suffix == ".html" and ("<html" not in text.lower() or "elfie" not in text.lower()):
                raise RuntimeError("Unexpected HTML content: " + path)
            return url, path, suffix, mime, data, text
        except Exception as exc:
            last = exc
            if attempt < 2:
                time.sleep(attempt + 1)
    raise RuntimeError("Cannot copy required resource " + url) from last

while pending:
    batch = sorted(pending - seen)
    pending.clear()
    if not batch:
        break
    if len(seen) + len(batch) > 800:
        raise RuntimeError("Unexpectedly large resource graph; refusing an incomplete copy")
    seen.update(batch)
    with ThreadPoolExecutor(max_workers=6) as executor:
        results = list(executor.map(fetch, batch))
    for url, path, suffix, mime, data, source_text in results:
        output = portable(source_text, suffix).encode("utf-8") if source_text is not None else data
        target = OUT / path
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(output)
        if source_text is not None:
            pending.update(discover(remove_host_challenge(source_text), url, suffix) - seen)
        resources[path] = {
            "path": path,
            "source_url": url,
            "content_type": mime,
            "source_bytes": len(data),
            "output_bytes": len(output),
            "source_sha256": hashlib.sha256(data).hexdigest(),
            "output_sha256": hashlib.sha256(output).hexdigest(),
            "byte_identical": output == data,
        }
        print(f"Copied {path} ({len(data)} bytes)", flush=True)

counts = collections.Counter(PurePosixPath(path).suffix.lower() for path in resources)
if counts[".html"] < 16 or counts[".pdf"] < 1 or counts[".mp4"] < 1:
    raise RuntimeError("The expected complete portfolio, PDFs or video are missing")
if not (OUT / "projects.mjs").is_file():
    raise RuntimeError("Project data module is missing")
for path in resources:
    target = Path(path)
    if target.is_dir():
        raise RuntimeError("Published file conflicts with a repository directory: " + path)
for path in sorted(resources):
    target = Path(path)
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(OUT / path, target)
Path(".nojekyll").write_text("")
report = {
    "source_site": ORIGIN + "/",
    "source_site_version": 15,
    "source_site_commit": "d3612094233d4863da9ec3cfa3d4c984b77ef648",
    "destination": DESTINATION,
    "file_count": len(resources),
    "source_bytes": sum(item["source_bytes"] for item in resources.values()),
    "output_bytes": sum(item["output_bytes"] for item in resources.values()),
    "counts_by_extension": dict(sorted(counts.items())),
    "pages": sorted(path for path in resources if path.endswith(".html")),
    "adaptations": [
        "Prefix internal absolute URL paths with the GitHub Pages repository base.",
        "Update canonical portfolio URLs and copied links to GitHub Pages.",
        "Remove only the invisible Cloudflare challenge injected by the old host.",
        "Disable Jekyll so all static files and assets are served unchanged."
    ],
    "resources": [resources[path] for path in sorted(resources)],
    "external_links_preserved": sorted(external_links),
    "missing_required_resources": []
}
Path(".migration/report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
shutil.rmtree(OUT)
print(json.dumps({key: value for key, value in report.items()
                  if key not in {"resources", "external_links_preserved"}}, ensure_ascii=False, indent=2))
