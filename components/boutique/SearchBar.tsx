'use client'

import { Search } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({ value, onChange, placeholder = 'Rechercher un produit...' }: SearchBarProps) {
  return (
    <div className="relative max-w-md">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 rounded-full border border-[#F5F0EB] bg-white text-[#1A1A1A] placeholder:text-[#6B6B6B] focus:outline-none focus:border-[#C9A96E] transition-colors text-sm"
      />
    </div>
  )
}
