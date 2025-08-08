'use client'

import {
  OrderBy,
  OrderDirection,
  TechnologyCategory,
  TechnologyStack,
  listOfOrders,
  techQuery,
  technologyCategories,
  technologyStack
} from '@/lib/techQuery'
import IconButton from '@/shared/ui/IconButton'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Image } from '@unpic/react/nextjs'
import { Search, SortAsc, SortDesc } from 'lucide-react'
import { type FC, useState } from 'react'

import './style.scss'

const Technologies: FC = () => {
  const [parent] = useAutoAnimate({})
  const [selectedStack, setSelectedStack] = useState<TechnologyStack | undefined>(undefined)
  const [selectedCategories, setSelectedCategories] = useState<TechnologyCategory[]>([])
  const [orderDirection, setOrderDirection] = useState<OrderDirection>('desc')
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [orderBy, setOrderBy] = useState<OrderBy[]>(['Nombre'])
  const [search, setSearch] = useState('')

  const resetFilters = () => {
    setSelectedCategories([])
  }

  const toggleCategory = (category: TechnologyCategory) => {
    setSelectedCategories(prev => {
      const cat = category as TechnologyCategory
      return prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    })
  }

  const toggleStack = (stack: TechnologyStack) => {
    setSelectedStack(prev => (prev === stack ? undefined : stack))
  }

  const toggleOrderBy = (key: OrderBy) => {
    setOrderBy(prev => {
      const isActive = prev.includes(key)
      if (isActive) return prev.filter(k => k !== key)
      return listOfOrders.filter(k => prev.includes(k) || k === key)
    })
  }

  const filtered = techQuery({
    categories: selectedCategories,
    stack: selectedStack,
    orderBy,
    orderDirection
  })
    .filter(t => t.name.toLowerCase().includes(search.toLowerCase()))
    .reverse()

  const allCategories = Object.keys(technologyCategories) as TechnologyCategory[]
  const categoriesToShow = showAllCategories ? allCategories : allCategories.slice(0, 6)

  return (
    <article className='technologies'>
      <h2>
        <b className='emoji'>🛠️</b> Tecnologías
      </h2>
      <section className='technologies-filters'>
        <div className='technologies-search border'>
          <Search />
          <input placeholder='Buscar...' value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className='frow'>
          <h5>Ordenar por:</h5>
          {listOfOrders.map(order => {
            const active = orderBy.includes(order)
            return (
              <IconButton className='border' key={`${order}-orderBy`} onClick={() => toggleOrderBy(order)} active={active}>
                {order}
              </IconButton>
            )
          })}
          <IconButton
            className='border'
            disable={orderBy.length <= 0}
            onClick={() => setOrderDirection(dir => (dir === 'asc' ? 'desc' : 'asc'))}
            label={orderDirection === 'asc' ? 'ascendente' : 'descendente'}
          >
            {orderDirection === 'asc' ? <SortAsc /> : <SortDesc />}
          </IconButton>
        </div>
      </section>
      <section className='frow'>
        {Object.entries(technologyStack).map(stack => {
          const [name, Icon] = stack
          const active = selectedStack === name
          return (
            <IconButton
              className='technologies-category'
              key={name}
              onClick={() => toggleStack(name as TechnologyStack)}
              active={active}
            >
              <Icon />
              <h4>{name}</h4>
            </IconButton>
          )
        })}
      </section>
      <section className='technologies-categories frow'>
        <IconButton className='technologies-category' onClick={resetFilters} active={selectedCategories.length === 0}>
          <h4>All</h4>
        </IconButton>
        {/* Botones de categoría */}
        {categoriesToShow.map(category => {
          const active = selectedCategories.includes(category)
          return (
            <IconButton className='technologies-category' key={category} onClick={() => toggleCategory(category)} active={active}>
              <h4>{category}</h4>
            </IconButton>
          )
        })}
        {!showAllCategories && (
          <IconButton onClick={() => setShowAllCategories(true)}>+{allCategories.length - 6} categorías</IconButton>
        )}
        {showAllCategories && <IconButton onClick={() => setShowAllCategories(false)}>Mostrar menos</IconButton>}
      </section>
      <section className='technologies-list'>
        <div className='technologies-wrap' ref={parent}>
          {filtered.map(tech => {
            const { name, src, color } = tech
            return (
              <IconButton key={`${name}-technology`} contentClass='technologies-tech' className='technologies-btn'>
                <div className='technologies-btn__bg' style={{ backgroundColor: color }} />
                <Image
                  src={src}
                  width={20}
                  height={20}
                  alt={name}
                  loading='lazy'
                  decoding='async'
                  className='lazy technologies-block'
                />
                <h5 className='technologies-block'>{name}</h5>
              </IconButton>
            )
          })}
        </div>
      </section>
    </article>
  )
}

export default Technologies
