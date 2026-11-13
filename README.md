# Elfie Zoungrana — Projets & expériences numériques

Portfolio d’Elfie Zoungrana : communication numérique, UX/UI design, projets web, datavisualisation et engagements associatifs.

[Ouvrir le portfolio](https://elfie-portfolio.github.io/elfie-zoungrana-projets-experiences-numeriques/)

## Version complète

Ce dépôt contient le portfolio publié sur GitHub Pages. Il conserve les projets initiaux et intègre deux mini-projets de datavisualisation à partir de données publiques.

- 20 pages HTML : 4 pages principales, 14 fiches de projets et 2 tableaux de bord data indépendants.
- 62 images, 5 documents PDF et la vidéo Audi.
- Les 4 polices locales, les 3 feuilles de styles du portfolio et les modules JavaScript pour la navigation, les projets et la carte Trilib’.
- Navigation, recherche, filtres par domaine (dont « Data & visualisation »), dossiers interactifs, projet au hasard, thème jour/nuit et menu mobile.
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
- `projets/` : les 12 fiches d’origine et les 2 nouvelles fiches « Femmes & Tech » et « Où trier à Paris ? ».
- `data/femmes-tech.html` : visualisation interactive « Femmes & Tech » (Insee et Eurostat), reliée à `projets/femmes-tech.html`.
- `data/trilib.html` : visualisation « Où trier à Paris ? », carte SVG et filtres d’arrondissements, reliée à `projets/ou-trier-a-paris.html`.
- `data/trilib-data.mjs` et `data/trilib-stations.csv` : extraction de 443 stations Trilib’ à partir des données ouvertes de la Ville de Paris.
- `assets/` : images, documents, vidéo et polices.
- `projects.mjs` : données, catégories et liens des 14 projets.
- `app.mjs` : interactions du portfolio.
- `styles.css`, `pages.css`, `portfolio.css` : styles d’origine.
- `.migration/report.json` : inventaire des fichiers importés et empreintes de contrôle.
- `.migration/browser-report.json` : contrôles du contenu, du rendu et des interactions.

Les adaptations à GitHub Pages concernent les chemins des ressources, les liens copiés et les métadonnées d’adresse. Le script invisible de protection ajouté par l’ancien hébergeur a été retiré.
