---
name: palette-rouge
description: A invoquer avant tout travail UI/couleur. Rappelle la regle stricte de la palette rouge du projet.
---

# Palette rouge - regle stricte

En sante, le rouge vif signale l'urgence/danger. Notre marque est rouge, donc on distingue strictement deux usages.

## Couleurs obligatoires

| Role | Token Tailwind | Hex | Usage |
|---|---|---|---|
| **Primaire (marque)** | `primary` / `marque` | `#B91C3C` (cramoisi profond) | Logo, en-tetes, boutons principaux (CTA), liens, accents |
| **Primaire fonce** | `marque-fonce` | `#7F1D2E` (bordeaux) | Survols, textes sur fond clair, degrades |
| **Accent doux** | `accent-rose` | `#F8D7DC` (rose) | Fonds de sections, badges legers, surbrillances |
| **Alerte / danger** | `danger` | `#EF4444` (rouge vif) | **RESERVE** : erreurs, urgences, annulations, suppressions |
| **Succes** | `succes` | `#16A34A` (vert) | Validations, "termine", confirmations |
| **Neutre fond** | `creme` | `#FAF7F5` | Fond de page |
| **Neutre texte** | `anthracite` | `#1F1A1B` | Texte principal |
| **Neutre gris** | `gris` | `#6B6160` | Texte secondaire, bordures |

## REGLE NON NEGOCIABLE

**Ne jamais utiliser `#EF4444` (rouge vif / danger) pour un element non critique.**

- Bouton "Commander" = `bg-marque` (cramoisi #B91C3C)
- Message "Mission annulee" = `text-danger` (rouge vif #EF4444)
- Statut "Terminee" = `text-succes` (vert)
- Statut "En cours" = `text-marque` ou neutre

Cette distinction protege la lisibilite des vraies alertes. Si tout est rouge vif, plus rien n'alerte.

## Formes et style

- Coins arrondis : `rounded-3xl` par defaut sur cartes et boutons importants
- Ombres douces : `shadow-sm` / `shadow-md`, jamais `shadow-2xl` criard
- Typographie : titres en Poppins ou Sora (sans-serif geometrique chaleureux), corps en Inter
- Pas de photos stock : illustrations ou avatars initiales

## Pieges courants

- Utiliser `text-red-500` Tailwind par defaut au lieu du token marque -> INTERDIT
- Mettre un bouton CTA en rouge vif -> INTERDIT (utiliser cramoisi)
- Mettre un message d'erreur en cramoisi -> INTERDIT (utiliser rouge vif)
- Melanger rouge vif et cramoisi cote a cote dans le meme bloc -> INTERDIT

## Verification avant de finir

- [ ] Aucun `#EF4444` sur un element non critique
- [ ] Tous les CTA sont en cramoisi `#B91C3C`
- [ ] Succes en vert, danger en rouge vif uniquement
- [ ] Fond creme, texte anthracite, gris pour secondaire
