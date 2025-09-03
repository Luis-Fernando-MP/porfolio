import { achievements } from '@/constants/achievements'
import { TechName } from '@/constants/technologies'
import dayjs from 'dayjs'

import {
  AchievementType,
  Achievements,
  DevContribution,
  FIELD_DEFAULT_DIR,
  OrderBy,
  OrderDirection,
  SkillDomain,
  defaultPriorityOrder
} from './achievement.type'
import { achievementSortComparators } from './sortComparators'

type IssueDate = { from?: string; to?: string }
type Filters = {
  achievementType?: AchievementType
  skillDomain?: SkillDomain[]
  technologies?: TechName[]
  acquisitionRange?: IssueDate
  devContribution?: DevContribution
  orderBy?: OrderBy[]
  orderDirection?: OrderDirection
}

export function achievementsQuery(filters: Filters = {}, list: Achievements[] = achievements) {
  const { achievementType, skillDomain, devContribution, acquisitionRange, technologies, orderBy } = filters

  const filtered = list.filter(cert => {
    if (achievementType && cert.achievementType !== achievementType) return false
    if (devContribution && cert.devContribution !== devContribution) return false
    if (skillDomain && !cert.skillDomain.some(s => skillDomain.includes(s))) return false
    if (technologies && !cert.technologies.some(t => technologies.includes(t))) return false
    if (acquisitionRange) {
      const { from, to } = acquisitionRange
      const certDate = dayjs(cert.acquisitionDate)
      if (from && certDate.isBefore(dayjs(from), 'day')) return false
      if (to && certDate.isAfter(dayjs(to), 'day')) return false
    }
    return true
  })

  if (!orderBy) return filtered

  const requested = orderBy ?? defaultPriorityOrder

  const priority = defaultPriorityOrder.filter(k => requested.includes(k))

  return [...filtered].sort((a, b) => {
    for (const key of priority) {
      const cmp = achievementSortComparators[key]?.(a, b) ?? 0
      if (cmp === 0) continue

      const dir: OrderDirection = filters.orderDirection ?? FIELD_DEFAULT_DIR[key] ?? 'asc'
      return dir === 'desc' ? -cmp : cmp
    }

    return 0
  })
}
