import React from 'react'
import s from './RegistrDiscount.module.css'
import image from './media/image.png'
import RegistrationForm from '../RegistrationForm/RegistrationForm'

export default function RegistrDiscount() {

  return (
    <div className={[s.container, 'wrapper'].join(' ')}>
      <h2 className={s.title}>5% off on the first order</h2>
      <div className={s.registr_form}>
        <div className={s.container_img}>
          <img className={s.image} src={image} alt='image'></img>
        </div>
        <div className={s.forms}>
          <RegistrationForm />
        </div>

      </div>
    </div>
  )
}

