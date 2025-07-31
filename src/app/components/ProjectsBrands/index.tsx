import Marquee from '@/shared/components/Marquee'
import { Image } from '@unpic/react'
import { allProjects } from 'contentlayer/generated'
import type { FC } from 'react'

import './style.scss'
import './userMobile.scss'

const ProjectsBrands: FC = () => {
  return (
    <section className='projectsBrands'>
      <Marquee className='projectsBrands-marquee'>
        {allProjects.map(project => (
          <div key={`${project.id}-brand`} className='projectsBrands-item frow'>
            <div className='projectsBrands-brand'>
              <Image src={project.logo ?? ''} layout='fullWidth' alt={project.title} />
            </div>

            <h5 className='projectsBrands-brandName'>{project.title}</h5>
          </div>
        ))}
      </Marquee>
    </section>
  )
}

export default ProjectsBrands
