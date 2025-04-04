'use client'

import React, { HtmlHTMLAttributes, ReactNode, useRef } from 'react'

import './style.scss'

interface SpotlightCardProps extends HtmlHTMLAttributes<HTMLElement> {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
  contentClass?: string
}

/**
 * SpotlightCard component that displays an interactive highlighted area.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {ReactNode} [props.children] - Content to be displayed inside the card.
 * @param {string} [props.className] - Additional CSS classes for the main container.
 * @param {string} [props.contentClass] - Additional CSS classes for the card content.
 * @returns {JSX.Element} Spotlight card element.
 */
const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = '', contentClass = '', ...props }) => {
  const divRef = useRef<HTMLDivElement>(null)

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
    requestAnimationFrame(() => {
      if (!divRef.current) return
      const rect = divRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      divRef.current.style.setProperty('--mouse-spotlight-x', `${x}px`)
      divRef.current.style.setProperty('--mouse-spotlight-y', `${y}px`)
    })
  }

  return (
    <div
      role='button'
      tabIndex={0}
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`cardSpotlight ${className}`}
      {...props}
    >
      <div className={`cardSpotlight-content ${contentClass}`}>{children}</div>
    </div>
  )
}

export default SpotlightCard
