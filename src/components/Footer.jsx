import { motion } from 'framer-motion'

const SHOP_URL = 'https://www.fitnessstore-24.de'

const footerLinks = {
  Shop: ['Supplements', 'Equipment', 'Kleidung', 'Zubehör', 'Sale'],
  Service: ['Über uns', 'Versand', 'Rückgabe', 'FAQ', 'Kontakt'],
  Rechtliches: ['Impressum', 'Datenschutz', 'AGB', 'Cookie-Einstellungen'],
}

const shopCategories = new Set(['Supplements', 'Equipment', 'Kleidung', 'Zubehör', 'Sale'])

export default function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            {/* Logo */}
            <div className="mb-6">
              <img src="/logo.png" alt="The Fitness Store" className="h-14 w-auto object-contain" />
            </div>

            <p className="font-body text-white/35 text-sm leading-relaxed mb-5 max-w-xs">
              Premium Fitness Equipment, Supplements und Kleidung. Dein Partner für maximale Performance seit 2018.
            </p>
            <div className="space-y-2 mb-8">
              <p className="font-body text-white/25 text-xs tracking-wide">Bleichstraße 12 · 75173 Pforzheim</p>
              <a href="tel:+4972318004071" className="block font-body text-white/25 hover:text-[#e63946] text-xs tracking-wide transition-colors duration-300">(07231) 800 40 71</a>
              <a href="mailto:pforzheim@the-fitness-store.net" className="block font-body text-white/25 hover:text-[#e63946] text-xs tracking-wide transition-colors duration-300">pforzheim@the-fitness-store.net</a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <motion.a
                href="https://instagram.com/thefitnessstore"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: '#e63946' }}
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </motion.a>
              {/* TikTok */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, backgroundColor: '#e63946' }}
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.87 4.87 0 01-1.01-.07z"/>
                </svg>
              </motion.a>
              {/* YouTube */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, backgroundColor: '#e63946' }}
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-white text-base tracking-widest uppercase mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={shopCategories.has(link) ? SHOP_URL : '#'}
                      target={shopCategories.has(link) ? '_blank' : undefined}
                      rel={shopCategories.has(link) ? 'noopener noreferrer' : undefined}
                      className="font-body text-white/35 text-sm hover:text-white transition-colors duration-300 tracking-wide"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:pforzheim@the-fitness-store.net"
              className="flex items-center gap-2 font-body text-white/35 text-sm hover:text-white transition-colors duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M2 3h10a1 1 0 011 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1z" />
                <path d="M13 4L7 8.5 1 4" />
              </svg>
              pforzheim@the-fitness-store.net
            </a>
            <a
              href="tel:+4972318004071"
              className="font-body text-white/35 text-sm hover:text-[#e63946] transition-colors duration-300"
            >
              (07231) 800 40 71
            </a>
          </div>
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'PayPal', 'Klarna'].map((m) => (
              <span key={m} className="font-body text-white/20 text-[10px] tracking-widest uppercase border border-white/10 px-2 py-0.5">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-white/20 text-xs tracking-widest">
            © 2024 The Fitness Store. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#e63946]" />
            <span className="font-body text-white/20 text-xs tracking-widest">
              Made with passion for athletes
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
