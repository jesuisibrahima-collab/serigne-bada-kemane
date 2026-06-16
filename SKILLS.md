# Skills Claude Code — Urgence Mobile

Ce fichier référence tous les skills installés dans ce projet, organisés par catégorie.  
Pour les réinstaller sur un autre projet, copier le dossier `.claude/skills/` à la racine du nouveau projet.

---

## Superpowers (plugin global)

Ces skills viennent du plugin `superpowers-dev` installé globalement dans `~/.claude/plugins/`.

| Skill | Commande | Quand l'utiliser |
|-------|----------|-----------------|
| **using-superpowers** | `/using-superpowers` | Au démarrage de chaque conversation — charge le système de skills |
| **brainstorming** | `/brainstorming` | **Obligatoire** avant tout travail créatif : nouvelles features, composants, comportements |
| **writing-plans** | `/writing-plans` | Avant de toucher au code quand on a un spec ou des requirements multi-étapes |
| **executing-plans** | `/executing-plans` | Quand on a un plan écrit à exécuter (session séparée avec checkpoints) |
| **subagent-driven-development** | `/subagent-driven-development` | Pour exécuter des plans avec tâches indépendantes dans la session courante |
| **systematic-debugging** | `/systematic-debugging` | Dès qu'on rencontre un bug, un test qui échoue, ou un comportement inattendu |
| **test-driven-development** | `/test-driven-development` | Avant d'écrire le code d'implémentation d'une feature ou d'un bugfix |
| **verification-before-completion** | `/verification-before-completion` | Avant de déclarer un travail terminé, avant commit ou PR |
| **requesting-code-review** | `/requesting-code-review` | Après une implémentation majeure ou avant un merge |
| **receiving-code-review** | `/receiving-code-review` | Quand on reçoit des retours de code review |
| **finishing-a-development-branch** | `/finishing-a-development-branch` | Quand l'implémentation est complète et qu'on décide comment intégrer |
| **using-git-worktrees** | `/using-git-worktrees` | Pour isoler une feature dans un worktree git séparé |
| **dispatching-parallel-agents** | `/dispatching-parallel-agents` | Quand 2+ tâches indépendantes peuvent être parallélisées |
| **writing-skills** | `/writing-skills` | Pour créer ou modifier des skills |

---

## Skills Projet — Métier (spécifiques Urgence Mobile)

Ces skills sont dans `.claude/skills/` à la racine du projet.

| Skill | Commande | Quand l'utiliser |
|-------|----------|-----------------|
| **palette-rouge** | `/palette-rouge` | **Avant tout travail UI/couleur** — règle stricte de la palette rouge du projet |
| **creer-page-espace** | `/creer-page-espace` | Quand on crée une page sous `/client/*`, `/infirmier/*`, `/admin/*` |
| **creer-wizard** | `/creer-wizard` | Pour créer un wizard multi-étapes (inscription infirmier, profil, tunnel de commande) |
| **ajouter-acte-catalogue** | `/ajouter-acte-catalogue` | Quand on ajoute/modifie un acte du catalogue de soins (prix, compétence, prescription) |
| **securite-donnees-sante** | `/securite-donnees-sante` | **Avant toute modif** touchant aux données médicales (ordonnances, RLS, uploads sensibles) |
| **dispatch-matching** | `/dispatch-matching` | Avant de toucher au moteur de matching/dispatch — évite la sur-ingénierie |
| **geoloc-temps-reel** | `/geoloc-temps-reel` | Avant de toucher à la géoloc / suivi temps réel (table positions, Realtime) |
| **motion-react** | `/motion-react` | Pour toute animation avec Motion (framer-motion) — spring, scroll, layout, stagger |

---

## Skills Design & UI

| Skill | Commande | Quand l'utiliser |
|-------|----------|-----------------|
| **ui-ux-pro-max** | `/ui-ux-pro-max` | Design UI/UX web et mobile (50+ styles, 161 palettes, 57 font pairings) |
| **ui-styling** | `/ui-styling` | Interfaces avec shadcn/ui + Tailwind — composants accessibles, dark mode, thèmes |
| **taste-skill** | `/taste-skill` | Senior UI/UX Engineer — règles métriques strictes, CSS hardware acceleration |
| **redesign-skill** | `/redesign-skill` | Améliorer un design existant vers un niveau premium |
| **design** | `/design` | Identité visuelle complète : logo, CIP, bannières, icônes, photos social media |
| **design-system** | `/design-system` | Architecture de tokens (primitive→semantic→component), CSS variables, specs composants |
| **banner-design** | `/banner-design` | Bannières social media, ads, heroes — 22 styles, multi-plateforme |
| **brand** | `/brand` | Voix de marque, identité visuelle, messaging frameworks, cohérence de marque |
| **slides** | `/slides` | Présentations HTML stratégiques avec Chart.js, design tokens, layouts responsives |

---

## Commandes intégrées Claude Code (pas des skills)

Ces commandes sont natives à Claude Code, pas à installer :

| Commande | Description |
|----------|-------------|
| `/code-review` | Review du diff courant (niveaux : low/medium/high/max/ultra) |
| `/code-review ultra` | Review multi-agents cloud sur la branche courante |
| `/simplify` | Nettoyage du code modifié (réutilisation, simplicité, efficacité) |
| `/verify` | Vérifie qu'un changement fonctionne en lançant l'app |
| `/run` | Lance l'app du projet |
| `/schedule` | Planifie des agents cloud sur un cron |
| `/loop` | Relance une commande à intervalle récurrent |
| `/init` | Initialise Claude Code dans un nouveau projet |

---

## Comment réinstaller les skills projet sur un autre projet

```bash
# Depuis la racine du nouveau projet
cp -r /Users/layepro/Desktop/travail/urgence\ mobile\ pr/urgence\ mobile/.claude/skills/ .claude/skills/
```

Le plugin superpowers est global (`~/.claude/plugins/`) — il est déjà disponible sur tous les projets.

---

*Mis à jour le 2026-06-16*
