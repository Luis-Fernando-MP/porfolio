import { FC } from 'react'

import './style.scss'

interface ShinyTextProps {
  children: string
  disabled?: boolean
  speed?: number
  className?: string
}

const ShinyText: FC<ShinyTextProps> = ({ children, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`

  return (
    <h4 className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`} style={{ animationDuration }}>
      {children}
    </h4>
  )
}

export default ShinyText
