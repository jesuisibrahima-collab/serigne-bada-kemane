// lib/socials.ts
export const WHATSAPP_NUMBER = '221700000000' // ← Remplacer par le vrai numéro

export const socials = {
  facebook: 'https://www.facebook.com/share/1ExAXV9KMe/',
  tiktok: 'https://www.tiktok.com/@serignebadakeman',
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
} as const

export function buildContactWhatsApp(message = 'Bonjour Serigne Bada, je vous contacte depuis votre site web.'): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildProductWhatsApp(productName: string, price: number): string {
  const message = `Bonjour Serigne Bada, je souhaite commander : ${productName} (${price.toLocaleString('fr-FR')} FCFA).`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
