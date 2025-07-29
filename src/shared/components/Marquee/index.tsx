import { type FC, type HTMLAttributes, type PropsWithChildren, type ReactNode, useId, useMemo } from 'react'

import './style.scss'

type Props = PropsWithChildren<{
  speed?: number
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  repeat?: number
  trackClassName?: string
  wrapperClassName?: string
}> &
  HTMLAttributes<HTMLElement>

/**
 * Marquee component to horizontally scroll its children in an infinite loop.
 *
 * @param {number} [speed=70] - Scroll speed in seconds.
 * @param {'left' | 'right'} [direction='left'] - Direction of the scroll animation.
 * @param {boolean} [pauseOnHover=true] - Whether to pause animation on hover.
 * @param {number} [repeat=2] - Number of times to repeat children for seamless scroll.
 * @param {string} [trackClassName] - Additional class name for the `<ul>` track container.
 * @param {string} [className] - Additional class name for the outer `<section>`.
 * @param {HTMLAttributes<HTMLElement>} rest - Other native HTML attributes.
 *
 * @example
 * ```tsx
 * <Marquee speed={30} direction="right" repeat={3}>
 *   <img src="logo1.png" alt="Brand 1" />
 *   <img src="logo2.png" alt="Brand 2" />
 * </Marquee>
 * ```
 */
const Marquee: FC<Props> = ({
  children,
  speed = 70,
  direction = 'left',
  pauseOnHover = true,
  repeat = 2,
  trackClassName = '',
  className = '',
  ...rest
}) => {
  const id = useId()

  const repeatedChildren = useMemo(() => {
    const childrenArray: ReactNode[] = Array.isArray(children) ? children : [children]
    return Array.from({ length: repeat }, () => childrenArray).flat()
  }, [children, repeat])

  const animationStyle = useMemo(
    () => ({
      animationDuration: `${speed}s`,
      animationName: direction === 'right' ? 'scroll-right' : 'scroll-left'
    }),
    [speed, direction]
  )

  const composedWrapperClass = ['marquee', className, pauseOnHover && 'marquee-pause'].filter(Boolean).join(' ')

  return (
    <section className={composedWrapperClass} aria-label='Continuous item list' {...rest}>
      <ul className={`marquee-track ${trackClassName}`} style={animationStyle} aria-hidden='true'>
        {repeatedChildren.map((child, i) => (
          <li key={`brand-marquee-${id}-${i}`} aria-label='Featured item'>
            {child}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Marquee
