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

mon-agence-immo
│
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── FilterBar/
│   │   │   ├── FilterBar.jsx
│   │   │   └── FilterBar.module.scss
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.scss
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.scss
│   │   └── HeaderNavBar/
│   │       ├── HeaderNavBar.jsx
│   │       └── HeaderNavBar.module.scss
│   ├── pages/
│   │   ├── ArticleDetailsPage/
│   │   │   ├── ArticleDetailsPage.jsx
│   │   │   └── ArticleDetailsPage.module.scss
│   │   ├── ArticleListPage/
│   │   │   ├── ArticleListPage.jsx
│   │   │   └── ArticleListPage.module.scss
│   │   ├── ContactFormPage/
│   │   │   ├── ContactFormPage.jsx
│   │   │   └── ContactFormPage.module.scss
│   │   ├── HomePage/
│   │   │   ├── HomePage.jsx
│   │   │   └── HomePage.module.scss
│   │   ├── MissionPage/
│   │   │   ├── MissionPage.jsx
│   │   │   └── MissionPage.module.scss
│   │   ├── NotFoundPage/
│   │   │   ├── NotFoundPage.jsx
│   │   │   └── NotFoundPage.module.scss
│   │   ├── PropertyDetailsPage/
│   │   │   ├── PropertyDetailsPage.jsx
│   │   │   └── PropertyDetailsPage.module.scss
│   │   ├── PropertyListPage/
│   │   │   ├── PropertyListPage.jsx
│   │   │   └── PropertyListPage.module.scss
│   │   ├── ServiceListPage/
│   │   │   ├── ServiceListPage.jsx
│   │   │   └── ServiceListPage.module.scss
│   │   ├── SuccessPage/
│   │   │   ├── SuccessPage.jsx
│   │   │   └── SuccessPage.module.scss
│   │   └── TeamPage/
│   │       ├── TeamPage.jsx
│   │       └── TeamPage.module.scss
│   ├── styles/
│   ├── App.jsx
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
