import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const springX = useSpring(cursorX, { stiffness: 120, damping: 18, mass: 0.5 })
  const springY = useSpring(cursorY, { stiffness: 120, damping: 18, mass: 0.5 })
  const dotSpringX = useSpring(dotX, { stiffness: 600, damping: 30 })
  const dotSpringY = useSpring(dotY, { stiffness: 600, damping: 30 })

  const isHovering = useRef(false)
  const ringScale = useMotionValue(1)
  const ringOpacity = useMotionValue(1)
  const ringScaleSpring = useSpring(ringScale, { stiffness: 200, damping: 20 })

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      dotX.set(e.clientX - 3)
      dotY.set(e.clientY - 3)
    }

    const onEnter = () => { ringScale.set(2.2); ringOpacity.set(0.5) }
    const onLeave = () => { ringScale.set(1); ringOpacity.set(1) }

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a,button,[role=button]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    const observer = new MutationObserver(() => {
      document.querySelectorAll('a,button,[role=button]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Ring */}
      <motion.div
        style={{ x: springX, y: springY, scale: ringScaleSpring, opacity: ringOpacity }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#e63946] pointer-events-none z-[9999] mix-blend-difference"
      />
      {/* Dot */}
      <motion.div
        style={{ x: dotSpringX, y: dotSpringY }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#e63946] pointer-events-none z-[9999]"
      />
    </>
  )
}
