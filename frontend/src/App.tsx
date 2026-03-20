/**
 * Main App Component
 *
 * Grain Headwear landing page.
 * Pre-wrapped with DialogProvider to enable the useDialog hook throughout the app.
 */

import { DialogProvider } from '@/components/ui'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { ProductGrid } from '@/components/ProductGrid'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'

function App() {
  return (
    <DialogProvider>
      <div data-testid="app.root" className="min-h-screen bg-[var(--color-bg)]">
        <Navbar />
        <HeroSection />

        {/* Products section */}
        <section id="products" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center md:mb-16"
          >
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--palette-warm-400)]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Explore
            </p>
            <h2
              className="text-3xl font-bold text-[var(--color-fg)] md:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Our Collection
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-[#C4A87C]" />
          </motion.div>

          <ProductGrid />
        </section>

        <Footer />
      </div>
    </DialogProvider>
  )
}

export default App
