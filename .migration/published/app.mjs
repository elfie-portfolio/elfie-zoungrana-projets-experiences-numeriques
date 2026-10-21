import { projects, categories, featuredProjectIds, filterProjects, projectFromHash, projectUrl } from './projects.mjs';

const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

export function renderArt(project) {
  switch (project.id) {
    case 'happy-learning': return `<div class="project-art art-happy-learning" aria-hidden="true"><span class="art-eyebrow"><span>ÉCOLE DE DEMAIN · INNOVATECH</span><span>2026</span></span><span class="happy-title">Happy<br><em>Learning.</em><small>APPRENDRE MIEUX.<br>VIVRE MIEUX.</small></span><img class="happy-phone" src="/assets/happy-learning/welcome.webp" width="393" height="852" alt="" loading="lazy"></div>`;
    case 'nextstep': return `<div class="project-art art-nextstep" aria-hidden="true"><span class="art-eyebrow"><span>CONCEPTION & PROMOTION · L3</span><span>FIGMA</span></span><div class="nextstep-orbit"></div><span class="nextstep-title">Next<em>Step.</em></span><span class="nextstep-tagline">Un mentor.<br>Un nouveau départ.<small>NUMÉRIQUE × ACCOMPAGNEMENT</small></span><img class="nextstep-phone" src="/assets/nextstep/welcome.webp" width="393" height="852" alt="" loading="lazy"></div>`;
    case 'penzi': return `<div class="project-art art-penzi art-penzi-mobile" aria-hidden="true"><span class="art-eyebrow"><span>OUTILS NUMÉRIQUES · L2</span><span>FIGMA</span></span><span class="penzi-orbit"></span><span class="penzi-art-title">Penzi.</span><span class="penzi-art-caption">Des intentions<br>claires.<small>RENCONTRES × DISCRÉTION</small></span><img class="penzi-phone" src="/assets/penzi/welcome.webp" width="393" height="852" alt="" loading="lazy"></div>`;
    case 'licorne-party': return `<div class="project-art art-licornparty" aria-hidden="true"><span class="art-eyebrow"><span>DESIGN & MISE EN PAGE · L3</span><span>FIGMA</span></span><span class="licorn-art-star">✳</span><span class="licorn-art-title">Licorn<br><em>Party.</em></span><span class="licorn-art-caption">Un peu de magie.<br>Beaucoup de souvenirs.</span><img class="licorn-phone" src="/assets/licornparty/welcome.webp" width="393" height="852" alt="" loading="lazy"></div>`;
    case 'zero-waste': return `<div class="project-art art-zero-campaign" aria-hidden="true"><span class="art-eyebrow"><span>ZERO WASTE PARIS</span><span>COMMUNICATION</span></span><span class="zero-campaign-title">10 ans.<br><em>Des actions<br>à partager.</em></span><span class="zero-campaign-caption">INSTAGRAM × LINKEDIN</span><img class="zero-campaign-post" src="/assets/zero-waste/10-ans-01.webp" width="1200" height="1500" alt="" loading="lazy"></div>`;
    case 'becomtech': return `<div class="project-art art-becomtech" aria-hidden="true"><span class="art-eyebrow"><span>04 / BECOMTECH</span><span>AMBASSADRICE</span></span><span class="tech-tag">STEM & FIÈRE DE L’ÊTRE</span><span class="becomtech-title">Le numérique<br>se conjugue<br>aussi au <em>féminin.</em></span><svg class="tech-star"><use href="#i-star"/></svg></div>`;
    case 'wonderball': return `<div class="project-art art-wonderball art-wonderball-web" aria-hidden="true"><span class="art-eyebrow"><span>GRAPHISME WEB · L2</span><span>FIGMA</span></span><span class="wonder-browser"><span class="wonder-browser-bar"><i></i><i></i><i></i><span>WONDERBALL / MAQUETTE WEB</span></span><img src="/assets/wonderball/home.webp" width="1600" height="900" alt="" loading="lazy"></span><span class="wonder-web-caption">DÉCOUVRIR LA BD SUR LE WEB.</span></div>`;
    case 'cauvaillac': return `<div class="project-art art-cauvaillac-site" aria-hidden="true"><span class="art-eyebrow"><span>SITE WEB DYNAMIQUE · L2</span><span>CMS</span></span><span class="cauvaillac-art-title">Cauvaillac<br><em>sur-Garonne.</em></span><span class="cauvaillac-art-caption">Une ville imaginée.<br>Un site à construire.<small>FIGMA × WORDPRESS</small></span><span class="cauvaillac-browser"><span class="cauvaillac-browser-bar">CAUVAILLAC / ACCUEIL</span><img src="/assets/cauvaillac/home.webp" width="1348" height="4022" alt="" loading="lazy"></span></div>`;
    case 'moina-accessoires': return `<div class="project-art art-moina-site" aria-hidden="true"><span class="art-eyebrow"><span>PROJET TUTORÉ · L3</span><span>EN BINÔME</span></span><span class="moina-art-title">Moina<em>Accessoires.</em></span><span class="moina-art-caption">Une marque artisanale.<br>Un site à imaginer.<small>IDENTITÉ × CONCEPTION WEB</small></span><img class="moina-art-photo" src="/assets/moina/product-photo.webp" width="620" height="640" alt="" loading="lazy"></div>`;
    case 'campagnes-conceptuelles': return `<div class="project-art art-brands" aria-hidden="true"><span class="art-eyebrow"><span>NIKE × AUDI</span><span>SUITE ADOBE · L1</span></span><span class="brand-art-grid"><img src="/assets/marques/nike-tn.webp" width="1414" height="2000" alt="" loading="lazy"><img src="/assets/marques/audi-collage.webp" width="720" height="430" alt="" loading="lazy"></span><span class="brand-art-caption">AFFICHES · COMPOSITION · VIDÉO</span></div>`;
    default: {
      const visuals = {
        'paris8-communication':['Paris 8.<br><em>En commun.</em>','ARTICLES × SIGNALÉTIQUE','8'],
        'campagnes-conceptuelles':['Marques.<br><em>Créations.</em>','AFFICHES & VISUELS CONCEPTUELS','↗'],
        'elles-bougent':['Elles<br><em>bougent.</em>','SCIENCES · TECH · MIXITÉ','↗']
      };
      const visual=visuals[project.id];
      if(!visual) return '';
      return `<div class="project-art art-collection art-${project.id}" aria-hidden="true"><span class="art-eyebrow"><span>${escapeHTML(categories[project.category])}</span></span><span class="collection-motif">${visual[2]}</span><span class="collection-art-title">${visual[0]}</span><span class="collection-art-caption">${visual[1]}</span></div>`;
    }
  }
}

