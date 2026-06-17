'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import type { Product } from '@/data/products'
import { buildProductWhatsApp } from '@/lib/socials'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-[#F5F0EB] flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-[#F5F0EB]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/placeholder.jpg'
          }}
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-[#1A1A1A] text-lg mb-2 line-clamp-1">{product.name}</h3>
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
