import type { FC, ReactNode } from 'react'

import LabelText from '../LabelText'
import './style.scss'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
  label?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
  contentClass?: string
}

const SimpleButtonLabel: FC<Props> = ({ children, label, position, className, contentClass = '', ...props }) => {
  const parsedClassName = `simpleButtonLabel ${className}`

  return (
    <button className={parsedClassName} {...props}>
      <div className={`simpleButtonLabel-content ${contentClass}`}>{children}</div>
      {label && (
        <LabelText type='darken' className={`simpleButtonLabel-label ${position}`}>
          {label}
        </LabelText>
      )}
    </button>
  )
}

export default SimpleButtonLabel
