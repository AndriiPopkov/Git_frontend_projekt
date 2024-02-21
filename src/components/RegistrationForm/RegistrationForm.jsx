import React, { useEffect, useRef, useState } from 'react'
import s from './RegistrationForm.module.css'
import ButtonElem from '../../UI/ButtonElem/ButtonElem'
import { useDispatch, useSelector } from 'react-redux'
import { changeOrderModal } from '../../store/modalSlice'
import { postFetchDiscont } from '../../asyncActions/products'

function RegistrationForm() {
  const formRef = useRef()
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
    dispatch(changeOrderModal(true))
  }

  const [hover, setHover] = useState(false)

  const styles_before = {
    color: !hover ? 'black' : 'white',
    backgroundColor: hover ? 'black' : 'white',
    transition: '0.5s'
  }

  const styles_after = {
    color: 'green',
    backgroundColor: 'white'
  }

  const text_btn = orderModal ? 'Request Submitted' : 'Get a discount'
  const change_btn = !orderModal ? styles_before : styles_after

  useEffect(() => {
    if (!orderModal) {
      formRef.current.reset()
    }
  }, [orderModal])

  return (
    <form className={s.form} onSubmit={form_submit} ref={formRef}>
      <input placeholder='Name' name='name'></input>
      <input placeholder='Phone number' name='phone_number'></input>
      <input placeholder='Email' name='email'></input>
      <ButtonElem
        text={text_btn} style={change_btn}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}/>
    </form>
  )
}

export default RegistrationForm