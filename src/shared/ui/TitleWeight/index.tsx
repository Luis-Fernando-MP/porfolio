import { acl } from '@/shared/acl'
import type { FC, HtmlHTMLAttributes } from 'react'

import './style.scss'
import './userMobile.scss'

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  bold: string
  lighter: string
  wrap?: boolean
  reverse?: boolean
}

/**
 * TitleWeight component displays a title with two different weights.
 *
 * @param {string} bold - The text to be displayed in bold weight.
 * @param {string} lighter - The text to be displayed in lighter weight.
 * @param {boolean} [reverse=false] - If true, the order of the bold and lighter text is reversed.
 * @param {boolean} [wrap=false] - If true, the text will wrap to the next line.
 * @param {HtmlHTMLAttributes<HTMLDivElement>} props - Additional HTML attributes for the div element.
 */
const TitleWeight: FC<Props> = ({ bold, lighter, reverse = false, className = '', wrap = false, ...props }) => {
  return (
    <div className={`titleWeight ${className} ${acl(wrap, 'wrap')}`} {...props} role='heading' aria-level={2}>
      {reverse ? (
        <>
          <h2 className='titleWeight-subtitle'>{bold}&nbsp;</h2>
          <h2 className='titleWeight-title'>{lighter}</h2>
        </>
      ) : (
        <>
          <h2 className='titleWeight-subtitle'>{lighter}&nbsp;</h2>
          <h2 className='titleWeight-title'>{bold}</h2>
        </>
      )}
    </div>
  )
}

export default TitleWeight
