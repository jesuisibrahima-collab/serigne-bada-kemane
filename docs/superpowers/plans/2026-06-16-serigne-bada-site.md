# Site Web Serigne Bada Kemane — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construire un site web influenceur lifestyle pour Serigne Bada Kemane — homepage one-page avec vidéos TikTok embarquées + boutique produits commande WhatsApp, déployé sur Vercel.

**Architecture:** Homepage one-page scroll (`/`) avec 5 sections (Hero, About, Socials, TikTok, Contact) + page boutique séparée (`/boutique`) avec grille produits et barre de recherche client-side. Zéro backend, zéro paiement — tout passe par WhatsApp.

**Tech Stack:** Next.js 14 App Router · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion · Google Fonts (Playfair Display + Inter)

---

## Carte des fichiers

```
bada-site-web/
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── components.json                    # shadcn config
├── .gitignore
├── app/
│   ├── layout.tsx                     # Root layout : fonts + metadata + Navbar + Footer
│   ├── globals.css                    # CSS variables design tokens + Tailwind base
│   ├── page.tsx                       # Homepage (assemble les 5 sections)
│   └── boutique/
│       └── page.tsx                   # Page boutique
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                 # Navigation fixe avec lien Boutique
│   │   └── Footer.tsx                 # Copyright + liens légaux
│   ├── sections/
│   │   ├── HeroSection.tsx            # Plein écran, photo, CTA
│   │   ├── AboutSection.tsx           # Photo + texte + badges stats
│   │   ├── SocialsSection.tsx         # Cartes Facebook + TikTok
│   │   ├── TikTokSection.tsx          # Grille vidéos TikTok embed
│   │   └── ContactSection.tsx         # Bouton WhatsApp + icônes réseaux
│   └── boutique/
│       ├── ProductCard.tsx            # Carte produit + bouton WhatsApp
│       ├── ProductGrid.tsx            # Grille + filtre client-side
│       └── SearchBar.tsx              # Input de recherche
├── data/
│   ├── products.ts                    # Catalogue produits (placeholder)
│   └── tiktok-videos.ts              # URLs des 6 vidéos TikTok
├── lib/
│   ├── utils.ts                       # cn() + buildWhatsAppUrl()
│   └── socials.ts                     # Liens réseaux sociaux constants
└── public/
    └── images/
        └── placeholder.jpg
```

---

## Task 1 : Scaffold Next.js + Configuration

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `postcss.config.mjs`

- [ ] **Step 1 : Scaffold le projet Next.js**

```bash
cd "/Users/layepro/Desktop/travail/bada/bada site web"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*" --yes
```

Expected : projet Next.js 14 créé avec App Router, TypeScript, Tailwind.

- [ ] **Step 2 : Installer les dépendances supplémentaires**

```bash
npm install framer-motion lucide-react
npm install -D @types/node
```

- [ ] **Step 3 : Initialiser shadcn/ui**

```bash
npx shadcn@latest init --defaults
```

Quand demandé : style `default`, base color `neutral`, CSS variables `yes`.

- [ ] **Step 4 : Ajouter les composants shadcn nécessaires**

```bash
npx shadcn@latest add button card input badge
```

- [ ] **Step 5 : Vérifier que le projet démarre**

```bash
npm run dev
```

Expected : `http://localhost:3000` accessible, page Next.js par défaut visible.

- [ ] **Step 6 : Commit**

```bash
git init
git add .
git commit -m "feat: scaffold Next.js 14 + Tailwind + shadcn/ui + Framer Motion"
```

---

## Task 2 : Design Tokens + Fonts

**Files:**
- Modify: `app/globals.css`
- Modify: `tailwind.config.ts`
- Modify: `app/layout.tsx`

- [ ] **Step 1 : Configurer les CSS variables dans globals.css**

