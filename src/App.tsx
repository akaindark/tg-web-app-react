import { useEffect } from 'react'
import useTelegram from './hooks/useTelegram'
import Header from './components/Header/Header'

function App() {
  const { onToggleButton, tg } = useTelegram()

  useEffect(() => {
    tg.ready()
    console.log('User: ', tg.initDataUnsafe?.user)
  }, [])

  return (
    <>
      <Header />

      <button
        className='text-[var(--tg-theme-button-text-color)] bg-[var(--tg-theme-button-color)] px-3 py-2'
        onClick={onToggleButton}
      >
        Toggle
      </button>
    </>
  )
}

export default App
