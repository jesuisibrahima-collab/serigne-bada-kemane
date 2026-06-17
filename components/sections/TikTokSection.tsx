'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { tiktokVideos } from '@/data/tiktok-videos'
import Link from 'next/link'
import { socials } from '@/lib/socials'

function TikTokEmbed({ url }: { url: string }) {
  useEffect(() => {
    if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://www.tiktok.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  const videoId = url.split('/video/')[1]?.split('?')[0] ?? ''

  return (
    <div className="flex justify-center">
      <blockquote
        className="tiktok-embed rounded-2xl overflow-hidden"
        cite={url}
        data-video-id={videoId}
        style={{ maxWidth: '325px', minWidth: '325px' }}
      >
        <section>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            Voir cette vidéo sur TikTok
          </Link>
        </section>
      </blockquote>
    </div>
  )
}

export function TikTokSection() {
  return (
    <section id="videos" className="py-24 bg-[#F5F0EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#DC2626] uppercase tracking-widest mb-3">TikTok</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Mes dernières vidéos</h2>
          <p className="text-[#6B6B6B]">Podcasts, chroniques et réactions sur l&apos;actualité sénégalaise</p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-x-visible snap-x snap-mandatory">
          {tiktokVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="snap-center flex-shrink-0 w-[325px] md:w-auto"
            >
              <TikTokEmbed url={video.url} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href={socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1A1A1A] text-white font-medium px-8 py-4 rounded-full hover:bg-[#DC2626] transition-colors text-sm uppercase tracking-wide"
          >
            Voir toutes mes vidéos sur TikTok
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
