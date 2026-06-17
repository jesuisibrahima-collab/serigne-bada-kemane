import type { Metadata } from 'next'
import { AProposClient } from '@/components/sections/AProposClient'

export const metadata: Metadata = {
  title: 'À propos — Serigne Bada Kemane',
  description: 'Découvrez Serigne Bada Kemane, influenceur, podcasteur et chroniqueur d\'actualité sénégalaise.',
}

export default function AProposPage() {
  return (
    <main className="pt-24 pb-20 min-h-screen bg-[#FAFAF8]">
      <AProposClient />
    </main>
  )
}
