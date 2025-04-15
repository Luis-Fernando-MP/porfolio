'use client'

import { myTechnologyStack } from '@/constants/myTechnologyStack'
import { acl } from '@/shared/acl'
import IconButton from '@/shared/ui/IconButton'
import ShadowText from '@/shared/ui/ShadowText'
import TitleWeight from '@/shared/ui/TitleWeight'
import { type FC, useState } from 'react'

import Technologies from '../Technologies'
import './style.scss'
import './userMobile.scss'

const DevStack: FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <article className='devStack'>
      <header className='devStack-title'>
        <ShadowText className='certificates-shadow' role='heading' aria-level={1}>
          DEV Stack
        </ShadowText>
        <TitleWeight lighter='Mi' bold='Stack Tecnológico' wrap />
        <IconButton className='inverse' onClick={() => setOpen(!open)}>
          <h4>Mostrar todo</h4>
        </IconButton>
      </header>

      <div className={`devStack-technologies ${acl(open, 'show')}`}>
        {Object.entries(myTechnologyStack).map(section => {
          const [sectionMame, languages] = section
          return <Technologies key={sectionMame} sectionMame={sectionMame} languages={languages} />
        })}
      </div>
    </article>
  )
}

export default DevStack
