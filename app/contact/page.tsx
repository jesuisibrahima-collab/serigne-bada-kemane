import type { Metadata } from 'next'
import { ContactPageClient } from '@/components/sections/ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact — Serigne Bada Kemane',
  description: 'Contactez Serigne Bada Kemane directement sur WhatsApp ou via ses réseaux sociaux.',
}

export default function ContactPage() {
  return (
    <main className="pt-24 pb-20 min-h-screen bg-[#FAFAF8]">
      <ContactPageClient />
    </main>
  )
}
