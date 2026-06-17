'use client'

import { useState, useMemo } from 'react'
import { products } from '@/data/products'
import { ProductCard } from './ProductCard'
import { SearchBar } from './SearchBar'

export function ProductGrid() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    if (!q) return products
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    )
  }, [search])

  return (
    <div>
      <div className="mb-10">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-[#6B6B6B] text-lg">Aucun produit trouvé pour &ldquo;{search}&rdquo;</p>
          <button
            onClick={() => setSearch('')}
            className="mt-4 text-[#C9A96E] text-sm hover:underline"
          >
            Effacer la recherche
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
