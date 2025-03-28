'use client'

import IconButton from '@/shared/ui/IconButton'
import ShumDev from '@/shared/ui/ShumDev'
import { ArrowLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'

const BackButton: FC = () => {
  const { back } = useRouter()

  return (
    <IconButton onClick={back} contentClass='mainApp-backContent' className='mainApp-back'>
      <ArrowLeftIcon />
      <ShumDev size='md' />
    </IconButton>
  )
}

export default BackButton
