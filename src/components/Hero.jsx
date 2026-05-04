import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const words = [
  { text: 'TRAIN',     red: false },
  { text: 'HARDER.',   red: true  },
  { text: 'LIVE',      red: false },
  { text: 'STRONGER.', red: true  },
]

const stats = [
  { val: '50K+', label: 'Kunden' },
  { val: '4.9★', label: 'Google Rating' },
  { val: '200+', label: 'Produkte' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const rawImageY  = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const rawTextY   = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const rawOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])
  const rawScale   = useTransform(scrollYProgress, [0, 1], [1, 1.12])

  const imageY  = useSpring(rawImageY,  { stiffness: 60, damping: 20 })
  const textY   = useSpring(rawTextY,   { stiffness: 80, damping: 25 })
  const imgScale = useSpring(rawScale,  { stiffness: 60, damping: 20 })

  return (
    <section
      id="hero"
      ref={ref}
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex flex-col justify-between"
      style={{ cursor: 'none' }}
    >
      {/* Background */}
      <motion.div
        style={{ y: imageY, scale: imgScale }}
        className="absolute inset-0"
      >
        <img
          src="/hero-training.jpg"
          alt="Athlete training"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/55 to-[#080808]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")` }}
        />
      </motion.div>

      {/* Animated red line — left edge */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ originY: 0 }}
        className="absolute left-6 lg:left-12 top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-[#e63946]/60 to-transparent"
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: rawOpacity }}
        className="relative z-10 flex flex-col justify-between h-full max-w-7xl mx-auto px-10 lg:px-16 w-full py-28 lg:py-32"
      >
        {/* Top */}
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-7"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
              className="w-10 h-px bg-[#e63946]"
            />
            <motion.span
              initial={{ opacity: 0, letterSpacing: '0.5em' }}
              animate={{ opacity: 1, letterSpacing: '0.3em' }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-[#e63946] text-xs font-semibold tracking-[0.3em] uppercase"
            >
              Premium Fitness Equipment · Pforzheim
            </motion.span>
          </motion.div>

          {/* Headline — each word slams in */}
          <div>
            {words.map(({ text, red }, i) => (
              <div key={i} className="overflow-hidden leading-none">
                <motion.h1
                  initial={{ y: '115%', skewY: 4 }}
                  animate={{ y: '0%', skewY: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.5 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`font-display leading-[0.88] tracking-wider block ${red ? 'text-[#e63946]' : 'text-white'}`}
                  style={{ fontSize: 'clamp(52px, 8.5vw, 130px)' }}
                >
                  {text}
                </motion.h1>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-10">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-white/50 text-sm lg:text-base leading-relaxed max-w-xs tracking-wide"
            >
              Supplements, Equipment und mehr — alles aus einer Hand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 flex-shrink-0"
            >
              <motion.a
                href="https://www.fitnessstore-24.de"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, boxShadow: '0 0 50px rgba(230,57,70,0.6)' }}
                whileTap={{ scale: 0.94 }}
                className="bg-[#e63946] text-white font-body text-sm font-bold tracking-[0.2em] uppercase px-7 py-3.5 transition-shadow duration-300"
              >
                Shop Now
              </motion.a>
              <motion.a
                href="https://www.fitnessstore-24.de"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="font-body text-white/60 text-sm font-medium tracking-widest uppercase flex items-center gap-2 hover:text-white transition-colors duration-300 whitespace-nowrap"
              >
                Mehr erfahren
                <motion.svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  whileHover={{ x: 3 }}
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-8 lg:gap-14 border-t border-white/8 pt-6"
          >
            {stats.map(({ val, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                <span className="font-display text-2xl lg:text-3xl text-white tracking-widest">{val}</span>
                <span className="font-body text-white/35 text-[10px] tracking-[0.2em] uppercase mt-0.5">{label}</span>
              </motion.div>
            ))}

            <div className="ml-auto hidden lg:flex flex-col items-center gap-1.5">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="w-px h-12 bg-gradient-to-b from-[#e63946] to-transparent"
              />
              <span className="font-body text-white/25 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
