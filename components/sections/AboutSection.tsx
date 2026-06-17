'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const stats = [
  { value: '100K+', label: 'Abonnés Facebook' },
  { value: '50K+', label: 'Abonnés TikTok' },
  { value: '5+', label: "Années d'activité" },
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
                src="/images/about.jpg"
                alt="Serigne Bada Kemane"
                fill
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/placeholder.jpg'
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 text-center">
              <p className="font-serif text-2xl font-bold text-[#C9A96E]">5+</p>
              <p className="text-xs text-[#6B6B6B] mt-1">
                Années<br />d&apos;expérience
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium text-[#C9A96E] uppercase tracking-widest mb-4">À propos</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              Guide, Conseiller<br />& Influenceur
            </h2>
            <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
              Serigne Bada Kemane est une figure influente de la communauté sénégalaise.
              Fort de plusieurs années d&apos;expérience, il accompagne ses clients dans leur
              quête de bien-être, de réussite et d&apos;épanouissement personnel.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-10">
              Grâce à ses produits soigneusement sélectionnés et ses conseils avisés,
              il aide des milliers de personnes à transformer leur vie au quotidien.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1A1A1A]/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl font-bold text-[#C9A96E]">{stat.value}</p>
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
