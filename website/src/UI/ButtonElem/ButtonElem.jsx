import React from 'react'
import s from './ButtonElem.module.css'

export default function ButtonElem({text, color, ...otherProps }) {
  return (
    <button
    {...otherProps}
    className={`${s.button_elem} ${s.header_btn} ${s[color]}`}
    >{text}</button>
  )
}


