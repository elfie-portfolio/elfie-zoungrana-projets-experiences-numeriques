#!/usr/bin/env python3
"""Verify the exported portfolio at its actual GitHub Pages base path."""
from pathlib import Path
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlsplit
from playwright.sync_api import sync_playwright
from PIL import Image, ImageChops
import hashlib
import json
import tempfile
import threading
import traceback

BASE = "/elfie-zoungrana-projets-experiences-numeriques/"
ORIGIN = "https://elfie-lab-portfolio.roundotter8.chatgpt.site"
LOCAL = "http://127.0.0.1:8765" + BASE
REPORT = json.loads(Path(".migration/report.json").read_text())
result = {"pages": [], "visual_checks": [], "interaction_checks": [], "errors": []}
work = Path(tempfile.mkdtemp(prefix="elfie-portfolio-qa-"))
(work / BASE.strip("/")).symlink_to(Path.cwd(), target_is_directory=True)
screens = work / "screens"
screens.mkdir()
class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_args):
        pass
server = ThreadingHTTPServer(("127.0.0.1", 8765), partial(QuietHandler, directory=str(work)))
threading.Thread(target=server.serve_forever, daemon=True).start()

def record(name, success=True, **details):
    result["interaction_checks"].append({"name": name, "passed": success, **details})
    if not success:
        raise AssertionError(name)

def ready(page, url):
    response = page.goto(url, wait_until="networkidle")
    assert response and response.ok, "Page failed: " + url
    page.evaluate("document.fonts.ready")
    page.locator("h1").first.wait_for()
    page.wait_for_timeout(180)

