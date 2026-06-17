'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { socials, buildContactWhatsApp } from '@/lib/socials'

const stats = [
  { value: '500K+', label: 'Abonnés TikTok' },
  { value: '200K+', label: 'Abonnés Facebook' },
  { value: '8+', label: "Années d'activité" },
]

const highlights = [
  {
    title: 'Podcasteur',
    description: 'Analyse et décryptage de l\'actualité sénégalaise en format audio et vidéo, avec des invités de qualité.',
  },
  {
    title: 'Lives & Chroniques',
    description: 'En direct sur Facebook et TikTok — réactions à chaud sur les sujets qui font l\'actualité.',
  },
  {
    title: 'Créateur de contenu',
    description: 'Vidéos courtes, commentaires, people et faits divers — un regard direct et sans filtre sur la société sénégalaise.',
  },
]

export function AProposClient() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-8 mb-20"
      >
        <p className="text-sm font-medium text-[#DC2626] uppercase tracking-widest mb-3">À propos</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[#1A1A1A]">Serigne Bada Kemane</h1>
      </motion.div>

      {/* Bio + Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[#1A1A1A]/15">
            <Image
              src="/images/bada2.jpg"
              alt="Serigne Bada Kemane"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg px-6 py-4">
            <p className="font-display text-2xl font-bold text-[#DC2626]">8+</p>
            <p className="text-xs text-[#6B6B6B] mt-0.5">Années d&apos;activité</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:pt-8"
        >
          <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
            Serigne Bada Kemane est l&apos;un des influenceurs les plus suivis du Sénégal.
            Podcasteur, animateur de lives et créateur de contenu, il couvre chaque jour
            l&apos;actualité sénégalaise — politique, people, faits divers — avec un regard
            direct et sans filtre qui fidélise des centaines de milliers de personnes.
          </p>
          <p className="text-[#6B6B6B] leading-relaxed mb-10">
            Actif depuis plus de 8 ans sur les réseaux sociaux, Serigne Bada est devenu
            une référence incontournable pour tous ceux qui veulent suivre l&apos;actualité
            sénégalaise d&apos;une manière authentique et engagée. Sa présence massive sur
            TikTok et Facebook en fait l&apos;une des voix les plus influentes du web sénégalais.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1A1A1A]/10 mb-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-bold text-[#DC2626]">{stat.value}</p>
                <p className="text-xs text-[#6B6B6B] mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={buildContactWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DC2626] text-white font-medium px-8 py-4 rounded-full hover:bg-[#B91C1C] transition-colors text-sm uppercase tracking-wide text-center"
            >
              Me contacter
            </Link>
            <Link
              href={socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#1A1A1A]/20 text-[#1A1A1A] font-medium px-8 py-4 rounded-full hover:border-[#DC2626] hover:text-[#DC2626] transition-colors text-sm uppercase tracking-wide text-center"
            >
              Suivre sur TikTok
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Ce que je fais */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <p className="text-sm font-medium text-[#DC2626] uppercase tracking-widest mb-3">Ce que je fais</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12">Mon univers</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl p-8 border border-[#F5F0EB] hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-full bg-[#DC2626]/10 flex items-center justify-center mb-5">
              <span className="font-display font-bold text-[#DC2626] text-sm">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#1A1A1A] mb-3">{item.title}</h3>
            <p className="text-[#6B6B6B] text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Réseaux */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#F5F0EB] rounded-3xl p-10 text-center"
      >
        <h3 className="font-display text-2xl font-bold text-[#1A1A1A] mb-4">Rejoignez la communauté</h3>
        <p className="text-[#6B6B6B] mb-8">Plus de 700 000 personnes me suivent déjà sur les réseaux.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1877F2] text-white font-medium px-7 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Suivre sur Facebook
          </Link>
          <Link
            href={socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1A1A1A] text-white font-medium px-7 py-3 rounded-full hover:bg-[#DC2626] transition-colors text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.22 8.22 0 004.84 1.55V7.04a4.85 4.85 0 01-1.07-.35z" />
            </svg>
            Suivre sur TikTok
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
