interface TelegramWebApp {
  ready: () => void
  close: () => void
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp
  }
}
