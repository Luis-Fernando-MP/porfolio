'use client'

import HauiDevLogo from '@/shared/ui/HauiDevLogo'
import IconButton from '@/shared/ui/IconButton'
import { ArrowLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'

const BackButton: FC = () => {
  const { back } = useRouter()

  return (
    <IconButton onClick={back} contentClass='mainApp-backContent' className='mainApp-back'>
      <ArrowLeftIcon />
      <HauiDevLogo size='md' />
    </IconButton>
  )
}

export default BackButton
