import React from 'react'
import s from './CategoryItem.module.css'

export default function CategoryItem({ title, image }) {

    return (
        <div className={s.cont_category}>
            <img src={`http://localhost:3333${image}`} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}



