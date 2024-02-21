import React from 'react'
import s from './RegistrationForm.module.css'
import ButtonElem from '../../UI/ButtonElem/ButtonElem'
import { useDispatch } from 'react-redux'
import { changeOrderModal } from '../../store/modalSlice'
import { postFetchDiscont } from '../../asyncActions/products'

function RegistrationForm() {

  const dispatch = useDispatch()

  const form_submit = (event) => {
    event.preventDefault()
    const { name, phone_number, email } = event.target
    const new_discont = {
      id: Date.now(),
      name: name.value,
      phone: phone_number.value,
      email: email.value,
      discont: 5
    }
    dispatch(postFetchDiscont(new_discont))
    event.target.reset()
  }

  return (
    <form className={s.form} onSubmit={form_submit}>
      <input placeholder='Name' name='name'></input>
      <input placeholder='Phone number' name='phone_number'></input>
      <input  placeholder='Email' name='email'></input>
      <ButtonElem onClick={() => dispatch(changeOrderModal(true))} text='Get a discount' />
    </form>
  )
}

export default RegistrationForm