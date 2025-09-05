'use client'

import Title from '@/shared/ui/Title'
import type { FC } from 'react'

import { AchievementsList } from './components/AchievementsList'
import { DomainFilters } from './components/DomainFilters'
import { SearchBar } from './components/SearchBar'
import { SortFilters } from './components/SortFilters'
import { TechFilters } from './components/TechFilters'
import { TypeFilters } from './components/TypeFilters'
import './index.scss'

const AchievementsPage: FC = () => {
  return (
    <div className='page-content achievements'>
      <section className='achievements-wrapper'>
        <section className='flex'>
          <Title emoji='📜' sub='Mis' title='Certificados y títulos' />
          <p className='description' itemProp='description'>
            Cada día intentamos aprender algo nuevo. Estos son los certificados y títulos que hemos obtenido hasta ahora... Fr.
            “no serán los últimos”.
          </p>
        </section>

        <article className='achievements-container'>
          <section className='frow'>
            <SearchBar />
            <TechFilters />
          </section>

          <TypeFilters />
          <DomainFilters />
          <SortFilters />

          <AchievementsList />
        </article>
      </section>
    </div>
  )
}

export default AchievementsPage