export function renderCard(project, wide = false, headingLevel = 3) {
  return `<a href="${projectUrl(project)}" class="project-card${wide ? ' card-wide' : ''}" aria-labelledby="title-${project.id}">${renderArt(project)}<div class="card-body"><p class="card-type">${escapeHTML(project.type)}</p><h${headingLevel} class="card-title" id="title-${project.id}">${escapeHTML(project.title)}</h${headingLevel}><p class="card-description">${escapeHTML(project.short)}</p><div class="card-tags">${project.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('')}</div>${project.recognition ? `<span class="card-award mono">${icon('star')}${escapeHTML(project.recognition.title)}</span>` : ''}${project.draft ? '<span class="draft-label mono">À compléter</span>' : ''}<span class="card-arrow">${icon('arrow')}</span></div></a>`;
}

export function renderDetail(project) {
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const resources = project.resources.map(resource => `<a class="resource-link" href="${escapeHTML(resource.url)}" target="_blank" rel="noopener noreferrer">${icon(resource.kind === 'pdf' ? 'file' : 'arrow')}<span>${escapeHTML(resource.label)}<small>${escapeHTML(resource.info)} · Nouvel onglet</small></span>${icon('arrow')}</a>`).join('');
  const visual = project.showcase ? `<figure class="detail-showcase showcase-${escapeHTML(project.id)}"><div class="showcase-label mono"><span>${escapeHTML(project.title)}</span><span>${escapeHTML(project.showcase.label)}</span></div><div class="showcase-screens">${project.showcase.screens.map(screen=>`<img src="${escapeHTML(screen.image)}" alt="${escapeHTML(screen.alt)}" width="${screen.width || 393}" height="${screen.height || 852}">`).join('')}</div><figcaption>${escapeHTML(project.showcase.caption)}</figcaption></figure>` : project.image ? `<figure class="detail-preview"><a href="${escapeHTML(project.image)}" target="_blank" rel="noopener noreferrer" aria-label="Agrandir l’aperçu de ${escapeHTML(project.title)} dans un nouvel onglet"><img src="${project.image}" alt="${escapeHTML(project.imageAlt)}" width="${project.imageWidth || 1440}" height="${project.imageHeight || 810}"></a><figcaption>${escapeHTML(project.caption)}</figcaption></figure>` : `<div class="detail-visual">${renderArt(project)}</div>`;
  const role = project.contribution ? `<h2>Mon rôle</h2><p>${escapeHTML(project.contribution)}</p>` : '';
  const steps = project.approach.length ? `<h2>Les étapes du projet</h2><ol>${project.approach.map(step => `<li>${escapeHTML(step)}</li>`).join('')}</ol>` : '';
  const takeaway = project.takeaway ? `<h2>Ce que cette expérience m’a appris</h2><p>${escapeHTML(project.takeaway)}</p>` : '';
  const tools = project.tools.length ? `<h2>Outils utilisés</h2><div class="detail-skills detail-tools">${project.tools.map(tool => `<span>${escapeHTML(tool)}</span>`).join('')}</div>` : '';
  const facts = project.facts?.length ? `<dl class="detail-facts">${project.facts.map(fact=>`<div><dt>${escapeHTML(fact.label)}</dt><dd>${escapeHTML(fact.value)}</dd></div>`).join('')}</dl>` : '';
  const palette = project.palette?.length ? `<h2>Palette du projet</h2><ul class="detail-palette" aria-label="Couleurs de l’identité visuelle">${project.palette.map(swatch=>`<li><span class="palette-chip" style="--swatch:${escapeHTML(swatch.color)}" aria-hidden="true"></span><span>${escapeHTML(swatch.name)}<small class="mono">${escapeHTML(swatch.color)}</small></span></li>`).join('')}</ul>` : '';
  const primaryAction = project.primaryAction ? `<div class="detail-actions"><a class="button button-primary" href="${escapeHTML(project.primaryAction.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(project.primaryAction.label)}${icon('arrow')}</a>${project.secondaryAction ? `<a class="button" href="${escapeHTML(project.secondaryAction.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(project.secondaryAction.label)}${icon('arrow')}</a>` : ''}<span class="mono">${escapeHTML(project.primaryAction.info || 'Maquette mobile')} · Nouvel onglet</span></div>` : '';
  const awardLabel = project.recognition ? `<p class="detail-award mono">${icon('star')}${escapeHTML(project.recognition.title)} · ${escapeHTML(project.recognition.team)}</p>` : '';
  const personas = project.personas ? `<section class="detail-personas case-section" aria-labelledby="personas-title"><div class="detail-section-heading"><p class="eyebrow">POUR QUI ?</p><h2 id="personas-title">${escapeHTML(project.personas.title)}</h2><p>${escapeHTML(project.personas.intro)}</p></div><div class="persona-grid">${project.personas.items.map(persona=>`<article class="persona-card"><p class="persona-role mono">${escapeHTML(persona.role)}</p><h3>${escapeHTML(persona.name)}</h3><p>${escapeHTML(persona.need)}</p><div class="persona-response"><span class="mono">L’IDÉE PROPOSÉE</span><p>${escapeHTML(persona.response)}</p></div></article>`).join('')}</div></section>` : '';
  const gallerySections = project.galleries || (project.gallery?.length ? [{gallery:project.gallery,galleryLayout:project.galleryLayout,galleryEyebrow:project.galleryEyebrow,galleryHeading:project.galleryHeading,galleryIntro:project.galleryIntro}] : []);
  const galleryNav = gallerySections.length > 1 ? `<nav class="gallery-nav mono" aria-label="Voir les séries de créations">${gallerySections.map(section=>`<a href="#${escapeHTML(section.id)}">${escapeHTML(section.navLabel)}</a>`).join('')}</nav>` : '';
  const gallery = gallerySections.map(section=>{
    const headingId = section.id ? `${section.id}-title` : 'gallery-title';
    const layoutClass = {editorial:' editorial-gallery',desktop:' desktop-gallery',webpages:' webpage-gallery',social:' social-gallery',posters:' poster-gallery'}[section.galleryLayout] || '';
    const link = section.link ? `<a class="text-link gallery-resource" href="${escapeHTML(section.link.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(section.link.label)}${icon('arrow')}<span class="sr-only">Nouvel onglet</span></a>` : '';
    const videoCaptionId = `${headingId}-video-caption`;
    const video = section.video ? `<figure class="project-video"><video controls playsinline muted preload="metadata" width="${section.video.width}" height="${section.video.height}" poster="${escapeHTML(section.video.poster)}" aria-label="${escapeHTML(section.video.label)}" aria-describedby="${escapeHTML(videoCaptionId)}"><source src="${escapeHTML(section.video.src)}" type="video/mp4"><a href="${escapeHTML(section.video.src)}">Ouvrir la vidéo</a></video><figcaption id="${escapeHTML(videoCaptionId)}">${escapeHTML(section.video.caption)}</figcaption></figure>` : '';
    return `<section class="detail-gallery"${section.id ? ` id="${escapeHTML(section.id)}"` : ''} aria-labelledby="${escapeHTML(headingId)}"><div class="detail-section-heading"><p class="eyebrow">${escapeHTML(section.galleryEyebrow || "DU CONCEPT À L’INTERFACE")}</p><h2 id="${escapeHTML(headingId)}">${section.galleryHeading ? escapeHTML(section.galleryHeading) : 'L’école de demain, <span class="serif">en poche.</span>'}</h2><p>${escapeHTML(section.galleryIntro)}</p>${link}</div>${video}<div class="mobile-gallery${layoutClass}">${section.gallery.map((screen,index)=>`<figure><a href="${escapeHTML(screen.image)}" target="_blank" rel="noopener noreferrer" aria-label="Agrandir le visuel ${escapeHTML(screen.title)} dans un nouvel onglet"><img src="${escapeHTML(screen.image)}" alt="${escapeHTML(screen.alt)}" width="${screen.width || 393}" height="${screen.height || 852}" loading="lazy"></a><figcaption><span class="mono">${String(index+1).padStart(2,'0')}</span>${escapeHTML(screen.title)}</figcaption></figure>`).join('')}</div><p class="gallery-note mono">Cliquez sur un visuel pour l’agrandir.</p></section>`;
  }).join('');
  const promotion = project.promotion ? `<section class="detail-promotion case-section" aria-labelledby="promotion-title"><div class="detail-section-heading"><p class="eyebrow">FAIRE CONNAÎTRE LE PROJET</p><h2 id="promotion-title">${escapeHTML(project.promotion.title)}</h2><p>${escapeHTML(project.promotion.intro)}</p></div><div class="promotion-grid">${project.promotion.channels.map((channel,index)=>`<article><span class="channel-index mono">${String(index+1).padStart(2,'0')} /</span><h3>${escapeHTML(channel.title)}</h3><p class="channel-audience mono">${escapeHTML(channel.audience)}</p><p>${escapeHTML(channel.text)}</p></article>`).join('')}</div><div class="promotion-phases">${project.promotion.phases.map(phase=>`<div><h3>${escapeHTML(phase.title)}</h3><p>${escapeHTML(phase.text)}</p></div>`).join('')}</div><p class="study-reflection">${escapeHTML(project.promotion.limit)}</p></section>` : '';
  const mediaNote = project.mediaNote ? `<p class="media-note mono">${escapeHTML(project.mediaNote)}</p>` : '';
  const highlights = project.highlights ? `<section class="detail-highlights case-section" aria-labelledby="highlights-title"><div class="detail-section-heading"><p class="eyebrow">${escapeHTML(project.highlights.eyebrow)}</p><h2 id="highlights-title">${escapeHTML(project.highlights.title)}</h2></div><div class="highlight-grid">${project.highlights.items.map((item,index)=>`<article><span class="mono">${String(index+1).padStart(2,'0')} /</span><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.text)}</p></article>`).join('')}</div></section>` : '';
  const recognition = project.recognition ? `<section class="detail-recognition" aria-labelledby="recognition-title"><div><p class="eyebrow">UNE RÉUSSITE COLLECTIVE</p><h2 id="recognition-title">${escapeHTML(project.recognition.title)}</h2><p class="recognition-event mono">${escapeHTML(project.recognition.event)}</p><p>${escapeHTML(project.recognition.description)}</p><a class="text-link" href="/assets/docs/innovatech-prix-regional-idf-2026.pdf" target="_blank" rel="noopener noreferrer">Voir le prix régional${icon('arrow')}</a></div><figure><img src="${escapeHTML(project.recognition.image)}" alt="${escapeHTML(project.recognition.imageAlt)}" width="1200" height="1201" loading="lazy"><figcaption class="mono">${escapeHTML(project.recognition.team)} · 2026</figcaption></figure></section>` : '';
  return `<nav class="project-breadcrumb mono" aria-label="Fil d’Ariane"><a href="/projets.html">Tous les projets</a><span aria-hidden="true">/</span><a href="/projets.html?categorie=${project.category}">${escapeHTML(categories[project.category])}</a></nav><div class="detail-header"><p class="eyebrow">${escapeHTML(project.type)}${project.year ? ` / ${project.year}` : ''}</p><h1 id="detail-title">${escapeHTML(project.title)}</h1><p class="detail-lead">${escapeHTML(project.lead)}</p><div class="detail-meta"><span>${escapeHTML(project.status)}</span>${project.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('')}</div>${awardLabel}${primaryAction}</div>${visual}<div class="detail-content"><div class="detail-main"><h2>Le projet en quelques mots</h2><p>${escapeHTML(project.context)}</p>${role}${steps}${takeaway}${project.draft ? '<div class="project-progress-note"><span class="live-dot"></span><p>Cette page sera complétée avec les visuels, les liens et les détails du projet.</p></div>' : ''}</div><aside class="detail-aside">${facts}${tools}<h2>Compétences utilisées</h2><div class="detail-skills">${project.skills.map(skill => `<span>${escapeHTML(skill)}</span>`).join('')}</div><h2>Les réalisations</h2><p>${escapeHTML(project.deliverables)}</p>${palette}${resources ? `<h2>Voir le projet</h2>${resources}` : ''}</aside></div>${personas}${highlights}${galleryNav}${gallery}${promotion}${recognition}${mediaNote}<nav class="detail-bottom" aria-label="Parcourir les projets"><button type="button" data-copy-project>${icon('copy')} Copier le lien du projet</button><a class="detail-next" href="${projectUrl(next)}">Projet suivant : ${escapeHTML(next.title)} ${icon('right')}</a></nav>`;
}

