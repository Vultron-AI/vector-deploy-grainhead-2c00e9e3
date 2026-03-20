import { motion } from 'framer-motion'
import { Button } from '@/components/ui'

export function HeroSection() {
  return (
    <section
      data-testid="hero.section"
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden md:min-h-[85vh]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero-bg.svg)' }}
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '150px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#C4A87C] md:text-sm"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Handcrafted since 2019
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-8xl"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Grain
          <br />
          <span className="italic font-normal text-[#C4A87C]">Headwear</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Thoughtfully designed headwear for those who appreciate
          the beauty in simplicity and the craft behind every stitch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            data-testid="hero.cta"
            size="lg"
            className="rounded-none border border-[#C4A87C] bg-transparent px-10 py-6 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-[#C4A87C] hover:text-[var(--palette-warm-900)]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            onClick={() => {
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Shop Now
          </Button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  )
}
