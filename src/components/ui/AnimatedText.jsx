import { motion } from 'framer-motion'

export function AnimatedWords({ text, className, delay = 0, once = true }) {
  const words = text.split(' ')
  return (
    <span className={className} style={{ display: 'inline-block', overflow: 'hidden' }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em' }}>
          <motion.span
            display="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once }}
            transition={{
              duration: 0.75,
              delay: delay + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function AnimatedChars({ text, className, delay = 0, once = true }) {
  const chars = text.split('')
  return (
    <span className={className} style={{ display: 'inline-block' }}>
      {chars.map((char, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
          <motion.span
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.03,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? ' ' : char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function RevealLine({ children, className, delay = 0, once = true, direction = 'up' }) {
  const variants = {
    hidden: {
      y: direction === 'up' ? '110%' : direction === 'down' ? '-110%' : '0%',
      x: direction === 'left' ? '110%' : direction === 'right' ? '-110%' : '0%',
      opacity: 0,
    },
    visible: {
      y: '0%', x: '0%', opacity: 1,
      transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
    },
  }
  return (
    <div style={{ overflow: 'hidden' }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function CountUp({ to, delay = 0, suffix = '', duration = 2 }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <motion.span
        initial={{ innerText: 0 }}
        whileInView={{ innerText: to }}
        viewport={{ once: true }}
        transition={{ duration, delay, ease: 'easeOut' }}
        onUpdate={(latest) => {}}
      >
        {to}{suffix}
      </motion.span>
    </motion.span>
  )
}
