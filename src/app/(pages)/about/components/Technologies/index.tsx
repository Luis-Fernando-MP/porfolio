'use client'

import {
  OrderBy,
  OrderDirection,
  TechnologyCategory,
  TechnologyStack,
  listOfOrders,
  techQuery,
  technologyCategories
} from '@/lib/techQuery'
import IconButton from '@/shared/ui/IconButton'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Image } from '@unpic/react/nextjs'
import { Search } from 'lucide-react'
import { CSSProperties, type FC, useCallback, useMemo, useState } from 'react'

import CategoriesButtons from './CategoriesButtons'
import OrderButtons from './OrderButtons'
import StacksButtons from './StacksButtons'
import './style.scss'
import './userMobile.scss'

const Technologies: FC = () => {
  const [parent] = useAutoAnimate({})
  const [selectedStack, setSelectedStack] = useState<TechnologyStack | undefined>(undefined)
  const [selectedCategories, setSelectedCategories] = useState<TechnologyCategory[]>([])
  const [orderDirection, setOrderDirection] = useState<OrderDirection>('desc')
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [orderBy, setOrderBy] = useState<OrderBy[]>(['Nombre'])
  const [search, setSearch] = useState('')

  const resetFilters = useCallback(() => {
    setSelectedCategories([])
  }, [])

  const toggleCategory = useCallback((category: TechnologyCategory) => {
    setSelectedCategories(prev => {
      const cat = category as TechnologyCategory
      return prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    })
  }, [])

  const toggleStack = useCallback((stack: TechnologyStack) => {
    setSelectedStack(prev => (prev === stack ? undefined : stack))
  }, [])

  const toggleOrderBy = useCallback((key: OrderBy) => {
    setOrderBy(prev => {
      const isActive = prev.includes(key)
      if (isActive) return prev.filter(k => k !== key)
      return listOfOrders.filter(k => prev.includes(k) || k === key)
    })
  }, [])

  const allCategories = useMemo(() => Object.keys(technologyCategories) as TechnologyCategory[], [])

  const categoriesToShow = useMemo(
    () => (showAllCategories ? allCategories : allCategories.slice(0, 6)),
    [showAllCategories, allCategories]
  )

  const filtered = useMemo(() => {
    let result = techQuery({
      categories: selectedCategories,
      stack: selectedStack,
      orderBy,
      orderDirection
    }).filter(t => t.name.toLowerCase().includes(search.toLowerCase()))

    return result
  }, [selectedCategories, selectedStack, orderBy, orderDirection, search])

  return (
    <article className='technologies'>
      <h2>
        <b className='emoji'>🛠️</b> Tecnologías
      </h2>

      <section className='technologies-filters' aria-label='Filtros de tecnologías'>
        <div className='technologies-search border'>
          <Search />
          <label htmlFor='searchTech' className='sr-only'>
            Buscar tecnologías
          </label>
          <input
            id='searchTech'
            placeholder='Buscar...'
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            aria-label='Buscar tecnologías'
          />
        </div>
        <div className='frow technologies-orderBy' role='group' aria-labelledby='orderByLabel'>
          <h6 id='orderByLabel'>Ordenar por:</h6>
          <OrderButtons
            orderBy={orderBy}
            toggleOrderBy={toggleOrderBy}
            orderDirection={orderDirection}
            setOrderDirection={setOrderDirection}
          />
        </div>
      </section>

      <section className='technologies-section' aria-label='Filtros por stack'>
        <h6>Stack:</h6>

        <StacksButtons selectedStack={selectedStack} toggleStack={toggleStack} />
      </section>

      <section className='technologies-section' aria-label='Categorías de tecnologías'>
        <h6>Categorías:</h6>

        <CategoriesButtons
          categories={categoriesToShow}
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
          resetFilters={resetFilters}
          showAllCategories={showAllCategories}
          setShowAllCategories={setShowAllCategories}
        />
      </section>

      <section className='technologies-list' aria-label='Lista de tecnologías'>
        <ul className='technologies-wrap' ref={parent}>
          {filtered.map(tech => {
            const { name, src, color } = tech
            return (
              <li key={`${name}-technology`}>
                <IconButton
                  contentClass='technologies-tech'
                  className='tech'
                  aria-label={name}
                  style={{ '--bg-color': color } as CSSProperties}
                  data-bg={color}
                >
                  <Image
                    src={src}
                    width={20}
                    height={20}
                    alt={name}
                    loading='lazy'
                    decoding='async'
                    className='lazy block-block'
                  />
                  <h5 className='block-block'>{name}</h5>
                </IconButton>
              </li>
            )
          })}
        </ul>
      </section>
    </article>
  )
}

export default Technologies
