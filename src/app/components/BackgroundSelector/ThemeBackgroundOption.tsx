import { BackgroundImage } from '@/constants/themes'
import useSound from '@/shared/hook/useSound'
import useBackgroundImageStore from '@/shared/store/backgroundImage.store'
import { Image } from '@unpic/react'
import type { FC } from 'react'

interface Props extends BackgroundImage {}

const ThemeBackgroundOption: FC<Props> = background => {
  const { path } = background
  const setBackground = useBackgroundImageStore(s => s.setBackground)
  const [play] = useSound('BUTTON_ON')

  const handleClick = (): void => {
    setBackground(background)
    play()
  }

  return (
    <button onClick={handleClick} className='backgroundSelector-option'>
      <Image src={path} width={30} height={30} alt='background' loading='lazy' fetchPriority='low' background='/fallback.webp' />
    </button>
  )
}

export default ThemeBackgroundOption