Remplacer le contenu de `app/globals.css` par :

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-bg-primary: #FAFAF8;
    --color-bg-secondary: #F5F0EB;
    --color-text-primary: #1A1A1A;
    --color-text-muted: #6B6B6B;
    --color-accent: #C9A96E;
    --color-whatsapp: #25D366;

    --background: 0 0% 98%;
    --foreground: 0 0% 10%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 10%;
    --primary: 36 44% 60%;
    --primary-foreground: 0 0% 100%;
    --secondary: 30 30% 93%;
    --secondary-foreground: 0 0% 10%;
    --muted: 30 20% 93%;
    --muted-foreground: 0 0% 42%;
    --border: 30 20% 88%;
    --input: 30 20% 88%;
    --ring: 36 44% 60%;
    --radius: 1rem;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Playfair Display', serif;
  }
}
```

- [ ] **Step 2 : Étendre tailwind.config.ts avec les couleurs custom**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FAFAF8',
        'bg-secondary': '#F5F0EB',
        'text-primary': '#1A1A1A',
        'text-muted': '#6B6B6B',
        accent: '#C9A96E',
        whatsapp: '#25D366',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
```

- [ ] **Step 3 : Mettre à jour app/layout.tsx**

```tsx
import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Serigne Bada Kemane — Influenceur Sénégalais',
  description: 'Découvrez l\'univers de Serigne Bada Kemane, influenceur sénégalais. Boutique en ligne, vidéos TikTok et bien plus.',
  openGraph: {
    title: 'Serigne Bada Kemane',
    description: 'Influenceur sénégalais — Boutique & Contenus',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 4 : Vérifier visuellement**

```bash
npm run dev
```

Ouvrir `http://localhost:3000` — la police doit être Inter, fond blanc cassé.

- [ ] **Step 5 : Commit**

```bash
git add .
git commit -m "feat: design tokens, CSS variables, fonts Playfair Display + Inter"
```

---

## Task 3 : Fichiers de données + utilitaires

**Files:**
- Create: `lib/utils.ts`
- Create: `lib/socials.ts`
- Create: `data/products.ts`
- Create: `data/tiktok-videos.ts`

- [ ] **Step 1 : Créer lib/utils.ts avec cn() et buildWhatsAppUrl()**

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${encoded}`
}
```

- [ ] **Step 2 : Tester buildWhatsAppUrl manuellement dans la console**

```bash
node -e "
const { buildWhatsAppUrl } = require('./lib/utils.ts')
// On ne peut pas require TS directement mais on vérifie la logique :
const phone = '221700000000'
const msg = 'Bonjour, je veux commander : Produit Test'
const url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(msg)
console.log(url)
"
```

Expected : URL WhatsApp bien formée avec le message encodé.

- [ ] **Step 3 : Créer lib/socials.ts**

```typescript
// lib/socials.ts
export const WHATSAPP_NUMBER = '221700000000' // ← Remplacer par le vrai numéro

export const socials = {
  facebook: 'https://www.facebook.com/share/1ExAXV9KMe/',
  tiktok: 'https://www.tiktok.com/@serignebadakeman',
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
} as const

export function buildContactWhatsApp(message = 'Bonjour Serigne Bada, je vous contacte depuis votre site web.'): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildProductWhatsApp(productName: string, price: number): string {
  const message = `Bonjour Serigne Bada, je souhaite commander : ${productName} (${price.toLocaleString('fr-FR')} FCFA).`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
```

- [ ] **Step 4 : Créer data/products.ts**

