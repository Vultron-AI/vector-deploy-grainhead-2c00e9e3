import { Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer
      data-testid="footer"
      className="border-t border-[var(--color-border)] bg-[var(--palette-warm-900)]"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand column */}
          <div className="text-center md:text-left">
            <h3
              className="mb-2 text-lg font-bold tracking-wide text-white"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              GRAIN
            </h3>
            <p
              className="max-w-xs text-sm leading-relaxed text-[var(--palette-warm-400)]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Thoughtfully designed headwear, crafted with care for
              the everyday adventurer.
            </p>
          </div>

          {/* Links column */}
          <div className="flex gap-12 text-center md:text-left">
            <div>
              <h4
                className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--palette-warm-400)]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Shop
              </h4>
              <ul className="space-y-2">
                {['All Products', 'New Arrivals', 'Best Sellers'].map((item) => (
                  <li key={item}>
                    <a
                      href="#products"
                      className="text-sm text-[var(--palette-warm-500)] transition-colors hover:text-white"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4
                className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--palette-warm-400)]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Company
              </h4>
              <ul className="space-y-2">
                {['About', 'Contact', 'Sustainability'].map((item) => (
                  <li key={item}>
                    <a
                      href="#about"
                      className="text-sm text-[var(--palette-warm-500)] transition-colors hover:text-white"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social column */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--palette-warm-700)] text-[var(--palette-warm-400)] transition-all hover:border-[#C4A87C] hover:text-[#C4A87C]"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--palette-warm-700)] text-[var(--palette-warm-400)] transition-all hover:border-[#C4A87C] hover:text-[#C4A87C]"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[var(--palette-warm-800)] pt-6 text-center">
          <p
            className="text-xs text-[var(--palette-warm-600)]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            &copy; 2026 Grain Headwear. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
