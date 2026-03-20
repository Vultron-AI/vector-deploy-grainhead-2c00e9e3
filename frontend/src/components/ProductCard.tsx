import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { ShoppingBag } from 'lucide-react'

interface ProductCardProps {
  name: string
  price: string
  image: string
  index: number
}

export function ProductCard({ name, price, image, index }: ProductCardProps) {
  return (
    <motion.div
      data-testid="products.card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      {/* Image container */}
      <div className="relative mb-4 aspect-square overflow-hidden rounded-[var(--radius-lg)] bg-[var(--palette-warm-100)]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/30 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            size="sm"
            className="w-full rounded-none border border-white bg-white/90 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--palette-warm-900)] backdrop-blur-sm transition-all hover:bg-white"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <ShoppingBag size={14} className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product info */}
      <div className="flex items-start justify-between gap-2">
        <h3
          data-testid="products.card.name"
          className="text-sm font-medium text-[var(--color-fg)] md:text-base"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {name}
        </h3>
        <span
          data-testid="products.card.price"
          className="shrink-0 text-sm font-semibold text-[var(--palette-warm-600)]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {price}
        </span>
      </div>
    </motion.div>
  )
}
