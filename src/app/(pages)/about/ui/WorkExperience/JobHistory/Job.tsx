import { HistoryJob } from '@/constants/historyJobs'
import { technologies } from '@/constants/technologies'
import { techQuery } from '@/lib/techQuery'
import { Technology } from '@/lib/techQuery/tech.type'
import IconButton from '@/shared/ui/IconButton'
import { Image } from '@unpic/react/nextjs'
import type { CSSProperties, FC } from 'react'

interface Props extends HistoryJob {}

const Job: FC<Props> = job => {
  const {
    logo,
    period,
    name,
    position,
    Activities,
    Tools,
    Description,
    Acknowledgements,
    // externalUrl,
    // facebookUrl,
    websiteUrl,
    usedTools
  } = job

  const usedTechs = technologies.filter(t => usedTools.includes(t.name))

  const tools = techQuery(
    {
      orderBy: ['Nombre'],
      orderDirection: 'desc'
    },
    usedTechs as any as Technology[]
  )

  return (
    <li className='jobExperience lazy'>
      <h6 className='jobExperience-period ellipsis'>
        <time dateTime={period}>{period}:</time>
      </h6>

      <section className='jobExperience-content' aria-label={`Experiencia en ${name}`}>
        <h2>{position}</h2>

        <article className='jobExperience-article flex'>
          <IconButton className='jobExperience-companyName' isLink href={websiteUrl} target='_blank' rel='noopener noreferrer'>
            <Image src={logo} width={30} height={30} alt={`Logo de ${name}`} />
            <h4>{name}</h4>
          </IconButton>
          {Description}
        </article>

        <article className='jobExperience-article flex'>
          <header>
            <h4>Actividades Realizadas:</h4>
          </header>
          <ul>{Activities}</ul>
        </article>

        <article className='jobExperience-article flex'>
          <header>
            <h4>Herramientas Tecnológicas:</h4>
          </header>
          <section className='jobExperience-tools'>
            {tools.map(tool => {
              const { src, name: toolName, color } = tool
              return (
                <IconButton
                  key={`${src}-${name}`}
                  hover={false}
                  noPadding
                  className='jobExperience-tool tech'
                  label={toolName}
                  style={{ '--bg-color': color } as CSSProperties}
                  data-bg={color}
                >
                  <Image alt={toolName} className='tech-block' src={src} width={20} height={20} />
                </IconButton>
              )
            })}
          </section>
          <ul>{Tools}</ul>
        </article>

        <article className='jobExperience-article flex'>
          <header>
            <h4>Agradecimientos:</h4>
          </header>
          <blockquote>{Acknowledgements}</blockquote>
        </article>
      </section>
    </li>
  )
}

export default Job
