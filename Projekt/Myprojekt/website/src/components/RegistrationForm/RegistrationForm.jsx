import React, { useState } from 'react'
import s from './RegistrationForm.module.css'
import ButtonElem from '../../UI/ButtonElem/ButtonElem'
import { useDispatch, useSelector } from 'react-redux'
import { changeOrderModal } from '../../store/modalSlice'
import { postFetchDiscont } from '../../asyncActions/products'

function RegistrationForm() {

  const dispatch = useDispatch()

  const { orderModal } = useSelector(store => store.modal)
  console.log(orderModal);

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
    postFetchDiscont(new_discont)
    event.target.reset()
  }

  const styles_before = {
    color: 'black',
    backgroundColor: 'white'
  }

  const styles_after = {
    color: 'green',
    backgroundColor: 'white'
  }
  const [change_btn, setChange_btn] = useState({})
  const [text_btn, setText_btn] = useState('Get a discount')
  const handlerStyle = () => {
    dispatch(changeOrderModal(true))
    setChange_btn(styles_after)
    setText_btn('Request Submitted')
  }

  // setChange_btn(orderModal === false ? styles_before : '')

  return (
    <form className={s.form} onSubmit={form_submit}>
      <input placeholder='Name' name='name'></input>
      <input placeholder='Phone number' name='phone_number'></input>
      <input placeholder='Email' name='email'></input>
      <ButtonElem onClick={handlerStyle}
        text={text_btn} style={change_btn} />
    </form>
  )
}

export default RegistrationForm