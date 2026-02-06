# FoxAdBox Landing Page

Site vitrine one-page pour FoxAdBox, une extension Chrome d'analyse publicitaire avec IA.

## Stack technique

- **Next.js 14** (App Router)
- **Tailwind CSS** - Styling
- **Lucide React** - Icônes
- **Framer Motion** - Animations (optionnel)
- **TypeScript** - Typage statique

## Structure du projet

```
foxadbox-landing/
├── app/
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx           # Layout racine
│   ├── page.tsx             # Page d'accueil
│   ├── privacy/
│   │   └── page.tsx         # Privacy Policy
│   └── terms/
│       └── page.tsx         # Terms of Service
├── components/
│   ├── FAQ.tsx              # Composant FAQ accordéon
│   ├── FeatureCard.tsx      # Card feature
│   ├── Footer.tsx           # Footer
│   ├── Navbar.tsx           # Navigation
│   ├── PricingCard.tsx      # Card pricing
│   └── sections/
│       ├── CTAFinal.tsx     # Section CTA finale
│       ├── FAQSection.tsx   # Section FAQ
│       ├── Features.tsx     # Section Features (5 Studios)
│       ├── Hero.tsx         # Section Hero
│       ├── index.ts         # Export des sections
│       ├── NotionSection.tsx # Section Notion
│       ├── Pricing.tsx      # Section Pricing
│       ├── ProblemSolution.tsx # Section Problème/Solution
│       └── SocialProof.tsx  # Section Social Proof
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Installation

```bash
# Cloner le repository
git clone <repo-url>
cd foxadbox-landing

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build production
npm run build

# Lancer en production
npm start
```

## Déploiement sur Vercel

### Option 1 : Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Option 2 : Via l'interface Vercel

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre repository Git
4. Vercel détectera automatiquement Next.js
5. Cliquez sur "Deploy"

### Option 3 : Via GitHub

1. Poussez votre code sur GitHub
2. Connectez votre repo à Vercel
3. Chaque push sur `main` déclenchera un déploiement automatique

## Configuration

### Variables d'environnement

Créez un fichier `.env.local` pour les variables d'environnement :

```env
# Exemple (à adapter selon vos besoins)
NEXT_PUBLIC_CHROME_EXTENSION_URL=https://chrome.google.com/...
```

### Palette de couleurs

La palette est définie dans `tailwind.config.js` :

- **Background** : `#0a0a0f` (dark)
- **Accent** : `#f59e0b` (orange/ambre)
- **Text** : Blanc et nuances de gris

## Personnalisation

### Liens d'installation

Remplacez les `href="#"` par vos vrais liens :

- Boutons "Installer l'extension" → lien Chrome Web Store
- CTAs pricing → liens vers votre système de paiement

### Contenu

Modifiez le contenu dans les fichiers de sections (`components/sections/`).

### Images/Mockups

Remplacez les placeholders par vos vraies images dans :
- `Hero.tsx` - Mockup principal
- `NotionSection.tsx` - Screenshot Notion

## Commandes disponibles

```bash
npm run dev      # Développement (localhost:3000)
npm run build    # Build production
npm run start    # Démarrer en production
npm run lint     # Linting ESLint
```

## Licence

Proprietaire - FoxAdBox © 2025
