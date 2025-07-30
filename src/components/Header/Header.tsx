import useTelegram from '../../hooks/useTelegram'
import Button from '../Button/Button'
// import './Header.css'

const Header = () => {
  const { user, onClose } = useTelegram()

  return (
    <header className='w-full h-12 flex items-center px-5'>
      <Button onClick={onClose}>Закрыть</Button>
      <span className='ml-auto'>{user?.username}</span>
    </header>
  )
}

export default Header
