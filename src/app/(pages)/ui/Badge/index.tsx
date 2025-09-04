'use client'

import { Achievements, DevContribution } from '@/lib/achievementsQuery/achievement.type'
import ImageGallery from '@/shared/components/FocusGallery/ImageGallery'
import { type FC, useRef } from 'react'

import './index.scss'

interface Props extends Achievements {
  index: number
  noMapperContribution?: boolean
}

const classNameMapper: Partial<Record<DevContribution, string>> = {
  Aplicables: 'applicable',
  Especializado: 'specialized',
  Fundamentos: 'fundamentals'
}

const Badge: FC<Props> = props => {
  const { path, name, index, AdditionalImages, devContribution, noMapperContribution } = props
  const $img = useRef<HTMLImageElement>(null)

  const className = !noMapperContribution ? `badge-${classNameMapper[devContribution]}` : 'badge-default'

  return (
    <figure
      className={`badge ${className}`}
      role='group'
      aria-label={`Achievement badge: ${name}`}
      onClick={e => {
        e.stopPropagation()
        $img.current?.click()
      }}
    >
      <ImageGallery
        ref={$img}
        className='badge-image'
        src={path}
        width={100}
        height={80}
        alt={`Badge for ${name}`}
        title={name}
        loading='lazy'
        decoding='async'
        index={index}
        groupId='badges'
        caption={name}
      />

      {AdditionalImages?.map((img, i) => (
        <ImageGallery
          className='hidden'
          key={`${img}-${i}`}
          src={img}
          width={10}
          height={10}
          alt={`Additional view of ${name}`}
          title={`${name} - extra image ${i + 1}`}
          loading='lazy'
          decoding='async'
          index={index}
          groupId='badges'
        />
      ))}

      <figcaption className='hidden'>{name}</figcaption>
    </figure>
  )
}

export default Badge
