'use client'

import lottie, { AnimationItem } from 'lottie-web'
import { useCallback, useEffect, useRef, useState } from 'react'

export interface ImageLayerProps {
  src: string
  enableParallax?: boolean
  lazy?: boolean
  isLottie?: boolean
}

const useImageLayer = ({ src, enableParallax, lazy, isLottie }: ImageLayerProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const lottieRef = useRef<HTMLDivElement>(null)
  const lottieAnimRef = useRef<AnimationItem | null>(null)

  const [prevSrc, setPrevSrc] = useState<string | null>(null)
  const [currentSrc, setCurrentSrc] = useState<string | null>(null)
  const [isImageFullyLoaded, setIsImageFullyLoaded] = useState(false)
  const [isBlurActive, setIsBlurActive] = useState(false)

  const TRANSITION_DURATION_MS = 500

  const loadImage = useCallback(() => {
    if (!src) return

    if (currentSrc && currentSrc !== src) {
      setPrevSrc(currentSrc)
    } else {
      setPrevSrc(null)
    }

    setIsImageFullyLoaded(false)
    setCurrentSrc(null)

    const img = new Image()
    img.src = src

    img.onload = () => {
      setIsBlurActive(true)
      setCurrentSrc(src)

      setTimeout(() => {
        setIsBlurActive(false)
        setIsImageFullyLoaded(true)
        if (prevSrc) {
          setTimeout(() => setPrevSrc(null), TRANSITION_DURATION_MS)
        }
      }, TRANSITION_DURATION_MS)
    }
  }, [src, currentSrc, prevSrc])

  useEffect(() => {
    if (isLottie || !wrapperRef.current) return

    setIsImageFullyLoaded(false)
    setIsBlurActive(false)

    if (!lazy) {
      loadImage()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadImage()
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(wrapperRef.current)

    return () => {
      observer.disconnect()
    }
  }, [src, lazy, isLottie, loadImage])

  const updateParallax = useCallback(() => {
    if (!wrapperRef.current) return

    const rect = wrapperRef.current.getBoundingClientRect()
    if (rect.height === 0) return

    const rawProgress = rect.top / window.innerHeight
    const maxOffset = wrapperRef.current.offsetHeight / 2
    const clampedProgress = Math.max(-1, Math.min(1, rawProgress))
    const translateY = clampedProgress * maxOffset

    wrapperRef.current.querySelectorAll<HTMLElement>('.imageLayer-parallax').forEach(layer => {
      layer.style.transform = `translateY(${translateY}px)`
    })
  }, [])

  useEffect(() => {
    if (!enableParallax || !wrapperRef.current) return

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateParallax()
          ticking = false
        })
        ticking = true
      }
    }

    updateParallax()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [enableParallax, updateParallax])

  useEffect(() => {
    if (!isLottie || !src || !lottieRef.current) {
      if (lottieAnimRef.current) {
        lottieAnimRef.current.destroy()
        lottieAnimRef.current = null
      }
      return
    }

    if (lottieAnimRef.current) {
      lottieAnimRef.current.destroy()
      lottieAnimRef.current = null
    }

    fetch(src)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json()
      })
      .then(animationData => {
        if (!lottieRef.current) return

        const anim = lottie.loadAnimation({
          container: lottieRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        })

        anim.setSpeed(10)
        lottieAnimRef.current = anim
      })
      .catch(error => {
        console.error('Error loading Lottie animation:', error)
      })

    return () => {
      if (lottieAnimRef.current) {
        lottieAnimRef.current.destroy()
        lottieAnimRef.current = null
      }
    }
  }, [src, isLottie])

  return { wrapperRef, isImageFullyLoaded, isBlurActive, lottieRef, prevSrc, currentSrc }
}

export default useImageLayer
