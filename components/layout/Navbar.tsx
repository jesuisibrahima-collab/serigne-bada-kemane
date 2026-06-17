'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/#about', label: 'À propos' },
    { href: '/#videos', label: 'Vidéos' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#FAFAF8]/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-display text-lg font-semibold text-[#1A1A1A] hover:text-[#DC2626] transition-colors">
            Serigne Bada Kemane
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/boutique"
              className="bg-[#DC2626] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#B91C1C] transition-colors"
            >
              Boutique
            </Link>
          </div>

          <button
            className="md:hidden text-[#1A1A1A]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-t border-[#F5F0EB] px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/boutique"
            className="bg-[#DC2626] text-white text-sm font-medium px-5 py-2 rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Boutique
          </Link>
        </div>
      )}
    </nav>
  )
}
