import React from 'react'
import s from './RegistrDiscount.module.css'
import image from './media/image.png'
import RegistrationForm from '../RegistrationForm/RegistrationForm'

export default function RegistrDiscount() {

  return (
    <div className={[s.container, 'wrapper'].join(' ')}>
        <h2 style={{color: 'white', margin: 0, padding: 'auto'}}>5% off on the first order</h2>
        <div className={s.registr_form}>
            <img className={s.image} src={image} alt='image'></img>
            <div className={s.forms}>
              <RegistrationForm/>
            </div>
            
        </div>
    </div>
  )
}