function initialize() {
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const page = document.body.dataset.page || 'home';
  const grid = $('#project-grid');
  const search = $('#project-search');
  const toast = $('#toast');
  const params = new URLSearchParams(window.location.search);
  const aliases = {licence:'design',terrain:'communication',engagement:'communication'};
  const requestedCategory = aliases[params.get('categorie')] || params.get('categorie');
  let category = Object.hasOwn(categories, requestedCategory) ? requestedCategory : 'all';
  let toastTimer;

  function notify(message) {
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('is-visible');
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3300);
  }

  async function copyLink(url) {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(url);
      notify('Lien copié.');
    } catch {
      const previousFocus=document.activeElement;
      const field=document.createElement('textarea');
      field.value=url;
      field.setAttribute('aria-label','Lien à copier');
      field.style.cssText='position:fixed;left:-9999px;top:0';
      document.body.append(field);field.select();
      let copied=false;
      try{copied=document.execCommand('copy');}catch{/* fallback unavailable */}
      field.remove();previousFocus?.focus({preventScroll:true});
      notify(copied?'Lien copié.':'Copie indisponible : le lien se trouve dans la barre d’adresse.');
    }
  }

  function updateProjects() {
    if (!grid) return;
    const collection=page==='home'?featuredProjectIds.map(id=>projects.find(p=>p.id===id)).filter(Boolean):projects;
    const matches=filterProjects(page==='home'?'all':category,search?.value||'',collection);
    grid.innerHTML=matches.map((project,index)=>renderCard(project,page!=='home'&&matches.length>1&&matches.length%2===1&&index===matches.length-1,page==='home'?3:2)).join('');
    grid.classList.toggle('single-result',matches.length===1);
    if($('#empty-state'))$('#empty-state').hidden=matches.length>0;
    if($('#project-count'))$('#project-count').textContent=`${matches.length} projet${matches.length>1?'s':''} affiché${matches.length>1?'s':''}.`;
    $$('[data-filter]').forEach(button=>{
      const selected=button.dataset.filter===category;
      button.classList.toggle('is-active',selected);
      button.setAttribute('aria-pressed',String(selected));
      const count=projects.filter(project=>button.dataset.filter==='all'||project.category===button.dataset.filter).length;
      if(button.querySelector('span'))button.querySelector('span').textContent=String(count).padStart(2,'0');
    });
  }

  function setCategory(value) {
    if(!Object.hasOwn(categories,value))return;
    category=value;
    const url=new URL(window.location.href);
    if(value==='all')url.searchParams.delete('categorie');else url.searchParams.set('categorie',value);
    window.history.replaceState(null,'',url);
    updateProjects();
  }

  $$('[data-filter]').forEach(button=>button.addEventListener('click',()=>setCategory(button.dataset.filter)));
  search?.addEventListener('input',updateProjects);
  $('#reset-filters')?.addEventListener('click',()=>{if(search)search.value='';setCategory('all');search?.focus();});
  $$('[data-folder]').forEach(button=>button.addEventListener('click',()=>{window.location.href=`/projets.html?categorie=${button.dataset.folder}#projets`;}));
  $$('[data-category-link]').forEach(link=>{link.href='/projets.html';});
  $('#random-project')?.addEventListener('click',()=>{
    const pool=projects.filter(p=>p.id!==document.body.dataset.project);
    window.location.href=projectUrl(pool[Math.floor(Math.random()*pool.length)]);
  });
  $('[data-copy-project]')?.addEventListener('click',()=>copyLink(new URL(window.location.pathname,window.location.origin).href));
  $('#copy-portfolio')?.addEventListener('click',()=>copyLink(new URL('/',window.location.origin).href));

  const themeButton=$('#theme-toggle');
  function setTheme(theme,persist=true){
    document.documentElement.dataset.theme=theme;
    if(themeButton){themeButton.innerHTML=icon(theme==='dark'?'sun':'moon');themeButton.setAttribute('aria-label',theme==='dark'?'Activer le mode jour':'Activer le mode nuit');themeButton.setAttribute('aria-pressed',String(theme==='dark'));}
    $('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#18221e':'#f4f3ed');
    if(persist){try{localStorage.setItem('elfie-theme',theme);}catch{/* private mode */}}
  }
  let savedTheme='light';
  try{savedTheme=localStorage.getItem('elfie-theme')==='dark'?'dark':'light';}catch{/* private mode */}
  setTheme(savedTheme,false);
  themeButton?.addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));

  const menuButton=$('#menu-toggle'),menu=$('#main-nav');
  function closeMenu(){menu?.classList.remove('is-open');menuButton?.setAttribute('aria-expanded','false');menuButton?.setAttribute('aria-label','Ouvrir le menu');}
  menuButton?.addEventListener('click',()=>{const open=menu?.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(!!open));menuButton.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');});
  menu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
  $$('.desktop-nav a').forEach(link=>{
    const destination=new URL(link.href,window.location.origin).pathname;
    if(destination===window.location.pathname||(destination==='/projets.html'&&page==='project'))link.setAttribute('aria-current','page');
  });
  function handleLegacyRoute(){const project=projectFromHash(window.location.hash);if(project)window.location.replace(projectUrl(project));}
  window.addEventListener('hashchange',handleLegacyRoute);
  updateProjects();handleLegacyRoute();
}

if(typeof document!=='undefined')initialize();
