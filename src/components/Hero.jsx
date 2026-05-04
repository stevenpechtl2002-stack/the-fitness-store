import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const lineVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex flex-col justify-between"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 scale-110"
      >
        <img
          src="/img-01.jpeg"
          alt="The Fitness Store"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/75 via-[#080808]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent" />
      </motion.div>

      {/* Content — fills viewport top to bottom */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col justify-between h-full max-w-7xl mx-auto px-6 lg:px-12 w-full py-28 lg:py-32"
      >
        {/* Top: eyebrow + headline */}
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-8 h-px bg-[#e63946]" />
            <span className="font-body text-[#e63946] text-xs font-semibold tracking-[0.3em] uppercase">
              Premium Fitness Equipment · Pforzheim
            </span>
          </motion.div>

          {/* Headline — clamped so it always fits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { text: 'TRAIN',    red: false },
              { text: 'HARDER.', red: true  },
              { text: 'LIVE',     red: false },
              { text: 'STRONGER.', red: true },
            ].map(({ text, red }, i) => (
              <div key={i} className="overflow-hidden leading-none">
                <motion.h1
                  variants={lineVariants}
                  className={`font-display leading-[0.9] tracking-wider block ${
                    red ? 'text-[#e63946]' : 'text-white'
                  }`}
                  style={{ fontSize: 'clamp(52px, 8.5vw, 130px)' }}
                >
                  {text}
                </motion.h1>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom: subtext + CTA + stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Sub + CTA row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-10">
            <motion.p
              variants={fadeUp}
              className="font-body text-white/50 text-sm lg:text-base leading-relaxed max-w-xs tracking-wide"
            >
              Supplements, Equipment und mehr — alles aus einer Hand.
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-center gap-4 flex-shrink-0">
              <motion.a
                href="https://www.fitnessstore-24.de"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(230,57,70,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#e63946] text-white font-body text-sm font-bold tracking-[0.2em] uppercase px-7 py-3.5 transition-all duration-300"
              >
                Shop Now
              </motion.a>
              <motion.a
                href="https://www.fitnessstore-24.de"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className="font-body text-white/60 text-sm font-medium tracking-widest uppercase flex items-center gap-2 hover:text-white transition-colors duration-300 whitespace-nowrap"
              >
                Mehr erfahren
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-8 lg:gap-14 border-t border-white/8 pt-6"
          >
            {[
              { val: '50K+', label: 'Kunden' },
              { val: '4.9★', label: 'Google Rating' },
              { val: '200+', label: 'Produkte' },
            ].map(({ val, label }) => (
              <div key={label} className="flex flex-col">
                <span className="font-display text-2xl lg:text-3xl text-white tracking-widest">
                  {val}
                </span>
                <span className="font-body text-white/35 text-[10px] tracking-[0.2em] uppercase mt-0.5">
                  {label}
                </span>
              </div>
            ))}

            {/* Scroll indicator inline */}
            <div className="ml-auto hidden lg:flex flex-col items-center gap-1.5">
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="w-px h-10 bg-gradient-to-b from-[#e63946] to-transparent"
              />
              <span className="font-body text-white/25 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
