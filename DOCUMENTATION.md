# FoxAdBox Landing Page - Documentation Complète

> **Dernière mise à jour :** Janvier 2025
> **Version :** 1.0.0
> **Auteur :** TheDivisionCorp

---

## Table des matières

1. [Structure du projet](#1-structure-du-projet)
2. [Composants](#2-composants)
3. [Pages](#3-pages)
4. [Styles](#4-styles)
5. [Contenu actuel](#5-contenu-actuel)
6. [Assets](#6-assets)
7. [Configuration](#7-configuration)

---

## 1. Structure du projet

### Stack technique

| Technologie | Version | Rôle |
|-------------|---------|------|
| Next.js | 14.2.0 | Framework React avec SSR/SSG |
| React | ^18.2.0 | Bibliothèque UI |
| TypeScript | ^5.3.0 | Typage statique |
| Tailwind CSS | ^3.4.1 | Framework CSS utilitaire |
| Framer Motion | ^11.0.0 | Animations |
| Lucide React | ^0.344.0 | Icônes SVG |

### Arborescence des fichiers

```
foxadbox-landing/
├── app/                          # App Router (Next.js 14)
│   ├── globals.css               # Styles globaux + classes Tailwind custom
│   ├── layout.tsx                # Layout principal (metadata, structure HTML)
│   ├── page.tsx                  # Page d'accueil
│   ├── privacy/
│   │   └── page.tsx              # Page Privacy Policy
│   └── terms/
│       └── page.tsx              # Page Terms of Service
│
├── components/                   # Composants réutilisables
│   ├── Navbar.tsx                # Barre de navigation
│   ├── Footer.tsx                # Pied de page
│   ├── FAQ.tsx                   # Composant accordion FAQ (non utilisé)
│   ├── FeatureCard.tsx           # Carte feature (non utilisé)
│   ├── FeatureShowcase.tsx       # Showcase feature côte à côte
│   ├── PricingCard.tsx           # Carte de pricing
│   └── sections/                 # Sections de la landing page
│       ├── index.ts              # Export centralisé
│       ├── Hero.tsx              # Section hero
│       ├── SocialProof.tsx       # Badges social proof
│       ├── ProblemSolution.tsx   # Section problème/solution
│       ├── Features.tsx          # Section features (5 studios)
│       ├── NotionSection.tsx     # Section intégration Notion
│       ├── Pricing.tsx           # Section tarification
│       ├── FAQSection.tsx        # Section FAQ (7 catégories)
│       └── CTAFinal.tsx          # CTA final
│
├── public/                       # Assets statiques (vide actuellement)
│
├── package.json                  # Dépendances npm
├── tailwind.config.js            # Configuration Tailwind
├── tsconfig.json                 # Configuration TypeScript
├── postcss.config.js             # Configuration PostCSS
├── next.config.js                # Configuration Next.js
└── README.md                     # Instructions d'installation
```

---

## 2. Composants

### Composants de layout

#### `Navbar.tsx`
- **Chemin :** `components/Navbar.tsx`
- **Fonction :** Barre de navigation fixe avec effet de transparence au scroll
- **Features :**
  - Logo FoxAdBox avec emoji renard
  - Navigation desktop (Features, Pricing, FAQ)
  - CTA "Installer l'extension"
  - Menu hamburger mobile responsive
  - Background blur au scroll
- **Props :** Aucune

#### `Footer.tsx`
- **Chemin :** `components/Footer.tsx`
- **Fonction :** Pied de page avec liens et copyright
- **Sections :**
  - Logo + description
  - Liens Produit (Features, Pricing)
  - Liens Ressources (Guide, Support)
  - Liens Légal (Privacy, Terms)
  - Copyright "© 2025 FoxAdBox — Made with 🦊 by TheDivisionCorp"
- **Props :** Aucune

---

### Composants UI réutilisables

#### `FeatureShowcase.tsx`
- **Chemin :** `components/FeatureShowcase.tsx`
- **Fonction :** Affiche une feature en layout côte à côte (texte + image)
- **Props :**
  ```typescript
  interface FeatureShowcaseProps {
    badge: string           // Badge en haut (ex: "STUDIO PHOTO")
    title: string           // Titre principal
    description: string     // Description courte
    points: string[]        // Liste de bullet points
    imageSrc: string        // URL de l'image (placeholder si vide)
    imageAlt: string        // Alt text pour l'image
    reverse?: boolean       // Inverse l'ordre (image à gauche)
    highlighted?: boolean   // Style mis en avant (accent color)
  }
  ```

#### `PricingCard.tsx`
- **Chemin :** `components/PricingCard.tsx`
- **Fonction :** Carte de tarification avec liste de features
- **Props :**
  ```typescript
  interface PricingCardProps {
    name: string           // Nom du plan (STARTER, PRO, AGENCY)
    price: string          // Prix affiché
    features: string[]     // Liste des features incluses
    cta: string            // Texte du bouton
    popular?: boolean      // Badge "Populaire" + style accent
  }
  ```

#### `FAQ.tsx` (non utilisé)
- **Chemin :** `components/FAQ.tsx`
- **Fonction :** Composant accordion générique
- **Note :** Remplacé par FAQSection.tsx qui intègre directement l'accordion

#### `FeatureCard.tsx` (non utilisé)
- **Chemin :** `components/FeatureCard.tsx`
- **Fonction :** Ancienne carte feature en grid
- **Note :** Remplacé par FeatureShowcase.tsx

---

### Sections de page

#### `Hero.tsx`
- **Chemin :** `components/sections/Hero.tsx`
- **Fonction :** Section hero plein écran avec CTA principal
- **Éléments :**
  - Badge "Extension Chrome"
  - Titre principal avec gradient text
  - Sous-titre explicatif
  - 2 CTAs (Installer + Voir comment ça marche)
  - Trust badges (+10,000 pubs, +500 marketers, Export Notion)
  - Placeholder mockup

#### `SocialProof.tsx`
- **Chemin :** `components/sections/SocialProof.tsx`
- **Fonction :** Bande de badges métiers
- **Badges :** Media Buyers, E-commerce, Agences, UGC Creators, Dropshippers, Freelances

#### `ProblemSolution.tsx`
- **Chemin :** `components/sections/ProblemSolution.tsx`
- **Fonction :** Section problème/solution en 2 colonnes
- **Pain points :**
  - Analyse manuelle chronophage
  - Screenshots perdus
  - Création de visuels difficile
  - Adaptation des concepts complexe
  - Suivi concurrentiel impossible

#### `Features.tsx`
- **Chemin :** `components/sections/Features.tsx`
- **Fonction :** Affiche les 5 studios FoxAdBox
- **Studios :**
  1. STUDIO PHOTO - Analyse de pubs en un clic
  2. STUDIO UPLOAD - Import de fichiers
  3. STUDIO BIBLIOTHÈQUE - Organisation du swipe file
  4. STUDIO SPY MODE - Transformation de pubs (highlighted)
  5. STUDIO AD TRACKER - Surveillance concurrentielle

#### `NotionSection.tsx`
- **Chemin :** `components/sections/NotionSection.tsx`
- **Fonction :** Met en avant l'intégration Notion
- **Features :**
  - Export en 1 clic
  - Base de données auto-générée
  - Synchronisation instantanée

#### `Pricing.tsx`
- **Chemin :** `components/sections/Pricing.tsx`
- **Fonction :** Affiche les 3 plans tarifaires
- **Plans :** STARTER (12.99€), PRO (49.99€), AGENCY (119.99€)

#### `FAQSection.tsx`
- **Chemin :** `components/sections/FAQSection.tsx`
- **Fonction :** FAQ organisée par catégories avec accordion
- **Catégories :**
  1. Paiement & Abonnement (4 questions)
  2. Sécurité & Confidentialité (3 questions)
  3. Technique & Compatibilité (4 questions)
  4. Quotas & Limites (3 questions)
  5. Support & Assistance (3 questions)
  6. Légal & Éthique (3 questions)
  7. Intégrations (3 questions)

#### `CTAFinal.tsx`
- **Chemin :** `components/sections/CTAFinal.tsx`
- **Fonction :** Section CTA finale avec call-to-action
- **Titre :** "Prêt à voler les secrets de vos concurrents ?"

---

## 3. Pages

### Page d'accueil (`/`)
- **Fichier :** `app/page.tsx`
- **Structure :**
  ```
  Navbar
  └── main
      ├── Hero
      ├── SocialProof
      ├── ProblemSolution
      ├── Features
      ├── NotionSection
      ├── Pricing
      ├── FAQSection
      └── CTAFinal
  Footer
  ```

### Privacy Policy (`/privacy`)
- **Fichier :** `app/privacy/page.tsx`
- **Sections :**
  1. Introduction
  2. Données collectées
  3. Utilisation des données
  4. Partage des données
  5. Sécurité
  6. Vos droits (RGPD)
  7. Contact (privacy@foxadbox.com)

### Terms of Service (`/terms`)
- **Fichier :** `app/terms/page.tsx`
- **Sections :**
  1. Acceptation des conditions
  2. Description du service
  3. Comptes utilisateur
  4. Abonnement et paiement
  5. Utilisation acceptable
  6. Propriété intellectuelle
  7. Limitation de responsabilité
  8. Résiliation
  9. Modifications
  10. Contact (legal@foxadbox.com)

---

## 4. Styles

### Palette de couleurs

#### Couleurs principales (Dark theme - Bleu Nuit)

| Nom | Hex | Usage |
|-----|-----|-------|
| `dark` (DEFAULT) | `#1E2050` | Background principal |
| `dark-100` | `#222456` | Background secondaire |
| `dark-200` | `#2A2D64` | Cards, éléments surélevés |
| `dark-300` | `#353875` | Borders, éléments interactifs |
| `dark-400` | `#404486` | Borders hover |
| `dark-500` | `#4B4F97` | États actifs |

#### Couleur d'accent (Cyan)

| Nom | Hex | Usage |
|-----|-----|-------|
| `accent` (DEFAULT) | `#00F5D4` | CTA, liens, highlights |
| `accent-50` | `#E6FFFA` | Très léger |
| `accent-100` | `#B3FFF0` | Léger |
| `accent-200` | `#80FFE6` | - |
| `accent-300` | `#4DFFDC` | - |
| `accent-400` | `#1AFFD2` | Hover states |
| `accent-500` | `#00F5D4` | Principal |
| `accent-600` | `#00C4AA` | - |
| `accent-700` | `#009380` | - |
| `accent-800` | `#006255` | - |
| `accent-900` | `#00312B` | Très foncé |

### Typographie

- **Font family :** Inter (Google Fonts)
- **Poids utilisés :** 300, 400, 500, 600, 700, 800
- **Import :** `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');`

### Classes Tailwind custom

#### Boutons

```css
.btn-primary     /* Bouton accent avec texte foncé, effet hover scale */
.btn-secondary   /* Bouton outline dark avec border */
.btn-ghost       /* Bouton texte uniquement, hover white */
```

#### Cards

```css
.card           /* Card avec background dark-200, border, rounded-2xl */
.card-hover     /* Effet hover avec border accent et shadow */
```

#### Utilitaires

```css
.gradient-text      /* Texte avec gradient accent */
.section-padding    /* Padding responsive pour sections */
.container-custom   /* Container max-w-7xl centré */
.text-balance       /* text-wrap: balance */
.bg-grid            /* Background avec grille subtile */
.bg-noise           /* Background avec texture noise */
```

### Animations custom

```javascript
'fade-in'         // Fade in simple
'fade-in-up'      // Fade in avec translation Y
'slide-in-left'   // Slide depuis la gauche
'slide-in-right'  // Slide depuis la droite
'pulse-slow'      // Pulse lent
'glow'            // Effet glow pulsant (accent color)
```

### Scrollbar custom

- Track : `dark-200`
- Thumb : `dark-400` (hover: `dark-500`)
- Width : 8px

---

## 5. Contenu actuel

### Headlines principales

1. **Hero :** "Transformez les pubs de vos concurrents en votre prochaine campagne gagnante"
2. **Problem :** "Créer des pubs qui convertissent, c'est un enfer"
3. **Solution :** "FoxAdBox fait le travail pour vous"
4. **Features :** "5 outils puissants. Une seule extension."
5. **Notion :** "Connecté à votre workflow Notion"
6. **Pricing :** "Un plan adapté à chaque besoin"
7. **FAQ :** "Questions fréquentes"
8. **CTA Final :** "Prêt à voler les secrets de vos concurrents ?"

### Pricing actuel

| Plan | Prix | Concurrents | Analyses Photo | Analyses Vidéo | Prompts MJ | Scripts | Sauvegardes |
|------|------|-------------|----------------|----------------|------------|---------|-------------|
| STARTER | 12.99€/mois | 8 | 150 | 100 | 70 | 40 | 50 |
| PRO | 49.99€/mois | 15 | 450 | 350 | 250 | 120 | 200 |
| AGENCY | 119.99€/mois | 30 | 900 | 700 | 300 | 240 | Illimitées |

### Features des 5 Studios

#### STUDIO PHOTO
- Capture directe sur n'importe quel site web
- Identification précise de l'audience cible
- Analyse complète du hook visuel
- Décryptage du message publicitaire

#### STUDIO UPLOAD
- Import de photos et vidéos depuis votre appareil
- Analyse frame par frame des vidéos
- Génération automatique du script complet
- Détection des techniques de persuasion

#### STUDIO BIBLIOTHÈQUE
- Stockage illimité de vos analyses
- Organisation par playlists personnalisées
- Recherche avancée multi-critères
- Export vers Notion en un clic

#### STUDIO SPY MODE (Star Feature)
- Génération de prompts Midjourney prêts à l'emploi
- Script vidéo adapté shot par shot
- 5 variations publicitaires générées automatiquement
- Propositions d'angles marketing différenciants

#### STUDIO AD TRACKER
- Suivi simultané de plusieurs concurrents
- Historique complet de leurs publicités
- Alertes en temps réel des nouvelles pubs
- Synchronisation automatique avec Notion

---

## 6. Assets

### Images

**État actuel :** Aucune image dans `/public/`

**Placeholders à remplacer :**
- Hero mockup (extension screenshot)
- 5 images pour chaque Studio Feature
- Screenshot Notion export
- Favicon/Logo

### Icônes

Toutes les icônes proviennent de **Lucide React** :
- `Chrome` - Logo Chrome pour CTA
- `ArrowRight` - Flèches directionnelles
- `CheckCircle` - Checkmarks
- `Check` - Checks dans pricing
- `ChevronDown` - Accordion FAQ
- `Menu` / `X` - Navigation mobile
- `Clock` - Reassurance CTA
- `ArrowLeft` - Back link pages légales

### Emojis utilisés

- 🦊 - Logo FoxAdBox
- 😩 - Pain points
- 🎯 - Pub concurrente
- 🚀 - Pub adaptée
- 📝 - Notion placeholder
- 🖼️ - Image placeholder

---

## 7. Configuration

### Metadata SEO

```typescript
{
  title: 'FoxAdBox - Transformez les pubs de vos concurrents en campagnes gagnantes',
  description: 'FoxAdBox analyse les publicités photos et vidéos de vos concurrents, génère des prompts Midjourney et des scripts vidéo adaptés à VOTRE produit.',
  keywords: 'analyse publicitaire, IA, extension chrome, marketing, spy ads, concurrent, midjourney, script video',
  openGraph: {
    title: 'FoxAdBox - Analyse publicitaire avec IA',
    description: 'Transformez les pubs de vos concurrents en votre prochaine campagne gagnante',
    type: 'website',
  }
}
```

### Scripts npm

```json
{
  "dev": "next dev",        // Développement local
  "build": "next build",    // Build production
  "start": "next start",    // Serveur production
  "lint": "next lint"       // Linting
}
```

---

## Notes pour amélioration

### À faire
- [ ] Ajouter les screenshots de l'extension dans `/public/features/`
- [ ] Remplacer le mockup Hero par une vraie capture
- [ ] Ajouter le screenshot Notion
- [ ] Créer un favicon personnalisé
- [ ] Mettre à jour les liens CTA vers le Chrome Web Store
- [ ] Ajouter les vrais liens "En savoir plus" pour chaque feature

### Suggestions d'amélioration
- Ajouter des animations au scroll (Framer Motion)
- Intégrer des témoignages clients
- Ajouter une section "Comment ça marche" avec vidéo
- Créer une page dédiée pour chaque Studio
- Ajouter un formulaire de contact
- Intégrer un chatbot support

---

*Documentation générée le 30 janvier 2025*
