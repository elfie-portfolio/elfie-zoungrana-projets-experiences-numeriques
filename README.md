# Elfie Zoungrana — Projets & expériences numériques

Portfolio d’Elfie Zoungrana : communication numérique, UX/UI design, projets web et engagements associatifs.

[Ouvrir le portfolio](https://elfie-portfolio.github.io/elfie-zoungrana-projets-experiences-numeriques/)

## Version complète

Cette version reprend les pages, les contenus, les styles et les interactions du portfolio publié sur `elfie-lab-portfolio`.

- 16 pages, dont les 12 fiches de projets.
- 62 images, 5 documents PDF et la vidéo Audi.
- Les 4 polices locales, les 3 feuilles de styles et les 2 modules JavaScript.
- Navigation, recherche, filtres, dossiers interactifs, projet au hasard, thème jour/nuit et menu mobile.
- Liens vers les maquettes Figma, Canva et les autres ressources conservés.

Les médias sont stockés dans le dépôt. Les fichiers binaires sont identiques aux fichiers publiés d’origine.

## GitHub Pages

Le site est statique : aucun serveur applicatif ni compilation n’est nécessaire.

Dans **Settings → Pages**, la publication utilise la branche `main` et le dossier racine `/`. Le fichier `.nojekyll` permet de servir directement les fichiers.

Les liens internes utilisent le chemin du dépôt :

```text
/elfie-zoungrana-projets-experiences-numeriques/
```

Si le nom du dépôt ou l’hébergement change, ce chemin doit être adapté dans les fichiers HTML, CSS et JavaScript.

## Fichiers

- `index.html`, `projets.html`, `parcours.html`, `a-propos.html` : pages principales.
- `projets/` : les 12 fiches détaillées.
- `assets/` : images, documents, vidéo et polices.
- `projects.mjs` : données et liens des projets.
- `app.mjs` : interactions du portfolio.
- `styles.css`, `pages.css`, `portfolio.css` : styles d’origine.
- `.migration/report.json` : inventaire des fichiers importés et empreintes de contrôle.
- `.migration/browser-report.json` : contrôles du contenu, du rendu et des interactions.

Les adaptations à GitHub Pages concernent les chemins des ressources, les liens copiés et les métadonnées d’adresse. Le script invisible de protection ajouté par l’ancien hébergeur a été retiré.
