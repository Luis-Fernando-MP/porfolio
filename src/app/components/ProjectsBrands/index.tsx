'use client'

import Mdx from '@/shared/components/Mdx'
import { Image } from '@unpic/react'
import { allProjects } from 'contentlayer/generated'
import type { FC } from 'react'

const ProjectsBrands: FC = () => {
  return (
    <div>
      {allProjects.map(project => {
        return (
          <section key={project.id}>
            <Image src={project.thumb} width={project.thumb_width / 3} height={project.thumb_height / 3} alt={project.title} />
            <h4>{project.title}</h4>
            <p>Tags: {project.tags.join(',')}</p>
            ----- Abajo ----
            <Mdx code={project.body.code} />
          </section>
        )
      })}
    </div>
  )
}

export default ProjectsBrands
