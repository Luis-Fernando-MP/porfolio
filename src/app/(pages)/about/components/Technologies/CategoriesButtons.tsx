import { TechnologyCategory, technologyCategories } from '@/lib/techQuery/tech.type'
import IconButton from '@/shared/ui/IconButton'
import { type FC } from 'react'

interface Props {
  categories: TechnologyCategory[]
  selectedCategories: TechnologyCategory[]
  toggleCategory: (c: TechnologyCategory) => void
  resetFilters: () => void
  showAllCategories: boolean
  setShowAllCategories: (v: boolean) => void
}

const CategoriesButtons: FC<Props> = ({
  categories,
  selectedCategories,
  toggleCategory,
  resetFilters,
  showAllCategories,
  setShowAllCategories
}) => {
  return (
    <div className='frow'>
      <IconButton className='technologies-category border' onClick={resetFilters} active={selectedCategories.length === 0}>
        <h4>All</h4>
      </IconButton>
      {categories.map(category => {
        const active = selectedCategories.includes(category)
        return (
          <IconButton
            className='technologies-category border'
            key={category}
            onClick={() => toggleCategory(category)}
            active={active}
          >
            <h4>{category}</h4>
          </IconButton>
        )
      })}
      {!showAllCategories && (
        <IconButton onClick={() => setShowAllCategories(true)}>
          +{Object.keys(technologyCategories).length - categories.length} categorías
        </IconButton>
      )}
      {showAllCategories && <IconButton onClick={() => setShowAllCategories(false)}>Mostrar menos</IconButton>}
    </div>
  )
}
export default CategoriesButtons
