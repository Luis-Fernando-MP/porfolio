export const AUDIOS = {
  MENU_OPEN: { path: '/audio/menu-open.mp3' },
  MENU_CLOSE: { path: '/audio/menu-close.mp3' },
  SWITCH_OFF: { path: '/audio/switch-off.mp3' },
  SWITCH_ON: { path: '/audio/switch-on.mp3' },
  BUTTON: { path: '/audio/button.mp3' }
} as const

export type Audio = keyof typeof AUDIOS
