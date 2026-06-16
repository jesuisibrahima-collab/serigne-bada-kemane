---
name: creer-wizard
description: A invoquer pour creer un wizard multi-etapes (inscription infirmier, profil, tunnel de commande). Pattern Stepper + RHF + Zod + sauvegarde brouillon.
---

# Wizard multi-etapes

## Stack

- **React Hook Form** + **Zod** pour validation par etape
- **Stepper visuel** en haut (progression)
- **Sauvegarde brouillon** en localStorage (cle: `brouillon_<wizard>`) + restauration au montage
- **Navigation** : Precedent / Suivant, le Suivant valide l'etape courante avant de passer

## Structure

```tsx
// src/components/wizard/Wizard.tsx
type Etape<T> = {
  id: string
  titre: string
  schema: ZodSchema
  Component: React.FC<{ form: UseFormReturn<T> }>
}

// Hook reutilisable
function useWizard<T>(etapes: Etape<T>[], brouillonKey: string) { ... }
```

## Wizards prevus

1. **Inscription infirmier** (5 etapes)
   1. Identite (nom, email, telephone, mdp)
   2. Diplome (numero ordre ONIIS, upload diplome)
   3. Zones d'intervention (multiselect zones 1-6) + competences (actes maitrises)
   4. Pieces (CNI, assurance RC pro)
   5. Recap + consentement + soumission

2. **Tunnel de commande client** (7 etapes - voir Section 7 du cahier)
   1. Choix acte
   2. Ordonnance (si requise)
   3. Beneficiaire
   4. Creneau
   5. Adresse
   6. Recap
   7. Paiement

## Regles

- **Validation par etape** : on ne passe pas tant que le schema Zod de l'etape echoue
- **Sauvegarde a chaque changement** d'etape (debounce 500ms ou onBlur)
- **Restauration** au montage : si brouillon present, demander "Reprendre ou recommencer"
- **Etat global** : un seul `useForm` parent, schemas partiels par etape via `form.trigger(['champ1','champ2'])`
- **Mobile-first** : une etape = un ecran (pas de scroll infini)
- **Bouton retour** preserve les donnees deja saisies

## Stepper visuel

- Cramoisi `#B91C3C` pour etape active et terminees
- Gris pour etapes a venir
- Clic sur une etape precedente = retour autorise

## Checklist

- [ ] Schema Zod par etape + schema global pour soumission
- [ ] Sauvegarde brouillon localStorage
- [ ] Stepper accessible (aria-current="step")
- [ ] Bouton Suivant desactive tant que `form.trigger()` echoue
- [ ] Mobile : un seul champ visible par etape si possible
- [ ] Recap final clair avant soumission
