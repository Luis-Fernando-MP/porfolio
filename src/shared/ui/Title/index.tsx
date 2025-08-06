import { acl } from '@/shared/acl'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props {
  emoji?: string
  sub: string
  title: string
  reverse?: boolean
  center?: boolean
}

/**
 * Renders a dual heading component with optional reversed and centered layout styles.
 *
 *
 * @component
 * @param {string} [emoji] - Optional emoji character to display above the headings. Ideal for expressive titles.
 * @param {string} sub - The subtitle to be displayed as the first heading.
 * @param {string} title - The main title to be displayed as the second heading.
 * @param {boolean} [reverse=false] - Whether to apply the 'reverse' CSS class for layout styling.
 * @param {boolean} [center=false] - Whether to center-align the text by applying the 'center' CSS class.
 *
 *
 * @example
 * <Title
 *   emoji="🚀"
 *   sub="Welcome to"
 *   title="Haui's Portfolio"
 *   reverse
 *   center
 * />
 */
const Title: FC<Props> = ({ emoji, sub, title, reverse = false, center = false }) => {
  return (
    <div className={`title ${acl(reverse, 'reverse')} ${acl(center, 'center')}`}>
      {emoji && <h2 className='emoji'>{emoji}</h2>}
      <h2>{sub}</h2>
      <h2 className='font2'>{title}</h2>
    </div>
  )
}

export default Title
