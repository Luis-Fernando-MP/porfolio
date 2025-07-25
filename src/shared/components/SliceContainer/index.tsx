'use client'

import useSound from '@/shared/hook/useSound'
import IconButton from '@/shared/ui/IconButton'
import { MoreHorizontalIcon } from 'lucide-react'
import { type FC, type HTMLAttributes, type ReactNode, useState } from 'react'

import './style.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  maxHeight?: number
  onExtend?: () => void
  extendedMaxHeight?: number
  reverse?: boolean
  overlayColor?: string
}

/**
 * A container component that allows content to be expanded or collapsed with a toggle button.
 * Useful for displaying limited content with the option to reveal more.
 *
 * Fr. “Sometimes what matters most is just beneath the surface—give it space to breathe.”
 *
 * @param {ReactNode} [children] - Elements rendered inside the container.
 * @param {number} [maxHeight] - Collapsed height in pixels.
 * @param {() => void} [onExtend] - Triggered when content is expanded or collapsed.
 * @param {number} [extendedMaxHeight] - Expanded height in pixels.
 * @param {boolean} [reverse=false] - If true, reverses the content flow direction.
 * @param {string} [overlayColor='var(--bg-secondary)'] - Background color for the overlay gradient.
 * @extends HTMLAttributes<HTMLDivElement>
 *
 * @example
 * <SliceContainer maxHeight={200} extendedMaxHeight={400}>
 *   <p>This is expandable content.</p>
 * </SliceContainer>
 */
const SliceContainer: FC<Props> = ({
  children,
  maxHeight,
  className = '',
  onExtend,
  extendedMaxHeight,
  reverse = false,
  overlayColor = 'var(--bg-secondary)',
  style,
  ...props
}) => {
  const [isExtended, setIsExtended] = useState(false)
  const [play] = useSound('BUTTON_ON', { interrupt: true })
  const exMaxHeight = extendedMaxHeight ? `${extendedMaxHeight}px` : '100%'

  const toggle = () => {
    setIsExtended(prev => !prev)
    onExtend?.()
    play()
  }

  return (
    <section
      className='sliceContainer'
      {...props}
      style={{
        ...style,
        flexDirection: reverse ? 'column-reverse' : 'column'
      }}
      aria-label='Expandable content section'
    >
      <div
        className={`sliceContainer-content ${className}`}
        style={{
          maxHeight: isExtended ? exMaxHeight : `${maxHeight}px`,
          overflow: isExtended ? 'auto' : 'hidden'
        }}
      >
        {children}
        {!isExtended && (
          <button
            type='button'
            className='sliceContainer-gradient'
            onClick={toggle}
            aria-label='Expand content'
            style={{
              backgroundImage: `linear-gradient(rgb(${overlayColor}, 0) 60%, rgb(${overlayColor}))`
            }}
          />
        )}
      </div>

      <IconButton
        noSound
        onClick={toggle}
        className='sliceContainer-action'
        aria-pressed={isExtended}
        aria-label={isExtended ? 'Collapse content' : 'Expand content'}
      >
        {isExtended ? 'Colapsar' : 'Expandir'}
        <MoreHorizontalIcon />
      </IconButton>
    </section>
  )
}

export default SliceContainer
