import IconButton from '@/shared/ui/IconButton'
import { Image } from '@unpic/react/nextjs'
import { PlayIcon } from 'lucide-react'
import type { FC, HtmlHTMLAttributes } from 'react'

import './style.scss'

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {}

const MusicButton: FC<Props> = ({ className, ...props }) => {
  return (
    <IconButton transparent noPadding className={`musicBtn ${className}`} {...props}>
      <div className='musicBtn-image border'>
        <Image
          src='/assets/pages/music.webp'
          width={30}
          height={30}
          alt='resonance music'
          loading='lazy'
          fetchPriority='low'
          background='/fallback.webp'
        />
        <PlayIcon className='musicBtn-icon' />
      </div>
      <h4>Armando Trovajo...</h4>
    </IconButton>
  )
}

export default MusicButton
