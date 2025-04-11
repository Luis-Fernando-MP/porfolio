'use client'

import { FC, HTMLProps, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'

type EasingTransition =
  | 'ease-out'
  | 'ease-in-out'
  | 'linear'
  | 'bounce'
  | 'ease-in-back'
  | 'ease-out-back'
  | 'ease-in-elastic'
  | 'ease-out-elastic'
  | 'ease-in-circ'

interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode
  blur?: boolean
  duration?: number
  easing?: EasingTransition
  delay?: number
  threshold?: number
  initialOpacity?: number
  observeOnce?: boolean
  scale?: number
  direction?: 'vertical' | 'horizontal'
  distance?: number
  scrollDirection?: 'up' | 'down' | 'both'
}

const TransitionContent: FC<Props> = ({
  children,
  blur = true,
  duration = 500,
  easing = 'ease-in-out',
  delay = 0,
  threshold = 0.5,
  initialOpacity = 0,
  className = '',
  observeOnce = false,
  scale = 1,
  direction = 'vertical',
  distance = 70,
  scrollDirection = 'down',
  ...props
}) => {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const lastScrollY = useRef<number>(window.scrollY)

  const getEasing = useCallback(() => {
    switch (easing) {
      case 'ease-in-out':
        return 'ease-in-out'
      case 'linear':
        return 'linear'
      case 'bounce':
        return 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
      case 'ease-in-back':
        return 'cubic-bezier(0.60, -0.28, 0.735, 0.045)'
      case 'ease-out-back':
        return 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      case 'ease-in-elastic':
        return 'cubic-bezier(0.36, 0, 0.66, -0.56)'
      case 'ease-out-elastic':
        return 'cubic-bezier(0.64, 0, 0.78, 0.68)'
      case 'ease-in-circ':
        return 'cubic-bezier(0.60, 0.04, 0.98, 0.335)'
      default:
        return 'ease-out'
    }
  }, [easing])

  const styles = useMemo(() => {
    const transformStyle = direction === 'vertical' ? `translateY(${distance}px)` : `translateX(${distance}px)`
    const transitionType = getEasing()

    return {
      opacity: inView ? 1 : initialOpacity,
      transition: `opacity ${duration}ms ${transitionType}, transform ${duration}ms ${transitionType}`,
      transitionDelay: `${delay}s`,
      willChange: 'opacity, transform',
      transformOrigin: 'center',
      transform: `scale(${inView ? 1 : scale}) ${inView ? 'translate(0)' : transformStyle}`
    }
  }, [inView, duration, delay, blur, initialOpacity, scale, direction, distance, getEasing])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleIntersection: IntersectionObserverCallback = ([entry]) => {
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollY.current
      const isScrollingUp = currentScrollY < lastScrollY.current

      if (observeOnce) observer.unobserve(element)

      if (entry.isIntersecting) {
        if (
          (scrollDirection === 'down' && isScrollingDown) ||
          (scrollDirection === 'up' && isScrollingUp) ||
          scrollDirection === 'both'
        ) {
          setInView(true)
        }
      } else if (
        scrollDirection === 'both' ||
        (scrollDirection === 'up' && isScrollingDown) ||
        (scrollDirection === 'down' && isScrollingUp)
      ) {
        setInView(false)
      }

      lastScrollY.current = currentScrollY
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold })
    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, observeOnce, scrollDirection])

  return (
    <div ref={ref} className={className} style={styles} {...props}>
      {children}
    </div>
  )
}

export default TransitionContent
