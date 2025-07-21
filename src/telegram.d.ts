interface TelegramWebApp {
  ready: () => void
  close: () => void
  initDataUnsafe?: {
    user?: {
      username?: string
    }
  }
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp
  }
}
