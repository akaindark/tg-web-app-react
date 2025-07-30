import { useEffect } from 'react'
import useTelegram from './hooks/useTelegram'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import ProductList from './components/ProductList'
import Form from './components/Form'

function App() {
  const { tg } = useTelegram()

  useEffect(() => {
    tg.ready()
    console.log('User: ', tg.initDataUnsafe?.user)
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path='form' element={<Form />} />
      </Routes>
    </>
  )
}

export default App
