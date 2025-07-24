'use client'

import IconButton from '@/shared/ui/IconButton'
import MiShumDev from '@/shared/ui/MiShumDev'
import { ArrowLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'

const BackButton: FC = () => {
  const { back } = useRouter()

  return (
    <IconButton onClick={back} contentClass='mainApp-backContent' className='mainApp-back'>
      <ArrowLeftIcon />
      <MiShumDev size='md' />
    </IconButton>
  )
}

export default BackButton
