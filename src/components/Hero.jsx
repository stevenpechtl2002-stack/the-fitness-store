import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const lineVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 scale-110"
      >
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80&auto=format&fit=crop"
          alt="Fitness"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-[#080808]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
      </motion.div>

      {/* Red accent stripe */}
      <motion.div
        initial={{ scaleY: 0, originY: 1 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[52%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#e63946] to-transparent opacity-40 hidden lg:block"
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-[#e63946]" />
          <span className="font-body text-[#e63946] text-xs font-semibold tracking-[0.3em] uppercase">
            Premium Fitness Equipment
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="overflow-hidden"
        >
          {['TRAIN', 'HARDER.', 'LIVE', 'STRONGER.'].map((word, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                variants={lineVariants}
                className={`font-display leading-[0.88] tracking-wider ${
                  i % 2 === 1
                    ? 'text-[#e63946] text-[13vw] lg:text-[11vw]'
                    : 'text-white text-[13vw] lg:text-[11vw]'
                }`}
                style={{ display: 'block' }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        {/* Subtext + CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-white/50 text-sm lg:text-base leading-relaxed max-w-sm tracking-wide"
          >
            Alles was du brauchst für maximale Performance. Supplements, Equipment und Kleidung — kompromisslos.
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(230,57,70,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#e63946] text-white font-body text-sm font-bold tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300"
            >
              Shop Now
            </motion.button>
            <motion.button
              whileHover={{ x: 6 }}
              className="font-body text-white/60 text-sm font-medium tracking-widest uppercase flex items-center gap-2 hover:text-white transition-colors duration-300"
            >
              Mehr erfahren
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex items-center gap-10 lg:gap-16"
        >
          {[
            { val: '50K+', label: 'Kunden' },
            { val: '4.9★', label: 'Bewertung' },
            { val: '200+', label: 'Produkte' },
          ].map(({ val, label }) => (
            <div key={label} className="flex flex-col">
              <span className="font-display text-3xl lg:text-4xl text-white tracking-widest">
                {val}
              </span>
              <span className="font-body text-white/40 text-xs tracking-[0.2em] uppercase mt-0.5">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-[#e63946] to-transparent"
        />
        <span className="font-body text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
