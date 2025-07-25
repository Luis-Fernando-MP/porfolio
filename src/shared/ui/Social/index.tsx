import { INFO } from '@/constants'
import { FigmaIcon, FileUserIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'
import type { FC, HtmlHTMLAttributes } from 'react'

import IconButton from '../IconButton'
import './style.scss'
import './userMobile.scss'

type Props = HtmlHTMLAttributes<HTMLElement>

const socialPaths = [
  { icon: <LinkedinIcon />, link: INFO.linked_in, label: 'LinkedIn', title: 'LinkedIn' },
  {
    icon: <MailIcon />,
    link: INFO.mail,
    label: 'Correo',
    title: 'Enviar correo'
  },
  { icon: <GithubIcon />, link: INFO.github, label: 'GitHub', title: 'Perfil en GitHub' },
  { icon: <FigmaIcon />, link: INFO.figma, label: 'Figma', title: 'Portafolio en Figma' },
  { icon: <FileUserIcon />, link: INFO.cv, label: 'CV', title: 'Descargar CV' }
]

const Social: FC<Props> = ({ className = '', ...props }) => {
  return (
    <aside className={`social ${className}`} aria-label='Redes sociales y contacto' {...props}>
      {socialPaths.map(({ icon, link, label, title }) => (
        <IconButton
          isLink
          href={link}
          label={title}
          target='_blank'
          rel='noopener noreferrer'
          key={`${label}-social-link`}
          aria-label={title}
          title={title}
        >
          {icon}
        </IconButton>
      ))}
    </aside>
  )
}

export default Social
