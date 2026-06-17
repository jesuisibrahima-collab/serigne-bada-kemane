import type { Metadata } from 'next'
import { TikTokPageGrid } from '@/components/sections/TikTokPageGrid'

export const metadata: Metadata = {
  title: 'Vidéos',
  description: "Regardez les podcasts, chroniques et réactions de Serigne Bada Kemane sur l'actualité sénégalaise — politique, people, faits divers.",
  alternates: { canonical: 'https://www.serignebadakemane.com/videos' },
  openGraph: {
    title: 'Vidéos — Serigne Bada Kemane',
    description: "Podcasts et chroniques sur l'actualité sénégalaise.",
    images: [{ url: '/images/bada.jpg', alt: 'Serigne Bada Kemane — Vidéos TikTok' }],
  },
}

export default function VideosPage() {
  return (
    <main className="pt-24 pb-20 min-h-screen bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 pt-8">
          <p className="text-sm font-medium text-[#DC2626] uppercase tracking-widest mb-3">TikTok</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-4">Mes vidéos</h1>
          <p className="text-[#6B6B6B] text-lg max-w-xl mx-auto">
            Podcasts, chroniques et réactions sur l&apos;actualité sénégalaise — politique, people, faits divers.
          </p>
        </div>
        <TikTokPageGrid />
      </div>
    </main>
  )
}
