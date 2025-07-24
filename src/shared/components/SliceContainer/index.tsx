'use client'

import IconButton from '@/shared/ui/IconButton'
import { MoreHorizontalIcon } from 'lucide-react'
import { type FC, type HTMLAttributes, type ReactNode, useState } from 'react'

import './style.scss'

/**
 * A container component that allows content to be expanded or collapsed with a toggle button.
 *
 * @prop {ReactNode} [children] - The child elements to render inside the container.
 * @prop {number} [maxHeight] - Maximum height of the container when collapsed.
 * @prop {() => void} [onExtend] - Callback triggered when the "Extend" button is clicked.
 * @prop {number} [extendedMaxHeight] - Maximum height of the container when expanded.
 * @prop {boolean} [reverse=false] - Reverses the content order if set to true.
 * @prop {string} [overlayColor='var(--bg-secondary)'] - Background gradient color used for the overlay.
 * @extends HTMLAttributes<HTMLDivElement>
 */
interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  maxHeight?: number
  onExtend?: () => void
  extendedMaxHeight?: number
  reverse?: boolean
  overlayColor?: string
}

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
  const exMaxHeight = extendedMaxHeight ? `${extendedMaxHeight}px` : '100%'

  const handleClick = () => {
    setIsExtended(prev => !prev)
    onExtend?.()
  }

  return (
    <article
      className='sliceContainer'
      {...props}
      style={{
        ...style,
        flexDirection: reverse ? 'column-reverse' : 'column'
      }}
    >
      <section
        className={`sliceContainer-content ${className}`}
        style={{
          maxHeight: isExtended ? exMaxHeight : `${maxHeight}px`,
          overflow: isExtended ? 'auto' : 'hidden'
        }}
      >
        {children}
        {!isExtended && (
          <div
            className='sliceContainer-gradient'
            style={{
              backgroundImage: `linear-gradient(rgb(${overlayColor}, 0) 60%, rgb(${overlayColor}))`
            }}
          />
        )}
      </section>

      <IconButton onClick={handleClick} className='sliceContainer-action'>
        {isExtended ? 'Colapsar' : 'Expandir'}
        <MoreHorizontalIcon />
      </IconButton>
    </article>
  )
}

export default SliceContainer
