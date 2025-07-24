'use client'

import { FC, HtmlHTMLAttributes } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props extends HtmlHTMLAttributes<HTMLElement> {
  children: string
}

const ShadowText: FC<Props> = ({ children, className = '', ...props }) => {
  return (
    <div className={`shadowText ${className}`} {...props}>
      <h3 className='shadowText-title'>{children}</h3>
    </div>
  )
}

export default ShadowText
