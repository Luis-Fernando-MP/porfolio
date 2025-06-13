'use client'

import { type FC, HtmlHTMLAttributes, useLayoutEffect, useState } from 'react'

import './style.scss'

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  src: string
  blur?: string
  alt?: string
  title?: string
  transitionDuration?: number
}

/**
 * @property {string} src - Source URL for the background image.
 * @property {string} [blur] - CSS blur filter value for the background.
 * @property {string} [alt=''] - Descriptive alternative text for accessibility (used as aria-label).
 * @property {string} [title] - Title attribute for the container div.
 * @property {number} [transitionDuration=1000] - Duration of the fade-in transition in milliseconds.
 */
export const BackImage: FC<Props> = ({ className, src, blur, style, alt = '', title, transitionDuration = 1000, ...props }) => {
  const [bgUrl, setBgUrl] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useLayoutEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setBgUrl(src)
      setTimeout(() => setIsLoaded(true), 10)
    }
  }, [src])

  return (
    <div
      {...props}
      className={`fade backImage ${className}`}
      style={{
        background: blur ?? '',
        ...style
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bgUrl})`,
          opacity: isLoaded ? 1 : 0,
          transition: `opacity ${transitionDuration}ms ease-in-out`
        }}
        role='img'
        aria-label={alt}
        title={title}
      />
    </div>
  )
}
