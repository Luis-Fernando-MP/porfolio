import { acl } from '@/shared/acl'
import type { FC, JSX } from 'react'

import './style.scss'

interface Props {
  children?: string
  Icon?: JSX.Element
  className?: string
  transparent?: boolean
}

/**
 * LabelText component
 * A small utility component that displays a label with optional icon support.
 * Useful for annotations, button tooltips, or informative microtexts.
 *
 * @param {string} [children] - The text content of the label. Accepts plain text only.
 * @param {JSX.Element} [Icon] - Optional React element displayed before the label text (e.g., an icon).
 * @param {string} [className] - Additional class names for custom styling.
 * @param {boolean} [transparent=false] - If true, applies a transparent style variant.
 *
 * @returns {JSX.Element} A styled label element with optional icon and text.
 *
 * @example
 * <LabelText Icon={<InfoIcon />} transparent>
 *   More details
 * </LabelText>
 */
const LabelText: FC<Props> = ({ children, Icon, className = '', transparent = false }) => {
  const parsedClass = `label ${className} ${acl(transparent, 'transparent')}`

  return (
    <div className={parsedClass.trim()}>
      {Icon}
      {children && <p>{children}</p>}
    </div>
  )
}

export default LabelText
