import IconButton from '@/shared/ui/IconButton'
import { Image } from '@unpic/react'
import { PlayIcon } from 'lucide-react'
import type { FC } from 'react'

import './style.scss'

const MusicButton: FC = () => {
  return (
    <IconButton transparent className='musicBtn'>
      <div className='musicBtn-image border'>
        <Image src='/assets/pages/music.webp' width={30} height={30} alt='resonance music' />
        <PlayIcon className='musicBtn-icon' />
      </div>
      <h5>&nbsp;Armando Trovajo...</h5>
    </IconButton>
  )
}

export default MusicButton
