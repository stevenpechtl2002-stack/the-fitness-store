import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const reviews = [
  {
    id: 1,
    name: 'Markus T.',
    role: 'Powerlifter',
    rating: 5,
    text: 'Absolut top Qualität! Das Whey Protein ist das beste, das ich je getestet habe. Schnelle Lieferung, top Verpackung. Ich werde nie wieder woanders kaufen.',
    product: 'Ultra Whey Pro',
    avatar: 'MT',
    verified: true,
  },
  {
    id: 2,
    name: 'Felix K.',
    role: 'Bodybuilder',
    rating: 5,
    text: 'Der Power Rack X9 ist ein Monster. Stabil, hochwertig, und der Kundenservice war erstklassig. The Fitness Store ist mein Go-To-Shop für alles rund ums Training.',
    product: 'Power Rack X9',
    avatar: 'FK',
    verified: true,
  },
  {
    id: 3,
    name: 'Jonas M.',
    role: 'Calisthenics Athlete',
    rating: 5,
    text: 'Endlich ein Shop der weiß, was Qualität bedeutet. Das Pre-Workout ist ein Game-Changer. Beste Energie die ich je erlebt habe, ohne den Crash danach!',
    product: 'Pre-Workout BEAST',
    avatar: 'JM',
    verified: true,
  },
  {
    id: 4,
    name: 'Dominik B.',
    role: 'CrossFit Athlet',
    rating: 5,
    text: 'Ich kaufe hier seit 2 Jahren und bin jedes Mal begeistert. Top Produkte, faire Preise, und die Lieferung ist immer blitzschnell. Klare Weiterempfehlung!',
    product: 'Gym Bag Pro',
    avatar: 'DB',
    verified: true,
  },
  {
    id: 5,
    name: 'Stefan R.',
    role: 'Personal Trainer',
    rating: 5,
    text: 'Als Personal Trainer empfehle ich The Fitness Store all meinen Kunden. Die Produktqualität ist unübertroffen und der Service ist einfach sensationell.',
    product: 'Rubber Hex Dumbbells',
    avatar: 'SR',
    verified: true,
  },
]

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={i < count ? '#e63946' : 'none'} stroke={i < count ? 'none' : '#333'} strokeWidth="1">
          <polygon points="7,1.5 8.56,4.67 12.07,5.14 9.54,7.61 10.12,11.08 7,9.45 3.88,11.08 4.46,7.61 1.93,5.14 5.44,4.67" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [active, setActive] = useState(0)

  return (
    <section id="bewertungen" className="py-24 lg:py-36 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={ref} className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-[#e63946]" />
              <span className="font-body text-[#e63946] text-xs font-semibold tracking-[0.3em] uppercase">
                Kundenstimmen
              </span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '110%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-white text-6xl lg:text-8xl tracking-wider leading-none"
              >
                50.000+
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '110%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[#e63946] text-6xl lg:text-8xl tracking-wider leading-none"
              >
                KUNDEN
              </motion.h2>
            </div>
          </div>

          {/* Overall Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-start lg:items-end gap-2"
          >
            <div className="font-display text-7xl lg:text-8xl text-white tracking-wider leading-none">
              4.9
            </div>
            <Stars />
            <p className="font-body text-white/40 text-xs tracking-widest uppercase">
              Basierend auf 12.400+ Bewertungen
            </p>
          </motion.div>
        </div>

        {/* Review Cards */}
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-5 mb-8">
          {reviews.slice(0, 3).map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="card-gradient border border-white/5 p-6 lg:p-8 relative group hover:border-[#e63946]/30 transition-all duration-500"
            >
              {/* Quote mark */}
              <div className="font-display text-6xl text-[#e63946]/10 leading-none absolute top-4 right-6 group-hover:text-[#e63946]/20 transition-colors duration-300">
                "
              </div>

              <Stars count={review.rating} />

              <p className="font-body text-white/60 text-sm leading-relaxed mt-4 mb-6">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#e63946] flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-white text-xs">{review.avatar}</span>
                  </div>
                  <div>
                    <p className="font-body text-white text-sm font-semibold">{review.name}</p>
                    <p className="font-body text-white/30 text-xs tracking-widest uppercase">{review.role}</p>
                  </div>
                </div>
                {review.verified && (
                  <div className="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="#e63946">
                      <path d="M6 0L7.5 4.5H12L8.25 7.25L9.75 12L6 9.25L2.25 12L3.75 7.25L0 4.5H4.5L6 0Z"/>
                    </svg>
                    <span className="font-body text-[#e63946] text-[10px] tracking-widest uppercase">Verifiziert</span>
                  </div>
                )}
              </div>

              <div className="mt-3">
                <span className="font-body text-white/20 text-[10px] tracking-widest uppercase">Produkt: </span>
                <span className="font-body text-white/40 text-[10px] tracking-widest uppercase">{review.product}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two more reviews */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-5">
          {reviews.slice(3).map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="card-gradient border border-white/5 p-6 relative group hover:border-[#e63946]/30 transition-all duration-500 flex gap-6 items-start"
            >
              <div className="w-10 h-10 bg-[#e63946] flex items-center justify-center flex-shrink-0">
                <span className="font-display text-white">{review.avatar}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-body text-white font-semibold text-sm">{review.name}</p>
                    <p className="font-body text-white/30 text-xs tracking-widest uppercase">{review.role}</p>
                  </div>
                  <Stars count={review.rating} />
                </div>
                <p className="font-body text-white/50 text-sm leading-relaxed">"{review.text}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
