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
    name: 'Produit 1',
    description: 'Description à renseigner par le client.',
    price: 15000,
    image: '/images/placeholder.jpg',
  },
  {
    id: 2,
    name: 'Produit 2',
    description: 'Description à renseigner par le client.',
    price: 20000,
    image: '/images/placeholder.jpg',
  },
  {
    id: 3,
    name: 'Produit 3',
    description: 'Description à renseigner par le client.',
    price: 12000,
    image: '/images/placeholder.jpg',
  },
  {
    id: 4,
    name: 'Produit 4',
    description: 'Description à renseigner par le client.',
    price: 25000,
    image: '/images/placeholder.jpg',
  },
  {
    id: 5,
    name: 'Produit 5',
    description: 'Description à renseigner par le client.',
    price: 8000,
    image: '/images/placeholder.jpg',
  },
  {
    id: 6,
    name: 'Produit 6',
    description: 'Description à renseigner par le client.',
    price: 18000,
    image: '/images/placeholder.jpg',
  },
]
