import type { FC } from 'react'

interface Props {
  className?: string
  showShadow?: boolean
}

const HauiDev: FC<Props> = ({ className = '', showShadow = false }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 114 108' className={className}>
      <g fill='rgb(var(--bg-primary))' filter='url(#a)'>
        <path d='M49.094 86.237h-5.078v-61.28c0-9.67-8.045-17.51-17.97-17.51-9.923 0-17.968 7.84-17.968 17.51 0 9.67 8.045 17.509 17.969 17.509.394 0 .784-.013 1.172-.037v4.956c-.388.02-.78.029-1.172.029C13.317 47.414 3 37.359 3 24.957 3 12.554 13.318 2.5 26.047 2.5c12.467 0 22.622 9.646 23.034 21.696h.013v62.041ZM56.906 2.5h5.078v61.28c0 9.67 8.045 17.508 17.97 17.508 9.923 0 17.968-7.838 17.968-17.508 0-.255-.006-.51-.017-.762h5.082c.01.253.013.507.013.762 0 12.402-10.318 22.456-23.047 22.456-12.467 0-22.622-9.645-23.034-21.695h-.016V2.5Z' />
        <path d='M59.09 94.001 35.888 71.393l-3.591 3.499L55.499 97.5l3.59-3.499Z' />
      </g>
      {showShadow && (
        <defs>
          <filter id='a' width='112.4' height='107.4' x='.8' y='.3' colorInterpolationFilters='sRGB' filterUnits='userSpaceOnUse'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix in='SourceAlpha' result='hardAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' />
            <feOffset dx='4' dy='4' />
            <feGaussianBlur stdDeviation='3.1' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0' />
            <feBlend in2='BackgroundImageFix' mode='normal' result='effect1_dropShadow_660_669' />
            <feBlend in='SourceGraphic' in2='effect1_dropShadow_660_669' mode='normal' result='shape' />
          </filter>
        </defs>
      )}
    </svg>
  )
}

export default HauiDev
