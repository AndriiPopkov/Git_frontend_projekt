import React from 'react'
import s from './ButtonElem.module.css'

export default function ButtonElem({text, color, height, width, ...otherProps }) {
  return (
    <button
    {...otherProps}
    className={`${s.custom_btn} ${s[color]}`}
    >{text}</button>
  )
}


