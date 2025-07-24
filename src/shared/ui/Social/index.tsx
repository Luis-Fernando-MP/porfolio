import { INFO } from '@/constants'
import { FigmaIcon, FileUserIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC, HtmlHTMLAttributes } from 'react'

import './style.scss'
import './userMobile.scss'

type Props = HtmlHTMLAttributes<HTMLElement>

const socialPaths = [
  { icon: <LinkedinIcon />, link: INFO.linked_in, label: 'LinkedIn', title: 'Visitar perfil de LinkedIn' },
  {
    icon: <MailIcon />,
    link: INFO.mail,
    label: 'Correo Electrónico',
    title: 'Enviar Correo Electrónico'
  },
  { icon: <GithubIcon />, link: INFO.github, label: 'GitHub', title: 'Visitar perfil de GitHub' },
  { icon: <FigmaIcon />, link: INFO.figma, label: 'Figma', title: 'Visitar perfil de Figma' },
  { icon: <FileUserIcon />, link: INFO.cv, label: 'Currículum', title: 'Descargar Currículum' }
]

const Social: FC<Props> = ({ className = '', ...props }) => {
  return (
    <aside className={`social ${className}`} {...props}>
      {socialPaths.map(social => {
        const { icon, link, label, title } = social
        return (
          <Link
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='social-link border'
            key={link}
            aria-label={label}
            title={title}
          >
            {icon}
          </Link>
        )
      })}
    </aside>
  )
}

export default Social
