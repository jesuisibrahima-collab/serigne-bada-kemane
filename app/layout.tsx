import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const siteUrl = 'https://www.serignebadakemane.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Serigne Bada Kemane — Influenceur & Podcasteur Sénégalais',
    template: '%s — Serigne Bada Kemane',
  },
  description:
    "Serigne Bada Kemane, influenceur et podcasteur sénégalais. Podcasts, lives et chroniques sur l'actualité sénégalaise — politique, people, faits divers. Suivez-le sur TikTok et Facebook.",
  keywords: [
    'Serigne Bada Kemane',
    'influenceur sénégalais',
    'podcasteur Sénégal',
    'actualité sénégalaise',
    'TikTok Sénégal',
    'podcast Sénégal',
    'chroniqueur Sénégal',
  ],
  authors: [{ name: 'Serigne Bada Kemane' }],
  creator: 'Serigne Bada Kemane',
  openGraph: {
    type: 'website',
    locale: 'fr_SN',
    url: siteUrl,
    siteName: 'Serigne Bada Kemane',
    title: 'Serigne Bada Kemane — Influenceur & Podcasteur Sénégalais',
    description:
      "Podcasts, lives et chroniques sur l'actualité sénégalaise — politique, people, faits divers.",
    images: [
      {
        url: '/images/bada.jpg',
        width: 1200,
        height: 630,
        alt: 'Serigne Bada Kemane — Influenceur Sénégalais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serigne Bada Kemane — Influenceur & Podcasteur Sénégalais',
    description: "Podcasts, lives et chroniques sur l'actualité sénégalaise.",
    images: ['/images/bada.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
