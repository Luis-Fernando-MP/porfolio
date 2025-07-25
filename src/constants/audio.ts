export const AUDIOS = {
  MENU_OPEN: { path: '/audio/menu-open.ogg' },
  MENU_CLOSE: { path: '/audio/menu-close.ogg' },

  SWITCH_OFF: { path: '/audio/switch-off.ogg' },
  SWITCH_ON: { path: '/audio/switch-on.ogg' },

  MESSAGE: { path: '/audio/message.ogg' },
  MESSAGE_INSTANT: { path: '/audio/message-instant.ogg' },

  BUTTON_ON: { path: '/audio/button_on.ogg' },
  BUTTON_OFF: { path: '/audio/button_off.ogg' }
} as const

export type Audio = keyof typeof AUDIOS
