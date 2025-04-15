import { CV, FIGMA, GITHUB, LINKED_IN, MAIL, PHONE } from '@/shared/constants'
import { FigmaIcon, FileUserIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC, HtmlHTMLAttributes } from 'react'

import './style.scss'
import './userMobile.scss'

type Props = HtmlHTMLAttributes<HTMLElement>

const socialPaths = [
  {
    icon: <MailIcon />,
    link: MAIL,
    label: 'Correo Electrónico'
  },
  { icon: <PhoneIcon />, link: PHONE, label: 'Teléfono' },
  { icon: <LinkedinIcon />, link: LINKED_IN, label: 'LinkedIn' },
  { icon: <GithubIcon />, link: GITHUB, label: 'GitHub' },
  { icon: <FigmaIcon />, link: FIGMA, label: 'Figma' },
  { icon: <FileUserIcon />, link: CV, label: 'Currículum' }
]

const Social: FC<Props> = ({ className = '', ...props }) => {
  return (
    <aside className={`social ${className}`} {...props}>
      {socialPaths.map(({ icon, link, label }) => (
        <Link href={link} target='_blank' rel='noopener noreferrer' className='social-link border' key={link} aria-label={label}>
          {icon}
        </Link>
      ))}
    </aside>
  )
}

export default Social
