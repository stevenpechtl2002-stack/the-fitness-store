import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    id: 'supplements',
    title: 'Supplements',
    sub: 'Protein • Pre-Workout • BCAA',
    img: '/img-04.jpeg',
    count: '80+ Produkte',
    accent: true,
  },
  {
    id: 'equipment',
    title: 'Equipment',
    sub: 'Gürtel • Bänder • Zubehör',
    img: '/img-08.jpeg',
    count: '60+ Produkte',
    accent: false,
  },
  {
    id: 'kleidung',
    title: 'Drinks & Snacks',
    sub: 'Protein Drinks • Riegel • Oats',
    img: '/img-10.jpeg',
    count: '45+ Produkte',
    accent: false,
  },
  {
    id: 'zubehoer',
    title: 'Zubehör',
    sub: 'Shaker • Handschuhe • Bags',
    img: '/img-06.jpeg',
    count: '30+ Produkte',
    accent: false,
  },
]

function CategoryCard({ cat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden cursor-pointer"
      onClick={() => window.open('https://www.fitnessstore-24.de', '_blank', 'noopener noreferrer')}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          src={cat.img}
          alt={cat.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />

        {/* Red accent top border */}
        {cat.accent && (
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#e63946]" />
        )}

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-[#e63946]/10"
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-body text-white/40 text-xs tracking-[0.25em] uppercase mb-1.5">
              {cat.sub}
            </p>
            <h3 className="font-display text-white text-4xl tracking-widest">
              {cat.title}
            </h3>
          </div>
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            className="hidden group-hover:flex items-center justify-center w-10 h-10 bg-[#e63946]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="w-4 h-px bg-[#e63946]" />
          <span className="font-body text-white/40 text-xs tracking-widest uppercase">
            {cat.count}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Categories() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="kategorien" className="py-24 lg:py-36 max-w-7xl mx-auto px-6 lg:px-12">
      {/* Header */}
      <div ref={ref} className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#e63946]" />
            <span className="font-body text-[#e63946] text-xs font-semibold tracking-[0.3em] uppercase">
              Kategorien
            </span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '110%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-white text-6xl lg:text-8xl tracking-wider leading-none"
            >
              ALLES FÜR
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '110%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[#e63946] text-6xl lg:text-8xl tracking-wider leading-none"
            >
              DEINEN ERFOLG
            </motion.h2>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-body text-white/40 text-sm leading-relaxed max-w-xs lg:text-right tracking-wide"
        >
          Von Premium Supplements bis zu professionellem Equipment — alles aus einer Hand.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {categories.map((cat, i) => (
          <CategoryCard key={cat.id} cat={cat} index={i} />
        ))}
      </div>
    </section>
  )
}
