# Spec Design — Site Web Serigne Bada Kemane
**Date :** 2026-06-16  
**Statut :** Approuvé

---

## 1. Contexte & Objectif

Serigne Bada Kemane est un influenceur sénégalais actif sur Facebook et TikTok. Le site doit :
- Le présenter et mettre en valeur son image personnelle
- Afficher ses réseaux sociaux (Facebook, TikTok) avec vidéos embarquées
- Proposer une boutique de produits (produits intimes + réussite & chance) avec commande via WhatsApp
- Être déployé sur GitHub + Vercel

**Langue :** Français uniquement  
**Audience principale :** Communauté sénégalaise francophone (Sénégal + diaspora)

---

## 2. Stack Technique

| Élément | Choix |
|---------|-------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + shadcn/ui |
| Langage | TypeScript |
| Animations | Framer Motion |
| Hébergement | Vercel |
| Source | GitHub |
| Paiement | Aucun — commande via WhatsApp |

---

## 3. Architecture des Fichiers

```
bada-site-web/
├── app/
│   ├── page.tsx                    # Homepage one-page scroll
│   ├── boutique/
│   │   └── page.tsx                # Page boutique séparée
│   ├── layout.tsx                  # Layout global (Navbar + Footer)
│   └── globals.css                 # Variables CSS + reset
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Navigation fixe
│   │   └── Footer.tsx              # Pied de page
│   ├── sections/                   # Sections homepage
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SocialsSection.tsx
│   │   ├── TikTokSection.tsx
│   │   └── ContactSection.tsx
│   ├── boutique/
│   │   ├── ProductGrid.tsx
│   │   └── ProductCard.tsx
│   └── ui/                         # shadcn components
├── data/
│   └── products.ts                 # Données produits (placeholder → réel)
├── lib/
│   └── utils.ts                    # Helpers (cn, whatsapp-link, etc.)
├── public/
│   └── images/
└── CONTEXT.md                      # Documentation projet (mis à jour à chaque modif)
```

---

## 4. Pages & Sections

### 4.1 Homepage (`/`) — one-page scroll

**Navbar fixe**
- Logo/nom "Serigne Bada Kemane" (gauche)
- Liens ancres : À propos · Vidéos · Contact
- Bouton CTA "Boutique" (droite, accent or)

**HeroSection**
- Image plein écran (photo portrait de Serigne Bada)
- Overlay blanc subtil (30% opacité)
- Nom en grand (Playfair Display, 64px+)
- Accroche courte (ex : "Influenceur · Conseiller · Guide spirituel")
- 2 boutons CTA : "Découvrir la boutique" + "Me contacter sur WhatsApp"

**AboutSection**
- Photo + bloc texte de présentation
- 3 badges statistiques : Abonnés Facebook · Abonnés TikTok · Années d'activité
- Fond beige (#F5F0EB)

**SocialsSection**
- 2 cartes côte à côte : Facebook + TikTok
- Icône réseau + nb abonnés + bouton "Suivre" → lien externe
- Fond blanc

**TikTokSection**
- Titre "Mes dernières vidéos"
- Grille 3 colonnes (desktop) → scroll horizontal (mobile)
- Vidéos TikTok embarquées via `<blockquote>` + script oEmbed
- 6 vidéos sélectionnées manuellement (URLs TikTok en dur dans un fichier data)

**ContactSection**
- Grand bouton WhatsApp vert (#25D366)
- Message pré-rempli : "Bonjour Serigne Bada, je vous contacte depuis votre site..."
- Icônes réseaux sociaux (Facebook, TikTok)

**Footer**
- © 2026 Serigne Bada Kemane
- Liens : Mentions légales · Contact

### 4.2 Boutique (`/boutique`)

- Header : titre "La Boutique" + sous-titre + barre de recherche (filtre client-side)
- Grille produits : 3 colonnes desktop · 2 tablette · 1 mobile
- Chaque ProductCard :
  - Photo produit (placeholder → remplacer)
  - Nom du produit
  - Description courte (2 lignes, truncate)
  - Prix en FCFA
  - Bouton "Commander sur WhatsApp" → lien WhatsApp avec nom du produit pré-rempli
- Données dans `data/products.ts` (tableau TypeScript, facile à éditer)

---

## 5. Design System

### Couleurs
```css
--color-bg-primary:    #FAFAF8;   /* Fond principal — blanc cassé chaud */
--color-bg-secondary:  #F5F0EB;   /* Fond secondaire — beige doux */
--color-text-primary:  #1A1A1A;   /* Texte principal */
--color-text-muted:    #6B6B6B;   /* Texte secondaire */
--color-accent:        #C9A96E;   /* Or lifestyle — CTA, accents */
--color-whatsapp:      #25D366;   /* Bouton commande */
```

### Typographie
```
Titres  → Playfair Display (Google Fonts) — serif élégant, vibe premium
Corps   → Inter (Google Fonts) — lisible, moderne
```

### Conventions UI
- Coins arrondis : `rounded-2xl` (cartes, boutons)
- Ombres : `shadow-sm` (légères, pas lourdes)
- Images : `object-cover` avec aspect-ratio fixe
- Espacement : sections généreuses (`py-20` minimum)
- Animations : fade-in au scroll (Framer Motion `whileInView`)
- Mobile-first : breakpoints Tailwind (sm · md · lg · xl)

---

## 6. Données & Contenu

### Produits (placeholder)
```ts
// data/products.ts
export const products = [
  { id: 1, name: "Produit à nommer", price: 15000, image: "/images/placeholder.jpg", description: "Description à remplir par le client." },
  // → Le client remplace avec ses vrais produits
]
```

### Vidéos TikTok
```ts
// data/tiktok-videos.ts
export const tiktokVideos = [
  { id: "video-1", url: "https://www.tiktok.com/@serignebadakeman/video/XXX" },
  // → 6 URLs de vidéos TikTok choisies
]
```

### Liens réseaux sociaux
```ts
// lib/socials.ts
export const socials = {
  facebook: "https://www.facebook.com/share/1ExAXV9KMe/",
  tiktok: "https://www.tiktok.com/@serignebadakeman",
  whatsapp: "https://wa.me/NUMERO_A_REMPLACER",
}
```

---

## 7. Déploiement

1. Repo GitHub créé et pushé
2. Projet connecté à Vercel (import GitHub)
3. CI/CD automatique : chaque push → déploiement Vercel
4. Domaine personnalisé à configurer sur Vercel (optionnel)

---

## 8. Ce qui est hors scope (v1)

- Authentification / espace client
- Panier d'achat / paiement en ligne
- Blog / actualités
- Système de catégories boutique
- API TikTok dynamique (les vidéos sont sélectionnées manuellement)
- Multilingue (Wolof, Anglais)
