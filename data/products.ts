// data/products.ts
export interface Product {
  id: number
  name: string
  description: string
  price: number
  images: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Puissance Sexuel Trawliss',
    description: 'Description à renseigner par le client.',
    price: 15000,
    images: [
      '/images/puissance-sexuel-trawliss.png',
      '/images/puissance-sexuel-trawliss 1.png',
    ],
  },
  {
    id: 2,
    name: 'Werdeuk Trawliss',
    description: 'Description à renseigner par le client.',
    price: 20000,
    images: [
      '/images/werdeuk-trawliss.png',
      '/images/werdeuk-trawliss 1.png',
    ],
  },
]
