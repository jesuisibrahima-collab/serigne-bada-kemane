import type { Metadata } from 'next'
import { AProposClient } from '@/components/sections/AProposClient'

export const metadata: Metadata = {
  title: 'À propos',
  description: "Découvrez Serigne Bada Kemane : influenceur, podcasteur et chroniqueur d'actualité sénégalaise avec plus de 8 ans d'activité et 700 000 abonnés.",
  alternates: { canonical: 'https://www.serignebadakemane.com/a-propos' },
  openGraph: {
    title: 'À propos — Serigne Bada Kemane',
    description: "Influenceur et podcasteur sénégalais — 8 ans d'activité, 700K abonnés.",
    images: [{ url: '/images/bada2.jpg', alt: 'Serigne Bada Kemane' }],
  },
}

export default function AProposPage() {
  return (
    <main className="pt-24 pb-20 min-h-screen bg-[#FAFAF8]">
      <AProposClient />
    </main>
  )
}
