import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${encoded}`
}
