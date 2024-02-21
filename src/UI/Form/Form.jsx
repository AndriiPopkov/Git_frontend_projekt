import React from 'react'
import s from './Form.module.css'
import ButtonElem from '../ButtonElem/ButtonElem'

export default function Form({text, color, ...otherProps }) {
  return (
    <form className={`${s.form} ${s[color]}`}
    {...otherProps}>
        <input placeholder='Name'></input>
        <input placeholder='Phone number'></input>
        <input placeholder='Email'></input>
        <ButtonElem text='Order'/>
    </form>
  )
}
