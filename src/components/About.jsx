import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const pillars = [
  {
    num: '01',
    title: 'Qualität',
    body: 'Jedes Produkt wird streng geprüft. Nur das Beste kommt in unsere Regale — kein Kompromiss, keine Ausnahme.',
  },
  {
    num: '02',
    title: 'Vertrauen',
    body: 'Über 50.000 zufriedene Kunden vertrauen uns seit 2018. Transparenz und Ehrlichkeit sind unsere Grundwerte.',
  },
  {
    num: '03',
    title: 'Performance',
    body: 'Wir kennen das Training. Unsere Produkte sind für echte Athleten entwickelt — von der Bühne bis zum Keller-Gym.',
  },
]

export default function About() {
  const sectionRef = useRef(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const imgX = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])

  return (
    <section id="über-uns" ref={sectionRef} className="py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              style={{ x: imgX }}
              className="relative"
            >
              <img
                src="/img-11.jpeg"
                alt="The Fitness Store"
                className="w-full h-[500px] lg:h-[650px] object-cover object-top"
              />
              {/* Red frame accent */}
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-[#e63946]/30 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#e63946]" />

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -left-6 bg-[#3d3d3d] border border-white/10 p-6 lg:p-8"
              >
                <div className="font-display text-5xl lg:text-6xl text-[#e63946] tracking-wider">
                  2018
                </div>
                <div className="font-body text-white/50 text-xs tracking-[0.2em] uppercase mt-1">
                  Gegründet
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Text Side */}
          <div ref={ref} className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-[#e63946]" />
              <span className="font-body text-[#e63946] text-xs font-semibold tracking-[0.3em] uppercase">
                Über uns
              </span>
            </motion.div>

            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={{ y: '110%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-white text-5xl lg:text-7xl tracking-wider leading-none"
              >
                WIR LEBEN
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: '110%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[#e63946] text-5xl lg:text-7xl tracking-wider leading-none"
              >
                FITNESS.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-body text-white/50 text-sm lg:text-base leading-relaxed mb-12 max-w-md"
            >
              The Fitness Store wurde von Athleten für Athleten gegründet. Wir wissen, was es braucht, um Ziele zu erreichen — deshalb bieten wir nur Produkte an, die wir selbst verwenden und vertrauen.
            </motion.p>

            {/* Pillars */}
            <div className="space-y-8">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <span className="font-display text-[#e63946]/30 text-3xl group-hover:text-[#e63946] transition-colors duration-300 tracking-wider">
                      {p.num}
                    </span>
                  </div>
                  <div className="border-t border-white/10 pt-4 flex-1">
                    <h4 className="font-display text-white text-xl tracking-widest mb-2">
                      {p.title}
                    </h4>
                    <p className="font-body text-white/40 text-sm leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
