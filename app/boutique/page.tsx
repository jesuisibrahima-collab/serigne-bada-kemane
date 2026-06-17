import type { Metadata } from 'next'
import { ProductGrid } from '@/components/boutique/ProductGrid'

export const metadata: Metadata = {
  title: 'Boutique',
  description: 'Découvrez les produits Trawliss de Serigne Bada Kemane. Commande directe et rapide via WhatsApp.',
  alternates: { canonical: 'https://www.serignebadakemane.com/boutique' },
  openGraph: {
    title: 'Boutique — Serigne Bada Kemane',
    description: 'Produits Trawliss — Commandez directement via WhatsApp.',
    images: [{ url: '/images/puissance-sexuel-trawliss.png', alt: 'Produits Trawliss' }],
  },
}

export default function BoutiquePage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <div className="bg-[#F5F0EB] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-[#DC2626] uppercase tracking-widest mb-3">Boutique</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-4">
            Nos Produits
          </h1>
          <p className="text-[#6B6B6B] text-lg max-w-xl">
            Sélectionnés avec soin pour votre bien-être, votre réussite et votre épanouissement.
            Commandez directement via WhatsApp.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProductGrid />
      </div>
    </div>
  )
}