```typescript
// data/products.ts
export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Huile de Séduction',
    description: 'Huile naturelle aux propriétés aphrodisiaques, issue de plantes africaines traditionnelles.',
    price: 15000,
    image: '/images/placeholder.jpg',
  },
  {
    id: 2,
    name: 'Parfum de la Chance',
    description: 'Fragrance mystique pour attirer la réussite et les opportunités dans votre vie.',
    price: 20000,
    image: '/images/placeholder.jpg',
  },
  {
    id: 3,
    name: 'Bain de Prospérité',
    description: 'Mélange de plantes purifiantes pour un rituel de purification et d\'abondance.',
    price: 12000,
    image: '/images/placeholder.jpg',
  },
  {
    id: 4,
    name: 'Talisman de Protection',
    description: 'Amulette confectionnée selon les traditions ancestrales sénégalaises.',
    price: 25000,
    image: '/images/placeholder.jpg',
  },
  {
    id: 5,
    name: 'Encens de la Réussite',
    description: 'Encens naturel à brûler lors de vos moments de méditation et de visualisation.',
    price: 8000,
    image: '/images/placeholder.jpg',
  },
  {
    id: 6,
    name: 'Huile Intime Premium',
    description: 'Huile de massage naturelle pour renforcer la complicité et le bien-être du couple.',
    price: 18000,
    image: '/images/placeholder.jpg',
  },
]
```

- [ ] **Step 5 : Créer data/tiktok-videos.ts**

```typescript
// data/tiktok-videos.ts
export interface TikTokVideo {
  id: string
  url: string
  caption: string
}

// ← Remplacer ces URLs par les vraies vidéos TikTok de Serigne Bada Kemane
export const tiktokVideos: TikTokVideo[] = [
  {
    id: '1',
    url: 'https://www.tiktok.com/@serignebadakeman/video/7000000000000000001',
    caption: 'Vidéo 1',
  },
  {
    id: '2',
    url: 'https://www.tiktok.com/@serignebadakeman/video/7000000000000000002',
    caption: 'Vidéo 2',
  },
  {
    id: '3',
    url: 'https://www.tiktok.com/@serignebadakeman/video/7000000000000000003',
    caption: 'Vidéo 3',
  },
  {
    id: '4',
    url: 'https://www.tiktok.com/@serignebadakeman/video/7000000000000000004',
    caption: 'Vidéo 4',
  },
  {
    id: '5',
    url: 'https://www.tiktok.com/@serignebadakeman/video/7000000000000000005',
    caption: 'Vidéo 5',
  },
  {
    id: '6',
    url: 'https://www.tiktok.com/@serignebadakeman/video/7000000000000000006',
    caption: 'Vidéo 6',
  },
]
```

- [ ] **Step 6 : Créer un placeholder image**

```bash
curl -o "public/images/placeholder.jpg" "https://via.placeholder.com/400x400/F5F0EB/6B6B6B?text=Produit" 2>/dev/null || \
  npx --yes sharp-cli create --width 400 --height 400 /dev/null public/images/placeholder.jpg 2>/dev/null || \
  echo "placeholder à créer manuellement dans public/images/placeholder.jpg"
```

Si la commande échoue : créer manuellement un fichier image 400×400 dans `public/images/placeholder.jpg`.

- [ ] **Step 7 : Commit**

```bash
git add .
git commit -m "feat: data layer — products, tiktok-videos, socials, utils"
```

---

## Task 4 : Navbar

**Files:**
- Create: `components/layout/Navbar.tsx`

- [ ] **Step 1 : Créer components/layout/Navbar.tsx**

```tsx
// components/layout/Navbar.tsx
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/#about', label: 'À propos' },
    { href: '/#videos', label: 'Vidéos' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#FAFAF8]/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-serif text-lg font-semibold text-[#1A1A1A] hover:text-[#C9A96E] transition-colors">
            Serigne Bada Kemane
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/boutique"
              className="bg-[#C9A96E] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#b8944d] transition-colors"
            >
              Boutique
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#1A1A1A]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-t border-[#F5F0EB] px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/boutique"
            className="bg-[#C9A96E] text-white text-sm font-medium px-5 py-2 rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Boutique
          </Link>
        </div>
      )}
    </nav>
  )
}
```

- [ ] **Step 2 : Vérifier dans le navigateur**

```bash
npm run dev
```

