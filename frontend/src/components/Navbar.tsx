import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      data-testid="nav.bar"
      className="sticky top-0 z-50 border-b border-[var(--color-border)]"
      style={{
        backgroundColor: 'rgba(249, 250, 251, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
        {/* Logo */}
        <a
          href="#"
          data-testid="nav.logo"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <img
            src="/logo.svg"
            alt="Grain Headwear"
            className="h-8 w-auto md:h-10"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-sm font-medium tracking-wide text-[var(--palette-warm-600)] transition-colors hover:text-[var(--color-fg)]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#products"
              className="rounded-[var(--radius-md)] bg-[var(--palette-warm-900)] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[var(--palette-warm-800)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Shop
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          data-testid="nav.menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] text-[var(--color-fg)] transition-colors hover:bg-[var(--palette-warm-100)] md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-[var(--color-border)] md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-[var(--radius-md)] px-4 py-3 text-sm font-medium text-[var(--palette-warm-700)] transition-colors hover:bg-[var(--palette-warm-100)]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#products"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 block rounded-[var(--radius-md)] bg-[var(--palette-warm-900)] px-4 py-3 text-center text-sm font-medium text-white transition-all hover:bg-[var(--palette-warm-800)]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Shop
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
