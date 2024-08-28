# ImmobilierApp

Mon-Agence-Immo est une application web développée en React pour rechercher et afficher des propriétés immobilières.

## Table des Matières

- [Fonctionnalités](#fonctionnalités)
- [Technologies Utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du Projet](#structure-du-projet)
- [Fichiers Sass](#fichiers-sass)
- [Composants React](#composants-react)
- [API Google Maps](#api-google-maps)
- [Déploiement](#déploiement)
- [Licence](#licence)

## Fonctionnalités

- Recherche de biens immobiliers avec des filtres avancés.
- Affichage des propriétés
- Détails de chaque propriété avec des images et des informations détaillées.
- Fonction de favoris pour sauvegarder les biens préférés.
- 

## Technologies Utilisées

- **Front-End**: React, React Router
- **Style**: HTML, CSS, SCSS


## Installation

### Prérequis

- Node.js et npm (Node Package Manager) installés sur votre machine.

### Étapes d'Installation

1. **Clonez le dépôt**:
   ```bash
   git clone https://github.com/Aude2103/mon-agence-immo.git

## Structure

mon-agence-immo/
│
├── public/
│
├── src/
│   ├── api/
│   │   └── NotesApi.json
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── AccordionItem/
│   │   │   ├── AccordionItem.jsx
│   │   │   └── style.module.scss
│   │   ├── AgentCard/
│   │   │   ├── AgentCard.jsx
│   │   │   └── style.module.scss
│   │   └── ... (autres dossiers de composants)
│   │
│   ├── containers/
│   │   ├── AdviceOverView/
│   │   │   ├── AdviceOverView.jsx
│   │   │   └── style.module.scss
│   │   ├── ContactOverview/
│   │   │   ├── ContactOverview.jsx
│   │   │   └── style.module.scss
│   │   └── ... (autres dossiers de conteneurs)
│   │
│   ├── context/
│   │   └── (Aucun fichier spécifique mentionné)
│   │
│   ├── hooks/
│   │   ├── useAgents.js
│   │   ├── useFAQ.js
│   │   ├── useProperties.js
│   │   └── useSlides.js
│   │
│   ├── layouts/
│   │   ├── AdminLayout/
│   │   │   ├── AdminLayout.jsx
│   │   │   └── style.module.scss
│   │   ├── AuthLayout/
│   │   │   ├── AuthLayout.jsx
│   │   │   └── style.module.scss
│   │   └── ... (autres dossiers de layouts)
│   │
│   ├── pages/
│   │   ├── ArticleDetailsPage/
│   │   │   ├── ArticleDetailsPage.jsx
│   │   │   └── style.module.scss
│   │   ├── HomePage/
│   │   │   ├── HomePage.jsx
│   │   │   └── style.module.scss
│   │   └── ... (autres dossiers de pages)
│   │
│   ├── styles/
│   │   ├── _base.scss
│   │   ├── _components.scss
│   │   ├── _layout.scss
│   │   ├── _mixins.scss
│   │   └── _variables.scss
│   │
│   ├── App.jsx
│   ├── App.test.js
│   ├── config.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .gitignore
├── db.json
├── package-lock.json
├── package.json
└── README.md