try:
    for item in REPORT["resources"]:
        actual = Path(item["path"]).read_bytes()
        assert hashlib.sha256(actual).hexdigest() == item["output_sha256"], item["path"]
        if Path(item["path"]).suffix not in {".html", ".css", ".mjs", ".svg"}:
            assert item["source_sha256"] == item["output_sha256"], item["path"]
    record("All imported files match their recorded hashes; binary media are byte identical")

    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        context = browser.new_context(viewport={"width": 1440, "height": 1000},
                                      device_scale_factor=1, reduced_motion="reduce")
        page = context.new_page()
        source = context.new_page()
        page_errors = []
        bad_responses = []
        page.on("pageerror", lambda error: page_errors.append(str(error)))
        page.on("response", lambda response: bad_responses.append(
            {"url": response.url, "status": response.status})
            if urlsplit(response.url).netloc == "127.0.0.1:8765" and response.status >= 400 else None)

        for path in REPORT["pages"]:
            source_path = "/" if path == "index.html" else "/" + path
            local_path = "" if path == "index.html" else path
            ready(source, ORIGIN + source_path)
            ready(page, LOCAL + local_path)
            assert source.locator("body").inner_text() == page.locator("body").inner_text(), "Content differs: " + path
            images = page.locator("img").evaluate_all("(images) => images.map(i => ({complete:i.complete,width:i.naturalWidth,src:i.src,loading:i.loading}))")
            broken = [image["src"] for image in images if image["loading"] != "lazy" and (not image["complete"] or not image["width"])]
            assert not broken, "Missing images: " + repr(broken)
            result["pages"].append({"path": path, "content_identical": True, "title": page.title()})

        cases = [("home-desktop", "", 1440, 1000),
                 ("projects-desktop", "projets.html", 1440, 1000),
                 ("project-desktop", "projets/zero-waste.html", 1440, 1000),
                 ("home-mobile", "", 390, 844),
                 ("project-mobile", "projets/campagnes-conceptuelles.html", 390, 844)]
        for name, path, width, height in cases:
            page.set_viewport_size({"width": width, "height": height})
            source.set_viewport_size({"width": width, "height": height})
            ready(source, ORIGIN + "/" + path)
            ready(page, LOCAL + path)
            for tab in (source, page):
                tab.evaluate("document.querySelectorAll('img').forEach(image => image.loading='eager')")
                tab.evaluate("Promise.all([...document.images].map(image => image.decode().catch(() => {})))")
                tab.evaluate("window.scrollTo(0, 0)")
            original = screens / (name + "-source.png")
            exported = screens / (name + "-github.png")
            source.screenshot(path=str(original), full_page=True, animations="disabled")
            page.screenshot(path=str(exported), full_page=True, animations="disabled")
            a, b = Image.open(original).convert("RGB"), Image.open(exported).convert("RGB")
            assert a.size == b.size, "Page dimensions differ: " + name
            histogram = ImageChops.difference(a, b).convert("L").histogram()
            changed = sum(histogram[12:])
            ratio = changed / (a.width * a.height)
            result["visual_checks"].append({"case": name, "source_size": list(a.size),
                                           "changed_pixel_ratio": ratio, "passed": ratio <= 0.005})
            assert ratio <= 0.005, "Visual rendering differs: " + name + " " + str(ratio)

        page.set_viewport_size({"width": 1440, "height": 1000})
        ready(page, LOCAL + "projets.html")
        assert page.locator(".project-card").count() == 12
        record("All 12 projects render after JavaScript initialization")
        page.locator('[data-filter="design"]').click()
        assert page.locator(".project-card").count() == 4
        record("Category filters work")
        page.locator('[data-filter="all"]').click()
        page.locator("#project-search").fill("NextStep")
        assert page.locator(".project-card").count() == 1
        record("Search finds the selected project")
        page.locator("#project-search").fill("aucun-projet-xyz")
        assert page.locator("#empty-state").is_visible()
        page.locator("#reset-filters").click()
        assert page.locator(".project-card").count() == 12
        record("Empty search and reset work")
        page.locator("#theme-toggle").click()
        assert page.locator("html").get_attribute("data-theme") == "dark"
        page.reload(wait_until="networkidle")
        assert page.locator("html").get_attribute("data-theme") == "dark"
        page.locator("#theme-toggle").click()
        record("Day/night mode persists after reload")
        ready(page, LOCAL)
        page.locator('[data-folder="design"]').click()
        page.wait_for_url("**/projets.html?categorie=design#projets")
        assert page.locator(".project-card").count() == 4
        record("Interactive home folders retain the repository base")
        ready(page, LOCAL)
        page.locator("#random-project").click()
        page.wait_for_url("**/projets/*.html")
        assert urlsplit(page.url).path.startswith(BASE + "projets/")
        record("Random-project navigation stays inside the portfolio")
        ready(page, LOCAL + "#projet-nextstep")
        page.wait_for_url("**/projets/nextstep.html")
        record("Legacy project hash links still work")

        page.set_viewport_size({"width": 390, "height": 844})
        ready(page, LOCAL)
        page.locator("#menu-toggle").click()
        assert page.locator("#menu-toggle").get_attribute("aria-expanded") == "true"
        assert page.locator("#main-nav").is_visible()
        page.keyboard.press("Escape")
        assert page.locator("#menu-toggle").get_attribute("aria-expanded") == "false"
        record("Mobile menu opens and closes with Escape")
        ready(page, LOCAL + "projets/campagnes-conceptuelles.html")
        video = page.locator("video")
        video.evaluate("(v) => v.load()")
        page.wait_for_function("document.querySelector('video').readyState >= 1")
        assert video.evaluate("(v) => v.duration") > 0
        record("The video loads and exposes a playable duration")

        internal_links = page.locator("a[href]").evaluate_all(
            "(links) => links.map(a => a.href).filter(href => href.startsWith(location.origin))")
        assert all(urlsplit(link).path.startswith(BASE) for link in internal_links)
        record("Rendered internal links retain the GitHub Pages subdirectory")
        assert not page_errors, repr(page_errors)
        assert not bad_responses, repr(bad_responses)
        record("No browser JavaScript errors or failed internal resources")
        browser.close()
    result["passed"] = True
except Exception as exc:
    result["passed"] = False
    result["errors"].append(str(exc))
    traceback.print_exc()
finally:
    server.shutdown()
    Path(".migration/browser-report.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps(result, ensure_ascii=False, indent=2))
if not result.get("passed"):
    raise SystemExit(1)
