'use client'

import SpotlightCard from '@/shared/components/SpotlightCard'
import BasicUserDetail from '@/shared/ui/BasicUserDetail'
import { Variants, motion } from 'framer-motion'
import { BriefcaseBusinessIcon } from 'lucide-react'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props {
  role: string
  feedback: string
  author: string
  photo: string
  company: string
}

const Testimony: FC<Props> = ({ role, feedback, author, photo, company }) => {
  const variants: Variants = {
    offscreen: {
      y: 100
    },
    onscreen: {
      y: 0
    }
  }
  return (
    <SpotlightCard className='testimony-spotlight border'>
      <motion.div
        className='testimony'
        whileInView='onscreen'
        initial='offscreen'
        variants={variants}
        transition={{ type: 'spring', bounce: 0.4, duration: 0.8, delay: 0.2 }}
      >
        <header className='testimony-header'>
          <h5>{company}</h5>
          <BriefcaseBusinessIcon />
        </header>
        <p className='testimony-feedback'>&quot;{feedback}&quot;</p>
        <BasicUserDetail userName={author} photo={photo} extra={role} />
      </motion.div>
    </SpotlightCard>
  )
}

export default Testimony
