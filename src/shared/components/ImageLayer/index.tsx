'use client'

import { acl } from '@/shared/acl'
import { FC, HtmlHTMLAttributes, useEffect, useRef, useState } from 'react'

import './style.scss'

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  src: string
  blur?: string
  alt?: string
  title?: string
  enableParallax?: boolean
  lazy?: boolean
}

/**
 * ImageLayer is a React component that renders a background image with optional parallax
 * and lazy-loading behavior. It supports transitions between previous and current images
 * using smooth fade effects.
 *
 * @component
 * @param {string} src - The source URL of the main image.
 * @param {string} [blur] - Optional CSS background value to show as a blurred placeholder.
 * @param {string} [alt] - Alternative text for accessibility.
 * @param {string} [title] - Tooltip text shown on hover.
 * @param {boolean} [enableParallax=false] - Enables vertical parallax effect on scroll.
 * @param {boolean} [lazy=false] - Enables lazy loading with IntersectionObserver.
 * @param {HtmlHTMLAttributes<HTMLDivElement>} props - Additional div props.
 *
 * @example
 * ```tsx
 * <ImageLayer
 *   src="/images/hero.jpg"
 *   blur="linear-gradient(#00000055, #00000055)"
 *   alt="Scenic mountain"
 *   title="Mountain View"
 *   enableParallax={false}
 *   lazy={true}
 *   className="my-image"
 * />
 * ```
 */
const ImageLayer: FC<Props> = ({
  className = '',
  src,
  blur,
  style,
  alt = '',
  enableParallax = false,
  lazy = false,
  ...props
}) => {
  const [prevSrc, setPrevSrc] = useState<string | null>(null)
  const [currentSrc, setCurrentSrc] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const loadImage = () => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setIsLoaded(false)
      setPrevSrc(currentSrc)
      setTimeout(() => {
        setCurrentSrc(src)
        setIsLoaded(true)
      }, 100)
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (!src || !container) return
    if (!lazy) return loadImage()

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        loadImage()
        observer.disconnect()
      },
      { threshold: 0.1 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [src, lazy])

  useEffect(() => {
    if (!enableParallax || !containerRef.current) return

    let ticking = false

    const updateParallax = () => {
      const container = containerRef.current
      if (!container) return

      const layers = container.querySelectorAll('.imageLayer-parallax')
      const rect = container.getBoundingClientRect()
      const progress = rect.top / window.innerHeight
      const maxOffset = container.offsetHeight * 0.5
      const translateY = Math.max(-maxOffset, Math.min(maxOffset, progress * maxOffset))

      layers.forEach(layer => {
        ;(layer as HTMLElement).style.transform = `translateY(${translateY}px)`
      })

      ticking = false
    }

    const handleScroll = () => {
      if (ticking) return
      requestAnimationFrame(updateParallax)
      ticking = true
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [enableParallax])

  const renderLayer = (src: string | null, fadeClass: string) => {
    if (!src) return null
    return (
      <div
        className={`imageLayer-layer ${fadeClass} ${acl(enableParallax, 'imageLayer-parallax')}`}
        style={{ backgroundImage: `url(${src})` }}
        role='img'
        aria-label={alt}
      />
    )
  }

  return (
    <div
      ref={containerRef}
      {...props}
      className={`imageLayer ${className}`}
      style={{ ...style, ...(blur ? { background: blur } : {}) }}
      role='img'
      aria-label={alt}
      title={alt}
    >
      {renderLayer(prevSrc, isLoaded ? 'imageLayer-layer__fadeOut' : 'imageLayer-layer__visible')}
      {renderLayer(currentSrc, isLoaded ? 'imageLayer-layer__fadeIn' : 'imageLayer-layer__hidden')}
    </div>
  )
}

export default ImageLayer
