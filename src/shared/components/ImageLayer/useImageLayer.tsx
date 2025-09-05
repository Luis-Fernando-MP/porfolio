'use client'

import lottie, { AnimationItem } from 'lottie-web'
import { useCallback, useEffect, useRef } from 'react'

export interface ImageLayerProps {
  src: string
  enableParallax?: boolean
  isLottie?: boolean
}

const useImageLayer = ({ src, enableParallax, isLottie }: ImageLayerProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const lottieRef = useRef<HTMLDivElement>(null)
  const lottieAnimRef = useRef<AnimationItem | null>(null)

  const updateParallax = useCallback(() => {
    if (!wrapperRef.current) return

    const rect = wrapperRef.current.getBoundingClientRect()
    if (rect.height === 0) return

    const rawProgress = rect.top / window.innerHeight
    const maxOffset = wrapperRef.current.offsetHeight / 2
    const translateY = Math.max(-1, Math.min(1, rawProgress)) * maxOffset

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
      .then(res => res.json())
      .then(animationData => {
        if (!lottieRef.current) return

        const anim = lottie.loadAnimation({
          container: lottieRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animationData,

          rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
        })
        anim.setSpeed(2)

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

  return { wrapperRef, lottieRef, isLottie }
}

export default useImageLayer
