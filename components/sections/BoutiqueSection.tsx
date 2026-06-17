'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import { buildProductWhatsApp } from '@/lib/socials'

function ProductCard({ product, index }: { product: typeof products[number]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const mainImage = product.images[0] ?? '/images/placeholder.jpg'
  const hoverImage = product.images[1] ?? mainImage

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-[#F5F0EB] flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-[#F5F0EB]">
        <Image
          src={mainImage}
          alt={product.name}
          fill
          className={`object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.jpg' }}
        />
        <Image
          src={hoverImage}
          alt={product.name}
          fill
          className={`object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder.jpg' }}
        />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {product.images.map((_, i) => (
            <span
              key={i}
              className={`block w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                (i === 0 && !hovered) || (i === 1 && hovered) ? 'bg-[#DC2626]' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-[#1A1A1A] text-lg mb-2">{product.name}</h3>
        <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <p className="font-display text-xl font-bold text-[#DC2626]">
            {product.price.toLocaleString('fr-FR')} FCFA
          </p>
          <Link
            href={buildProductWhatsApp(product.name, product.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-[#1ea855] transition-colors"
          >
            <ShoppingBag size={14} />
            Commander
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export function BoutiqueSection() {
  return (
    <section id="boutique" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-sm font-medium text-[#DC2626] uppercase tracking-widest mb-3">Boutique</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A]">Mes produits</h2>
          </div>
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:text-[#DC2626] transition-colors group"
          >
            Voir tous les produits
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
