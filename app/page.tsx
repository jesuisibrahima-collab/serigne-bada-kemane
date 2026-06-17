import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SocialsSection } from '@/components/sections/SocialsSection'
import { TikTokSection } from '@/components/sections/TikTokSection'
import { BoutiqueSection } from '@/components/sections/BoutiqueSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SocialsSection />
      <TikTokSection />
      <BoutiqueSection />
      <ContactSection />
    </>
  )
}
