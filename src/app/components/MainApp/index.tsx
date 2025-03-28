import type { FC, HtmlHTMLAttributes, ReactNode } from 'react'

import BackButton from './BackButton'
import './style.scss'

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: Readonly<ReactNode[]> | null | Readonly<ReactNode>
}

const MainApp: FC<Props> = ({ children, className, ...props }) => {
  return (
    <main className='mainApp'>
      <BackButton />
      <div className={`mainApp-wrapper ${className}`} {...props}>
        {children}
      </div>
    </main>
  )
}

export default MainApp
