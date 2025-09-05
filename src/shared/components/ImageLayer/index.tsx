'use client'

import { FC, HtmlHTMLAttributes } from 'react'

import './style.scss'
import useImageLayer, { type ImageLayerProps } from './useImageLayer'

type Props = HtmlHTMLAttributes<HTMLDivElement> &
  ImageLayerProps & {
    alt?: string
    title?: string
  }

/**
 * ImageLayer is a React component that renders a background image or a Lottie animation
 * with optional parallax and lazy-loading.
 *
 * @component
 * @param {string} src - The source URL of the image or Lottie JSON file.
 * @param {string} [blur] - Optional CSS background value to show as a placeholder.
 * @param {string} [alt] - Alternative text for accessibility.
 * @param {string} [title] - Tooltip text shown on hover.
 * @param {boolean} [enableParallax=false] - Enables vertical parallax effect on scroll.
 * @param {boolean} [lazy=false] - Enables lazy loading with IntersectionObserver.
 * @param {boolean} [isLottie=false] - Enables Lottie rendering.
 * @param {HtmlHTMLAttributes<HTMLDivElement>} props - Additional div props.
 *
 * @example
 * ```tsx
 * <ImageLayer
 * src="/animations/clouds.json"
 * alt="Animated clouds"
 * title="Cloud Animation"
 * isLottie={true}
 * enableParallax={true}
 * className="my-animation"
 * />
 * ```
 */
const ImageLayer: FC<Props> = ({ className = '', src, style, alt = '', enableParallax = false, isLottie = false, ...props }) => {
  const { wrapperRef, lottieRef, isLottie: isLottieLoaded } = useImageLayer({ src, enableParallax, isLottie })

  return (
    <div ref={wrapperRef} {...props} className={`imageLayer ${className}`} style={style} role='img' aria-label={alt} title={alt}>
      {isLottieLoaded ? (
        <div ref={lottieRef} className={`imageLayer-lottie fade ${enableParallax ? 'imageLayer-parallax' : ''}`} />
      ) : (
        <div
          role='banner'
          aria-label={alt}
          className={`imageLayer-layer fade ${enableParallax ? 'imageLayer-parallax' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      )}
    </div>
  )
}

export default ImageLayer
