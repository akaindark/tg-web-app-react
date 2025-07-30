import React, { useState } from 'react'

const Form = () => {
  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [subject, setSubject] = useState('')

  const onChangeCountry = e => {
    setCountry(e.target.value)
  }
  const onChangeStreet = e => {
    setStreet(e.target.value)
  }
  const onChangeSubject = e => {
    setSubject(e.target.value)
  }

  return (
    <form className='flex flex-col gap-2'>
      <h3 className='text-xl'>Введите ваши данные</h3>
      <input
        type='text'
        placeholder='Страна'
        onChange={onChangeCountry}
        value={country}
      />
      <input
        type='text'
        placeholder='Улица'
        onChange={onChangeStreet}
        value={street}
      />
      <select onChange={onChangeSubject} value={subject}>
        <option value='physical'>Физ. лицо</option>
        <option value='legal'>Юр. лицо</option>
      </select>
    </form>
  )
}

export default Form
