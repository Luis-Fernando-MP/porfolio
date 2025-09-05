'use client'

import IconButton from '@/shared/ui/IconButton'
import { SearchIcon } from 'lucide-react'

import useAchievementsStore from '../../hooks/useAchievementsStore'

export const SearchBar = () => {
  const search = useAchievementsStore(s => s.search)
  const setSearch = useAchievementsStore(s => s.setSearch)

  return (
    <>
      <IconButton active>
        <SearchIcon />
        <h4>Buscar</h4>
      </IconButton>
      <div className='input'>
        <input
          placeholder='Buscar...'
          autoComplete='off'
          value={search}
          onChange={e => setSearch(e.target.value)}
          type='search'
          aria-label='Buscar logros'
        />
      </div>
    </>
  )
}
