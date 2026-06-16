---
name: dispatch-matching
description: A invoquer AVANT de toucher au moteur de matching/dispatch. Definit criteres MVP (broadcast), evite la sur-ingenierie.
---

# Moteur de dispatch / matching

## Principe MVP : broadcast simple

Quand une demande passe en `en_recherche`, on calcule la liste des **candidats** et on leur publie la mission en temps reel via Supabase Realtime. **Premier qui accepte gagne**.

## Criteres candidats (MVP)

Un infirmier est candidat SI :
1. `users.role = 'infirmier'` ET `users.statut = 'approved'`
2. `profils_infirmier.disponible = true`
3. Il possede la `competence_id` de l'acte (jointure `infirmier_competences`)
4. La `zone` de l'adresse est dans `profils_infirmier.zones_intervention[]`
5. Pour creneau planifie : aucun conflit dans `disponibilites` (V2 uniquement)

## Tri

Par **distance** (Haversine sur `derniere_position_lat/lng` de l'infirmier vs `adresses.lat/lng`). Ascendant.

## RPC Postgres recommandee (atomicite acceptation)

```sql
create or replace function public.accepter_demande(p_demande_id uuid)
returns json language plpgsql security definer as $$
declare v_row demandes%rowtype;
begin
  update demandes
    set infirmier_id = auth.uid(),
        statut = 'acceptee',
        acceptee_le = now()
    where id = p_demande_id and statut = 'en_recherche' and infirmier_id is null
    returning * into v_row;
  if not found then
    return json_build_object('ok', false, 'raison', 'deja_prise');
  end if;
  return json_build_object('ok', true, 'demande', row_to_json(v_row));
end; $$;
```

L'UPDATE conditionnel sur `statut='en_recherche' AND infirmier_id IS NULL` garantit qu'un seul infirmier peut accepter, sans verrou explicite.

## Timeout

- Si personne n'accepte sous **10 minutes** (configurable), passage en `aucun_infirmier` -> notification client + remboursement simule.
- Implementer via cron Supabase (`pg_cron`) ou edge function planifiee. MVP : check au load + bouton "Rafraichir".

## A NE PAS FAIRE (sur-ingenierie)

- Pas de score multi-critere pondere pour le MVP
- Pas de file d'attente sequentielle (V2)
- Pas de ML / IA dispatch (Vision)
- Pas de re-attribution auto en cas d'incident (Vision)

## V2 (sequentiel)

Proposition au meilleur candidat avec timeout 60s, puis suivant. Stocker l'historique des propositions dans `propositions_demande`.

## Confidentialite

- L'adresse precise du client n'est revelee a l'infirmier qu'APRES acceptation. Avant : seulement zone et quartier.
- La position infirmier n'est publiee dans `positions` qu'APRES acceptation.

## Checklist

- [ ] Filtrage par competence + dispo + zone + statut approved
- [ ] Tri par distance ascendant
- [ ] RPC `accepter_demande` atomique
- [ ] Aucune fuite d'adresse avant acceptation
- [ ] Realtime subscription cote infirmier scopee a SES candidatures
- [ ] Timeout 10 min -> aucun_infirmier
