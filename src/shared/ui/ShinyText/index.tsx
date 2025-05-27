import { FC } from 'react'

import './style.scss'

interface ShinyTextProps {
  children: string
  disabled?: boolean
  speed?: number
  className?: string
}

/**
 * Props for the ShinyText component
 * @property {ReactNode} children - The content to be displayed inside the shiny text
 * @property {boolean} [disabled=false] - Whether the shiny effect is disabled
 * @property {number} [speed=5] - Animation speed in seconds
 * @property {string} [className=''] - Additional CSS classes to apply to the component
 */
const ShinyText: FC<ShinyTextProps> = ({ children, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`

  return (
    <h4 className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`} style={{ animationDuration }}>
      {children}
    </h4>
  )
}

export default ShinyText
