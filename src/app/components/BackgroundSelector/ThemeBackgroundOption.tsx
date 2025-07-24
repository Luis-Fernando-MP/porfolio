import { BackgroundImage } from '@/constants/themes'
import useBackgroundImageStore from '@/shared/store/backgroundImage.store'
import { Image } from '@unpic/react'
import type { FC } from 'react'

interface Props extends BackgroundImage {}

const ThemeBackgroundOption: FC<Props> = background => {
  const { path } = background
  const setBackground = useBackgroundImageStore(s => s.setBackground)

  const handleClick = (): void => {
    setBackground(background)
  }

  return (
    <button onClick={handleClick} className='backgroundSelector-option'>
      <Image src={path} width={30} height={30} alt='background' loading='lazy' fetchPriority='low' background='/fallback.webp' />
    </button>
  )
}

export default ThemeBackgroundOption
