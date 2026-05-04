import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TestimonialsColumn, testimonials } from '@/components/ui/testimonials-columns-1'

const firstColumn  = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn  = testimonials.slice(6, 9)

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="bewertungen" className="py-24 lg:py-36 bg-[#141414] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div ref={ref} className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
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

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-start lg:items-end gap-2"
          >
            <div className="font-display text-7xl lg:text-8xl text-white tracking-wider leading-none">4.9</div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#e63946">
                  <polygon points="7,1.5 8.56,4.67 12.07,5.14 9.54,7.61 10.12,11.08 7,9.45 3.88,11.08 4.46,7.61 1.93,5.14 5.44,4.67" />
                </svg>
              ))}
            </div>
            <p className="font-body text-white/40 text-xs tracking-widest uppercase">Google Bewertungen · Pforzheim</p>
            <a
              href="https://www.google.com/maps/place/The+Fitness+Store+Pforzheim"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[#e63946]/70 hover:text-[#e63946] text-[11px] tracking-widest uppercase transition-colors duration-300 flex items-center gap-1.5 mt-1"
            >
              Auf Google ansehen →
            </a>
          </motion.div>
        </div>

        {/* Scrolling columns */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={20} />
        </motion.div>

      </div>
    </section>
  )
}
