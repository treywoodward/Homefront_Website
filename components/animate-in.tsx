'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  from?: 'bottom' | 'left' | 'right' | 'fade'
}

export function AnimateIn({ children, className, delay = 0, from = 'bottom' }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hiddenTransform = {
    bottom: 'translateY(22px)',
    left: 'translateX(-22px)',
    right: 'translateX(22px)',
    fade: 'translateY(0)',
  }[from]

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0,0)' : hiddenTransform,
        transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
