import { useEffect } from 'react'
import useTelegram from './hooks/useTelegram'
import Header from './components/Header/Header'

function App() {
  const { onToggleButton, tg } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <>
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </>
  )
}

export default App
