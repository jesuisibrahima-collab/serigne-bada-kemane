'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const stats = [
  { value: '500K+', label: 'Abonnés TikTok' },
  { value: '200K+', label: 'Abonnés Facebook' },
  { value: '8+', label: "Années d'activité" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#F5F0EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/bada2.jpg"
                alt="Serigne Bada Kemane"
                fill
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder.jpg'
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 text-center">
              <p className="font-display text-2xl font-bold text-[#DC2626]">8+</p>
              <p className="text-xs text-[#6B6B6B] mt-1">
                Années<br />d&apos;activité
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium text-[#DC2626] uppercase tracking-widest mb-4">À propos</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-6 leading-tight">
              L&apos;influenceur qui<br />fait l&apos;actualité
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
              Serigne Bada Kemane est l&apos;un des influenceurs les plus suivis du Sénégal.
              Podcasteur, animateur de lives et créateur de contenu, il couvre chaque jour
              l&apos;actualité sénégalaise — politique, people, faits divers — avec un regard
              direct et sans filtre.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              Présent sur TikTok, Facebook et tous les réseaux sociaux, il fédère une
              communauté de centaines de milliers de personnes autour d&apos;un contenu
              authentique et percutant.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1A1A1A]/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-[#DC2626]">{stat.value}</p>
                  <p className="text-xs text-[#6B6B6B] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
