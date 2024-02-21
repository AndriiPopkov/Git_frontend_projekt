import React from 'react'
import s from './index.module.css'

export default function BtnNav({text, ...otherProps }) {
  return (
    <button
    {...otherProps}
    className={s.header_btn} 
    >{text}</button>
  )
}


