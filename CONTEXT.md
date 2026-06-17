# CONTEXT.md — Site Web Serigne Bada Kemane

> Ce fichier est mis à jour à chaque modification majeure du projet.
> Il sert de point d'entrée pour toute nouvelle session Claude Code.

---

## Qui est le client ?

**Serigne Bada Kemane** — influenceur, podcasteur et chroniqueur d'actualité sénégalaise

- Il couvre : politique, people, faits divers — regard direct et sans filtre
- Il est **PAS** un marabou ni un guide spirituel
- Facebook : <https://www.facebook.com/share/1ExAXV9KMe/>
- TikTok : <https://www.tiktok.com/@serignebadakeman>
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
| ------- | ------ |
| Framework | Next.js **16.2.9** (App Router) |
| Styling | Tailwind CSS **v4** (CSS-only, pas de tailwind.config.ts) |
| UI components | shadcn/ui style base-nova (@base-ui/react) |
| Langage | TypeScript strict |
| Animations | Framer Motion (whileInView, viewport once) |
| Icônes | lucide-react |
| Hébergement | Vercel — <https://serigne-bada-kemane.vercel.app> |
| Domaine | serignebadakemane.com (DNS LWS → Vercel) |
| Source | GitHub — jesuisibrahima-collab/serigne-bada-kemane |
| Paiement | Aucun — WhatsApp uniquement |
| Langue | Français uniquement |

---

## Design System

| Token | Valeur |
| ----- | ------ |
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
| ----- | ----------- |
| `/` | Homepage one-page scroll : Hero → About → Socials → TikTok → Boutique → Contact |
| `/a-propos` | Page À propos complète : bio, photo, stats, univers, liens réseaux |
| `/videos` | Page Vidéos : grille des 7 TikTok embeds |
| `/boutique` | Page Boutique : 2 produits Trawliss avec commande WhatsApp |
| `/contact` | Page Contact : WhatsApp CTA principal + Facebook + TikTok |

---

## Fichiers clés

| Fichier | Rôle |
| ------- | ---- |
| `data/products.ts` | 2 produits Trawliss (nom, prix, images[]) |
| `data/tiktok-videos.ts` | 7 vraies URLs TikTok de @serignebadakeman |
| `lib/socials.ts` | Liens réseaux + numéro WhatsApp + builders WhatsApp |
| `app/globals.css` | Tailwind v4 design tokens (OKLCH), @theme inline |
| `app/layout.tsx` | Root layout : fonts, Navbar, Footer, WhatsAppButton |
| `app/icon.tsx` | Favicon dynamique rouge "SB" |
| `app/apple-icon.tsx` | Icône Apple touch 180x180 |
| `app/sitemap.ts` | Sitemap XML pour Google |
| `app/robots.ts` | robots.txt |
| `components/layout/Navbar.tsx` | Navbar fixe scroll-aware |
| `components/layout/WhatsAppButton.tsx` | Bouton WhatsApp flottant bas-droite |
| `components/sections/HeroSection.tsx` | Hero split-screen (texte gauche, portrait droite) |
| `components/sections/BoutiqueSection.tsx` | Section produits homepage |
| `components/boutique/ProductCard.tsx` | Carte produit avec double image au hover |

---

## Images disponibles (`public/images/`)

| Fichier | Usage |
| ------- | ----- |
| `bada.jpg` | Portrait Hero section |
| `bada2.jpg` | Photo About + page /a-propos |
| `puissance-sexuel-trawliss.png` | Image principale produit 1 |
| `puissance-sexuel-trawliss 1.png` | Image hover produit 1 |
| `werdeuk-trawliss.png` | Image principale produit 2 |
| `werdeuk-trawliss 1.png` | Image hover produit 2 |
| `placeholder.jpg` | Fallback si image manquante |

---

## Contenu encore à renseigner

- [ ] Descriptions des produits (`data/products.ts`)
- [ ] Prix définitifs des produits (`data/products.ts`)

---

## Déploiement

- GitHub : <https://github.com/jesuisibrahima-collab/serigne-bada-kemane>
- Vercel : <https://serigne-bada-kemane.vercel.app>
- Domaine custom : <https://www.serignebadakemane.com> (DNS configuré sur LWS, propagation en cours)
- CI/CD : chaque `git push main` → déploiement automatique Vercel

### DNS LWS configurés

| Type | Enregistrement | Valeur |
| ---- | -------------- | ------ |
| A | `@` | `216.198.79.1` (Vercel) |
| CNAME | `www` | `ec58ec898278aae2.vercel-dns-017.com.` |

---

## Journal des modifications

| Date | Modification |
| ---- | ------------ |
| 2026-06-16 | Initialisation du projet — spec design validée |
| 2026-06-17 | Implémentation complète — toutes sections homepage |
| 2026-06-17 | Refonte design : Space Grotesk + DM Sans, accent rouge #DC2626 |
| 2026-06-17 | Correction identité : influenceur/podcasteur (pas marabou) |
| 2026-06-17 | 7 vraies URLs TikTok + 2 produits Trawliss avec images hover |
| 2026-06-17 | Hero split-screen, photos réelles bada.jpg + bada2.jpg |
| 2026-06-17 | WhatsApp +221 77 829 3838 configuré |
| 2026-06-17 | 3 nouvelles pages : /videos, /contact, /a-propos |
| 2026-06-17 | Déploiement GitHub + Vercel + domaine serignebadakemane.com |
| 2026-06-17 | SEO complet, favicon SB rouge, sitemap, robots.txt, bouton WhatsApp flottant |
| 2026-06-17 | DNS LWS configurés (A @ → 216.198.79.1 + CNAME www → Vercel) — propagation en cours |
