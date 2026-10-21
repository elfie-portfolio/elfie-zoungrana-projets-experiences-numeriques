// Une fiche par projet. La sélection peut grandir sans modifier la mise en page.
export const categories = {
  all: 'Tous les projets',
  pedagogie: 'Pédagogie & EdTech',
  design: 'UX/UI Design & maquettes',
  web: 'Sites web & projets numériques',
  communication: 'Communication & création visuelle'
};

export const pillars = [
  {id:'pedagogie',number:'01',short:'Pédagogie & EdTech',title:categories.pedagogie,description:'Créer des outils qui donnent envie d’apprendre.',icon:'star'},
  {id:'design',number:'02',short:'UX/UI & maquettes',title:categories.design,description:'Comprendre les besoins et imaginer des interfaces faciles à utiliser.',icon:'folder'},
  {id:'web',number:'03',short:'Sites web',title:categories.web,description:'Organiser les pages et créer des sites web.',icon:'file'},
  {id:'communication',number:'04',short:'Communication',title:categories.communication,description:'Créer des textes et des visuels adaptés aux personnes à qui l’on s’adresse.',icon:'right'}
];

export const projects = [
  {
    id: 'nextstep', title: 'NextStep', category: 'design', year: '',
    type: 'Projet universitaire en binôme · Licence 3',
    short: 'Imaginer une application pour trouver un mentor dans le numérique et réfléchir à la façon de la faire connaître.',
    lead: 'Un mentor, un réseau, un nouveau cap dans le numérique.',
    tags: ['UX/UI', 'Stratégie de promotion', 'Mentorat'],
    status: 'Projet fictif · Étude & maquette',
    context: 'Nous avons créé NextStep en licence 3, dans le cours « Méthodes de promotion d’un site web ». Avec Diandra Agnassia, nous avons imaginé une application pour les personnes qui débutent ou se reconvertissent dans le numérique. L’idée vient d’un constat simple : après une formation, on peut encore avoir besoin de conseils, de contacts et d’une personne avec qui échanger.',
    contribution: 'Travail en binôme avec Diandra Agnassia : définition de l’idée, création de profils types, comparaison de services existants et organisation des étapes dans l’application. Le projet comprend aussi un plan pour faire connaître le service et une maquette mobile sur Figma.',
    approach: [
      'Créer trois personas, c’est-à-dire des profils fictifs, pour mieux comprendre les besoins des personnes en reconversion, des jeunes diplômés et des mentors.',
      'Comparer LinkedIn, OpenClassrooms et Malt, puis faire une analyse SWOT : les points forts, les limites, les possibilités et les risques du projet.',
      'Prévoir les étapes dans l’application : choisir son rôle et son objectif, trouver un mentor, échanger et consulter des ressources.',
      'Choisir les couleurs et le style de l’application, et imaginer une version gratuite avec une offre payante pour aller plus loin.',
      'Choisir où et comment faire connaître l’application, puis proposer un lancement par étapes et des idées pour faire vivre la communauté.'
    ],
    takeaway: 'Ce projet m’a appris à réfléchir à la fois aux besoins des utilisateurs, à l’interface et à la communication. Pour qu’une application soit utile, il faut aussi que les personnes comprennent ce qu’elle propose et sachent comment la trouver.',
    skills: ['Personas', 'Parcours utilisateurs', 'UX/UI', 'Benchmark & SWOT', 'Stratégie de promotion', 'Travail en binôme'],
    tools: ['Figma'],
    facts: [
      {label: 'Cadre', value: 'Méthodes de promotion d’un site web'},
      {label: 'Formation', value: 'Licence 3'},
      {label: 'Équipe', value: 'Elfie Zoungrana & Diandra Agnassia'}
    ],
    deliverables: 'Une étude du projet, trois profils types, une comparaison de services, une analyse SWOT, une palette de couleurs et une présentation. La maquette mobile sur Figma compte 12 écrans.',
    showcase: {
      label: 'MENTORAT · RÉSEAU · RESSOURCES',
      caption: 'La version mobile de NextStep présentée dans Figma : 12 écrans pour explorer les différents parcours.',
      screens: [
        {image: '/elfie-zoungrana-projets-experiences-numeriques/assets/nextstep/welcome.webp', alt: 'Accueil de NextStep : Votre avenir prend forme, avec la signature Maquette : Elfie Zoungrana.'},
        {image: '/elfie-zoungrana-projets-experiences-numeriques/assets/nextstep/dashboard.webp', alt: 'Tableau de bord NextStep : objectif professionnel, progression et suggestion de mentore.'},
        {image: '/elfie-zoungrana-projets-experiences-numeriques/assets/nextstep/mentors.webp', alt: 'Recherche de mentors NextStep : domaines, profils et objectifs d’accompagnement.'}
      ]
    },
    primaryAction: {
      label: 'Ouvrir la maquette Figma',
      url: 'https://www.figma.com/design/rfeZphowJmSyywsNI6o93i/NextStep-%C2%B7-Maquette-mobile?m=auto&t=Jg5HgfEmUQtpWBUD-6'
    },
    personas: {
      title: 'Trois profils, des besoins précis.',
      intro: 'Ces trois profils fictifs nous ont aidées à choisir les fonctions de l’application en partant des besoins de chaque personne.',
      items: [
        {name: 'Kaneza', role: 'En reconversion', need: 'Préciser son projet en communication numérique, trouver des conseils et se sentir moins seule.', response: 'Des étapes à suivre, des ressources utiles et des échanges avec une personne expérimentée.'},
        {name: 'Richard', role: 'Mentor expérimenté', need: 'Partager son expérience de développeur en gardant du temps pour ses autres activités.', response: 'Un espace mentor pour fixer les objectifs et indiquer ses disponibilités.'},
        {name: 'Guluna', role: 'Jeune diplômée en cybersécurité', need: 'Comprendre ce que les entreprises attendent, présenter ses compétences et se faire des contacts.', response: 'Des conseils, des contacts dans son domaine et des échanges avec d’autres personnes dans la même situation.'}
      ]
    },
    palette: [
      {name: 'Bleu profond', color: '#163A5F'},
      {name: 'Vert', color: '#5DBB8A'},
      {name: 'Bleu clair', color: '#4AA3DF'},
      {name: 'Blanc', color: '#FFFFFF'}
    ],
    galleryHeading: 'Trouver de l’aide pour la suite.',
    galleryIntro: 'Voici quatre des douze écrans : suivre ses objectifs, trouver un mentor, échanger et consulter des ressources. Les profils et les conversations sont inventés pour la maquette.',
    gallery: [
      {title: 'Mon tableau de bord', image: '/elfie-zoungrana-projets-experiences-numeriques/assets/nextstep/dashboard.webp', alt: 'Tableau de bord NextStep personnalisé avec le prénom Elfie et un objectif de reconversion en communication digitale.'},
      {title: 'Trouver un mentor', image: '/elfie-zoungrana-projets-experiences-numeriques/assets/nextstep/mentors.webp', alt: 'Liste de mentors NextStep avec recherche par métier, compétence ou accompagnement.'},
      {title: 'Développer son réseau', image: '/elfie-zoungrana-projets-experiences-numeriques/assets/nextstep/network.webp', alt: 'Communauté NextStep : questions de Guluna et retour d’expérience de Richard, deux personas du projet.'},
      {title: 'Explorer les ressources', image: '/elfie-zoungrana-projets-experiences-numeriques/assets/nextstep/resources.webp', alt: 'Espace de ressources et de rencontres en ligne pour avancer dans les métiers du numérique.'}
    ],
    promotion: {
      title: 'Faire connaître l’application et donner envie de revenir.',
      intro: 'Dans le cadre du cours, nous avons proposé plusieurs façons de faire connaître NextStep selon les personnes à toucher. Ce sont des idées de lancement pour un projet fictif.',
      channels: [
        {title: 'LinkedIn', audience: 'Mentors & partenaires', text: 'Présenter le concept, partager des retours d’expérience et proposer des conseils sur les parcours dans le numérique.'},
        {title: 'Instagram, TikTok & Snapchat', audience: 'Jeunes diplômées et diplômés', text: 'Imaginer des formats courts : conseils métiers, parcours inspirants et présentation des fonctionnalités.'},
        {title: 'Écoles & structures du numérique', audience: 'Étudiantes, étudiants & personnes en formation', text: 'Proposer une présence dans les newsletters et des rencontres avec des universités, des organismes de formation ou des associations.'}
      ],
      phases: [
        {title: 'Un lancement progressif', text: 'Commencer avec un groupe limité, recueillir des retours, puis élargir la communication et encourager le bouche-à-oreille.'},
        {title: 'Une communauté à animer', text: 'Proposer des discussions, des événements en ligne et des témoignages des membres.'}
      ],
      limit: 'Deux points seraient à vérifier avant un lancement : trouver des mentors disponibles et garder une communauté active. La formule gratuite et payante, comme l’accompagnement proposé, resterait à tester.'
    },
    mediaNote: 'Les personas, profils et échanges présentés sont fictifs. Le logo et certains visuels de la maquette d’origine ont été générés avec ChatGPT.',
    resources: [
      {label: 'Ouvrir la maquette Figma', info: 'Maquette mobile · 12 écrans', url: 'https://www.figma.com/design/rfeZphowJmSyywsNI6o93i/NextStep-%C2%B7-Maquette-mobile?m=auto&t=Jg5HgfEmUQtpWBUD-6', kind: 'figma'}
    ]
  },
  {
    id: 'penzi', title: 'Penzi', category: 'design', year: '',
    type: 'Projet universitaire en groupe · Licence 2',
    short: 'Imaginer une application de rencontre au Burundi où chacun peut dire ce qu’il cherche et avancer à son rythme.',
    lead: 'Là où les intentions sont claires.',
    tags: ['UX/UI', 'Personas', 'Contexte d’usage'],
    status: 'Projet fictif · Étude & maquette mobile',
    context: 'Nous avons imaginé Penzi en groupe, en licence 2, dans le cours « Création et développement d’outils numériques ». L’idée était de créer une application de rencontre au Burundi qui respecte les envies, la discrétion et le rythme de chacun. Nous avons créé cinq profils fictifs pour nous aider à choisir les fonctions de l’application.',
    contribution: 'Participation au travail de groupe sur Penzi : définition de l’idée, préparation des profils types, comparaison d’applications existantes et organisation de la navigation. Une réflexion sur la façon de faire connaître le service complète la maquette mobile sur Figma.',
    approach: [
      'Créer cinq profils types en tenant compte de leurs envies, de leur quotidien, de leur timidité et de leur besoin de discrétion.',
      'Comparer des applications de rencontre : à qui elles s’adressent, les langues proposées et ce qui les distingue.',
      'Prévoir des fonctions utiles : préciser ce que l’on cherche, envoyer une invitation, discuter et choisir qui peut voir ses photos.',
      'Organiser les écrans : accueil, profil, attentes, découverte, filtres, conversations et réglages.',
      'Imaginer un lancement local, puis faire connaître l’application grâce aux groupes locaux et au parrainage.'
    ],
    takeaway: 'Ce projet m’a appris à partir du quotidien des personnes pour imaginer une application. Des choix clairs permettent de dire ce que l’on cherche, de décider de ce que l’on montre et de prendre le temps d’échanger.',
    skills: ['Personas', 'Parcours utilisateurs', 'UX/UI', 'Benchmark', 'Positionnement', 'Plan de communication', 'Travail en groupe'],
    tools: ['Figma'],
    facts: [
      {label: 'Cadre', value: 'Création et développement d’outils numériques'},
      {label: 'Formation', value: 'Licence 2'},
      {label: 'Organisation', value: 'Projet réalisé en groupe'},
      {label: 'Publics imaginés', value: 'Adultes au Burundi · Cinq profils fictifs'}
    ],
    deliverables: 'Une présentation de l’idée, cinq profils types, une comparaison d’applications et un plan pour faire connaître le service. La maquette mobile sur Figma compte 24 écrans.',
    showcase: {
      label: 'INTENTIONS · RENCONTRES · DISCRÉTION',
      caption: 'La maquette mobile Penzi présentée dans Figma : 24 écrans, de l’accueil aux échanges et aux réglages de visibilité.',
      screens: [
        {image: '/elfie-zoungrana-projets-experiences-numeriques/assets/penzi/welcome.webp', alt: 'Accueil de Penzi : Là où les intentions sont claires, avec la signature Maquette : Elfie Zoungrana.'},
        {image: '/elfie-zoungrana-projets-experiences-numeriques/assets/penzi/discover.webp', alt: 'Écran de découverte Penzi, avec le prénom Elfie et un profil de démonstration de Richard.'},
        {image: '/elfie-zoungrana-projets-experiences-numeriques/assets/penzi/privacy.webp', alt: 'Écran de confidentialité Penzi proposant le choix entre photos masquées et photo visible.'}
      ]
    },
    primaryAction: {
      label: 'Ouvrir la maquette Figma',
      url: 'https://www.figma.com/design/prMxiXCzfgl0GIi1PFBky5/Penzi-%C2%B7-Maquette-mobile?m=auto&t=Jg5HgfEmUQtpWBUD-6'
    },
    personas: {
      title: 'Partir des besoins des personnes.',
      intro: 'Nous avons créé cinq profils fictifs : Kaneza, Nadège, Richard, Jean et Dative. En voici trois, avec leurs besoins et les idées proposées par le groupe.',
      items: [
        {name: 'Kaneza', role: 'Enseignante · 26 ans', need: 'Faire connaissance en restant discrète et choisir les informations qu’elle partage.', response: 'La possibilité de dire ce qu’elle cherche et de masquer ses photos avant de les partager.'},
        {name: 'Richard', role: 'Comptable · 28 ans', need: 'Oser faire le premier pas et prendre le temps de découvrir une personne par l’écrit.', response: 'Des étapes simples : découvrir un profil, envoyer une invitation, puis discuter.'},
        {name: 'Dative', role: 'Comptable & mère de deux enfants', need: 'Rencontrer une personne qui partage ses valeurs et prend en compte son quotidien familial.', response: 'Des profils qui correspondent à son mode de vie et plusieurs espaces pour faire connaissance.'}
      ]
    },
    highlights: {
      eyebrow: 'LES IDÉES DANS L’APPLICATION',
      title: 'Savoir ce que l’on cherche, choisir ce que l’on partage.',
      items: [
        {title: 'Exprimer ses intentions', text: 'Relation sérieuse ou amitié : la maquette propose de préciser ce que l’on cherche avant de découvrir des profils.'},
        {title: 'Choisir sa visibilité', text: 'Les réglages permettent de masquer ses photos ou d’afficher sa photo de profil.'},
        {title: 'Avancer dans l’échange', text: 'On découvre des profils, on utilise les filtres, puis on peut envoyer une invitation et discuter. Des espaces de groupe, appelés Cercles, complètent les échanges.'}
      ]
    },
    galleryHeading: 'Des intentions aux premiers échanges.',
    galleryIntro: 'Quatre des 24 écrans pour préciser ses attentes, découvrir des profils, choisir qui voit ses photos et discuter. Les personnes et les conversations sont inventées pour la maquette.',
    gallery: [
      {title: 'Préciser ses intentions', image: '/elfie-zoungrana-projets-experiences-numeriques/assets/penzi/intentions.webp', alt: 'Choix des intentions dans Penzi : écran consacré à la recherche d’une relation sérieuse.'},
      {title: 'Découvrir des profils', image: '/elfie-zoungrana-projets-experiences-numeriques/assets/penzi/discover.webp', alt: 'Profil de démonstration de Richard dans Penzi, avec ses valeurs et une invitation à prendre le temps de se connaître.'},
      {title: 'Gérer sa visibilité', image: '/elfie-zoungrana-projets-experiences-numeriques/assets/penzi/privacy.webp', alt: 'Paramètres de confidentialité Penzi : choix de masquer les photos ou de rendre la photo de profil visible.'},
      {title: 'Commencer à échanger', image: '/elfie-zoungrana-projets-experiences-numeriques/assets/penzi/conversation.webp', alt: 'Exemple fictif d’une conversation dans la messagerie de Penzi.'}
    ],
    promotion: {
      title: 'Faire connaître Penzi, étape par étape.',
      intro: 'Nous avons imaginé un lancement local, puis une communauté qui grandirait peu à peu. Pour choisir où faire connaître Penzi, nous sommes partis des habitudes de nos profils types.',
      channels: [
        {title: 'Relais de proximité', audience: 'Communautés locales', text: 'Présenter l’application dans des groupes Facebook et des lieux où les personnes concernées se retrouvent.'},
        {title: 'Contenus & conseils', audience: 'Découverte du concept', text: 'Proposer à des créatrices et créateurs de contenus de parler de l’application à travers des sujets sur les relations et le quotidien.'},
        {title: 'Parrainage', audience: 'Membres de la communauté', text: 'Permettre aux membres d’inviter leurs proches avec un avantage sur l’offre payante.'}
      ],
      phases: [
        {title: 'Un lancement local', text: 'Commencer à Bujumbura et Gitega, demander des avis et améliorer l’application.'},
        {title: 'Une ouverture progressive', text: 'Laisser le bouche-à-oreille faire grandir la communauté avant de proposer le service dans d’autres villes de la région.'}
      ],
      limit: 'Ces idées ont été proposées dans le cadre du cours. Il faudrait les tester avec les personnes concernées pour voir si elles répondent à leurs besoins et si elles donnent envie d’utiliser l’application.'
    },
    mediaNote: 'Penzi est un projet fictif réalisé en cours. Les profils et les conversations sont inventés. La vérification des profils et les réglages de confidentialité sont montrés en exemple dans la maquette.',
    resources: [
      {label: 'Ouvrir la maquette Figma', info: 'Maquette mobile · 24 écrans', url: 'https://www.figma.com/design/prMxiXCzfgl0GIi1PFBky5/Penzi-%C2%B7-Maquette-mobile?m=auto&t=Jg5HgfEmUQtpWBUD-6', kind: 'figma'}
    ]
  },
  {
    "id": "zero-waste",
    "title": "Zero Waste Paris",
    "category": "communication",
    "year": "2026",
    "type": "Volontaire en service civique · 6 mois",
    "short": "Des publications pour les 10 ans, des propositions d’affiches pour la collecte à la Villette et des projets zéro déchet sur le terrain.",
    "lead": "Des posts sur les réseaux sociaux aux actions sur le terrain.",
    "tags": [
      "Communication digitale",
      "Instagram & LinkedIn",
      "Sensibilisation"
    ],
    "status": "Service civique · Communication & projets zéro déchet",
    "context": "Un service civique de six mois, du 1er avril au 30 septembre 2026, autour du zéro déchet et du zéro gaspillage. L’association fêtait ses 10 ans cette année-là. Dans un contexte de budgets plus serrés, la communication aidait à faire connaître ses actions, à encourager les soutiens et à annoncer les événements locaux.",
    "contribution": "Création de publications Instagram et LinkedIn, de visuels pour les 10 ans et de plusieurs propositions d’affiches pour la collecte au bassin de la Villette. Canva a servi à organiser les textes, les photos et les informations pratiques. Les missions comprenaient aussi la rédaction d’articles web, la prise de photos, les outils de sensibilisation, la coanimation de stands et d’ateliers, l’aide aux événements, la recherche de partenaires, les cartes et les tableaux de suivi.",
    "facts": [
      {
        "label": "Période",
        "value": "1er avril–30 septembre 2026 · 6 mois"
      },
      {
        "label": "Statut",
        "value": "Volontaire en service civique"
      },
      {
        "label": "Structure",
        "value": "Zero Waste Paris · Paris"
      },
      {
        "label": "Créations présentées",
        "value": "Anniversaire · Campagne de dons · Collecte à la Villette"
      }
    ],
    "approach": [
      "Créer des publications Instagram et LinkedIn pour raconter les actions de l’association et les rendre faciles à comprendre.",
      "Pour les 10 ans, organiser les grandes dates de son histoire, choisir les photos et mettre les visuels en page sur Canva.",
      "Proposer plusieurs affiches pour la collecte au bassin de la Villette : faire ressortir le lieu, la date, les horaires et l’inscription, avec différents styles graphiques.",
      "Repérer les associations, commerces et autres structures locales pour les projets Territoires Zéro Déchet, notamment dans les 6e et 19e arrondissements.",
      "Coanimer des stands et des ateliers, préparer les événements et aider à organiser les actions avec les bénévoles.",
      "Chercher des partenaires, préparer des tableaux de suivi et participer aux bilans des projets.",
      "Aider sur les projets de compostage et suivre les actions menées avec Est Ensemble."
    ],
    "takeaway": "Le bénévolat donnait déjà un premier aperçu du monde associatif. Ces six mois au sein de l’équipe m’ont permis d’en découvrir le quotidien : préparer les actions, communiquer, suivre plusieurs projets et faire avec des moyens parfois limités. Une expérience qui m’a appris à mieux m’organiser, à m’adapter, à travailler en équipe et à expliquer un sujet selon les personnes à qui le message s’adresse.",
    "skills": [
      "Communication digitale",
      "Création de contenus",
      "Gestion de projet",
      "Cartographie",
      "Organisation",
      "Animation",
      "Travail en équipe"
    ],
    "deliverables": "Un carrousel de trois visuels pour les 10 ans, une série de cinq visuels pour la campagne de dons, six propositions d’affiches pour la collecte à la Villette, ainsi que des articles web, des outils de sensibilisation, des cartes et des tableaux de suivi.",
    "showcase": {
      "label": "COMMUNICATION · CANVA",
      "caption": "Exemples de publications et d’affiches : anniversaire, collecte au bassin de la Villette et campagne de dons.",
      "screens": [
        {
          "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/anniversaire-01.webp",
          "width": 1080,
          "height": 1350,
          "alt": "Visuel noir et jaune annonçant les 10 ans de Zero Waste Paris, avec une corbeille de recyclage."
        },
        {
          "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/collecte-villette-01.webp",
          "width": 1414,
          "height": 2000,
          "alt": "Proposition d’affiche turquoise pour la collecte du 7 juillet 2026 au bassin de la Villette, avec photos et informations d’inscription."
        },
        {
          "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/10-ans-05.webp",
          "width": 1200,
          "height": 1500,
          "alt": "Visuel de remerciement de la campagne des 10 ans annonçant 7 370 euros collectés par l’association."
        }
      ]
    },
    "primaryAction": {
      "label": "Voir les affiches sur Canva",
      "info": "Collecte à la Villette · 6 propositions",
      "url": "https://canva.link/6de2qhpx52o5q6z"
    },
    "highlights": {
      "eyebrow": "DES EXEMPLES DE MON TRAVAIL",
      "title": "Adapter le message à chaque action.",
      "items": [
        {
          "title": "Annoncer les 10 ans",
          "text": "Le carrousel présente l’anniversaire, les actions menées et quelques chiffres de l’association. Le noir, le jaune et les titres très visibles donnent un style commun aux trois pages."
        },
        {
          "title": "Faire connaître la collecte",
          "text": "Pour la collecte au bassin de la Villette, les affiches mettent en avant une action simple : observer, collecter et comprendre. Le lieu, les créneaux et l’inscription gratuite doivent être faciles à repérer."
        },
        {
          "title": "Essayer plusieurs pistes",
          "text": "Photos du terrain, illustrations, différentes couleurs et mises en page : les six propositions permettent de comparer plusieurs façons de présenter le même événement."
        }
      ]
    },
    "mediaNote": "Créations réalisées avec Canva pour Zero Waste Paris. Les affiches de collecte sont présentées comme des propositions graphiques pour l’événement. Les photos, les chiffres et les résultats des campagnes concernent l’association et son travail collectif.",
    "resources": [
      {
        "label": "Les propositions pour la collecte",
        "info": "Canva · 6 affiches",
        "url": "https://canva.link/6de2qhpx52o5q6z",
        "kind": "web"
      },
      {
        "label": "Le carrousel des 10 ans",
        "info": "Canva · 3 visuels",
        "url": "https://www.canva.com/d/UFtfzbu9JdhjCfu",
        "kind": "web"
      },
      {
        "label": "La campagne de dons et son bilan",
        "info": "Canva · 5 visuels",
        "url": "https://canva.link/qhvhr6bs77obfgz",
        "kind": "web"
      },
      {
        "label": "Le compte Instagram de l’association",
        "info": "Zero Waste Paris",
        "url": "https://www.instagram.com/zerowaste_paris/",
        "kind": "web"
      },
      {
        "label": "Le site de l’association",
        "info": "Zero Waste Paris",
        "url": "https://zerowasteparis.fr/",
        "kind": "web"
      }
    ],
    "tools": [
      "Canva",
      "Google Workspace",
      "My Maps",
      "Slack"
    ],
    "galleries": [
      {
        "id": "anniversaire",
        "navLabel": "Les 10 ans",
        "galleryLayout": "social",
        "galleryEyebrow": "01 / ANNIVERSAIRE",
        "galleryHeading": "Annoncer les 10 ans de l’association.",
        "galleryIntro": "Trois visuels pour annoncer l’anniversaire, présenter les actions en quelques chiffres et donner envie de découvrir la suite. Les chiffres concernent les actions de l’association et de ses bénévoles.",
        "link": {
          "label": "Voir le carrousel sur Canva",
          "url": "https://www.canva.com/d/UFtfzbu9JdhjCfu"
        },
        "gallery": [
          {
            "title": "Annoncer l’anniversaire",
            "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/anniversaire-01.webp",
            "width": 1080,
            "height": 1350,
            "alt": "Depuis 2016 : Zero Waste fête ses 10 ans, sur fond noir avec une corbeille de recyclage."
          },
          {
            "title": "Présenter les actions en chiffres",
            "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/anniversaire-02.webp",
            "width": 1080,
            "height": 1350,
            "alt": "Notre impact : plus de 16 000 personnes sensibilisées, 550 événements et animations et 18 500 heures de bénévolat, selon les chiffres présentés dans la création."
          },
          {
            "title": "Donner envie de suivre la suite",
            "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/anniversaire-03.webp",
            "width": 1080,
            "height": 1350,
            "alt": "Et ce n’est pas fini : photo de groupe, exemples d’actions et annonce d’une surprise à venir."
          }
        ]
      },
      {
        "id": "collecte-villette",
        "navLabel": "Collecte à la Villette",
        "galleryLayout": "posters",
        "galleryEyebrow": "02 / ACTION LOCALE",
        "galleryHeading": "Une collecte au bassin de la Villette.",
        "galleryIntro": "Six propositions d’affiches pour annoncer la collecte citoyenne sur l’eau du 7 juillet 2026, dans un lieu très fréquenté. L’objectif : expliquer l’action et rendre visibles le lieu, les horaires, la gratuité et l’inscription. Photos et illustrations permettent d’explorer plusieurs styles.",
        "link": {
          "label": "Voir les six propositions sur Canva",
          "url": "https://canva.link/6de2qhpx52o5q6z"
        },
        "gallery": [
          {
            "title": "Photos et courbes turquoise",
            "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/collecte-villette-01.webp",
            "width": 1414,
            "height": 2000,
            "alt": "Affiche turquoise et blanche avec des photos de la collecte, les deux créneaux du 7 juillet 2026 et un QR code d’inscription."
          },
          {
            "title": "Un grand titre sur fond bleu",
            "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/collecte-villette-02.webp",
            "width": 1414,
            "height": 2000,
            "alt": "Affiche bleue Tous à bord : titre courbé, date en grand et emplacement prévu pour un QR code."
          },
          {
            "title": "Une mise en page autour d’une photo",
            "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/collecte-villette-03.webp",
            "width": 1414,
            "height": 2000,
            "alt": "Affiche blanche et bleue avec une photo de bateaux sur le bassin, les informations pratiques et un bloc d’inscription."
          },
          {
            "title": "Une piste avec des illustrations",
            "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/collecte-villette-04.webp",
            "width": 1414,
            "height": 2000,
            "alt": "Affiche bleue avec des illustrations de déchets et de poissons, la date et un emplacement de QR code."
          },
          {
            "title": "Des informations réparties en blocs",
            "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/collecte-villette-05.webp",
            "width": 1414,
            "height": 2000,
            "alt": "Affiche bleue aux blocs arrondis présentant la date, les horaires, les raisons de participer et l’inscription."
          },
          {
            "title": "Un programme illustré",
            "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/collecte-villette-06.webp",
            "width": 1414,
            "height": 2000,
            "alt": "Affiche blanche et bleue avec un montage de photos, un grand QR code et des pictogrammes pour présenter les activités de la collecte."
          }
        ]
      },
      {
        "id": "campagne-dons",
        "navLabel": "Dons et bilan",
        "galleryLayout": "social",
        "galleryEyebrow": "03 / CAMPAGNE DE DONS",
        "galleryHeading": "Raconter l’histoire et partager le bilan.",
        "galleryIntro": "Une série de cinq visuels pour présenter la campagne des 10 ans, raconter les grandes étapes de l’association et remercier les soutiens. Les 7 370 € annoncés correspondent au bilan de l’ensemble de la campagne.",
        "link": {
          "label": "Voir la série sur Canva",
          "url": "https://canva.link/qhvhr6bs77obfgz"
        },
        "gallery": [
          {
            "title": "Annoncer les 10 ans",
            "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/10-ans-01.webp",
            "width": 1200,
            "height": 1500,
            "alt": "Annonce des 10 ans de Zero Waste Paris : chaque don compte double."
          },
          {
            "title": "Introduire l’histoire de l’association",
            "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/10-ans-02.webp",
            "width": 1200,
            "height": 1500,
            "alt": "Notre histoire en quelques dates : photos des membres et des bénévoles de Zero Waste Paris."
          },
          {
            "title": "Les premières années",
            "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/10-ans-03.webp",
            "width": 1200,
            "height": 1500,
            "alt": "Frise de 2016 à 2021 : naissance de l’association, formations zéro déchet, actions locales et sensibilisation des éco-délégués."
          },
          {
            "title": "Les projets qui se développent",
            "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/10-ans-04.webp",
            "width": 1200,
            "height": 1500,
            "alt": "Frise de 2022 à 2025 : formations en entreprise, campagne Consignez-moi, deuxième territoire zéro déchet et campagne Sortez-nous de là."
          },
          {
            "title": "Remercier et partager le résultat",
            "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/zero-waste/10-ans-05.webp",
            "width": 1200,
            "height": 1500,
            "alt": "Merci : le bilan de la campagne des 10 ans de Zero Waste Paris annonce 7 370 euros collectés."
          }
        ]
      }
    ]
  },
  {
    id: 'becomtech', title: 'BECOMTECH', category: 'communication', year: 'Parcours depuis 2022',
    type: 'Ambassadrice · Coordination & mixité dans la tech',
    short: 'Découvrir la tech, organiser des événements et animer une conférence sur l’IA.',
    lead: 'Trouver ma place dans la tech et donner envie à d’autres filles de se lancer.',
    tags: ['Coordination de projet', 'Prise de parole', 'Mixité dans la tech'],
    status: 'Parcours associatif · Ambassadrice',
    context: 'BECOMTECH aide les filles et les femmes à découvrir le numérique et à y trouver leur place. Mon parcours a commencé en 2022 à Poissy avec JUMP IN TECH, puis s’est poursuivi avec TOGETHER IN TECH, un programme pour les étudiantes du numérique. Ce parcours continue aujourd’hui au sein de la communauté des Ambassadrices.',
    contribution: 'Comme ambassadrice : interventions dans les établissements scolaires, forums et rencontres avec des professionnelles. Parmi les responsabilités prises, la coordination de l’équipe de préparation de la Fête des Ambassadrices et de la conférence « L’IA dans la vie des femmes : au-delà des clichés », puis l’animation de cette rencontre en ligne.',
    approach: [
      'Découvrir le développement web, la communication digitale et les métiers du numérique avec JUMP IN TECH, puis poursuivre avec TOGETHER IN TECH.',
      'Présenter l’association et ses programmes dans des forums, répondre aux questions et adapter mes explications aux personnes présentes.',
      'Animer les réunions, suivre le calendrier et rassembler les besoins en matériel pour la Fête des Ambassadrices.',
      'Choisir les sujets de la conférence sur l’IA, préparer les questions avec les intervenantes, organiser les prises de parole et animer la rencontre.',
      'Participer aux supports de communication, dont des vidéos de vœux et des vidéos pour la campagne de taxe d’apprentissage.'
    ],
    takeaway: 'Cet engagement m’a appris à organiser le travail d’une équipe et à prendre la parole avec plus d’assurance. Il m’a aussi donné envie de rendre les sujets tech plus faciles à comprendre et de montrer que les filles y ont toute leur place.',
    skills: ['Coordination de projet', 'Animation de réunions', 'Prise de parole', 'Communication', 'Organisation événementielle', 'Travail en équipe'],
    tools: ['Google Workspace', 'Microsoft Teams'],
    facts: [{label:'Découverte',value:'JUMP IN TECH · Poissy · Été 2022'},{label:'Suite du parcours',value:'TOGETHER IN TECH, puis communauté des Ambassadrices'},{label:'Engagement étudiant',value:'Engagement étudiant à Paris 8'}],
    deliverables: 'Des interventions et des présentations, un calendrier et des outils de suivi, les listes et les badges de l’événement, ainsi que la préparation et l’animation d’une conférence en ligne.',
    highlights: {
      eyebrow:'DES RESPONSABILITÉS CONCRÈTES',title:'De l’idée à la rencontre.',
      items:[
        {title:'Une conférence sur l’IA',text:'Coordination du groupe, recherches, préparation des échanges avec les intervenantes et animation de « L’IA dans la vie des femmes : au-delà des clichés ». La conférence en ligne a réuni 54 personnes.'},
        {title:'La Fête des Ambassadrices',text:'Animation des réunions de l’équipe, suivi des besoins en matériel et du budget, partage des informations et préparation des listes et des badges.'},
        {title:'Sensibilisations & forums',text:'Échanges avec des élèves et des étudiantes, présentation de JUMP IN TECH et TOGETHER IN TECH, réponses aux questions et rencontres avec des professionnelles de la tech.'}
      ]
    },
    resources: [{label:'Découvrir les programmes BECOMTECH',info:'Site de l’association',url:'https://becomtech.fr/nos-programmes/',kind:'web'}]
  },
  {
    id: 'wonderball', title: 'Wonderball', category: 'design', year: '',
    type: 'Projet universitaire · Licence 2',
    short: 'Créer une maquette de site autour de la BD Wonderball : choisir le style, organiser les pages et la navigation.',
    lead: 'Imaginer un site pour découvrir la BD Wonderball.',
    tags: ['Graphisme web', 'Mise en page', 'Navigation'],
    status: 'Maquette web · Format ordinateur',
    context: 'Maquette réalisée en licence 2, dans le cours « Maîtriser le graphisme web ». L’exercice : imaginer un site autour de la BD Wonderball, choisir son style et organiser les pages pour découvrir la série. Le fichier Figma Slides compte 13 pages au format ordinateur.',
    contribution: 'Création de la maquette du site : placement des images, organisation des textes et navigation entre les pages. Mon travail porte sur le graphisme et l’interface. Les couvertures, illustrations et extraits viennent de la BD Wonderball.',
    approach: [
      'Créer l’ambiance dès l’accueil avec un fond sombre, les personnages de la BD, un grand titre et du rouge sur les boutons.',
      'Prévoir les rubriques Albums, Actualités, Auteurs et Contact, avec le même menu sur les pages.',
      'Créer une fiche par album avec la couverture, la présentation, les crédits, des extraits et les liens pour l’acheter.',
      'Permettre de découvrir les cinq tomes et de feuilleter trois planches, avec des liens pour avancer et revenir à l’album.'
    ],
    takeaway: 'Ce projet m’a appris à créer une ambiance visuelle tout en gardant des pages faciles à parcourir. L’accueil donne envie de découvrir la BD, puis les fiches permettent de trouver les informations sur chaque album.',
    skills: ['Graphisme web', 'Composition', 'Hiérarchie visuelle', 'Organisation des contenus', 'Navigation'],
    tools: ['Figma'],
    facts: [
      {label:'Cadre',value:'Licence 2 · Projet universitaire'},
      {label:'Cours',value:'Maîtriser le graphisme web'},
      {label:'Support',value:'Maquette de site pour ordinateur'},
      {label:'Fichier',value:'Figma Slides · 13 pages de 1920 × 1080 px'}
    ],
    deliverables: 'Une maquette de 13 pages : accueil, catalogue des cinq albums, fiches des tomes, feuilletage de trois planches, actualités, auteurs et contact.',
    image:'/elfie-zoungrana-projets-experiences-numeriques/assets/wonderball/home.webp',imageWidth:1600,imageHeight:900,
    imageAlt:'Page d’accueil de la maquette web Wonderball : fond sombre, personnages de la BD, titre blanc et bouton rouge, avec la signature Elfie Zoungrana.',
    caption:'Accueil de la maquette Wonderball · Graphisme web et mise en page : Elfie Zoungrana · Visuels de la série : Éditions Delcourt et les auteurs.',
    primaryAction:{label:'Ouvrir la maquette Figma',info:'Maquette web · Format ordinateur',url:'https://www.figma.com/slides/58HKfRIll2KKoJsQzkbqfR/BD-WonderBall?t=jJrEgFMIHn5DMxwL-6'},
    highlights:{
      eyebrow:'LES CHOIX GRAPHIQUES',
      title:'Une ambiance à retrouver sur toutes les pages.',
      items:[
        {title:'Créer l’ambiance',text:'Les personnages occupent une grande place sur l’accueil. Le fond sombre, le texte blanc et les touches de rouge donnent le ton.'},
        {title:'Organiser les informations',text:'Les couvertures permettent de repérer les albums. Sur chaque fiche, l’image, le résumé, les crédits et les boutons ont leur place.'},
        {title:'Accompagner la découverte',text:'Le menu reste le même. Les liens « tome suivant », « tous les albums » et « retour à l’album » aident à passer d’une page à l’autre.'}
      ]
    },
    galleryLayout:'desktop',
    galleryEyebrow:'COMPOSITION & NAVIGATION',
    galleryHeading:'Du catalogue aux extraits de la BD.',
    galleryIntro:'Quatre pages de la maquette : le catalogue, une fiche d’album, un extrait à feuilleter et la présentation des auteurs. Cliquez sur une image pour l’agrandir.',
    gallery:[
      {title:'Parcourir les cinq albums',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/wonderball/albums.webp',width:1600,height:900,alt:'Catalogue de la maquette Wonderball : les cinq couvertures présentées sur une photographie nocturne de San Francisco.'},
      {title:'Consulter une fiche d’album',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/wonderball/album-detail.webp',width:1600,height:900,alt:'Fiche du premier tome de Wonderball dans la maquette : couverture, présentation, crédits, miniatures et accès au feuilletage.'},
      {title:'Feuilleter un extrait',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/wonderball/excerpt.webp',width:1600,height:900,alt:'Page de feuilletage de la maquette : planche de la BD au centre, numéro de page et liens de retour et de progression.'},
      {title:'Présenter les auteurs',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/wonderball/authors.webp',width:1600,height:900,alt:'Page Auteurs de la maquette Wonderball, avec une grille distinguant les contributions au scénario, au dessin et aux couleurs.'}
    ],
    mediaNote:'Projet universitaire de maquette web autour d’une œuvre existante. Couvertures, illustrations et extraits : Wonderball, Éditions Delcourt et les auteurs de la série. Conception de la maquette : Elfie Zoungrana.',
    resources: [
      {label:'Ouvrir la maquette Figma',info:'Maquette web · 13 pages',url:'https://www.figma.com/slides/58HKfRIll2KKoJsQzkbqfR/BD-WonderBall?t=jJrEgFMIHn5DMxwL-6',kind:'figma'}
    ]
  },
  {
    "id": "happy-learning",
    "title": "Happy Learning",
    "category": "pedagogie",
    "year": "2026",
    "type": "Challenge InnovaTech · Projet collectif",
    "status": "Concept EdTech · Équipe lauréate",
    "draft": false,
    "short": "Imaginer l’école de demain en équipe et remporter le 1er prix régional du Challenge InnovaTech.",
    "lead": "Une idée pour l’école de demain : apprendre à son rythme, prendre soin de soi et préparer son avenir.",
    "context": "Nous avons imaginé Happy Learning au Challenge InnovaTech d’Elles Bougent, sur le thème de l’école de demain. Avec l’équipe Génération’Elles, nous avons cherché comment varier les façons d’apprendre, aider chaque élève et préparer son avenir. La finale régionale Île-de-France a eu lieu le 19 mars 2026 à l’École 42, à Paris.",
    "contribution": "Participation aux idées et à la création de Happy Learning avec l’équipe Génération’Elles. Un travail entre étudiantes et lycéennes, avec l’aide d’une marraine qui travaille dans la tech.",
    "approach": [
      "Partir des difficultés des élèves : le manque de motivation, la pression scolaire, les inégalités et les questions d’orientation.",
      "Imaginer des cours en présentiel et en ligne, avec plusieurs formats de contenus et une aide adaptée à chaque élève.",
      "Répartir l’application en cinq espaces : Apprendre & progresser, Mon parcours scolaire, Bien-être & équilibre, Mon avenir et Agenda.",
      "Préparer une présentation en équipe et une maquette pour montrer notre idée.",
      "Créer aussi une maquette mobile sur Figma : neuf écrans pour l’accueil, les cours, le parcours scolaire, le bien-être, l’avenir, l’agenda et un compagnon pour aider à apprendre."
    ],
    "takeaway": "Un challenge pour apprendre à partir des besoins des élèves, transformer une idée en maquette et la présenter en équipe. Ce projet réunit mon intérêt pour l’apprentissage et le numérique.",
    "tags": [
      "École de demain",
      "EdTech",
      "InnovaTech"
    ],
    "skills": [
      "Conception pédagogique",
      "Recherche d’idées en équipe",
      "Organisation du parcours",
      "Design d’interface",
      "Travail en équipe"
    ],
    "tools": [
      "Figma"
    ],
    "deliverables": "Une présentation en équipe, une maquette numérique et une version mobile de neuf écrans sur Figma. Les documents du challenge et du prix régional sont aussi disponibles.",
    "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/happy-learning/concept-maquette.webp",
    "imageAlt": "Page de la présentation collective montrant la maquette Happy Learning sur un ordinateur portable.",
    "caption": "La maquette du concept telle qu’elle figure dans la présentation collective Happy Learning — Challenge InnovaTech 2026.",
    "primaryAction": {
      "label": "Ouvrir la maquette Figma",
      "url": "https://www.figma.com/design/zkIQ8BtgjZv6g1cBUMHPa8/Happy-Learning-%C2%B7-Maquette-mobile?m=auto&t=Jg5HgfEmUQtpWBUD-6"
    },
    "recognition": {
      "title": "1er prix régional — Île-de-France",
      "event": "Challenge InnovaTech 2026 · Elles Bougent",
      "team": "Équipe Génération’Elles",
      "description": "Notre équipe Génération’Elles a remporté le 1er prix de la finale régionale Île-de-France du Challenge InnovaTech 2026 avec Happy Learning, un projet consacré à l’école de demain.",
      "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/happy-learning/prix-regional.webp",
      "imageAlt": "Trophée Elles Bougent, Challenge InnovaTech édition 2026 : 1er prix Région Île-de-France."
    },
    "galleryIntro": "Voici quatre des neuf écrans de la version mobile. On y retrouve les grands espaces de Happy Learning. Les informations affichées sont des exemples.",
    "gallery": [
      {
        "title": "Bienvenue",
        "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/happy-learning/welcome.webp",
        "alt": "Écran d’accueil de Happy Learning : apprendre, équilibre et avenir, avec la signature Elfie Zoungrana."
      },
      {
        "title": "Apprendre & progresser",
        "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/happy-learning/learn.webp",
        "alt": "Écran Apprendre et progresser : reprendre un cours et explorer les rubriques d’apprentissage."
      },
      {
        "title": "Bien-être & équilibre",
        "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/happy-learning/wellbeing.webp",
        "alt": "Écran Bien-être et équilibre : exprimer son ressenti et accéder à des espaces de soutien."
      },
      {
        "title": "Mon avenir",
        "image": "/elfie-zoungrana-projets-experiences-numeriques/assets/happy-learning/future.webp",
        "alt": "Écran Mon avenir : explorer les métiers, les envies et les pistes d’orientation."
      }
    ],
    "resources": [
      {
        "label": "Ouvrir la maquette Figma",
        "info": "Maquette mobile · 9 écrans",
        "url": "https://www.figma.com/design/zkIQ8BtgjZv6g1cBUMHPa8/Happy-Learning-%C2%B7-Maquette-mobile?m=auto&t=Jg5HgfEmUQtpWBUD-6",
        "kind": "figma"
      },
      {
        "label": "Voir la présentation Happy Learning",
        "info": "PDF · 12 pages",
        "url": "/elfie-zoungrana-projets-experiences-numeriques/assets/docs/happy-learning-presentation.pdf",
        "kind": "pdf"
      },
      {
        "label": "Voir le prix régional",
        "info": "PDF · Trophée Île-de-France 2026",
        "url": "/elfie-zoungrana-projets-experiences-numeriques/assets/docs/innovatech-prix-regional-idf-2026.pdf",
        "kind": "pdf"
      },
      {
        "label": "Découvrir le challenge",
        "info": "PDF · Fiche de présentation 2026",
        "url": "/elfie-zoungrana-projets-experiences-numeriques/assets/docs/innovatech-presentation-challenge.pdf",
        "kind": "pdf"
      },
      {
        "label": "Voir l’affiche de l’événement",
        "info": "PDF · Île-de-France · 19 mars 2026",
        "url": "/elfie-zoungrana-projets-experiences-numeriques/assets/docs/innovatech-affiche-idf-2026.pdf",
        "kind": "pdf"
      }
    ]
  },
  {
    id:'licorne-party',title:'LicornParty',category:'design',year:'',
    type:'Projet universitaire · Licence 3',status:'Concept d’application · Maquette mobile',
    short:'Imaginer une application pour organiser un anniversaire sur le thème des licornes : kits, décoration, gâteaux et accessoires.',
    lead:'Un peu de magie, beaucoup de souvenirs.',
    tags:['UX/UI','Parcours d’achat','Mise en page'],
    context:'Projet de licence 3, réalisé dans le cours « Informatique appliquée au design et à la mise en page ». LicornParty propose d’aider les parents à préparer un anniversaire 100 % licorne : décoration, gâteaux, kits et accessoires au même endroit. Le concept prévoit aussi une livraison à domicile.',
    contribution:'Création de l’interface et de la mise en page mobile. La maquette Figma montre les étapes pour découvrir les produits, préparer son panier et aller jusqu’à une confirmation de commande fictive.',
    approach:[
      'Ranger les produits dans quatre catégories : kits complets, décoration, gâteaux, costumes et accessoires.',
      'Mettre en avant les informations utiles : contenu du kit, nombre d’enfants, prix, quantité et résumé de la commande.',
      'Garder le même style sur les écrans : couleurs pastel, illustrations, lettres arrondies et boutons faciles à repérer.',
      'Créer 12 écrans sur Figma : découverte, fiche produit, panier, paiement fictif, confirmation, connexion et inscription.'
    ],
    takeaway:'Un exercice pour créer un univers visuel tout en gardant une application simple à parcourir. Les parents doivent pouvoir trouver les produits et comprendre les étapes sans se perdre.',
    skills:['Design d’interface','Hiérarchie visuelle','Mise en page mobile','Organisation des contenus','Parcours d’achat'],
    tools:['Figma'],
    facts:[
      {label:'Cadre',value:'Licence 3 · Projet universitaire'},
      {label:'Cours',value:'Informatique appliquée au design et à la mise en page'},
      {label:'Public',value:'Parents préparant un anniversaire d’enfant'},
      {label:'Format',value:'Maquette mobile · 12 écrans'}
    ],
    deliverables:'Une maquette Figma de 12 écrans avec les catégories de produits et les étapes d’une commande fictive.',
    showcase:{
      label:'ANNIVERSAIRE · DESIGN · PARCOURS MOBILE',
      screens:[
        {image:'/elfie-zoungrana-projets-experiences-numeriques/assets/licornparty/welcome.webp',alt:'Accueil de LicornParty : un peu de magie, beaucoup de souvenirs, avec la signature Elfie Zoungrana.'},
        {image:'/elfie-zoungrana-projets-experiences-numeriques/assets/licornparty/categories.webp',alt:'Les quatre univers de LicornParty : kits, décoration, gâteaux, costumes et accessoires.'},
        {image:'/elfie-zoungrana-projets-experiences-numeriques/assets/licornparty/cart.webp',alt:'Panier de démonstration LicornParty avec le kit anniversaire et le choix de quantité.'}
      ],
      caption:'Des couleurs pastel et des étapes pour choisir les produits et préparer la fête.'
    },
    primaryAction:{label:'Ouvrir la maquette Figma',url:'https://www.figma.com/design/tzB1YgJn1GJCysvzR5ds0G/LicornParty-%C2%B7-Maquette-mobile?m=auto&t=Jg5HgfEmUQtpWBUD-6'},
    highlights:{
      eyebrow:'L’IDÉE EN TROIS POINTS',
      title:'Préparer la fête, étape par étape.',
      items:[
        {title:'Trouver l’inspiration',text:'Retrouver le nécessaire pour un anniversaire dans quatre catégories, avec le même style sur toutes les pages.'},
        {title:'Composer sa sélection',text:'Voir ce que contient un kit, choisir les quantités et vérifier son panier avant la confirmation fictive.'},
        {title:'Prolonger la magie',text:'Une autre idée serait de louer un cheval déguisé en licorne pour la fête, avec des centres équestres à choisir en veillant au bien-être de l’animal. Cette partie du projet reste à développer.'}
      ]
    },
    galleryHeading:'De la découverte au panier.',
    galleryIntro:'Quatre des 12 écrans : choisir une catégorie, découvrir un kit, modifier son panier et voir l’étape de paiement fictif.',
    gallery:[
      {title:'Explorer les univers',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/licornparty/categories.webp',alt:'Écran des catégories LicornParty, avec les quatre univers de produits et une animation à découvrir prochainement.'},
      {title:'Découvrir un kit',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/licornparty/product.webp',alt:'Fiche du kit Anniversaire enchanté : contenu, nombre d’enfants et prix de démonstration.'},
      {title:'Ajuster son panier',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/licornparty/cart.webp',alt:'Panier de démonstration : kit, quantité, total et accès à l’étape suivante.'},
      {title:'Prévisualiser la commande',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/licornparty/checkout.webp',alt:'Récapitulatif de démonstration au nom d’Elfie Zoungrana : coordonnées fictives et paiement simulé sans débit.'}
    ],
    mediaNote:'Projet fictif réalisé en cours. Les produits, prix, coordonnées et commandes sont des exemples pour montrer le fonctionnement imaginé. La livraison et l’animation sont des idées de services à développer.',
    resources:[{label:'Ouvrir la maquette Figma',info:'Maquette mobile · 12 écrans',url:'https://www.figma.com/design/tzB1YgJn1GJCysvzR5ds0G/LicornParty-%C2%B7-Maquette-mobile?m=auto&t=Jg5HgfEmUQtpWBUD-6',kind:'figma'}]
  },
  {
    id:'cauvaillac',title:'Cauvaillac-sur-Garonne',category:'web',year:'',
    type:'Projet universitaire · Licence 2',status:'Site municipal fictif · Figma & WordPress',
    short:'Créer le site d’une ville fictive : organiser les informations, préparer les pages et les réaliser sur WordPress.',
    lead:'Une ville imaginée, un site à construire.',
    tags:['WordPress','Arborescence','Conception web'],
    context:'Projet de licence 2, réalisé dans le cours « Créer un site web dynamique ». Après une découverte des bases de Figma, l’exercice demandait aussi de créer le site sur WordPress. Le sujet : une ville fictive, Cauvaillac-sur-Garonne, avec ses services, ses actualités et les informations du quotidien.',
    contribution:'Création du site sur WordPress, organisation des rubriques et mise en page des contenus. La maquette Figma reprend les pages du site pour montrer leur présentation et la navigation.',
    approach:[
      'Créer les rubriques : services administratifs et techniques, culture et loisirs, engagements, éducation et histoire de la ville.',
      'Donner un style à la ville avec un logo, des tons bleus, des photos et la devise « Vivre, Grandir, Partager ! ».',
      'Organiser les actualités sur l’accueil, les pages par thème, les informations pratiques et les liens vers les autres rubriques.',
      'Créer les pages sur WordPress et présenter leur mise en page et leur navigation dans Figma.'
    ],
    takeaway:'Passer de la maquette à WordPress m’a permis de pratiquer la création d’un site. Le défi était de classer beaucoup d’informations et de garder des pages cohérentes pour que l’on puisse s’y retrouver.',
    skills:['Arborescence','Organisation des contenus','Mise en page web','Utilisation d’un CMS','Communication institutionnelle'],
    tools:['Figma','WordPress'],
    facts:[
      {label:'Cadre',value:'Licence 2 · Projet universitaire'},
      {label:'Cours',value:'Créer un site web dynamique'},
      {label:'Sujet',value:'Cauvaillac-sur-Garonne · Ville fictive'},
      {label:'Supports',value:'Site WordPress et maquette Figma'}
    ],
    deliverables:'Un site WordPress et une maquette Figma avec l’accueil, les services de la ville, les informations pratiques et les articles.',
    image:'/elfie-zoungrana-projets-experiences-numeriques/assets/cauvaillac/welcome.webp',imageWidth:1348,imageHeight:936,
    imageAlt:'Bannière d’accueil de la maquette Cauvaillac-sur-Garonne : la devise Vivre, Grandir, Partager sur une photographie de village au bord de l’eau.',
    caption:'La bannière d’accueil telle qu’elle apparaît dans la maquette Figma du site municipal fictif.',
    primaryAction:{label:'Voir le site WordPress',info:'Ville fictive · Projet universitaire',url:'https://ville39.wordpress.com/'},
    secondaryAction:{label:'Voir la maquette Figma',url:'https://www.figma.com/design/vB7TcnXJjsGazOSScNGUGd/Cauvaillac-sur-Garonne-%C2%B7-Maquette-mobile?node-id=0-1&t=vivgkqyo9J1e3RpA-1'},
    highlights:{
      eyebrow:'DE LA CONCEPTION À LA RÉALISATION',
      title:'Organiser l’information d’une ville.',
      items:[
        {title:'Donner des repères',text:'Les pages sont classées par services et par thèmes pour retrouver les démarches, les équipements et la vie locale depuis l’accueil.'},
        {title:'Composer les pages',text:'Les mêmes couleurs et les mêmes repères reviennent dans les rubriques, avec des images et des blocs de texte adaptés à chaque page.'},
        {title:'Construire sur WordPress',text:'Le travail sur Figma sert à présenter les pages. WordPress permet ensuite de créer le site et de le mettre en ligne.'}
      ]
    },
    galleryLayout:'webpages',
    galleryEyebrow:'LES PAGES DE LA MAQUETTE',
    galleryHeading:'De l’accueil aux services du quotidien.',
    galleryIntro:'Quatre pages complètes de la maquette Figma pour voir comment le site est organisé. Cliquez sur une image pour l’agrandir.',
    gallery:[
      {title:'L’accueil et les actualités',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/cauvaillac/home.webp',width:1348,height:4022,alt:'Page d’accueil complète de la maquette Cauvaillac : menu, identité de la ville, bannière, actualités et informations pratiques.'},
      {title:'Les services administratifs',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/cauvaillac/administration.webp',width:1348,height:4660,alt:'Page Services municipaux administratifs de la maquette, avec les accès à la présentation de la mairie, aux démarches et à l’équipe municipale.'},
      {title:'La culture et les loisirs',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/cauvaillac/culture.webp',width:1348,height:4084,alt:'Page Culture et loisirs de la maquette, présentant les équipements et les activités de la ville fictive.'},
      {title:'Les engagements de la ville',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/cauvaillac/engagements.webp',width:1348,height:4850,alt:'Page Engagements de la maquette, organisée autour des thèmes environnementaux, sociaux, éducatifs et citoyens.'}
    ],
    mediaNote:'La ville et les contenus ont été inventés pour ce projet de cours. Les images présentées viennent de la maquette Figma.',
    resources:[
      {label:'Voir le site WordPress',info:'Réalisation web · Ville fictive',url:'https://ville39.wordpress.com/',kind:'web'},
      {label:'Voir la maquette Figma',info:'Maquette reprenant les pages du site',url:'https://www.figma.com/design/vB7TcnXJjsGazOSScNGUGd/Cauvaillac-sur-Garonne-%C2%B7-Maquette-mobile?node-id=0-1&t=vivgkqyo9J1e3RpA-1',kind:'figma'}
    ]
  },
  {
    id:'moina-accessoires',title:'Moina Accessoires',category:'web',year:'',
    type:'Projet tutoré en binôme · Licence 3',status:'Site vitrine · Identité visuelle & maquettes',
    short:'Aider une créatrice d’accessoires pour bébés à préparer son identité visuelle et son site vitrine.',
    lead:'Faire découvrir des créations artisanales sur le web.',
    tags:['Conception web','Identité visuelle','Relation cliente'],
    context:'Pour ce projet tutoré de licence 3, nous avons travaillé avec Moina Accessoires, une petite entreprise d’accessoires personnalisés pour bébés. La créatrice souhaitait mieux présenter ses produits en ligne tout en gardant son univers doux et artisanal. Nous l’avons aidée à préciser ses besoins, à préparer son identité visuelle et les maquettes du site, puis à commencer la création des pages sur WordPress.',
    contribution:'Projet mené en binôme avec Diandra Agnassia, en échangeant régulièrement avec la créatrice. Ma participation a porté sur l’étude des besoins, la préparation du projet et la rédaction du rapport. Deux entretiens ont été menés de mon côté : l’un sur le web et l’e-commerce, l’autre sur l’UX/UI. Les maquettes et les choix visuels font partie du travail en binôme.',
    approach:[
      'Échanger avec la créatrice pour comprendre ses besoins, récupérer les contenus, lui montrer nos avancées et prendre en compte ses retours.',
      'Comparer des marques proches : leur style, leurs contenus, la présentation des produits et la navigation sur leurs sites.',
      'Revoir le logo, les couleurs pastel et les polices, puis proposer des visuels pour les réseaux sociaux et des supports imprimés.',
      'Organiser les pages : accueil, présentation de la marque, produits, contact, questions fréquentes et informations pratiques.',
      'Préparer deux versions des maquettes Figma et les améliorer avec les retours de la créatrice.',
      'Rédiger le cahier des charges, s’appuyer sur trois entretiens avec des professionnels et commencer à créer les pages sur WordPress.'
    ],
    takeaway:'Ce projet m’a appris à travailler avec une cliente et à faire des choix selon ses besoins, son budget et le temps disponible. Le site doit aussi rester simple à faire évoluer pour la créatrice.',
    skills:['Analyse des besoins','Benchmark','Arborescence','Entretiens professionnels','Cahier des charges','Relation cliente','Travail en binôme'],
    tools:['Figma','Canva','Google Docs / Drive','WordPress'],
    facts:[
      {label:'Cadre',value:'Projet tutoré de licence 3'},
      {label:'Collaboration',value:'Diandra Agnassia · Échanges réguliers avec la créatrice'},
      {label:'Partenaire',value:'Moina Accessoires · Créations artisanales pour bébés'}
    ],
    deliverables:'Une comparaison de marques, une identité visuelle, le plan du site, des maquettes Figma, un cahier des charges, des entretiens et des idées de supports de communication. Au moment du rendu, nous avions commencé le site sur WordPress, mais il restait à terminer. La vente et le paiement en ligne étaient prévus pour plus tard.',
    image:'/elfie-zoungrana-projets-experiences-numeriques/assets/moina/welcome.webp',imageWidth:1449,imageHeight:800,
    imageAlt:'Bannière de la maquette Moina Accessoires : présentation des attaches-tétines personnalisées et photographie d’une création violette.',
    caption:'Un aperçu de la maquette Figma : un univers doux, des produits mis en valeur et un accès à la personnalisation.',
    primaryAction:{label:'Ouvrir la maquette Figma',info:'Maquette du site vitrine',url:'https://www.figma.com/design/zXebZKGCqpcCDRMcUJn12i/Moina-Accesoires--maquette-mobile?m=auto&t=FXqptfitiXI7gjhq-6'},
    highlights:{
      eyebrow:'UN PROJET AVEC UNE CRÉATRICE',
      title:'Créer un site qui correspond à ses besoins.',
      items:[
        {title:'Comprendre l’activité',text:'Nos échanges avec la créatrice nous ont aidées à comprendre ses attentes, ses contraintes et les informations dont les parents ont besoin avant de demander une création personnalisée.'},
        {title:'Demander des avis professionnels',text:'Les trois entretiens du binôme couvrent le web, l’e-commerce, l’UX/UI et la direction artistique. Les deux entretiens menés de mon côté ont aidé à faire des choix et à proposer des solutions pour le site.'},
        {title:'Garder le même style',text:'Le logo, les couleurs et le style se retrouvent sur les maquettes du site, les réseaux sociaux et les supports imprimés.'}
      ]
    },
    galleryLayout:'webpages',
    galleryEyebrow:'LES PAGES DE LA MAQUETTE',
    galleryHeading:'Découvrir, comprendre, personnaliser.',
    galleryIntro:'Quatre pages de la maquette Figma pour découvrir la marque, ses créations, son histoire et la page de contact. Cliquez sur une image pour l’agrandir.',
    gallery:[
      {title:'Découvrir la marque',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/moina/home.webp',width:1449,height:3581,alt:'Page d’accueil de la maquette Moina : bannière, sélection de créations, étapes de personnalisation et histoire de la marque.'},
      {title:'Explorer les créations',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/moina/products.webp',width:1449,height:4120,alt:'Catalogue de la maquette Moina Accessoires, présentant les photographies, les noms et les prix des créations personnalisées.'},
      {title:'Comprendre son histoire',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/moina/about.webp',width:1449,height:2776,alt:'Page À propos de la maquette Moina, consacrée à la créatrice, à son histoire et au savoir-faire artisanal.'},
      {title:'Imaginer une personnalisation',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/moina/create.webp',width:1449,height:1856,alt:'Page Créer de la maquette Moina, avec une présentation du contact et un formulaire de démonstration prérempli au nom d’Elfie Zoungrana.'}
    ],
    mediaNote:'Images de la maquette Figma du projet. Le formulaire est un exemple et n’envoie aucun message. Les photos montrent les créations de Moina Accessoires.',
    resources:[{label:'Ouvrir la maquette Figma',info:'Maquette du site vitrine · Version actuelle',url:'https://www.figma.com/design/zXebZKGCqpcCDRMcUJn12i/Moina-Accesoires--maquette-mobile?m=auto&t=FXqptfitiXI7gjhq-6',kind:'figma'}]
  },
  {
    id:'paris8-communication',title:'Université Paris 8',category:'communication',year:'2025',
    type:'Stage · Rédactrice en communication',status:'Communication institutionnelle · Mai–juillet 2025',
    short:'Articles, contenus web et affiches pour la fête des personnels, au service communication de Paris 8.',
    lead:'Raconter la vie de l’université, sur le web et sur papier.',
    context:'Stage au service communication de l’Université Paris 8, du 26 mai au 25 juillet 2025, entre rédaction, mise à jour du site et préparation d’événements. Parmi les supports du service : Intra8, le journal de l’université, et « Tout en 8 », sa lettre d’information hebdomadaire.',
    contribution:'Rédaction d’articles, de brèves et de portraits, recherches, interviews, relecture et revue de presse. Création de panneaux illustrés pour les stands de la fête des personnels. Avec la webmaster : ajout et mise à jour de contenus sur le site, correction des problèmes d’affichage et aide à l’amélioration de l’accessibilité, en suivant les règles de rédaction du service.',
    approach:[
      'Chercher et vérifier les informations, préparer les questions et faire les interviews.',
      'Préparer les articles pour Intra8, le site et les autres supports : sujet, titre, introduction et sous-titres, puis relire et corriger avec l’équipe.',
      'Ajouter et mettre à jour les textes et les images sur le site avec la webmaster, en vérifiant l’affichage et l’accessibilité.',
      'Suivre chaque semaine les articles de presse avec LuQi/Cision et préparer une revue de presse à faire valider.',
      'Préparer les panneaux de la fête des personnels : noms des activités, illustrations, couleurs et mise en page, puis vérifier les supports avant impression.'
    ],
    takeaway:'Ce stage m’a appris à adapter les textes au support et à travailler avec une équipe jusqu’à la publication. L’ajout de contenus sur le site a aussi permis de mieux comprendre le lien entre rédaction, affichage et accessibilité.',
    skills:['Rédaction web & éditoriale','Interviews','Intégration web','Accessibilité web','Veille médiatique','Création de supports visuels','Travail collaboratif'],
    tools:['LuQi / Cision','InDesign','Back-office du site institutionnel'],
    facts:[{label:'Période',value:'26 mai–25 juillet 2025'},{label:'Structure',value:'Université Paris 8 · Service communication'},{label:'Statut',value:'Stage · Rédactrice en communication'}],
    deliverables:'Des articles, des brèves et des portraits pour Intra8 et le site, des pages web ajoutées ou mises à jour, une revue de presse et des panneaux pour identifier les stands de la fête des personnels.',
    image:'/elfie-zoungrana-projets-experiences-numeriques/assets/paris8/intra8-portrait.webp',imageWidth:1800,imageHeight:1273,imageAlt:'Double page 16–17 du journal Intra8 de juillet 2025, avec le portrait de Mélissa Boros rédigé pendant le stage.',
    caption:'Portrait de Mélissa Boros, Intra8 n°58, juillet 2025, p. 16–17. Texte rédigé pendant mon stage ; mise en page et publication par le service communication.',
    galleries:[
      {
        id:'articles-intra8',navLabel:'Articles · Intra8',galleryLayout:'editorial',
        galleryEyebrow:'DU TEXTE À LA PUBLICATION',galleryHeading:'Expliquer la préparation au concours de l’ENM.',
        galleryIntro:'Un autre exemple d’article écrit pendant le stage : la préparation au concours de l’École nationale de la magistrature et les actions pour l’égalité des chances à Paris 8. Cet extrait, comme le portrait de Mélissa Boros présenté plus haut, est tiré du journal Intra8.',
        gallery:[{title:'Préparation au concours de l’ENM · Intra8 p. 18–19',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/paris8/intra8-enm.webp',alt:'Double page d’Intra8 consacrée à la préparation au concours de la magistrature et à l’égalité des chances à Paris 8.',width:1800,height:1273}]
      },
      {
        id:'fete-des-personnels',navLabel:'Fête des personnels',galleryLayout:'desktop',
        galleryEyebrow:'AFFICHES & SIGNALÉTIQUE',galleryHeading:'Des stands faciles à repérer.',
        galleryIntro:'Pour la fête des personnels de Paris 8, création de panneaux colorés pour identifier les jeux, les animations et les espaces d’accueil. Chaque panneau associe un nom lisible et une illustration. Les deux planches ci-dessous réunissent les différentes affiches.',
        gallery:[
          {title:'Jeux et animations · Planche 1',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/paris8/fete-personnels-jeux.webp',width:2000,height:1414,alt:'Huit panneaux illustrés pour les stands TTMC, mime, Dessinez c’est gagné, tir au but, frisbee, blind test, pétanque et Mölkky.'},
          {title:'Activités et accueil · Planche 2',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/paris8/fete-personnels-accueil.webp',width:2000,height:1414,alt:'Sept panneaux illustrés pour le petit bac, le repos, les fléchettes, le quiz handi, le slalom fauteuil, le cornhole et l’accueil des équipes.'}
        ]
      }
    ],
    mediaNote:'Articles : rédaction pendant le stage, mise en page et publication du journal par le service communication. Affiches : composition des panneaux pour la fête des personnels.',
    resources:[{label:'Consulter le journal Intra8',info:'PDF · N°58 · Juillet 2025 · 3,7 Mo',url:'/elfie-zoungrana-projets-experiences-numeriques/assets/docs/paris8-intra8.pdf',kind:'pdf'}]
  },
  {
    id:'elles-bougent',title:'Elles bougent',category:'communication',year:'',
    type:'Engagement associatif · Sciences & technologies',status:'Membre de l’association',
    tags:['Mixité dans la tech','InnovaTech','InnovaTech Collège'],
    short:'Participer à des forums et à des challenges pour la place des filles dans les sciences et les technologies.',
    lead:'Rencontrer des femmes de la tech et créer des projets en équipe.',
    context:'Elles bougent fait découvrir les métiers des sciences, de la tech et de l’industrie aux filles. L’association organise des rencontres, des forums et des challenges où élèves et étudiantes échangent avec des professionnelles.',
    contribution:'Membre de l’association, avec une participation à des forums, au Challenge InnovaTech et au Challenge InnovaTech Collège. Ces rencontres permettent de découvrir des métiers, d’échanger avec des professionnelles et de créer des projets en équipe.',
    approach:[
      'Participer à des forums et à des rencontres pour poser des questions sur les métiers scientifiques et techniques.',
      'Créer Happy Learning avec l’équipe Génération’Elles au Challenge InnovaTech 2026, sur le thème de l’école de demain.',
      'Participer aussi au Challenge InnovaTech Collège, un format qui permet aux collégiennes de chercher des idées et de travailler en équipe.'
    ],
    takeaway:'Ces expériences me donnent envie d’en découvrir davantage sur la tech et de soutenir la place des filles dans ces métiers. Elles me permettent aussi de travailler en équipe et de rencontrer des femmes aux parcours variés.',
    skills:['Travail en équipe','Recherche d’idées','Présentation de projet','Échanges professionnels','Sensibilisation à la mixité'],tools:[],
    deliverables:'Participation à des forums et aux deux formats du Challenge InnovaTech. Avec Happy Learning, l’équipe Génération’Elles a remporté le 1er prix régional Île-de-France en 2026.',
    resources:[{label:'Découvrir Happy Learning',info:'Projet collectif primé · Île-de-France 2026',url:'/elfie-zoungrana-projets-experiences-numeriques/projets/happy-learning.html',kind:'web'},{label:'Découvrir Elles bougent',info:'Site de l’association',url:'https://www.ellesbougent.com/',kind:'web'},{label:'Les programmes et le Challenge Collège',info:'Présentation des programmes',url:'https://www.ellesbougent.com/actions/programmes/',kind:'web'}]
  },
  {
    id:'campagnes-conceptuelles',title:'Campagnes conceptuelles',category:'communication',year:'',
    type:'Deux projets universitaires · Licence 1',status:'Exercices de création · Nike & Audi',draft:false,
    short:'Des affiches Nike et un projet vidéo Audi réalisés en licence 1 avec la suite Adobe.',
    lead:'Jouer avec les images pour donner un style à chaque produit.',
    tags:['Suite Adobe','Affiches','Composition visuelle'],
    context:'Deux projets réalisés en licence 1 avec la suite Adobe. Le premier explore l’univers Nike à travers trois affiches de baskets. Le second reprend les codes de l’Audi RS3 dans des compositions et un montage vidéo. Les marques servent de supports aux exercices de création.',
    contribution:'Création des affiches et des compositions : placement des produits, choix des fonds, des couleurs et des textes. Le travail joue sur les collages, les contrastes et les effets de papier déchiré. Le projet Audi est présenté avec trois captures et un aperçu vidéo.',
    approach:[
      'Placer le produit au centre de la composition et organiser les autres éléments autour de lui.',
      'Pour Nike, essayer plusieurs ambiances : fond textile, bandes de papier, couleurs des baskets et contrastes avec le texte.',
      'Pour Audi, associer les voitures, les anneaux de la marque, les textures et les grandes lettres en noir, blanc et rouge.',
      'Travailler l’équilibre entre les images, le logo et le message pour garder une composition facile à lire.'
    ],
    takeaway:'Un premier travail sur l’équilibre entre le produit, le fond et le texte. Les deux marques permettent d’essayer des ambiances très différentes, tout en gardant un message facile à repérer.',
    skills:['Composition visuelle','Montage d’images','Mise en page','Typographie','Couleurs & contrastes'],
    tools:['Suite Adobe'],
    facts:[
      {label:'Cadre',value:'Deux projets de licence 1'},
      {label:'Outils',value:'Suite Adobe'},
      {label:'Sujets',value:'Nike · Audi RS3'},
      {label:'Formats',value:'Affiches · Captures · Vidéo'}
    ],
    deliverables:'Trois affiches Nike autour des Air Jordan, Dunk Low et TN, ainsi qu’un projet vidéo Audi accompagné de trois captures.',
    showcase:{
      label:'NIKE × AUDI',
      caption:'Deux univers graphiques : les baskets Nike et les compositions autour de l’Audi RS3.',
      screens:[
        {image:'/elfie-zoungrana-projets-experiences-numeriques/assets/marques/nike-tn.webp',width:1414,height:2000,alt:'Affiche Nike TN : basket rouge et grise sur un effet de papier déchiré, avec la signature Elfie Zoungrana.'},
        {image:'/elfie-zoungrana-projets-experiences-numeriques/assets/marques/audi-rs3.webp',width:719,height:429,alt:'Composition Audi RS3 en noir, blanc et rouge : voiture, anneaux de la marque et grandes lettres rouges.'}
      ]
    },
    galleries:[
      {
        id:'nike',navLabel:'Les affiches Nike',galleryLayout:'posters',
        galleryEyebrow:'01 / NIKE',galleryHeading:'Trois baskets, trois ambiances.',
        galleryIntro:'Chaque affiche donne une place centrale aux baskets. Les fonds, les couleurs et les textures changent pour créer une ambiance différente autour de chaque modèle.',
        gallery:[
          {title:'Air Jordan · Fond textile et turquoise',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/marques/nike-jordan.webp',width:1449,height:2031,alt:'Affiche Air Jordan : baskets turquoise, noires et blanches sur un fond textile sombre, avec logo Nike et signature Elfie Zoungrana.'},
          {title:'Dunk Low · Répétition et papier déchiré',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/marques/nike-dunk.webp',width:1450,height:2048,alt:'Affiche Dunk Low : plusieurs paires violettes, bleues et noires réparties sur des bandes de papier blanc déchiré, avec la signature Elfie Zoungrana.'},
          {title:'TN · Rouge, noir et contraste',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/marques/nike-tn.webp',width:1414,height:2000,alt:'Affiche Nike TN : basket rouge et grise devant une déchirure blanche sur fond sombre, avec texte rouge et signature Elfie Zoungrana.'}
        ]
      },
      {
        id:'audi',navLabel:'Le projet Audi',galleryLayout:'desktop',
        galleryEyebrow:'02 / AUDI RS3',galleryHeading:'Un univers en noir, blanc et rouge.',
        galleryIntro:'Les voitures et les anneaux Audi se mêlent aux collages, aux textures et aux grandes lettres. Le rouge fait ressortir le nom de la marque et le modèle. La vidéo permet aussi de retrouver le rythme et les transitions du projet.',
        video:{
          src:'/elfie-zoungrana-projets-experiences-numeriques/assets/marques/audi-apercu.mp4',poster:'/elfie-zoungrana-projets-experiences-numeriques/assets/marques/audi-poster.webp',width:1280,height:720,
          label:'Lire l’aperçu vidéo du projet Audi',
          caption:'Aperçu du projet Audi : collages, textes et transitions en noir, blanc et rouge · 15 s.'
        },
        gallery:[
          {title:'Mettre le modèle en avant',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/marques/audi-rs3.webp',width:719,height:429,alt:'Capture du projet Audi : une RS3 grise devant les anneaux blancs et les lettres RS3 rouges, sur un fond de collages.'},
          {title:'Associer la voiture et le nom de la marque',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/marques/audi-collage.webp',width:720,height:430,alt:'Capture du projet Audi : une voiture grise, le mot Audi en blanc et les anneaux rouges sur un fond de textures noires et blanches.'},
          {title:'Jouer sur la répétition du texte',image:'/elfie-zoungrana-projets-experiences-numeriques/assets/marques/audi-typographie.webp',width:720,height:423,alt:'Capture du projet Audi : le nom Audi répété en rouge devant la voiture et les anneaux métalliques.'}
        ]
      }
    ],
    mediaNote:'Affiches et compositions réalisées pour des exercices de licence 1. Création graphique : Elfie Zoungrana. Marques et images de produits utilisées comme supports de création.',
    resources:[{label:'Ouvrir l’aperçu vidéo Audi',info:'MP4 · 15 s',url:'/elfie-zoungrana-projets-experiences-numeriques/assets/marques/audi-apercu.mp4',kind:'web'}]
  }
];

const order=['happy-learning','nextstep','penzi','licorne-party','wonderball','cauvaillac','moina-accessoires','zero-waste','paris8-communication','campagnes-conceptuelles','becomtech','elles-bougent'];
projects.sort((a,b)=>order.indexOf(a.id)-order.indexOf(b.id));
const confirmedTools={nextstep:['Figma'],penzi:['Figma'],'zero-waste':['Canva','Google Workspace','My Maps','Slack'],wonderball:['Figma']};
for(const project of projects){project.tools??=confirmedTools[project.id]||[];project.tags??=project.skills.slice(0,3);}

export const featuredProjectIds = ['happy-learning','nextstep','cauvaillac','zero-waste'];

export function projectUrl(project){return `/elfie-zoungrana-projets-experiences-numeriques/projets/${project.id}.html`;}

export function normalize(value) {
  return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('fr');
}

export function filterProjects(category = 'all', query = '', collection = projects) {
  const words = normalize(query).trim().split(/\s+/).filter(Boolean);
  return collection.filter(project => {
    const haystack = normalize([project.title, project.short, project.type, project.context, categories[project.category], ...project.tags, ...project.skills, ...project.tools].join(' '));
    return (category === 'all' || project.category === category) && words.every(word => haystack.includes(word));
  });
}

export function projectFromHash(hash) {
  const match = /^#projet-([a-z0-9-]+)$/.exec(hash);
  return match ? projects.find(project => project.id === match[1]) || null : null;
}
