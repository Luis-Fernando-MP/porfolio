'use client'

import { acl } from '@/shared/acl'
import lottie from 'lottie-web'
import { FC, HtmlHTMLAttributes, useEffect, useRef, useState } from 'react'

import './style.scss'

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  src: string
  blur?: string
  alt?: string
  title?: string
  enableParallax?: boolean
  lazy?: boolean
  isLottie?: boolean
}

/**
 * ImageLayer is a React component that renders a background image or a Lottie animation,
 * with optional parallax and lazy-loading behavior. It supports transitions between previous
 * and current images using smooth fade effects. If `isLottie` is enabled, the component fetches
 * and renders a Lottie animation in a separate layer.
 *
 * @component
 * @param {string} src - The source URL of the main image or Lottie JSON file.
 * @param {string} [blur] - Optional CSS background value to show as a blurred placeholder.
 * @param {string} [alt] - Alternative text for accessibility.
 * @param {string} [title] - Tooltip text shown on hover.
 * @param {boolean} [enableParallax=false] - Enables vertical parallax effect on scroll.
 * @param {boolean} [lazy=false] - Enables lazy loading with IntersectionObserver.
 * @param {boolean} [isLottie=false] - Enables Lottie rendering using lottie-web in a separate layer.
 * @param {HtmlHTMLAttributes<HTMLDivElement>} props - Additional div props.
 *
 * @example
 * ```tsx
 * <ImageLayer
 *   src="/animations/clouds.json"
 *   alt="Animated clouds"
 *   title="Cloud Animation"
 *   isLottie={true}
 *   enableParallax={true}
 *   className="my-animation"
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
  isLottie = false,
  ...props
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const lottieRef = useRef<HTMLDivElement>(null)

  const [prevSrc, setPrevSrc] = useState<string | null>(null)
  const [currentSrc, setCurrentSrc] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [animationData, setAnimationData] = useState<any>(null)

  // Imagen estática
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

  // Lazy-load para imágenes (no Lottie)
  useEffect(() => {
    if (!src || !wrapperRef.current || isLottie) return
    if (!lazy) return loadImage()

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        loadImage()
        observer.disconnect()
      },
      { threshold: 0.1 }
    )
    observer.observe(wrapperRef.current)
    return () => observer.disconnect()
  }, [src, lazy, isLottie])

  // Parallax (aplica a todas las capas con .imageLayer-parallax)
  useEffect(() => {
    if (!enableParallax || !wrapperRef.current) return

    let ticking = false
    const updateParallax = () => {
      const rect = wrapperRef.current!.getBoundingClientRect()
      const progress = rect.top / window.innerHeight
      const maxOffset = wrapperRef.current!.offsetHeight
      const translateY = Math.max(-maxOffset, Math.min(maxOffset, progress * maxOffset))

      wrapperRef.current!.querySelectorAll<HTMLElement>('.imageLayer-parallax').forEach(layer => {
        layer.style.transform = `translateY(${translateY}px)`
      })

      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      requestAnimationFrame(updateParallax)
      ticking = true
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [enableParallax])

  // Carga del JSON Lottie
  useEffect(() => {
    if (!isLottie || !src) return

    setPrevSrc(null)
    setCurrentSrc(null)
    setIsLoaded(false)

    fetch(src)
      .then(res => res.json())
      .then(setAnimationData)
      .catch(console.error)
  }, [src, isLottie])

  // Inicializa Lottie
  useEffect(() => {
    if (!isLottie || !animationData || !lottieRef.current) return

    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    })

    anim.setSpeed(5)

    return () => anim.destroy()
  }, [animationData, isLottie])

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
      ref={wrapperRef}
      {...props}
      className={`imageLayer ${className}`}
      style={{ ...style, ...(blur && !isLottie ? { background: blur } : {}) }}
      role='img'
      aria-label={alt}
      title={alt}
    >
      {isLottie && (
        <div
          ref={lottieRef}
          className={`imageLayer-lottie ${acl(enableParallax, 'imageLayer-parallax')} ${'imageLayer-layer__fadeIn'}`}
        />
      )}
      {!isLottie && (
        <>
          {renderLayer(prevSrc, isLoaded ? 'imageLayer-layer__fadeOut' : 'imageLayer-layer__visible')}
          {renderLayer(currentSrc, isLoaded ? 'imageLayer-layer__fadeIn' : 'imageLayer-layer__hidden')}
        </>
      )}
    </div>
  )
}

export default ImageLayer
