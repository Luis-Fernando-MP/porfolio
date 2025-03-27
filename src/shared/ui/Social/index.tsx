import { MAIL } from '@/shared/constants'
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
  { icon: <PhoneIcon />, link: 'tel:1234567890' },
  { icon: <LinkedinIcon />, link: 'https://www.linkedin.com/in/your-linkedin-profile' },
  { icon: <GithubIcon />, link: 'https://github.com/your-github-profile' },
  { icon: <FigmaIcon />, link: 'https://www.figma.com/file/your-figma-file' },
  { icon: <FileUserIcon />, link: 'https://www.cv.com/your-cv-file.pdf' }
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
