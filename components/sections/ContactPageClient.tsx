'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle, ExternalLink } from 'lucide-react'
import { buildContactWhatsApp, socials } from '@/lib/socials'

const channels = [
  {
    name: 'WhatsApp',
    description: 'Réponse rapide pour toute question ou commande.',
    href: buildContactWhatsApp(),
    color: '#25D366',
    hoverColor: '#1ea855',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    description: 'Suivez l\'actualité et envoyez un message en DM.',
    href: socials.facebook,
    color: '#1877F2',
    hoverColor: '#1565d8',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    description: 'Commentez et rejoignez la communauté.',
    href: socials.tiktok,
    color: '#000000',
    hoverColor: '#DC2626',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.22 8.22 0 004.84 1.55V7.04a4.85 4.85 0 01-1.07-.35z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    description: 'Émissions et débats longues format sur Parlons Vrais TV.',
    href: socials.youtube,
    color: '#FF0000',
    hoverColor: '#cc0000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Snapchat',
    description: 'Coulisses et moments exclusifs — ajoutez sbadakeman0.',
    href: socials.snapchat,
    color: '#FFFC00',
    hoverColor: '#e6e300',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12.065.01C8.888-.025 5.97 1.648 4.31 4.35c-.701 1.144-.893 2.433-.926 3.742-.04 1.567.007 3.134-.144 4.695a.449.449 0 01-.304.378c-.36.12-.732.21-1.1.305-.243.063-.49.14-.7.272-.39.244-.43.64-.1.93.218.19.476.302.744.39.102.033.207.06.308.098.558.204.694.568.46 1.09-.167.378-.38.737-.588 1.097-.29.5-.19.868.337 1.082.274.11.563.153.853.18.52.047 1.003.165 1.42.494.34.27.622.6.95.884.584.509 1.248.74 2.011.635.438-.06.874-.19 1.318-.24.463-.053.93-.042 1.388.056.424.09.827.254 1.246.353.663.158 1.283.04 1.862-.296.456-.266.843-.634 1.258-.965.498-.397 1.043-.622 1.687-.653.443-.02.884.053 1.327.098.285.029.57.071.853-.002.64-.164.97-.618.806-1.254a3.34 3.34 0 00-.22-.572c-.2-.415-.42-.82-.593-1.245-.212-.518-.072-.877.46-1.08.13-.048.263-.088.396-.126.274-.08.54-.178.778-.343.38-.264.397-.663.04-.925-.233-.17-.505-.256-.776-.327-.283-.074-.572-.128-.85-.208a.424.424 0 01-.31-.37c-.143-1.49-.107-2.982-.134-4.473-.038-2.095-.657-3.964-2.113-5.48C15.606.723 13.876.037 12.065.01z" />
      </svg>
    ),
  },
]

export function ContactPageClient() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center pt-8 mb-16"
      >
        <p className="text-sm font-medium text-[#DC2626] uppercase tracking-widest mb-3">Contact</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-5">Parlons ensemble</h1>
        <p className="text-[#6B6B6B] text-lg max-w-md mx-auto leading-relaxed">
          Une question, une commande ou juste envie d&apos;échanger ? Choisissez votre canal préféré.
        </p>
      </motion.div>

      {/* WhatsApp CTA principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <Link
          href={buildContactWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-4 bg-[#25D366] text-white rounded-2xl px-8 py-7 hover:bg-[#1ea855] transition-colors group shadow-lg shadow-[#25D366]/20"
        >
          <div className="flex items-center gap-5">
            <div className="bg-white/20 rounded-xl p-3">
              <MessageCircle size={28} />
            </div>
            <div>
              <p className="font-display text-xl font-bold">Me contacter sur WhatsApp</p>
              <p className="text-white/80 text-sm mt-0.5">+221 77 829 3838 — Réponse rapide garantie</p>
            </div>
          </div>
          <ExternalLink size={20} className="opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        </Link>
      </motion.div>

      {/* Autres canaux */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
        {channels.slice(1).map((channel, i) => (
          <motion.div
            key={channel.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <Link
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white border border-[#F5F0EB] rounded-2xl px-6 py-5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <div
                className="rounded-xl p-3 text-white flex-shrink-0"
                style={{ backgroundColor: channel.color }}
              >
                {channel.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[#1A1A1A]">{channel.name}</p>
                <p className="text-sm text-[#6B6B6B] mt-0.5 truncate">{channel.description}</p>
              </div>
              <ExternalLink size={16} className="text-[#6B6B6B] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bloc info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-[#F5F0EB] rounded-2xl p-8 text-center"
      >
        <p className="font-display text-lg font-bold text-[#1A1A1A] mb-2">Serigne Bada Kemane</p>
        <p className="text-sm text-[#6B6B6B]">Influenceur · Podcasteur · Chroniqueur d&apos;actualité sénégalaise</p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <p className="text-xs text-[#6B6B6B]">Disponible sur WhatsApp</p>
        </div>
      </motion.div>
    </div>
  )
}
