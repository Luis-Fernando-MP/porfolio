import { BackgroundImage } from '@/constants/themes'
import useSound from '@/shared/hook/useSound'
import useBackgroundImageStore from '@/shared/store/backgroundImage.store'
import { Image } from '@unpic/react/nextjs'
import Lottie from 'lottie-react'
import { type FC, useEffect, useState } from 'react'

interface Props extends BackgroundImage {}

const ThemeBackgroundOption: FC<Props> = background => {
  const { path, isLottie = false } = background
  const setBackground = useBackgroundImageStore(s => s.setBackground)
  const [play] = useSound('BUTTON_ON')
  const [animationData, setAnimationData] = useState<any>(null)

  useEffect(() => {
    if (isLottie) {
      fetch(path)
        .then(res => res.json())
        .then(setAnimationData)
        .catch(console.error)
    }
  }, [path, isLottie])

  const handleClick = (): void => {
    setBackground(background)
    play()
  }

  return (
    <button onClick={handleClick} className='backgroundSelector-option border'>
      {isLottie && animationData && <Lottie animationData={animationData} loop autoplay style={{ width: 30, height: 30 }} />}
      {!isLottie && (
        <Image
          src={path}
          width={30}
          height={30}
          alt='background'
          loading='lazy'
          fetchPriority='low'
          background='/fallback.webp'
        />
      )}
    </button>
  )
}

export default ThemeBackgroundOption
