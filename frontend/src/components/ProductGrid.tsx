import { ProductCard } from './ProductCard'

const products = [
  { name: 'Classic Cap', price: '$48', image: '/images/product-1.svg' },
  { name: 'Bucket Hat', price: '$56', image: '/images/product-2.svg' },
  { name: 'Snapback', price: '$52', image: '/images/product-3.svg' },
  { name: 'Beanie', price: '$38', image: '/images/product-4.svg' },
]

export function ProductGrid() {
  return (
    <div
      data-testid="products.grid"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4"
    >
      {products.map((product, i) => (
        <ProductCard key={product.name} {...product} index={i} />
      ))}
    </div>
  )
}
