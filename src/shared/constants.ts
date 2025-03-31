export enum DEV_MODE {
  PROD = 'production',
  DEV = 'development'
}
export const DEV_ENV = process.env.NODE_ENV ?? DEV_MODE.DEV

export const MAIL = 'mail'
export const PHONE = '958978370'
export const LINKED_IN = 'in'
export const GITHUB = 'github'
export const FIGMA = 'figma'
export const CV = 'cv'
