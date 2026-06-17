'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { tiktokVideos } from '@/data/tiktok-videos'
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

export function TikTokPageGrid() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {tiktokVideos.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="w-full flex justify-center"
          >
            <TikTokEmbed url={video.url} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16"
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
    </>
  )
}
