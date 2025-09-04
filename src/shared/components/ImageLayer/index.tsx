'use client'

import { acl } from '@/shared/acl'
import { FC, HtmlHTMLAttributes } from 'react'

import RenderLayer from './RenderLayer'
import './style.scss'
import useImageLayer, { type ImageLayerProps } from './useImageLayer'

type Props = HtmlHTMLAttributes<HTMLDivElement> &
  ImageLayerProps & {
    alt?: string
    blur?: string
    title?: string
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
  const { wrapperRef, isImageFullyLoaded, isBlurActive, lottieRef, prevSrc, currentSrc } = useImageLayer({
    src,
    enableParallax,
    lazy,
    isLottie
  })

  const showContainerBlur = blur && !isLottie && !isImageFullyLoaded ? { background: blur } : {}

  return (
    <div
      ref={wrapperRef}
      {...props}
      className={`imageLayer ${className}`}
      style={{ ...style, ...showContainerBlur }}
      role='img'
      aria-label={alt}
      title={alt}
    >
      {isLottie ? (
        <div
          ref={lottieRef}
          className={`imageLayer-lottie ${acl(enableParallax, 'imageLayer-parallax')} imageLayer-layer__fadeIn`}
        />
      ) : (
        <>
          {prevSrc && (
            <RenderLayer alt={alt} enableParallax={enableParallax} className={'imageLayer-layer__fadeOut'} src={prevSrc} />
          )}

          {currentSrc && (
            <RenderLayer
              alt={alt}
              enableParallax={enableParallax}
              className={`imageLayer-layer__fadeIn ${isBlurActive ? 'imageLayer-layer__blurred' : ''}`}
              src={currentSrc}
            />
          )}
        </>
      )}
    </div>
  )
}

export default ImageLayer
