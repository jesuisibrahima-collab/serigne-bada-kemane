---
name: motion-react
description: A invoquer pour toute animation avec Motion (anciennement framer-motion). Couvre spring physics, scroll, layout, stagger, AnimatePresence, et anti-patterns perf.
---

# Motion for React - patterns

> **Note** : on utilise actuellement le package `framer-motion` dans le projet. Motion (`motion` package) est le successeur. Pour migrer : `npm uninstall framer-motion && npm install motion`, puis changer les imports `from 'framer-motion'` -> `from 'motion/react'`. Sinon, framer-motion fonctionne, les memes APIs.

## API essentielle

```tsx
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, animate } from 'framer-motion'
// ou 'motion/react' apres migration
```

## Pattern 1 : Apparition au scroll (whileInView)

Defaut a utiliser **partout** ou un element entre dans le viewport.

```tsx
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-60px' }}
  transition={{ type: 'spring', stiffness: 100, damping: 22 }}
>
```

- **`once: true`** = ne pas re-animer en sortant/rentrant (sauf cas precis : compteurs animes, etc.)
- **`margin: '-60px'`** = declenche un peu avant que l'element soit pleinement visible. Pour des etoiles tres en bas du viewport on peut mettre `'-20px'`.
- **Pas de `delay` arbitraire**. Si tu staggers, utilise `delay: index * 0.05` avec `Math.min(index * 0.05, 0.3)` pour eviter une cascade trop longue.

## Pattern 2 : Spring physics (presque toujours)

**Bannir les `ease: 'linear'`** sur les interactions UI. Spring physics donne un toucher "vivant".

```tsx
transition={{ type: 'spring', stiffness: 100, damping: 22 }}
```

Reference :
| Effet | stiffness | damping |
|---|---|---|
| Doux / lent | 70 | 18 |
| Defaut UI | 100-110 | 20-22 |
| Snappy / tonique | 130 | 18 |
| Bouncy (logo, succes) | 120 | 14 |

Pour les **transitions de page / scroll**, prefere `ease: [0.16, 1, 0.3, 1]` (cubic-bezier de notre token `ease-ressort`) qui est plus controle.

## Pattern 3 : Stagger orchestration

Pour une liste qui s'anime element par element.

```tsx
<motion.ul
  initial="cache"
  whileInView="visible"
  viewport={{ once: true, margin: '-60px' }}
  variants={{
    cache: {},
    visible: { transition: { staggerChildren: 0.06 } },
  }}
>
  {items.map((item) => (
    <motion.li
      key={item.id}
      variants={{
        cache: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {item.content}
    </motion.li>
  ))}
</motion.ul>
```

**CRITIQUE** : le parent et les enfants doivent etre dans le **meme arbre Client Component**. Si les enfants viennent d'un Server Component asynchrone, passe-les en props a un wrapper Client.

## Pattern 4 : AnimatePresence (entree/sortie)

Pour les modales, toasts, alertes conditionnelles, items supprimes d'une liste.

```tsx
<AnimatePresence mode="wait">
  {visible && (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 110, damping: 22 }}
    />
  )}
</AnimatePresence>
```

- **`mode="wait"`** = la sortie finit avant que l'entree commence (utile pour fade between).
- **Cle obligatoire** sur les enfants conditionnels.

## Pattern 5 : Layout animations (auto-FLIP)

Pour reordonner / resize / partager un element entre deux positions.

```tsx
{items.map((item) => (
  <motion.div
    key={item.id}
    layout
    transition={{ type: 'spring', stiffness: 110, damping: 22 }}
  >
    {item.content}
  </motion.div>
))}
```

**`layoutId`** = partage entre deux positions/contextes :

```tsx
{actif && <motion.span layoutId="indicateur-onglet" />}
```

Utile pour : bouton onglet selectionne, item d'une liste qui s'ouvre en modale plein ecran.

## Pattern 6 : Scroll-tied animations (sans useEffect scroll listener)

```tsx
const ref = useRef(null)
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ['start end', 'end start'],
})
const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
const y = useTransform(scrollYProgress, [0, 1], [50, -50])

return <motion.div ref={ref} style={{ opacity, y }} />
```

**NE JAMAIS** utiliser `window.addEventListener('scroll')` pour driver des animations - cause des reflows et un jank perceptible. `useScroll` est optimise via `requestAnimationFrame`.

## Pattern 7 : Compteurs animes (hors render cycle)

```tsx
const ref = useRef(null)
const enVue = useInView(ref, { once: true, margin: '-60px' })
const motionVal = useMotionValue(0)
const rendu = useTransform(motionVal, (v) => v.toFixed(0))
const [valeur, setValeur] = useState('0')

useEffect(() => {
  return rendu.on('change', setValeur)
}, [rendu])

useEffect(() => {
  if (enVue) {
    const controls = animate(motionVal, valeurFinale, { duration: 1.6 })
    return controls.stop
  }
}, [enVue, valeurFinale, motionVal])

return <span ref={ref}>{valeur}</span>
```

**CRITIQUE perf** : `useMotionValue` est **hors React render cycle** - 60fps garantis meme avec des centaines d'updates/seconde. Ne jamais appeler `setState` dans une boucle d'animation.

## Pattern 8 : Magnetic / hover tracking

Pour un bouton qui suit subtilement la souris.

```tsx
const x = useMotionValue(0)
const y = useMotionValue(0)
const ressortX = useSpring(x, { stiffness: 200, damping: 20 })
const ressortY = useSpring(y, { stiffness: 200, damping: 20 })

return (
  <motion.button
    onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      x.set((e.clientX - rect.left - rect.width / 2) * 0.3)
      y.set((e.clientY - rect.top - rect.height / 2) * 0.3)
    }}
    onMouseLeave={() => { x.set(0); y.set(0) }}
    style={{ x: ressortX, y: ressortY }}
  />
)
```

**Pas de `useState`** pour la position : sinon re-render a 60fps = mort.

## Anti-patterns (a bannir)

1. **Animer `top`, `left`, `width`, `height`** -> reflow continu. Utilise `transform` (`x`, `y`, `scale`) et `opacity` uniquement.
2. **`scroll listener` + `setState`** -> jank garanti. Utilise `useScroll`.
3. **`whileInView` sans `once: true`** -> re-animation a chaque scroll up/down sauf cas precis.
4. **Spring physics sur les transitions de page entiere** -> ressort = imprevisible sur duree variable. Prefere ease cubic-bezier.
5. **`AnimatePresence` sans key sur les enfants conditionnels** -> exit ne se declenche pas.
6. **Stagger children sans variants** -> les enfants doivent avoir des variants nommees correspondant a celles du parent.
7. **`layout` sur 50 enfants simultanes** -> calcul FLIP couteux. Limiter aux cas vraiment necessaires.

## Server vs Client Components (Next.js App Router)

- Toute utilisation de `motion`, `useScroll`, `useMotionValue`, `AnimatePresence` impose **`'use client'`** en haut du fichier.
- Isole les composants animes en **leaf components** : un parent Server Component peut rendre un enfant Client anime via props.

## Verification avant commit

- [ ] Pas de `top/left/width/height` anime
- [ ] Pas de `addEventListener('scroll')` pour animation
- [ ] `whileInView` avec `once: true` sauf cas explicite
- [ ] Spring physics sur interactions UI (pas linear)
- [ ] Stagger : parent + enfants dans le meme arbre Client
- [ ] `AnimatePresence` : key obligatoire + `exit` defini
- [ ] Compteurs / scroll-tied : pas de setState dans la boucle
