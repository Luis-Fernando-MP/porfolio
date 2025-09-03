import { TechName } from '@/constants/technologies'
import { Award, BookOpen, GraduationCap, Medal } from 'lucide-react'

export type AchievementType = keyof typeof achievementCat
export const achievementCat = {
  Título: 10,
  Certificado: 9,
  Bootcamp: 8,
  Curso: 5
} as const

export type SkillDomain = keyof typeof skillDomainCategories
export const skillDomainCategories = {
  Fullstack: 10,
  Cloud: 9,
  Backend: 8,
  Frontend: 8,
  'Base de datos': 8,
  Diseño: 8
} as const

export type DevContribution = keyof typeof devContribution
export const devContribution = {
  Especializado: 10,
  Aplicables: 8,
  Fundamentos: 6
} as const

export const achievementTypeIcons = {
  Certificación: Award,
  Diploma: GraduationCap,
  Grado: GraduationCap,
  Bootcamp: BookOpen,
  Curso: Medal
} as const

export type AchievementWeight = keyof typeof achievementWeight
export const achievementWeight = {
  low: 1,
  medium: 2,
  high: 3,
  veryHigh: 4
} as const

export type Achievements = {
  path: string
  name: string
  achievementType: AchievementType
  skillDomain: SkillDomain[]
  technologies: TechName[]
  acquisitionDate: string
  devContribution: DevContribution
  weight: AchievementWeight
  AdditionalImages?: string[]
}

export const defaultPriorityOrder = ['Tipo', 'Contribución', 'Skill', 'Fecha', 'Nombre'] as const
export type OrderBy = (typeof defaultPriorityOrder)[number]
export type OrderDirection = 'asc' | 'desc'

export const FIELD_DEFAULT_DIR: Partial<Record<OrderBy, OrderDirection>> = {
  Tipo: 'desc',
  Contribución: 'desc',
  Skill: 'desc',
  Fecha: 'desc',
  Nombre: 'asc'
}
