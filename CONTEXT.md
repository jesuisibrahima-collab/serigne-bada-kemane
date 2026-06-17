# CONTEXT.md — Site Web Serigne Bada Kemane

> Ce fichier est mis à jour à chaque modification majeure du projet.  
> Il sert de point d'entrée pour toute nouvelle session Claude Code.

---

## Qui est le client ?

**Serigne Bada Kemane** — influenceur sénégalais  
- Facebook : https://www.facebook.com/share/1ExAXV9KMe/
- TikTok : https://www.tiktok.com/@serignebadakeman
- WhatsApp : *(numéro à configurer dans `lib/socials.ts`)*

Il vend deux types de produits :
- Produits intimes
- Produits pour la réussite & chance

---

## Objectif du site

1. Le présenter et valoriser son image (influenceur lifestyle)
2. Afficher ses vidéos TikTok en embed
3. Lier vers ses réseaux sociaux (Facebook, TikTok)
4. Proposer une boutique de produits avec commande directe via WhatsApp

---

## Stack Technique

| Élément | Valeur |
|---------|--------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + shadcn/ui |
| Langage | TypeScript |
| Animations | Framer Motion |
| Hébergement | Vercel |
| Source | GitHub |
| Paiement | Aucun — WhatsApp uniquement |
| Langue | Français uniquement |

---

## Structure des pages

| Route | Description |
|-------|-------------|
| `/` | Homepage one-page scroll (Hero → About → Socials → TikTok → Contact) |
| `/boutique` | Page boutique séparée avec grille de produits |

---

## Design System

| Token | Valeur |
|-------|--------|
| Fond principal | `#FAFAF8` — blanc cassé chaud |
| Fond secondaire | `#F5F0EB` — beige doux |
| Texte principal | `#1A1A1A` |
| Texte secondaire | `#6B6B6B` |
| Accent (or) | `#C9A96E` |
| WhatsApp | `#25D366` |
| Police titres | Playfair Display |
| Police corps | Inter |

---

## Fichiers clés à connaître

| Fichier | Rôle |
|---------|------|
| `data/products.ts` | Catalogue produits (placeholder → à remplacer par le client) |
| `data/tiktok-videos.ts` | URLs des 6 vidéos TikTok à afficher |
| `lib/socials.ts` | Liens réseaux sociaux + numéro WhatsApp |
| `app/page.tsx` | Homepage |
| `app/boutique/page.tsx` | Page boutique |
| `components/sections/` | Sections de la homepage |
| `components/boutique/` | Composants boutique |

---

## Contenu à remplacer par le client

- [ ] Photos de Serigne Bada (dans `public/images/`)
- [ ] Texte de présentation (section About)
- [ ] Accroche hero
- [ ] Numéro WhatsApp (dans `lib/socials.ts`)
- [ ] Produits réels (dans `data/products.ts`) : nom, prix, photo, description
- [ ] URLs des vidéos TikTok (dans `data/tiktok-videos.ts`)
- [ ] Statistiques réseaux sociaux (nb abonnés, dans `components/sections/SocialsSection.tsx`)

---

## Déploiement

1. GitHub repo → push du code
2. Vercel → import du repo GitHub (CI/CD automatique)
3. Chaque `git push` → déploiement automatique sur Vercel
4. Domaine personnalisé à configurer dans les settings Vercel

---

## Spec design complète

`docs/superpowers/specs/2026-06-16-serigne-bada-site-design.md`

---

## Journal des modifications

| Date | Modification |
| --- | --- |
| 2026-06-16 | Initialisation du projet — spec design validée, CONTEXT.md créé |
| 2026-06-17 | Implémentation complète — 16 tasks, site prêt au déploiement |
