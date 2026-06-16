---
name: creer-page-espace
description: A invoquer quand on cree une page sous /client/*, /infirmier/*, /admin/*. Garantit placement, navigation par role, protection middleware + RLS.
---

# Creer une page d'espace par role

## Arborescence imposee

```
src/app/
  (public)/              -> landing, /nos-soins, /faq, etc. (pas d'auth)
  (auth)/                -> /connexion, /inscription-*
  client/                -> espace client (role=client)
    layout.tsx           -> protege par middleware
    page.tsx             -> accueil client
    commander/
    suivi/[id]/
    historique/
    profil/
  infirmier/             -> espace infirmier (role=infirmier, statut=approved)
    layout.tsx
    page.tsx
    missions/
    gains/
  admin/                 -> back-office (role=admin)
    layout.tsx
    page.tsx
    infirmiers/
    actes/
    demandes/
```

## Protection

1. **Middleware** (`src/middleware.ts`) : redirige `/connexion` si pas de session.
2. **Layout par espace** : verifie `users.role` cote serveur ; redirige si mismatch.
3. **RLS** : reste la verite ultime (le client ne lit jamais que ses donnees).
4. **Infirmier pending** : layout `/infirmier` redirige vers une page "En attente de validation" tant que `statut != 'approved'`.

## Exemple layout serveur

```tsx
// src/app/client/layout.tsx
import { redirect } from 'next/navigation'
import { getServerUser } from '@/lib/auth/server'

export default async function ClientLayout({ children }: { children: React.ReactNode }) {
  const user = await getServerUser()
  if (!user) redirect('/connexion')
  if (user.role !== 'client') redirect('/')
  return <div className="min-h-screen bg-creme">{children}</div>
}
```

## Navigation

- Chaque espace a son propre header avec menu specifique au role.
- Pas de melange de navigations (client ne voit jamais le menu admin).
- Bouton "Se deconnecter" toujours present.

## Checklist

- [ ] Page placee dans le bon dossier de role
- [ ] Layout du dossier protege par redirection serveur
- [ ] RLS Supabase coherente avec la page
- [ ] Menu de navigation specifique au role
- [ ] Etat vide gere (pas de donnees -> message rassurant)
- [ ] Loading state (Suspense ou skeleton)
- [ ] Mobile responsive
