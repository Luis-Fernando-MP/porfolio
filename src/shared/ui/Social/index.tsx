import { CV, FIGMA, GITHUB, LINKED_IN, MAIL, PHONE } from '@/shared/constants'
import { FigmaIcon, FileUserIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import './style.scss'

interface Props {
  className?: string
}

const socialPaths = [
  {
    icon: <MailIcon />,
    link: MAIL
  },
  { icon: <PhoneIcon />, link: PHONE },
  { icon: <LinkedinIcon />, link: LINKED_IN },
  { icon: <GithubIcon />, link: GITHUB },
  { icon: <FigmaIcon />, link: FIGMA },
  { icon: <FileUserIcon />, link: CV }
]

const Social: FC<Props> = ({ className = '' }) => {
  return (
    <aside className={`social ${className}`}>
      {socialPaths.map(({ icon, link }) => (
        <Link href={link} target='_blank' rel='noopener noreferrer' className='social-link border' key={link}>
          {icon}
        </Link>
      ))}
    </aside>
  )
}

export default Social
