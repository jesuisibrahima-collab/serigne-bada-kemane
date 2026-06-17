'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { buildContactWhatsApp } from '@/lib/socials'

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#F5F0EB] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-28 lg:py-0">

          {/* Texte */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-[#DC2626] uppercase tracking-widest mb-5"
            >
              Influenceur Sénégalais
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-[1.05] mb-6"
            >
              Serigne
              <br />
              Bada
              <br />
              <span className="text-[#DC2626]">Kemane</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#6B6B6B] mb-10 max-w-md leading-relaxed"
            >
              Podcasteur, animateur de lives et chroniqueur d&apos;actualité —
              politique, people, faits divers. La voix de l&apos;info sénégalaise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 mt-14 pt-10 border-t border-[#1A1A1A]/10"
            >
              {[
                { value: '500K+', label: 'TikTok' },
                { value: '200K+', label: 'Facebook' },
                { value: '8+', label: "Années" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-[#DC2626]">{stat.value}</p>
                  <p className="text-xs text-[#6B6B6B] mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm lg:max-w-none lg:w-[480px]">
              <div className="absolute -inset-4 bg-[#DC2626]/8 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl shadow-[#1A1A1A]/20">
                <Image
                  src="/images/bada.jpg"
                  alt="Serigne Bada Kemane"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-4">
                <p className="font-display text-sm font-bold text-[#1A1A1A]">Serigne Bada Kemane</p>
                <p className="text-xs text-[#DC2626] font-medium mt-0.5">Chroniqueur · Podcasteur</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
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
