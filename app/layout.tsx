import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Serigne Bada Kemane — Influenceur Sénégalais',
  description: "Découvrez l'univers de Serigne Bada Kemane, influenceur sénégalais. Boutique en ligne, vidéos TikTok et bien plus.",
  openGraph: {
    title: 'Serigne Bada Kemane',
    description: 'Influenceur sénégalais — Boutique & Contenus',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
