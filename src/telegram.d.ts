// src/telegram.d.ts

interface TelegramWebAppUser {
  username?: string
  // другие поля пользователя, если нужно
}

interface TelegramWebAppInitDataUnsafe {
  user?: TelegramWebAppUser
  // другие поля, если нужно
}

interface TelegramMainButton {
  isVisible: boolean
  show: () => void
  hide: () => void
  setParams: (params: {
    text: string
    color?: string
    textColor?: string
    isActive?: boolean
    isProgressVisible?: boolean
  }) => void
  onClick: (callback: () => void) => void
  offClick: (callback: () => void) => void
}

interface TelegramWebApp {
  ready: () => void
  close: () => void
  initDataUnsafe?: TelegramWebAppInitDataUnsafe
  MainButton: TelegramMainButton
  // другие методы и свойства, если нужно
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp
  }
}
