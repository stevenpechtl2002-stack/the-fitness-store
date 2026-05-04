import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Newsletter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="newsletter" className="py-24 lg:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#e63946]/5 via-transparent to-transparent" />

      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span
          className="font-display text-white/[0.015] tracking-widest"
          style={{ fontSize: 'clamp(60px, 20vw, 280px)', whiteSpace: 'nowrap' }}
        >
          NEWSLETTER
        </span>
      </div>

      {/* Red corner accents */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#e63946]/30" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#e63946]/30" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-[#e63946]" />
          <span className="font-body text-[#e63946] text-xs font-semibold tracking-[0.3em] uppercase">
            Newsletter
          </span>
          <div className="w-8 h-px bg-[#e63946]" />
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-white text-5xl lg:text-7xl xl:text-8xl tracking-wider leading-none"
          >
            KEIN DEAL
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h2
            initial={{ y: '110%' }}
            animate={inView ? { y: '0%' } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[#e63946] text-5xl lg:text-7xl xl:text-8xl tracking-wider leading-none"
          >
            VERPASSEN.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-body text-white/40 text-sm lg:text-base leading-relaxed mb-12 max-w-lg mx-auto"
        >
          Melde dich für unseren Newsletter an und erhalte exklusive Deals, frühzeitigen Zugang zu neuen Produkten und wöchentliche Training-Tipps.
        </motion.p>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {['10% Rabatt auf die erste Bestellung', 'Exklusive Deals', 'Früher Zugang', 'Kein Spam'].map((perk) => (
            <div key={perk} className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#e63946] flex items-center justify-center flex-shrink-0">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-body text-white/50 text-xs tracking-widest uppercase">{perk}</span>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto">
              <div className={`flex-1 relative border transition-all duration-300 ${
                focused ? 'border-[#e63946]' : 'border-white/15'
              }`}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="deine@email.de"
                  required
                  className="w-full bg-transparent text-white font-body text-sm placeholder-white/25 px-5 py-4 outline-none tracking-wide"
                />
                {focused && (
                  <motion.div
                    layoutId="input-glow"
                    className="absolute inset-0 border border-[#e63946]/20 pointer-events-none"
                  />
                )}
              </div>
              <motion.button
                type="submit"
                whileHover={{ backgroundColor: '#ffffff', color: '#080808' }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#e63946] text-white font-body text-sm font-bold tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 flex-shrink-0"
              >
                Anmelden
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 bg-[#e63946] flex items-center justify-center red-glow">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M4 14l7 7 13-13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-display text-white text-3xl tracking-widest mb-1">WILLKOMMEN!</p>
                <p className="font-body text-white/40 text-sm tracking-wide">
                  Du erhältst sofort deine 10% Rabatt-Code per E-Mail.
                </p>
              </div>
            </motion.div>
          )}

          {!submitted && (
            <p className="font-body text-white/20 text-[11px] tracking-widest uppercase mt-4">
              Jederzeit abmeldbar · Kein Spam · DSGVO konform
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
