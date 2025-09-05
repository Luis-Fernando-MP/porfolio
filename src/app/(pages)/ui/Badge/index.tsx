'use client'

import { Achievements, devContributionMapper } from '@/lib/achievementsQuery/achievement.type'
import ImageGallery from '@/shared/components/FocusGallery/ImageGallery'
import { type FC, useRef } from 'react'

import './index.scss'

interface Props extends Achievements {
  index: number
  noMapperContribution?: boolean
  big?: boolean
}

const Badge: FC<Props> = props => {
  const { path, name, index, AdditionalImages, devContribution, noMapperContribution, big } = props
  const $img = useRef<HTMLImageElement>(null)

  const className = !noMapperContribution ? `${devContributionMapper[devContribution]}` : 'badge-default'

  const height = big ? 160 : 80
  const width = height + (big ? 50 : 20)

  return (
    <figure
      className={`badge ${className}`}
      role='group'
      aria-label={`Achievement badge: ${name}`}
      style={{
        width: width,
        height: height
      }}
      onClick={e => {
        e.stopPropagation()
        $img.current?.click()
      }}
    >
      <ImageGallery
        ref={$img}
        className='badge-image'
        src={path}
        width={width}
        height={height}
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
