import type { FC, HtmlHTMLAttributes } from 'react'

import './style.scss'

/**
 * TitleWeight component displays a title with two different weights.
 *
 * @param {string} bold - The text to be displayed in bold weight.
 * @param {string} lighter - The text to be displayed in lighter weight.
 * @param {boolean} [reverse=false] - If true, the order of the bold and lighter text is reversed.
 * @param {HtmlHTMLAttributes<HTMLDivElement>} props - Additional HTML attributes for the div element.
 */
interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  bold: string
  lighter: string
  reverse?: boolean
}

const TitleWeight: FC<Props> = ({ bold, lighter, reverse = false, className = '', ...props }) => {
  return (
    <div className={`titleWeight ${className}`} {...props} role='heading' aria-level={2}>
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
