import { OrderBy } from '@/lib/achievementsQuery/achievement.type'
import { StateCreator, create } from 'zustand'

interface Props {
  search: string
  selectedTypes: string[]
  selectedDomains: string[]
  selectedTechs: string[]
  showTechFilters: boolean
  orderBy: OrderBy[]
  page: number
  setSearch: (search: string) => void
  toggleType: (type: string) => void
  toggleDomain: (domain: string) => void
  toggleTech: (tech: string) => void
  toggleShowTechFilters: () => void
  toggleOrder: (field: OrderBy) => void
  setPage: (page: number) => void
  resetTypes: () => void
}

const state: StateCreator<Props> = set => ({
  search: '',
  selectedTypes: [],
  selectedDomains: [],
  selectedTechs: [],
  showTechFilters: false,
  orderBy: ['Contribución', 'Fecha'],
  page: 1,
  setSearch: search => set({ search, page: 1 }),
  toggleType: type =>
    set(state => ({
      selectedTypes: state.selectedTypes.includes(type)
        ? state.selectedTypes.filter(t => t !== type)
        : [...state.selectedTypes, type],
      page: 1
    })),
  toggleDomain: domain =>
    set(state => ({
      selectedDomains: state.selectedDomains.includes(domain)
        ? state.selectedDomains.filter(d => d !== domain)
        : [...state.selectedDomains, domain],
      page: 1
    })),
  toggleTech: tech =>
    set(state => ({
      selectedTechs: state.selectedTechs.includes(tech)
        ? state.selectedTechs.filter(t => t !== tech)
        : [...state.selectedTechs, tech],
      page: 1
    })),
  toggleShowTechFilters: () => set(state => ({ showTechFilters: !state.showTechFilters })),
  toggleOrder: field =>
    set(state => ({
      orderBy: state.orderBy.includes(field) ? state.orderBy.filter(f => f !== field) : [...state.orderBy, field],
      page: 1
    })),
  setPage: page => set({ page }),
  resetTypes: () => set({ selectedTypes: [], page: 1 })
})

const useAchievementsStore = create(state)

export default useAchievementsStore
