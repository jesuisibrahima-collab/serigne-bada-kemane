---
name: securite-donnees-sante
description: A invoquer AVANT toute modif touchant aux donnees medicales (ordonnances, observations, notes beneficiaire, constantes, uploads sensibles, RLS).
---

# Securite des donnees de sante

Donnees medicales = isolation maximale. Non negociable.

## Donnees considerees medicales (sensibles)

- `comptes_rendus.observations`
- `comptes_rendus.recommandations`
- `beneficiaires.notes_medicales`
- `constantes.*` (tension, glycemie, etc.)
- `demandes.ordonnance_url` (upload)
- Tout fichier uploade dans le bucket `ordonnances` ou `comptes-rendus`

## Regles non negociables

1. **RLS activee** sur TOUTES les tables ci-dessus. Jamais de table sensible sans policy.
2. **Acces conditionne au statut** : un infirmier `pending` ne lit RIEN de medical.
3. **Acces conditionne a la mission active** : un infirmier ne lit le medical d'un dossier QUE si `demandes.infirmier_id = lui` ET statut in (`acceptee`, `en_route`, `arrive`, `en_cours`).
4. **Apres `termine`** : l'infirmier garde l'historique de SES interventions, mais ne peut plus lire les nouvelles donnees.
5. **Client** : ne lit/ecrit QUE ses propres donnees (`auth.uid() = client_id`).
6. **Jamais de cle API en front**. Toujours server actions ou route handlers pour les operations sensibles.
7. **Jamais logger de contenu medical**. ID OK, contenu NON. Pas dans `console.log`, pas dans Sentry, pas dans audit_log (metadata sans contenu).
8. **Consentement explicite** au traitement des donnees de sante a l'inscription (table `consentements`).
9. **Storage Supabase** : buckets prives, signed URLs courtes (expiry < 10 min), jamais public.

## Helper RLS

```sql
-- A creer en SECURITY DEFINER pour eviter recursion RLS
create or replace function public.is_admin()
returns boolean language sql stable security definer as $$
  select exists (select 1 from public.users where id = auth.uid() and role = 'admin');
$$;

create or replace function public.infirmier_a_acces_demande(p_demande_id uuid)
returns boolean language sql stable security definer as $$
  select exists (
    select 1 from public.demandes
    where id = p_demande_id
      and infirmier_id = auth.uid()
      and statut in ('acceptee','en_route','arrive','en_cours','termine')
  );
$$;
```

## Checklist avant commit

- [ ] RLS activee sur la table touchee (`alter table X enable row level security;`)
- [ ] Policy SELECT/INSERT/UPDATE/DELETE explicite par role
- [ ] Aucun `console.log(observations)` ou equivalent
- [ ] Audit_log n'embarque PAS le contenu medical (juste IDs)
- [ ] Upload : bucket prive + signed URL
- [ ] Test : un infirmier non assigne ne peut PAS lire la donnee

## Reglementaire Senegal

- Conformite **CDP** (Commission de Protection des Donnees Personnelles)
- Consentement explicite stocke (date, type)
- Droit a l'effacement : prevoir purge logique + delai legal
