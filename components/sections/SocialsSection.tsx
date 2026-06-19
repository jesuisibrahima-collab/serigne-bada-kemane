'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { socials } from '@/lib/socials'

const socialCards = [
  {
    name: 'Facebook',
    handle: '@serignebadakemane',
    followers: '200K+ abonnés',
    description: 'Actualité, débats, lives et réactions en direct — suivez l&apos;info sénégalaise avec Bada.',
    url: socials.facebook,
    color: '#1877F2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@serignebadakeman',
    followers: '500K+ abonnés',
    description: 'Podcasts, chroniques et vidéos sur l&apos;actualité sénégalaise — politique, people, faits divers.',
    url: socials.tiktok,
    color: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.22 8.22 0 004.84 1.55V7.04a4.85 4.85 0 01-1.07-.35z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '@parlonsvraistv',
    followers: 'Parlons Vrais TV',
    description: 'Analyses, débats et émissions longues format — l&apos;actualité sénégalaise en profondeur.',
    url: socials.youtube,
    color: '#FF0000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Snapchat',
    handle: 'sbadakeman0',
    followers: 'Snapchat',
    description: 'Coulisses, snaps exclusifs et moments du quotidien — rejoignez la communauté Snapchat.',
    url: socials.snapchat,
    color: '#FFFC00',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12.065.01C8.888-.025 5.97 1.648 4.31 4.35c-.701 1.144-.893 2.433-.926 3.742-.04 1.567.007 3.134-.144 4.695a.449.449 0 01-.304.378c-.36.12-.732.21-1.1.305-.243.063-.49.14-.7.272-.39.244-.43.64-.1.93.218.19.476.302.744.39.102.033.207.06.308.098.558.204.694.568.46 1.09-.167.378-.38.737-.588 1.097-.29.5-.19.868.337 1.082.274.11.563.153.853.18.52.047 1.003.165 1.42.494.34.27.622.6.95.884.584.509 1.248.74 2.011.635.438-.06.874-.19 1.318-.24.463-.053.93-.042 1.388.056.424.09.827.254 1.246.353.663.158 1.283.04 1.862-.296.456-.266.843-.634 1.258-.965.498-.397 1.043-.622 1.687-.653.443-.02.884.053 1.327.098.285.029.57.071.853-.002.64-.164.97-.618.806-1.254a3.34 3.34 0 00-.22-.572c-.2-.415-.42-.82-.593-1.245-.212-.518-.072-.877.46-1.08.13-.048.263-.088.396-.126.274-.08.54-.178.778-.343.38-.264.397-.663.04-.925-.233-.17-.505-.256-.776-.327-.283-.074-.572-.128-.85-.208a.424.424 0 01-.31-.37c-.143-1.49-.107-2.982-.134-4.473-.038-2.095-.657-3.964-2.113-5.48C15.606.723 13.876.037 12.065.01z" />
      </svg>
    ),
  },
]

export function SocialsSection() {
  return (
    <section className="py-24 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#DC2626] uppercase tracking-widest mb-3">Réseaux sociaux</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A]">Me suivre</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {socialCards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-[#F5F0EB]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div style={{ color: card.color }}>{card.icon}</div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">{card.name}</p>
                    <p className="text-sm text-[#6B6B6B]">{card.handle}</p>
                  </div>
                </div>
                <p className="text-2xl font-display font-bold text-[#DC2626] mb-2">{card.followers}</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">{card.description}</p>
                <span
                  className="inline-block text-sm font-medium px-5 py-2 rounded-full text-white"
                  style={{ backgroundColor: card.color }}
                >
                  Suivre
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
