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
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1877F2] text-white font-medium px-7 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
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
            TikTok
          </Link>
          <Link
            href={socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#FF0000] text-white font-medium px-7 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube
          </Link>
          <Link
            href={socials.snapchat}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#FFFC00] text-[#1A1A1A] font-medium px-7 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12.065.01C8.888-.025 5.97 1.648 4.31 4.35c-.701 1.144-.893 2.433-.926 3.742-.04 1.567.007 3.134-.144 4.695a.449.449 0 01-.304.378c-.36.12-.732.21-1.1.305-.243.063-.49.14-.7.272-.39.244-.43.64-.1.93.218.19.476.302.744.39.102.033.207.06.308.098.558.204.694.568.46 1.09-.167.378-.38.737-.588 1.097-.29.5-.19.868.337 1.082.274.11.563.153.853.18.52.047 1.003.165 1.42.494.34.27.622.6.95.884.584.509 1.248.74 2.011.635.438-.06.874-.19 1.318-.24.463-.053.93-.042 1.388.056.424.09.827.254 1.246.353.663.158 1.283.04 1.862-.296.456-.266.843-.634 1.258-.965.498-.397 1.043-.622 1.687-.653.443-.02.884.053 1.327.098.285.029.57.071.853-.002.64-.164.97-.618.806-1.254a3.34 3.34 0 00-.22-.572c-.2-.415-.42-.82-.593-1.245-.212-.518-.072-.877.46-1.08.13-.048.263-.088.396-.126.274-.08.54-.178.778-.343.38-.264.397-.663.04-.925-.233-.17-.505-.256-.776-.327-.283-.074-.572-.128-.85-.208a.424.424 0 01-.31-.37c-.143-1.49-.107-2.982-.134-4.473-.038-2.095-.657-3.964-2.113-5.48C15.606.723 13.876.037 12.065.01z" />
            </svg>
            Snapchat
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
