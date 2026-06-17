import type { Metadata } from 'next'
import { ContactPageClient } from '@/components/sections/ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Serigne Bada Kemane directement sur WhatsApp au +221 77 829 3838 ou via Facebook et TikTok.',
  alternates: { canonical: 'https://www.serignebadakemane.com/contact' },
}

export default function ContactPage() {
  return (
    <main className="pt-24 pb-20 min-h-screen bg-[#FAFAF8]">
      <ContactPageClient />
    </main>
  )
}
