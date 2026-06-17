# CONTEXT.md — Site Web Serigne Bada Kemane

> Ce fichier est mis à jour à chaque modification majeure du projet.  
> Il sert de point d'entrée pour toute nouvelle session Claude Code.

---

## Qui est le client ?

**Serigne Bada Kemane** — influenceur, podcasteur et chroniqueur d'actualité sénégalaise

- Il couvre : politique, people, faits divers — avec un regard direct et sans filtre
- Il est **PAS** un marabou ni un guide spirituel
- Facebook : https://www.facebook.com/share/1ExAXV9KMe/
- TikTok : https://www.tiktok.com/@serignebadakeman
- WhatsApp : **+221 77 829 3838** (configuré dans `lib/socials.ts`)

Il vend deux produits :

- **Puissance Sexuel Trawliss**
- **Werdeuk Trawliss**

---

## Objectif du site

1. Présenter et valoriser son image (influenceur, podcasteur, chroniqueur)
2. Afficher ses 7 vidéos TikTok en embed direct
3. Lier vers ses réseaux sociaux (Facebook, TikTok)
4. Proposer une boutique avec commande directe via WhatsApp (aucun paiement en ligne)

---

## Stack Technique

| Élément | Valeur |
|---------|--------|
| Framework | Next.js **16.2.9** (App Router) |
| Styling | Tailwind CSS **v4** (CSS-only, pas de tailwind.config.ts) |
| UI components | shadcn/ui style base-nova (@base-ui/react) |
| Langage | TypeScript strict |
| Animations | Framer Motion (whileInView, viewport once) |
| Icônes | lucide-react |
| Hébergement | Vercel (à déployer) |
| Source | GitHub (à pousser) |
| Paiement | Aucun — WhatsApp uniquement |
| Langue | Français uniquement |

---

## Design System

| Token | Valeur |
|-------|--------|
| Fond principal | `#FAFAF8` — blanc cassé chaud |
| Fond secondaire | `#F5F0EB` — beige doux |
| Texte principal | `#1A1A1A` |
| Texte secondaire | `#6B6B6B` |
| Accent rouge | `#DC2626` (énergie média/actualité) |
| Accent hover | `#B91C1C` |
| WhatsApp | `#25D366` |
| Police titres | **Space Grotesk** (`--font-display`) |
| Police corps | **DM Sans** (`--font-sans`) |
| Tokens CSS | `app/globals.css` — @theme inline avec OKLCH |

---

## Structure des pages

| Route | Description |
|-------|-------------|
| `/` | Homepage one-page scroll : Hero → About → Socials → TikTok → Boutique → Contact |
| `/a-propos` | Page À propos complète : bio, photo, stats, univers, liens réseaux |
| `/videos` | Page Vidéos : grille des 7 TikTok embeds |
| `/boutique` | Page Boutique : 2 produits Trawliss avec commande WhatsApp |
| `/contact` | Page Contact : WhatsApp CTA principal + Facebook + TikTok |

---

## Fichiers clés

| Fichier | Rôle |
|---------|------|
| `data/products.ts` | 2 produits Trawliss (nom, prix, images[]) |
| `data/tiktok-videos.ts` | 7 vraies URLs TikTok de @serignebadakeman |
| `lib/socials.ts` | Liens réseaux + numéro WhatsApp + fonctions buildContactWhatsApp / buildProductWhatsApp |
| `lib/utils.ts` | cn() helper + buildWhatsAppUrl() |
| `app/globals.css` | Tailwind v4 design tokens (OKLCH), @theme inline |
| `app/layout.tsx` | Root layout : fonts Space Grotesk + DM Sans, Navbar, Footer |
| `app/page.tsx` | Homepage — assemble les 6 sections |
| `app/boutique/page.tsx` | Page boutique |
| `app/videos/page.tsx` | Page vidéos |
| `app/contact/page.tsx` | Page contact |
| `app/a-propos/page.tsx` | Page à propos |
| `components/layout/Navbar.tsx` | Navbar fixe scroll-aware, liens vers pages dédiées |
| `components/layout/Footer.tsx` | Footer sombre |
| `components/sections/HeroSection.tsx` | Hero split-screen (texte gauche, portrait droite) |
| `components/sections/AboutSection.tsx` | Section À propos homepage |
| `components/sections/SocialsSection.tsx` | Cards Facebook + TikTok |
| `components/sections/TikTokSection.tsx` | Grille embeds TikTok homepage |
| `components/sections/BoutiqueSection.tsx` | Section produits homepage |
| `components/sections/ContactSection.tsx` | Section contact homepage |
| `components/sections/AProposClient.tsx` | Contenu page /a-propos |
| `components/sections/TikTokPageGrid.tsx` | Grille vidéos page /videos |
| `components/sections/ContactPageClient.tsx` | Contenu page /contact |
| `components/boutique/ProductCard.tsx` | Carte produit avec double image hover |
| `components/boutique/ProductGrid.tsx` | Grille filtrée avec SearchBar |
| `components/boutique/SearchBar.tsx` | Barre de recherche produits |

---

## Images disponibles (`public/images/`)

| Fichier | Usage |
| ------- | ----- |
| `bada.jpg` | Portrait Hero section (page d'accueil) |
| `bada2.jpg` | Photo section About + page /a-propos |
| `puissance-sexuel-trawliss.png` | Image principale produit 1 |
| `puissance-sexuel-trawliss 1.png` | Image secondaire produit 1 (effet hover) |
| `werdeuk-trawliss.png` | Image principale produit 2 |
| `werdeuk-trawliss 1.png` | Image secondaire produit 2 (effet hover) |
| `placeholder.jpg` | Fallback si image manquante |

---

## Contenu encore à renseigner

- [ ] Descriptions des produits (dans `data/products.ts`)
- [ ] Prix définitifs des produits (dans `data/products.ts`)

---

## Déploiement (à faire)

1. Créer un repo GitHub → `git remote add origin <url>`
2. `git push -u origin main`
3. Vercel → import du repo GitHub (CI/CD automatique)
4. Chaque `git push` → déploiement automatique sur Vercel
5. Domaine personnalisé à configurer dans les settings Vercel

---

## Journal des modifications

| Date | Modification |
| ---- | ------------ |
| 2026-06-16 | Initialisation du projet — spec design validée |
| 2026-06-17 | Implémentation complète — 16 tasks, toutes sections homepage |
| 2026-06-17 | Refonte design : Space Grotesk + DM Sans, accent rouge #DC2626 (exit or + Playfair) |
| 2026-06-17 | Correction identité : influenceur/podcasteur (pas marabou) |
| 2026-06-17 | 7 vraies URLs TikTok ajoutées |
| 2026-06-17 | 2 vrais produits Trawliss + images double avec effet hover |
| 2026-06-17 | Hero redesigné en split-screen avec portrait de Serigne Bada |
| 2026-06-17 | Section Boutique ajoutée sur la homepage |
| 2026-06-17 | Photos réelles : bada.jpg (hero) + bada2.jpg (about) |
| 2026-06-17 | Vrai numéro WhatsApp : +221 77 829 3838 |
| 2026-06-17 | 3 nouvelles pages : /videos, /contact, /a-propos + navbar mise à jour |
