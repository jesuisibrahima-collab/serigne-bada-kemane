---
name: geoloc-temps-reel
description: A invoquer AVANT de toucher a la geoloc / au suivi temps reel (table positions, Realtime, partage de position).
---

# Geolocalisation et suivi temps reel

## Stack

- `navigator.geolocation` cote client (commande + partage infirmier)
- **Leaflet + OpenStreetMap** (gratuit, MVP) ; option Google Maps plus tard
- Table `positions` + Supabase Realtime (publication via `alter publication supabase_realtime add table positions`)

## Frequence de publication

- Pendant mission active : insertion dans `positions` **toutes les ~25 secondes** (configurable).
- Pas plus rapide (consommation batterie + cout DB).
- Cote client : abonnement Realtime, derniere position rendue sur la carte.

## Confidentialite (NON NEGOCIABLE)

1. Partage de position **infirmier** actif UNIQUEMENT pendant `acceptee | en_route | arrive | en_cours`.
2. ArrEt automatique a `termine | annulee_*`.
3. Adresse precise du **client** revelee a l'infirmier UNIQUEMENT apres acceptation (avant : zone/quartier).
4. Aucune position stockee si pas de mission active.

## Detection automatique de zone (1-6)

Polygones simplifies par zone Dakar (Plateau, Almadies, Parcelles, etc.). Fonction utilitaire :

```ts
// src/lib/geo/zones.ts
export function detecterZone(lat: number, lng: number): 1|2|3|4|5|6 {
  // point-in-polygon avec polygones stockes en const
}
```

Polygones definis dans `src/lib/geo/polygones-dakar.ts` (a iterer).

## Calcul distance (Haversine)

```ts
export function distanceKm(a: LatLng, b: LatLng): number {
  const R = 6371
  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const x = Math.sin(dLat/2)**2 + Math.cos(toRad(a.lat))*Math.cos(toRad(b.lat))*Math.sin(dLng/2)**2
  return 2 * R * Math.asin(Math.sqrt(x))
}
```

## ETA simple (MVP)

- Vitesse moyenne urbaine Dakar : **22 km/h**
- ETA = distance / 22 * 60 (minutes)
- V2 : appel API routing (OSRM ou Google Directions)

## Carte Leaflet (Next.js)

- Composant client uniquement (`'use client'`)
- **Dynamic import sans SSR** : `dynamic(() => import('./CarteSuivi'), { ssr: false })`
- Marqueurs : domicile client (cramoisi), infirmier (animation pulse)

## Hook recommande

```ts
// src/hooks/usePositionTempsReel.ts
export function usePositionTempsReel(demandeId: string) {
  const [position, setPosition] = useState<LatLng | null>(null)
  useEffect(() => {
    const ch = supabase.channel(`pos:${demandeId}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'positions', filter: `demande_id=eq.${demandeId}` },
        (payload) => setPosition({ lat: payload.new.lat, lng: payload.new.lng }))
      .subscribe()
    return () => { supabase.removeChannel(ch) }
  }, [demandeId])
  return position
}
```

## Checklist

- [ ] Frequence ~25s, pas plus
- [ ] Partage actif uniquement durant mission acceptee
- [ ] Adresse client cachee avant acceptation
- [ ] Leaflet en client-only (no SSR)
- [ ] Permission geoloc demandee proprement (message en francais)
- [ ] Fallback : si permission refusee, saisie manuelle de l'adresse + pin ajustable
- [ ] Zone (1-6) detectee automatiquement, modifiable manuellement
