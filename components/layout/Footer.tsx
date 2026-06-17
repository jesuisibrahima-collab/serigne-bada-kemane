import Link from 'next/link'
import { socials } from '@/lib/socials'

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#6B6B6B] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-white text-lg mb-1">Serigne Bada Kemane</p>
            <p className="text-sm">Influenceur Sénégalais</p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link href={socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Facebook
            </Link>
            <Link href={socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              TikTok
            </Link>
            <Link href="/boutique" className="hover:text-white transition-colors">
              Boutique
            </Link>
          </div>

          <p className="text-xs">© 2026 Serigne Bada Kemane. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
