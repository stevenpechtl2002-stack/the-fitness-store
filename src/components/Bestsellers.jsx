import { useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'Whey Protein Selection',
    category: 'Supplement',
    price: '49,99',
    oldPrice: '59,99',
    rating: 5,
    reviews: 1284,
    badge: 'BESTSELLER',
    img: '/img-02.jpeg',
    tag: '#1 Protein',
  },
  {
    id: 2,
    name: 'Mass Gainer Stack',
    category: 'Supplement',
    price: '64,99',
    oldPrice: null,
    rating: 5,
    reviews: 438,
    badge: 'NEU',
    img: '/img-09.jpeg',
    tag: 'Hyper Mass',
  },
  {
    id: 3,
    name: 'EAA & Omega 3 Bundle',
    category: 'Supplement',
    price: '34,99',
    oldPrice: '44,99',
    rating: 4,
    reviews: 912,
    badge: 'SALE',
    img: '/img-05.jpeg',
    tag: 'Recovery',
  },
  {
    id: 4,
    name: 'Protein Bar Box',
    category: 'Snacks',
    price: '29,99',
    oldPrice: null,
    rating: 5,
    reviews: 2041,
    badge: 'TOP RATED',
    img: '/img-06.jpeg',
    tag: 'High Protein',
  },
  {
    id: 5,
    name: 'Vegan Protein Range',
    category: 'Supplement',
    price: '44,99',
    oldPrice: '55,00',
    rating: 5,
    reviews: 677,
    badge: null,
    img: '/img-07.jpeg',
    tag: 'Plant Based',
  },
  {
    id: 6,
    name: 'Nutrend Pro Stack',
    category: 'Supplement',
    price: '59,99',
    oldPrice: '74,99',
    rating: 4,
    reviews: 354,
    badge: 'SALE',
    img: '/img-12.jpeg',
    tag: 'Top Brand',
  },
]

function TiltCard({ product, index }) {
  const cardRef = useRef(null)
  const inView = useInView(cardRef, { once: true, margin: '-40px' })

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })
  const brightness = useSpring(useTransform(x, [-0.5, 0.5], [0.85, 1.15]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const [added, setAdded] = useState(false)
  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => {
      window.open('https://www.fitnessstore-24.de', '_blank', 'noopener noreferrer')
      setAdded(false)
    }, 400)
  }

  const row = Math.floor(index / 3)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 90, clipPath: 'inset(0 0 100% 0)' }}
      animate={inView ? { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' } : {}}
      transition={{
        duration: 1.0,
        delay: (index % 3) * 0.13 + row * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative card-gradient border border-white/5 overflow-hidden cursor-pointer"
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-square">
          <motion.img
            style={{ filter: useTransform(brightness, b => `brightness(${b})`) }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

          {/* Red shimmer on hover */}
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            whileHover={{ opacity: 1, x: '200%' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#e63946]/15 to-transparent skew-x-12 pointer-events-none"
          />

          {/* Badge */}
          {product.badge && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: (index % 3) * 0.13 + 0.5 }}
              className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-body font-bold tracking-widest uppercase ${
                product.badge === 'SALE' || product.badge === 'BESTSELLER'
                  ? 'bg-[#e63946] text-white'
                  : 'bg-white text-[#080808]'
              }`}
            >
              {product.badge}
            </motion.div>
          )}

          {/* Tag */}
          <div className="absolute top-3 right-3 px-2 py-1 border border-white/20 text-[10px] font-body text-white/60 tracking-widest uppercase backdrop-blur-sm">
            {product.tag}
          </div>
        </div>

        {/* Info */}
        <div className="p-4 lg:p-5">
          <p className="font-body text-[#e63946] text-[10px] font-semibold tracking-[0.25em] uppercase mb-1">
            {product.category}
          </p>
          <h3 className="font-display text-white text-xl lg:text-2xl tracking-wider mb-2 leading-tight">
            {product.name}
          </h3>

          {/* Stars */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: (index % 3) * 0.13 + 0.6 + i * 0.05 }}
                  width="10" height="10" viewBox="0 0 10 10"
                  fill={i < product.rating ? '#e63946' : 'none'}
                  stroke={i < product.rating ? 'none' : '#ffffff30'}
                  strokeWidth="1"
                >
                  <polygon points="5,1 6.18,3.82 9.27,4.09 7,6.1 7.64,9.15 5,7.5 2.36,9.15 3,6.1 0.73,4.09 3.82,3.82" />
                </motion.svg>
              ))}
            </div>
            <span className="font-body text-white/30 text-[10px] tracking-widest">
              ({product.reviews.toLocaleString('de-DE')})
            </span>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: (index % 3) * 0.13 + 0.7 }}
                className="font-display text-white text-2xl tracking-wider"
              >
                {product.price}€
              </motion.span>
              {product.oldPrice && (
                <span className="font-body text-white/30 text-sm line-through">
                  {product.oldPrice}€
                </span>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.88 }}
              onClick={handleAdd}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className={`w-10 h-10 flex items-center justify-center transition-all duration-300 ${
                added ? 'bg-white' : 'bg-[#e63946] hover:bg-white'
              }`}
            >
              {added ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#080808" strokeWidth="2">
                  <path d="M2 8l4 4 8-8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#080808" strokeWidth="2">
                  <path d="M8 3v10M3 8h10" strokeLinecap="round"/>
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Bottom red line on hover */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e63946] origin-left"
        />
      </motion.div>
    </motion.div>
  )
}

export default function Bestsellers() {
  const sectionRef = useRef(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const headerY = useSpring(useTransform(scrollYProgress, [0, 1], ['-4%', '4%']), { stiffness: 60, damping: 20 })

  return (
    <section id="bestseller" ref={sectionRef} className="py-24 lg:py-36 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={ref} className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <motion.div style={{ y: headerY }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
                className="w-8 h-px bg-[#e63946]"
              />
              <span className="font-body text-[#e63946] text-xs font-semibold tracking-[0.3em] uppercase">
                Bestseller
              </span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '115%', skewY: 3 }}
                animate={inView ? { y: '0%', skewY: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-white text-6xl lg:text-8xl tracking-wider leading-none"
              >
                TOP
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '115%', skewY: 3 }}
                animate={inView ? { y: '0%', skewY: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[#e63946] text-6xl lg:text-8xl tracking-wider leading-none"
              >
                SELLER
              </motion.h2>
            </div>
          </motion.div>

          <motion.a
            href="https://www.fitnessstore-24.de"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.04, borderColor: '#e63946', color: '#ffffff' }}
            className="hidden lg:flex items-center gap-3 border border-white/20 px-6 py-3 font-body text-sm text-white/60 tracking-widest uppercase transition-all duration-300 self-end"
          >
            Alle Produkte
            <motion.svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
          {products.map((p, i) => (
            <TiltCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
