# Documentation Portfolio Guillaume Breon

## Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Architecture du projet](#architecture-du-projet)
3. [Structure des fichiers](#structure-des-fichiers)
4. [Technologies utilisées](#technologies-utilisées)
5. [Composants principaux](#composants-principaux)
6. [Configuration et installation](#configuration-et-installation)
7. [Déploiement](#déploiement)
8. [Maintenance et mises à jour](#maintenance-et-mises-à-jour)

---

## Vue d'ensemble

Ce portfolio est une application web moderne développée avec **Next.js 14** et **TypeScript**, présentant les compétences, projets et expériences de Guillaume Breon, étudiant en développement logiciel. Le site utilise une approche full-stack avec un design moderne et responsive.

### Fonctionnalités principales

- ✨ Design moderne avec animations fluides (Framer Motion)
- 📱 Interface entièrement responsive
- 🎨 Système de design cohérent avec shadcn/ui
- 📊 Présentation interactive des projets
- 📬 Formulaire de contact fonctionnel
- 📄 Téléchargement automatique du CV
- 🔍 SEO optimisé

---

## Architecture du projet

Le projet suit les conventions Next.js 14 avec App Router :

```
/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx          # Page d'accueil
│   └── api/              # API Routes
│       └── download-cv/
├── components/           # Composants React
│   ├── ui/              # Composants UI réutilisables
│   ├── project-card.tsx # Composant carte projet
│   ├── mobile-menu.tsx  # Menu mobile
│   └── dataProjets.tsx  # Données des projets
├── public/              # Assets statiques
└── lib/                 # Utilitaires
```

---

## Structure des fichiers

### 📁 app/
- **`layout.tsx`** : Layout racine avec métadonnées SEO
- **`page.tsx`** : Page principale du portfolio
- **`globals.css`** : Configuration Tailwind et variables CSS
- **`api/download-cv/route.ts`** : API pour télécharger le CV

### 📁 components/
- **`project-card.tsx`** : Composant principal pour afficher les projets
- **`mobile-menu.tsx`** : Menu de navigation mobile
- **`dataProjets.tsx`** : Base de données des projets
- **`ui/`** : Bibliothèque de composants UI basée sur shadcn/ui

### 📁 public/
- Images du portfolio
- CV en format PDF
- Assets statiques

---

## Technologies utilisées

### Core Framework
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **React 18** - Bibliothèque UI

### Styling & UI
- **Tailwind CSS** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI pré-construits
- **Framer Motion** - Animations et transitions
- **Lucide React** - Icônes

### Tools & Build
- **ESLint** - Linting
- **PostCSS** - Transformation CSS

---

## Composants principaux

### 🏠 Page principale (`app/page.tsx`)

Structure en sections :
1. **Hero Section** - Présentation et photo
2. **About Section** - Formation, compétences, expériences
3. **Projects Section** - Grille de projets
4. **Contact Section** - Formulaire et informations

```typescript
// Gestion de la navigation active
const [activeSection, setActiveSection] = useState("home")

// Effet de scroll pour mettre à jour la section active
useEffect(() => {
  const handleScroll = () => {
    // Logique de détection de section
  }
}, [])
```

### 🃏 ProjectCard (`components/project-card.tsx`)

Composant interactif pour afficher les projets :

```typescript
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  features?: string[];
  technologies?: string[];
  challenges?: string[];
  outcomes?: string[];
}
```

**Fonctionnalités :**
- Modal détaillée avec onglets
- Aperçu des technologies
- Liens vers démo et code source
- Animations au hover

### 📱 MobileMenu (`components/mobile-menu.tsx`)

Navigation mobile avec animations :
- Overlay plein écran
- Navigation fluide entre sections
- Liens sociaux
- Animations Framer Motion

### 📊 Données des projets (`components/dataProjets.tsx`)

Base de données statique contenant 7 projets :
1. Application RedwoodJS (e-commerce seconde main)
2. Encrypt (chiffrement de texte)
3. Pokedex React
4. Jeu VR Unreal Engine 5
5. Réseau social PHP
6. Site BTP
7. Application mobile React Native

---

## Configuration et installation

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone [repository-url]

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm start
```

### Variables d'environnement

Aucune variable d'environnement requise pour le fonctionnement de base.

### Configuration du formulaire de contact

Le formulaire utilise Formspree :
```html
<form action="https://formspree.io/f/movevpjg" method="POST">
```

---

## Déploiement

### Déploiement Vercel (recommandé)

```bash
# Installation Vercel CLI
npm i -g vercel

# Déploiement
vercel --prod
```

### Déploiement manuel

```bash
# Build
npm run build

# Le dossier .next/ contient les fichiers à déployer
```

### Configuration serveur

- Support Node.js requis
- Servir les fichiers statiques depuis `/public`
- Redirection des routes vers `index.html` (SPA)

---

## Maintenance et mises à jour

### Structure des données projets

Pour ajouter un nouveau projet, modifier `components/dataProjets.tsx` :

```typescript
{
  id: 8, // Nouvel ID
  title: "Nom du projet",
  description: "Description courte",
  longDescription: "Description détaillée",
  image: "/path/to/image.jpg",
  tags: ["Tag1", "Tag2"],
  link: "https://demo-url.com",
  github: "https://github.com/...",
  features: ["Fonctionnalité 1", "Fonctionnalité 2"],
  technologies: ["Tech1", "Tech2"],
  challenges: ["Défi 1", "Défi 2"],
  outcomes: ["Résultat 1", "Résultat 2"]
}
```

### Mise à jour du CV

1. Remplacer le fichier `public/CV_Guillaume_Breon.pdf`
2. Vérifier que le nom correspond à celui dans `app/api/download-cv/route.ts`

### Modification des couleurs

Les couleurs principales sont définies dans `app/globals.css` :

```css
:root {
  --primary: 230 100% 65%; /* Bleu principal */
  --primary-rgb: 0, 122, 255;
}
```

---
