// data/products.ts
export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Huile de Séduction',
    description: 'Huile naturelle aux propriétés aphrodisiaques, issue de plantes africaines traditionnelles.',
    price: 15000,
    image: '/images/placeholder.jpg',
  },
  {
    id: 2,
    name: 'Parfum de la Chance',
    description: 'Fragrance mystique pour attirer la réussite et les opportunités dans votre vie.',
    price: 20000,
    image: '/images/placeholder.jpg',
  },
  {
    id: 3,
    name: 'Bain de Prospérité',
    description: 'Mélange de plantes purifiantes pour un rituel de purification et d\'abondance.',
    price: 12000,
    image: '/images/placeholder.jpg',
  },
  {
    id: 4,
    name: 'Talisman de Protection',
    description: 'Amulette confectionnée selon les traditions ancestrales sénégalaises.',
    price: 25000,
    image: '/images/placeholder.jpg',
  },
  {
    id: 5,
    name: 'Encens de la Réussite',
    description: 'Encens naturel à brûler lors de vos moments de méditation et de visualisation.',
    price: 8000,
    image: '/images/placeholder.jpg',
  },
  {
    id: 6,
    name: 'Huile Intime Premium',
    description: 'Huile de massage naturelle pour renforcer la complicité et le bien-être du couple.',
    price: 18000,
    image: '/images/placeholder.jpg',
  },
]
