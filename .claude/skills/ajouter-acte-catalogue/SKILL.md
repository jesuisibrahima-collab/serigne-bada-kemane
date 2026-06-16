---
name: ajouter-acte-catalogue
description: A invoquer quand on ajoute/modifie un acte du catalogue de soins. Couvre prix, competence associee, flag prescription, impact dispatch.
---

# Ajouter / modifier un acte du catalogue

## Schema table `actes`

```ts
type Acte = {
  id: string            // uuid
  nom: string           // ex. "Injection intramusculaire"
  categorie: string     // Injections | Prelevements | Pansements | Perfusions | Soins | Dependance | Suivi
  description: string   // affichage fiche
  prix: number          // FCFA, entier
  duree_estimee_min: number
  prescription_requise: boolean
  competence_id: string // FK competences
  actif: boolean        // peut etre desactive sans suppression
  image_url: string | null
}
```

## Avant d'ajouter

1. **Identifier la competence** associee (Injections, Pansements, Perfusions, ...). Creer la competence si elle manque.
2. **Verifier prescription_requise** : si oui, le tunnel impose l'upload d'ordonnance.
3. **Verifier zone de prix** : coherent avec les autres actes de la categorie.
4. **Mapping dispatch** : seul un infirmier ayant la competence dans `infirmier_competences` sera candidat.

## Impact dispatch

- L'ajout d'un acte avec une nouvelle competence rend cet acte **indisponible** tant qu'aucun infirmier n'a la competence.
- Prevoir un message d'etat vide cote client : "Acte temporairement indisponible dans votre zone".

## Categories existantes (cahier Section 6)

Injections, Prelevements, Pansements, Perfusions, Soins, Dependance, Suivi.

## Checklist

- [ ] Categorie connue ou ajoutee a la liste
- [ ] Competence existe en base
- [ ] Prix coherent avec la categorie
- [ ] `prescription_requise` correctement positionne
- [ ] Image (illustration, pas photo stock)
- [ ] `actif` = true par defaut
- [ ] Au moins un infirmier seed a la competence (sinon tests cassent)
- [ ] Migration idempotente (`on conflict do nothing` sur seed)
