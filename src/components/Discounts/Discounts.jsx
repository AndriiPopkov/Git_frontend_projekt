import React from 'react'
import background from './media/background.png'
import s from './Discount.module.css'
import ButtonElem from '../../UI/ButtonElem/ButtonElem'

export default function Discounts() {

    return (
        <div className={s.background_}>
            <img className={s.image} src={background} alt="" />
            <div className='wrapper'>
                <div className={s.bottom_top}></div>
                <h1 className={s.title}>Amazing Discounts on Garden Products!</h1>
                <a href="#sale">
                    <ButtonElem text="Check out" style={{border: 'none'}}/>
                </a>
            </div>
        </div>
    )
}

