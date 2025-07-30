import { useEffect, useState } from 'react'
import useTelegram from '../hooks/useTelegram'

const Form = () => {
  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [subject, setSubject] = useState('')
  const { tg } = useTelegram()

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные',
    })
  }, [])

  useEffect(() => {
    if (!street || !country) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [country, street])

  const onChangeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value)
  }
  const onChangeStreet = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value)
  }
  const onChangeSubject = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value)
  }

  return (
    <form className='flex flex-col gap-2'>
      <h3 className='text-xl'>Введите ваши данные</h3>
      <input
        className='border border-blue-400 outline-blue-400 py-1.5 px-2'
        type='text'
        placeholder='Страна'
        onChange={onChangeCountry}
        value={country}
      />
      <input
        className='border border-blue-400 outline-blue-400 py-1.5 px-2'
        type='text'
        placeholder='Улица'
        onChange={onChangeStreet}
        value={street}
      />
      <select
        className='border border-blue-400 outline-blue-400 py-1.5 px-2'
        onChange={onChangeSubject}
        value={subject}
      >
        <option value='physical'>Физ. лицо</option>
        <option value='legal'>Юр. лицо</option>
      </select>
    </form>
  )
}

export default Form
