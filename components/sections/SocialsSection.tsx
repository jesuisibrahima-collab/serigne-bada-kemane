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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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
