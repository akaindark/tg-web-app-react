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
  // другие методы и свойства MainButton, если нужно
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
