import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const hours = [
  { day: 'Montag',     time: '10:30 – 13:00  &  15:30 – 19:00' },
  { day: 'Dienstag',   time: '10:30 – 13:00  &  15:30 – 19:00' },
  { day: 'Mittwoch',   time: '10:30 – 13:00  &  15:30 – 19:00' },
  { day: 'Donnerstag', time: '10:30 – 13:00  &  15:30 – 19:00' },
  { day: 'Freitag',    time: '10:30 – 13:00  &  15:30 – 19:00' },
  { day: 'Samstag',    time: '10:00 – 15:00' },
  { day: 'Sonntag',    time: 'Geschlossen' },
]

const today = new Date().getDay() // 0 = So, 1 = Mo ...
// Remap so index 0 = Mo
const todayIndex = today === 0 ? 6 : today - 1

export default function Location() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="standort" className="py-24 lg:py-36 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div ref={ref} className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#e63946]" />
            <span className="font-body text-[#e63946] text-xs font-semibold tracking-[0.3em] uppercase">
              Standort & Öffnungszeiten
            </span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '110%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-white text-6xl lg:text-8xl tracking-wider leading-none"
            >
              KOMM
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '110%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[#e63946] text-6xl lg:text-8xl tracking-wider leading-none"
            >
              VORBEI.
            </motion.h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Address + Contact */}
            <div className="card-gradient border border-white/5 p-7 lg:p-8">
              <h3 className="font-display text-[#e63946] text-lg tracking-widest uppercase mb-5">
                Kontakt
              </h3>
              <div className="space-y-4">
                <a
                  href="https://maps.google.com/?q=Bleichstraße+12,+75173+Pforzheim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 bg-[#e63946]/10 border border-[#e63946]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#e63946] transition-colors duration-300">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#e63946" strokeWidth="1.4" className="group-hover:stroke-white transition-colors duration-300">
                      <path d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4z"/>
                      <circle cx="7" cy="5" r="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-white text-sm font-medium group-hover:text-[#e63946] transition-colors duration-300">Bleichstraße 12</p>
                    <p className="font-body text-white/50 text-sm">75173 Pforzheim</p>
                  </div>
                </a>

                <a
                  href="tel:+4972318004071"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 bg-[#e63946]/10 border border-[#e63946]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e63946] transition-colors duration-300">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#e63946" strokeWidth="1.4" className="group-hover:stroke-white transition-colors duration-300">
                      <path d="M2 2.5C2 2.5 3 5 5 7s4.5 3 4.5 3l1.5-1.5-2-2-1 .5S7 6 6 5s-.5-2-.5-2L3.5 1 2 2.5z"/>
                    </svg>
                  </div>
                  <p className="font-body text-white text-sm font-medium group-hover:text-[#e63946] transition-colors duration-300">
                    (07231) 800 40 71
                  </p>
                </a>

                <a
                  href="mailto:pforzheim@the-fitness-store.net"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 bg-[#e63946]/10 border border-[#e63946]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e63946] transition-colors duration-300">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#e63946" strokeWidth="1.4" className="group-hover:stroke-white transition-colors duration-300">
                      <rect x="1" y="3" width="12" height="8" rx="1"/>
                      <path d="M1 4l6 4 6-4"/>
                    </svg>
                  </div>
                  <p className="font-body text-white text-sm font-medium group-hover:text-[#e63946] transition-colors duration-300">
                    pforzheim@the-fitness-store.net
                  </p>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="card-gradient border border-white/5 p-7 lg:p-8 flex-1">
              <h3 className="font-display text-[#e63946] text-lg tracking-widest uppercase mb-5">
                Öffnungszeiten
              </h3>
              <div className="space-y-2.5">
                {hours.map((h, i) => {
                  const isToday = i === todayIndex
                  const isClosed = h.time === 'Geschlossen'
                  return (
                    <div
                      key={h.day}
                      className={`flex items-center justify-between py-2 border-b border-white/5 last:border-0 ${
                        isToday ? 'relative' : ''
                      }`}
                    >
                      {isToday && (
                        <div className="absolute -left-7 lg:-left-8 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#e63946]" />
                      )}
                      <span className={`font-body text-sm tracking-wide ${
                        isToday ? 'text-white font-semibold' : 'text-white/45'
                      }`}>
                        {h.day}
                        {isToday && (
                          <span className="ml-2 text-[#e63946] text-[10px] tracking-widest uppercase font-normal">Heute</span>
                        )}
                      </span>
                      <span className={`font-body text-sm ${
                        isClosed ? 'text-white/25' : isToday ? 'text-[#e63946] font-medium' : 'text-white/60'
                      }`}>
                        {h.time}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[400px] lg:min-h-0"
          >
            <div className="absolute inset-0 border border-white/5 overflow-hidden">
              <iframe
                title="The Fitness Store Pforzheim"
                src="https://maps.google.com/maps?q=Bleichstraße+12,+75173+Pforzheim,+Germany&output=embed&z=17"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Red top border accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#e63946] z-10" />

            {/* Map label */}
            <div className="absolute bottom-4 left-4 z-10 bg-[#080808]/90 backdrop-blur-sm border border-white/10 px-3 py-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#e63946] animate-pulse" />
              <span className="font-body text-white text-xs tracking-widest uppercase">
                Bleichstraße 12 · Pforzheim
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
