'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { buildContactWhatsApp, socials } from '@/lib/socials'
import { MessageCircle } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-[#C9A96E] uppercase tracking-widest mb-4">Contact</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Parlons ensemble
          </h2>
          <p className="text-[#6B6B6B] text-lg mb-12 max-w-xl mx-auto">
            Une question sur un produit, un conseil ou simplement envie d&apos;échanger ?
            Contactez-moi directement sur WhatsApp.
          </p>

          <Link
            href={buildContactWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold px-10 py-5 rounded-full hover:bg-[#1ea855] transition-colors text-lg shadow-lg shadow-[#25D366]/30"
          >
            <MessageCircle size={24} />
            Me contacter sur WhatsApp
          </Link>

          <div className="flex items-center justify-center gap-8 mt-16 pt-12 border-t border-[#F5F0EB]">
            <Link href={socials.facebook} target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-[#1877F2] transition-colors text-sm font-medium">
              Facebook
            </Link>
            <Link href={socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors text-sm font-medium">
              TikTok
            </Link>
            <Link href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[#6B6B6B] hover:text-[#25D366] transition-colors text-sm font-medium">
              WhatsApp
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