La navbar doit apparaître, devenir opaque au scroll, avoir un menu hamburger sur mobile.

- [ ] **Step 3 : Commit**

```bash
git add components/layout/Navbar.tsx
git commit -m "feat: Navbar fixe avec scroll opacity + menu mobile"
```

---

## Task 5 : Footer

**Files:**
- Create: `components/layout/Footer.tsx`

- [ ] **Step 1 : Créer components/layout/Footer.tsx**

```tsx
// components/layout/Footer.tsx
import Link from 'next/link'
import { socials } from '@/lib/socials'

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#6B6B6B] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-white text-lg mb-1">Serigne Bada Kemane</p>
            <p className="text-sm">Influenceur Sénégalais</p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link href={socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Facebook
            </Link>
            <Link href={socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              TikTok
            </Link>
            <Link href="/boutique" className="hover:text-white transition-colors">
              Boutique
            </Link>
          </div>

          <p className="text-xs">© 2026 Serigne Bada Kemane. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2 : Commit**

```bash
git add components/layout/Footer.tsx
git commit -m "feat: Footer avec liens réseaux sociaux"
```

---

## Task 6 : HeroSection

**Files:**
- Create: `components/sections/HeroSection.tsx`

- [ ] **Step 1 : Créer components/sections/HeroSection.tsx**

```tsx
// components/sections/HeroSection.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { buildContactWhatsApp } from '@/lib/socials'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Serigne Bada Kemane"
          fill
          className="object-cover object-center"
          priority
          onError={(e) => {
            // Fallback si l'image n'existe pas encore
            (e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        {/* Overlay gradient blanc */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
      </div>

      {/* Fallback fond beige si pas d'image */}
      <div className="absolute inset-0 bg-[#F5F0EB] -z-10" />

      {/* Contenu */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium text-[#C9A96E] uppercase tracking-widest mb-4"
        >
          Influenceur Sénégalais
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#1A1A1A] leading-tight mb-6"
        >
          Serigne Bada
          <br />
          <span className="text-[#C9A96E]">Kemane</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#6B6B6B] mb-10 max-w-xl mx-auto"
        >
          Guide spirituel · Conseiller · Créateur de contenu
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/boutique"
            className="bg-[#C9A96E] text-white font-medium px-8 py-4 rounded-full hover:bg-[#b8944d] transition-colors text-sm uppercase tracking-wide"
          >
            Découvrir la boutique
          </Link>
          <Link
            href={buildContactWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-[#1A1A1A]/20 text-[#1A1A1A] font-medium px-8 py-4 rounded-full hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors text-sm uppercase tracking-wide"
          >
            Me contacter
          </Link>
        </motion.div>
      </div>

      {/* Flèche scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-[#C9A96E]/50 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#C9A96E] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2 : Copier une photo portrait dans public/images/hero.jpg**

Placer la photo principale de Serigne Bada dans `public/images/hero.jpg`.  
Si pas encore disponible : laisser tel quel — le fond beige s'affiche en fallback.

- [ ] **Step 3 : Vérifier dans le navigateur**

```bash
npm run dev
```

Le hero doit apparaître avec le fond beige (ou la photo si disponible), le titre animé, les 2 boutons CTA.

- [ ] **Step 4 : Commit**

```bash
git add components/sections/HeroSection.tsx
git commit -m "feat: HeroSection — plein écran, titre Playfair, CTA WhatsApp + boutique"
```

---

## Task 7 : AboutSection

**Files:**
- Create: `components/sections/AboutSection.tsx`

- [ ] **Step 1 : Créer components/sections/AboutSection.tsx**

```tsx
// components/sections/AboutSection.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const stats = [
  { value: '100K+', label: 'Abonnés Facebook' },
  { value: '50K+', label: 'Abonnés TikTok' },
  { value: '5+', label: 'Années d\'activité' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#F5F0EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about.jpg"
                alt="Serigne Bada Kemane"
                fill
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder.jpg'
                }}
              />
            </div>
            {/* Badge flottant */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 text-center">
              <p className="font-serif text-2xl font-bold text-[#C9A96E]">5+</p>
              <p className="text-xs text-[#6B6B6B] mt-1">Années<br />d&apos;expérience</p>
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium text-[#C9A96E] uppercase tracking-widest mb-4">À propos</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              Guide, Conseiller<br />& Influenceur
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
              Serigne Bada Kemane est une figure influente de la communauté sénégalaise. 
              Fort de plusieurs années d&apos;expérience, il accompagne ses clients dans leur 
              quête de bien-être, de réussite et d&apos;épanouissement personnel.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              Grâce à ses produits soigneusement sélectionnés et ses conseils avisés, 
              il aide des milliers de personnes à transformer leur vie au quotidien.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1A1A1A]/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl font-bold text-[#C9A96E]">{stat.value}</p>
                  <p className="text-xs text-[#6B6B6B] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2 : Commit**

```bash
git add components/sections/AboutSection.tsx
git commit -m "feat: AboutSection — photo + bio + stats badges"
```

---

## Task 8 : SocialsSection

**Files:**
- Create: `components/sections/SocialsSection.tsx`

- [ ] **Step 1 : Créer components/sections/SocialsSection.tsx**

```tsx
// components/sections/SocialsSection.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { socials } from '@/lib/socials'

const socialCards = [
  {
    name: 'Facebook',
    handle: '@serignebadakemane',
    followers: '100K+ abonnés',
    description: 'Retrouvez mes publications quotidiennes, conseils et moments de vie sur Facebook.',
    url: socials.facebook,
    color: '#1877F2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@serignebadakeman',
    followers: '50K+ abonnés',
    description: 'Découvrez mes vidéos conseils, démonstrations de produits et lifestyle sur TikTok.',
    url: socials.tiktok,
    color: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.22 8.22 0 004.84 1.55V7.04a4.85 4.85 0 01-1.07-.35z" />
      </svg>
    ),
  },
]

export function SocialsSection() {
  return (
    <section className="py-24 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#C9A96E] uppercase tracking-widest mb-3">Réseaux sociaux</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A]">Me suivre</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {socialCards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-[#F5F0EB]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div style={{ color: card.color }}>{card.icon}</div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">{card.name}</p>
                    <p className="text-sm text-[#6B6B6B]">{card.handle}</p>
                  </div>
                </div>
                <p className="text-2xl font-serif font-bold text-[#C9A96E] mb-2">{card.followers}</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">{card.description}</p>
                <span
                  className="inline-block text-sm font-medium px-5 py-2 rounded-full text-white"
                  style={{ backgroundColor: card.color }}
                >
                  Suivre
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2 : Commit**

```bash
git add components/sections/SocialsSection.tsx
git commit -m "feat: SocialsSection — cartes Facebook + TikTok avec stats"
```

---

## Task 9 : TikTokSection

**Files:**
- Create: `components/sections/TikTokSection.tsx`

- [ ] **Step 1 : Créer components/sections/TikTokSection.tsx**

```tsx
// components/sections/TikTokSection.tsx
'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { tiktokVideos } from '@/data/tiktok-videos'
import Link from 'next/link'
import { socials } from '@/lib/socials'

function TikTokEmbed({ url }: { url: string }) {
  useEffect(() => {
    // Charger le script TikTok embed si pas encore chargé
    if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://www.tiktok.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    } else {
      // Si déjà chargé, re-trigger le rendu
      if (typeof (window as any).instgrm !== 'undefined') {
        (window as any).instgrm.Embeds.process()
      }
    }
  }, [])

  return (
    <div className="flex justify-center">
      <blockquote
        className="tiktok-embed rounded-2xl overflow-hidden"
        cite={url}
        data-video-id={url.split('/video/')[1]?.split('?')[0] || ''}
        style={{ maxWidth: '325px', minWidth: '325px' }}
      >
        <section>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            Voir cette vidéo sur TikTok
          </Link>
        </section>
      </blockquote>
    </div>
  )
}

export function TikTokSection() {
  return (
    <section id="videos" className="py-24 bg-[#F5F0EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#C9A96E] uppercase tracking-widest mb-3">TikTok</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Mes dernières vidéos</h2>
          <p className="text-[#6B6B6B]">Retrouvez mes conseils et découvertes en vidéo</p>
        </motion.div>

        {/* Grille vidéos — scroll horizontal sur mobile */}
        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-x-visible snap-x snap-mandatory">
          {tiktokVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="snap-center flex-shrink-0 w-[325px] md:w-auto"
            >
              <TikTokEmbed url={video.url} />
            </motion.div>
          ))}
        </div>

        {/* CTA vers profil TikTok */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href={socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1A1A1A] text-white font-medium px-8 py-4 rounded-full hover:bg-[#C9A96E] transition-colors text-sm uppercase tracking-wide"
          >
            Voir toutes mes vidéos sur TikTok
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2 : Commit**

```bash
git add components/sections/TikTokSection.tsx
git commit -m "feat: TikTokSection — grille vidéos embed + scroll horizontal mobile"
```

---

## Task 10 : ContactSection

**Files:**
- Create: `components/sections/ContactSection.tsx`

- [ ] **Step 1 : Créer components/sections/ContactSection.tsx**

```tsx
// components/sections/ContactSection.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { buildContactWhatsApp, socials } from '@/lib/socials'
import { MessageCircle } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-[#C9A96E] uppercase tracking-widest mb-4">Contact</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Parlons ensemble
          </h2>
          <p className="text-[#6B6B6B] text-lg mb-12 max-w-xl mx-auto">
            Une question sur un produit, un conseil ou simplement envie d&apos;échanger ? 
            Contactez-moi directement sur WhatsApp.
          </p>

          <Link
            href={buildContactWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold px-10 py-5 rounded-full hover:bg-[#1ea855] transition-colors text-lg shadow-lg shadow-[#25D366]/30"
          >
            <MessageCircle size={24} />
            Me contacter sur WhatsApp
          </Link>

          {/* Icônes réseaux */}
          <div className="flex items-center justify-center gap-8 mt-16 pt-12 border-t border-[#F5F0EB]">
            <Link
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6B6B] hover:text-[#1877F2] transition-colors text-sm font-medium"
            >
              Facebook
            </Link>
            <Link
              href={socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors text-sm font-medium"
            >
              TikTok
            </Link>
            <Link
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6B6B] hover:text-[#25D366] transition-colors text-sm font-medium"
            >
              WhatsApp
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2 : Commit**

```bash
git add components/sections/ContactSection.tsx
git commit -m "feat: ContactSection — bouton WhatsApp géant + liens réseaux"
```

---

## Task 11 : Homepage — Assemblage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1 : Assembler app/page.tsx**

```tsx
// app/page.tsx
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SocialsSection } from '@/components/sections/SocialsSection'
import { TikTokSection } from '@/components/sections/TikTokSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SocialsSection />
      <TikTokSection />
      <ContactSection />
    </>
  )
}
```

- [ ] **Step 2 : Vérifier la homepage complète dans le navigateur**

```bash
npm run dev
```

Scroller de haut en bas — toutes les sections doivent s'enchaîner avec les animations fade-in.

- [ ] **Step 3 : Commit**

```bash
git add app/page.tsx
git commit -m "feat: homepage assemblée — 5 sections one-page scroll"
```

---

## Task 12 : Composant ProductCard

**Files:**
- Create: `components/boutique/ProductCard.tsx`

- [ ] **Step 1 : Créer components/boutique/ProductCard.tsx**

```tsx
// components/boutique/ProductCard.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import type { Product } from '@/data/products'
import { buildProductWhatsApp } from '@/lib/socials'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-[#F5F0EB] flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#F5F0EB]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/placeholder.jpg'
          }}
        />
      </div>

      {/* Contenu */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-[#1A1A1A] text-lg mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <p className="font-serif text-xl font-bold text-[#C9A96E]">
            {product.price.toLocaleString('fr-FR')} FCFA
          </p>
          <Link
            href={buildProductWhatsApp(product.name, product.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-[#1ea855] transition-colors"
          >
            <ShoppingBag size={14} />
            Commander
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
```

- [ ] **Step 2 : Commit**

```bash
git add components/boutique/ProductCard.tsx
git commit -m "feat: ProductCard — image, prix FCFA, bouton commande WhatsApp"
```

---

## Task 13 : Composant SearchBar

**Files:**
- Create: `components/boutique/SearchBar.tsx`

- [ ] **Step 1 : Créer components/boutique/SearchBar.tsx**

```tsx
// components/boutique/SearchBar.tsx
'use client'

import { Search } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({ value, onChange, placeholder = 'Rechercher un produit...' }: SearchBarProps) {
  return (
    <div className="relative max-w-md">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 rounded-full border border-[#F5F0EB] bg-white text-[#1A1A1A] placeholder-[#6B6B6B] focus:outline-none focus:border-[#C9A96E] transition-colors text-sm"
      />
    </div>
  )
}
```

- [ ] **Step 2 : Commit**

```bash
git add components/boutique/SearchBar.tsx
git commit -m "feat: SearchBar — input de recherche produits"
```

---

## Task 14 : Composant ProductGrid

**Files:**
- Create: `components/boutique/ProductGrid.tsx`

- [ ] **Step 1 : Créer components/boutique/ProductGrid.tsx**

```tsx
// components/boutique/ProductGrid.tsx
'use client'

import { useState, useMemo } from 'react'
import { products } from '@/data/products'
import { ProductCard } from './ProductCard'
import { SearchBar } from './SearchBar'

export function ProductGrid() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    if (!q) return products
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    )
  }, [search])

  return (
    <div>
      {/* Barre de recherche */}
      <div className="mb-10">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {/* Grille */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-[#6B6B6B] text-lg">Aucun produit trouvé pour &ldquo;{search}&rdquo;</p>
          <button
            onClick={() => setSearch('')}
            className="mt-4 text-[#C9A96E] text-sm hover:underline"
          >
            Effacer la recherche
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 2 : Commit**

```bash
git add components/boutique/ProductGrid.tsx
git commit -m "feat: ProductGrid — grille responsive + filtre recherche client-side"
```

---

## Task 15 : Page Boutique

**Files:**
- Create: `app/boutique/page.tsx`

- [ ] **Step 1 : Créer app/boutique/page.tsx**

```tsx
// app/boutique/page.tsx
import type { Metadata } from 'next'
import { ProductGrid } from '@/components/boutique/ProductGrid'

export const metadata: Metadata = {
  title: 'Boutique — Serigne Bada Kemane',
  description: 'Découvrez les produits de Serigne Bada Kemane — produits intimes et produits pour la réussite. Commande directe via WhatsApp.',
}

export default function BoutiquePage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-[#F5F0EB] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[#C9A96E] uppercase tracking-widest mb-3">Boutique</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-4">
            Nos Produits
          </h1>
          <p className="text-[#6B6B6B] text-lg max-w-xl">
            Sélectionnés avec soin pour votre bien-être, votre réussite et votre épanouissement.
            Commandez directement via WhatsApp.
          </p>
        </div>
      </div>

      {/* Grille produits */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProductGrid />
      </div>
    </div>
  )
}
```

- [ ] **Step 2 : Vérifier la page boutique**

```bash
npm run dev
```

Aller sur `http://localhost:3000/boutique` — la grille de 6 produits placeholder doit s'afficher avec la barre de recherche fonctionnelle.

- [ ] **Step 3 : Tester la recherche**

Taper "huile" dans la barre — seules les cartes contenant "huile" doivent rester.  
Taper "xyz" — le message "Aucun produit trouvé" doit apparaître.

- [ ] **Step 4 : Commit**

```bash
git add app/boutique/page.tsx
git commit -m "feat: page /boutique — header + grille produits + recherche"
```

---

## Task 16 : Build + TypeScript check + Déploiement

**Files:**
- Create: `.gitignore` (si pas déjà créé par create-next-app)

- [ ] **Step 1 : Vérifier TypeScript**

```bash
npx tsc --noEmit
```

Expected : 0 erreurs. Si des erreurs apparaissent, les corriger avant de continuer.

- [ ] **Step 2 : Build de production**

```bash
npm run build
```

Expected : build réussi, 0 erreurs, génération des pages statiques visible dans la sortie.

- [ ] **Step 3 : Créer le repo GitHub**

```bash
# Créer le repo sur GitHub (remplacer YOUR_USERNAME)
gh repo create bada-site-web --public --description "Site web Serigne Bada Kemane — influenceur sénégalais"
git remote add origin https://github.com/YOUR_USERNAME/bada-site-web.git
git branch -M main
git push -u origin main
```

- [ ] **Step 4 : Déployer sur Vercel**

Option A — Via CLI :
```bash
npx vercel --prod
```
Suivre les prompts : lier au projet GitHub, choisir le framework Next.js, laisser les settings par défaut.

Option B — Via interface web :
1. Aller sur https://vercel.com/new
2. Importer le repo GitHub `bada-site-web`
3. Framework preset : Next.js (auto-détecté)
4. Cliquer "Deploy"

- [ ] **Step 5 : Vérifier le déploiement**

Ouvrir l'URL Vercel générée (ex: `https://bada-site-web.vercel.app`).  
Vérifier : homepage, boutique, navigation, responsive mobile.

- [ ] **Step 6 : Mettre à jour CONTEXT.md**

Ajouter dans la section "Journal des modifications" :
```markdown
| 2026-06-16 | Déploiement initial sur Vercel — URL : https://bada-site-web.vercel.app |
```

- [ ] **Step 7 : Commit final**

```bash
git add CONTEXT.md
git commit -m "docs: URL Vercel dans CONTEXT.md"
git push
```

---

## Checklist de recette finale

- [ ] Homepage scroll fluide avec animations fade-in
- [ ] Navbar devient opaque au scroll, menu hamburger sur mobile
- [ ] Section TikTok : les embeds se chargent (nécessite de remplacer les vraies URLs)
- [ ] Section Boutique accessible via `/boutique`
- [ ] Recherche produits fonctionne en temps réel
- [ ] Bouton "Commander" ouvre WhatsApp avec message pré-rempli
- [ ] Bouton "Me contacter" ouvre WhatsApp avec message générique
- [ ] Liens Facebook et TikTok ouvrent dans un nouvel onglet
- [ ] Site responsive sur mobile (375px) et desktop (1440px)
- [ ] Build `npm run build` passe sans erreur
- [ ] `npx tsc --noEmit` passe sans erreur

---

## Contenu à remplacer après livraison

1. **`lib/socials.ts`** — `WHATSAPP_NUMBER` → vrai numéro de Serigne Bada
2. **`data/tiktok-videos.ts`** — remplacer les 6 URLs placeholder par de vraies URLs TikTok
3. **`public/images/hero.jpg`** — photo portrait principale
4. **`public/images/about.jpg`** — photo section About
5. **`data/products.ts`** — vrais produits avec photos, noms, descriptions, prix
6. **`components/sections/AboutSection.tsx`** — texte bio réel + vraies stats abonnés
7. **`components/sections/SocialsSection.tsx`** — vrais nombres d'abonnés
