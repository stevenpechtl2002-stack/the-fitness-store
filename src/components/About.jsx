import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion'

const pillars = [
  { num: '01', title: 'Qualität', body: 'Jedes Produkt wird streng geprüft. Nur das Beste kommt in unsere Regale — kein Kompromiss, keine Ausnahme.' },
  { num: '02', title: 'Vertrauen', body: 'Über 50.000 zufriedene Kunden vertrauen uns seit 2018. Transparenz und Ehrlichkeit sind unsere Grundwerte.' },
  { num: '03', title: 'Performance', body: 'Wir kennen das Training. Unsere Produkte sind für echte Athleten entwickelt — von der Bühne bis zum Keller-Gym.' },
]

export default function About() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const inView = useInView(textRef, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const rawImgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const imgY = useSpring(rawImgY, { stiffness: 50, damping: 20 })
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1.0])

  return (
    <section id="über-uns" ref={sectionRef} className="py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden">
              <motion.img
                style={{ y: imgY, scale: imgScale }}
                src="/img-11.jpeg"
                alt="The Fitness Store Team"
                className="w-full h-[500px] lg:h-[650px] object-cover object-top"
              />
            </div>
            {/* Animated frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-[#e63946]/25 pointer-events-none"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
              className="absolute top-0 left-0 right-0 h-0.5 bg-[#e63946]"
            />
            {/* Floating year */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -left-6 bg-[#080808] border border-white/10 p-6 lg:p-8"
            >
              <div className="font-display text-5xl lg:text-6xl text-[#e63946] tracking-wider">2018</div>
              <div className="font-body text-white/50 text-xs tracking-[0.2em] uppercase mt-1">Gegründet</div>
            </motion.div>
          </div>

          {/* Text */}
          <div ref={textRef} className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <motion.div
                initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }} className="w-8 h-px bg-[#e63946]"
              />
              <span className="font-body text-[#e63946] text-xs font-semibold tracking-[0.3em] uppercase">Über uns</span>
            </motion.div>

            <div className="overflow-hidden mb-1">
              <motion.h2 initial={{ y: '110%', skewY: 3 }} animate={inView ? { y: '0%', skewY: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-white text-5xl lg:text-7xl tracking-wider leading-none">WIR LEBEN</motion.h2>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h2 initial={{ y: '110%', skewY: 3 }} animate={inView ? { y: '0%', skewY: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[#e63946] text-5xl lg:text-7xl tracking-wider leading-none">FITNESS.</motion.h2>
            </div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-white/50 text-sm lg:text-base leading-relaxed mb-12 max-w-md">
              The Fitness Store wurde von Athleten für Athleten gegründet. Wir wissen, was es braucht, um Ziele zu erreichen — deshalb bieten wir nur Produkte an, die wir selbst verwenden und vertrauen.
            </motion.p>

            <div className="space-y-0">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-6 group py-6 border-b border-white/8 last:border-0"
                >
                  <div className="flex-shrink-0 w-10">
                    <motion.span
                      initial={{ opacity: 0.15 }}
                      whileHover={{ opacity: 1 }}
                      className="font-display text-[#e63946]/30 text-3xl group-hover:text-[#e63946] transition-colors duration-400 tracking-wider"
                    >{p.num}</motion.span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-display text-white text-xl tracking-widest mb-2 group-hover:text-[#e63946] transition-colors duration-300">{p.title}</h4>
                    <p className="font-body text-white/40 text-sm leading-relaxed">{p.body}</p>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    style={{ originX: 0 }}
                    className="absolute left-0 bottom-0 h-px bg-[#e63946]/20"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
