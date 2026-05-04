import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  { id: 'supplements', title: 'Supplements', sub: 'Protein · Pre-Workout · BCAA', img: '/img-04.jpeg', count: '80+ Produkte', accent: true },
  { id: 'equipment',   title: 'Equipment',   sub: 'Gürtel · Bänder · Zubehör',   img: '/img-08.jpeg', count: '60+ Produkte', accent: false },
  { id: 'drinks',      title: 'Drinks',      sub: 'Protein Drinks · Riegel · Oats', img: '/img-10.jpeg', count: '45+ Produkte', accent: false },
  { id: 'zubehoer',    title: 'Zubehör',     sub: 'Shaker · Handschuhe · Bags',  img: '/img-06.jpeg', count: '30+ Produkte', accent: false },
]

function CategoryCard({ cat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, clipPath: 'inset(0 0 100% 0)' }}
      animate={inView ? { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' } : {}}
      transition={{ duration: 0.9, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => window.open('https://www.fitnessstore-24.de', '_blank', 'noopener noreferrer')}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          src={cat.img} alt={cat.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
        {cat.accent && (
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.13 + 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="absolute top-0 left-0 right-0 h-0.5 bg-[#e63946]"
          />
        )}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }} whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 w-9 h-9 bg-[#e63946] flex items-center justify-center"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.35 }}
          className="absolute inset-0 bg-[#e63946]/8" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: index * 0.13 + 0.5 }}
          className="font-body text-white/40 text-xs tracking-[0.25em] uppercase mb-1.5">{cat.sub}</motion.p>
        <motion.h3 initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: index * 0.13 + 0.6 }}
          className="font-display text-white text-4xl tracking-widest group-hover:text-[#e63946] transition-colors duration-300">{cat.title}</motion.h3>
        <motion.div initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: index * 0.13 + 0.7 }}
          className="mt-2 flex items-center gap-2">
          <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.13 + 0.8 }} style={{ originX: 0 }}
            className="w-4 h-px bg-[#e63946]" />
          <span className="font-body text-white/35 text-xs tracking-widest uppercase">{cat.count}</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Categories() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="kategorien" className="py-24 lg:py-36 max-w-7xl mx-auto px-6 lg:px-12">
      <div ref={ref} className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-6">
        <div>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }} className="flex items-center gap-3 mb-4">
            <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} style={{ originX: 0 }}
              className="w-8 h-px bg-[#e63946]" />
            <span className="font-body text-[#e63946] text-xs font-semibold tracking-[0.3em] uppercase">Kategorien</span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2 initial={{ y: '110%', skewY: 3 }} animate={inView ? { y: '0%', skewY: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-white text-6xl lg:text-8xl tracking-wider leading-none">ALLES FÜR</motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 initial={{ y: '110%', skewY: 3 }} animate={inView ? { y: '0%', skewY: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[#e63946] text-6xl lg:text-8xl tracking-wider leading-none">DEINEN ERFOLG</motion.h2>
          </div>
        </div>
        <motion.p initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-white/40 text-sm leading-relaxed max-w-xs lg:text-right tracking-wide">
          Von Premium Supplements bis zu professionellem Equipment — alles aus einer Hand.
        </motion.p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {categories.map((cat, i) => <CategoryCard key={cat.id} cat={cat} index={i} />)}
      </div>
    </section>
  )
}
