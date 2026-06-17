'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { buildContactWhatsApp } from '@/lib/socials'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/bada.jpg"
          alt="Serigne Bada Kemane"
          fill
          className="object-cover object-center"
          priority
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
      </div>

      <div className="absolute inset-0 bg-[#F5F0EB] -z-10" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium text-[#DC2626] uppercase tracking-widest mb-4"
        >
          Influenceur Sénégalais
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-[#1A1A1A] leading-tight mb-6"
        >
          Serigne Bada
          <br />
          <span className="text-[#DC2626]">Kemane</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#6B6B6B] mb-10 max-w-xl mx-auto"
        >
          Influenceur · Podcasteur · Chroniqueur d&apos;actualité
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/boutique"
            className="bg-[#DC2626] text-white font-medium px-8 py-4 rounded-full hover:bg-[#B91C1C] transition-colors text-sm uppercase tracking-wide"
          >
            Découvrir la boutique
          </Link>
          <Link
            href={buildContactWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-[#1A1A1A]/20 text-[#1A1A1A] font-medium px-8 py-4 rounded-full hover:border-[#DC2626] hover:text-[#DC2626] transition-colors text-sm uppercase tracking-wide"
          >
            Me contacter
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-[#DC2626]/50 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#DC2626] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
