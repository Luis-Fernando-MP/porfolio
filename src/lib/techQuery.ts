import { technologies } from '@/constants/technologies'
import { Layers, Monitor, Package, Server } from 'lucide-react'

export const technologyCategories = {
  framework: 10,
  language: 9,
  runtime: 9,
  database: 9,
  nosql: 9,
  sql: 9,
  cloud: 9,
  devops: 9,
  library: 8,
  style: 8,
  design: 8,
  superset: 8,
  hosting: 8,
  scripting: 8,
  IDE: 8,
  ORM: 7,
  container: 7,
  preprocessor: 7,
  'build-tool': 6,
  'query-language': 7,
  'utility-first': 7,
  'web-standard': 7,
  api: 6,
  browser: 6,
  testing: 6,
  VCS: 6,
  markup: 5,
  editor: 3,
  OS: 3,
  methodology: 2,
  presentation: 4,
  spreadsheet: 4,
  CMS: 7
} as const

export type TechnologyCategory = keyof typeof technologyCategories

export const technologyStack = {
  frontend: Monitor,
  backend: Server,
  fullstack: Layers,
  Kit: Package
} as const

export const TechnologyLevel = { Incursionando: 1, Aprendiendo: 2 }

export type TechnologyStack = keyof typeof technologyStack

export type Technology = {
  name: string
  src: string
  level: keyof typeof TechnologyLevel
  color: string
  categories: TechnologyCategory[]
  stack: TechnologyStack[]
  favoriteFor?: Array<'frontend' | 'backend'>
  notionPage?: string
}

export const listOfOrders = ['Categoría', 'Experiencia', 'Nombre'] as const

export type OrderDirection = 'asc' | 'desc'

export type OrderBy = (typeof listOfOrders)[number]

type FiltersTechnologies = {
  level?: Technology['level']
  categories?: Technology['categories']
  stack?: TechnologyStack
  favoriteFor?: 'frontend' | 'backend'
  hasNotionPage?: boolean
  orderBy?: OrderBy[]
  orderDirection?: OrderDirection
}

const sortComparators = {
  Nombre: (a: Technology, b: Technology) => a.name.localeCompare(b.name),
  Experiencia: (a: Technology, b: Technology) => {
    const levelA = TechnologyLevel[a.level] ?? 0
    const levelB = TechnologyLevel[b.level] ?? 0
    return levelA - levelB
  },
  Categoría: (a: Technology, b: Technology) => {
    const getMaxCategoryValue = (tech: Technology) => Math.max(...tech.categories.map(cat => technologyCategories[cat] ?? 0))
    return getMaxCategoryValue(a) - getMaxCategoryValue(b)
  }
} as const

const stackAliases: Record<TechnologyStack, TechnologyStack[]> = {
  fullstack: ['backend', 'frontend', 'fullstack'],
  backend: ['backend'],
  frontend: ['frontend'],
  Kit: ['Kit']
}

/**
 * Filters and sorts a list of technologies based on given criteria.
 *
 * @param {FiltersTechnologies} filters - Object containing filtering and sorting options.
 * @param {Technology['level']} [filters.level] - Filters technologies by proficiency level.
 * @param {Technology['categories']} [filters.categories] - Filters technologies by one or more categories.
 * @param {TechnologyStack} [filters.stack] - Filters technologies by their usage stack.
 * @param {'frontend' | 'backend'} [filters.favoriteFor] - Filters technologies marked as favorites for a specific context.
 * @param {boolean} [filters.hasNotionPage] - If true, includes only technologies with a linked Notion page.
 * @param {OrderBy[]} [filters.orderBy] - Defines keys to sort the results by, applied in order of priority.
 * @param {'asc' | 'desc'} [filters.orderDirection] - Defines the sort direction: 'asc' for ascending, 'desc' for descending.
 * @param {Technology[]} [techList=technologies] - Optional list of technologies to filter and sort. Defaults to the global list.
 *
 * @example
 * // Filter only frontend technologies marked as favorites
 * techQuery({ favoriteFor: 'frontend' })
 *
 * @example
 * // Filter technologies by levels and categories, and sort by name
 * techQuery({
 *   level: 'Dominated',
 *   categories: ['framework', 'preprocessor'],
 *   orderBy: ['name'],
 *   orderDirection: 'asc'
 * })
 *
 * @example
 * // Filter backend technologies with a Notion page
 * techQuery({
 *   stack: 'backend',
 *   hasNotionPage: true
 * })
 */
export function techQuery(filters: FiltersTechnologies = {}, techList?: Technology[]): Technology[] {
  const { orderBy, orderDirection, stack: filterStack } = filters

  const list = techList ?? (technologies as any as Technology[])

  const filtered = list.filter(tech => {
    const { level, categories, stack } = tech

    if (filters.level && level !== filters.level) return false

    if (filters.categories && filters.categories.length > 0 && !filters.categories.some(cat => categories.includes(cat)))
      return false

    if (filterStack) {
      const allowed = stack.flatMap(s => stackAliases[s])
      const includeStackFilter = allowed.includes(filterStack)
      if (!includeStackFilter) return false
    }

    if (filters.favoriteFor && !tech.favoriteFor?.includes(filters.favoriteFor)) return false

    if (filters.hasNotionPage && !tech.notionPage) return false

    return true
  })

  if (!orderBy || orderBy.length === 0) return filtered

  const direction = orderDirection === 'desc' ? -1 : 1

  return [...filtered].sort((a, b) => {
    for (const key of orderBy) {
      const comparator = sortComparators[key]
      if (!comparator) continue
      const result = comparator(a, b)
      if (result !== 0) return result * direction
    }
    return 0
  })
}
