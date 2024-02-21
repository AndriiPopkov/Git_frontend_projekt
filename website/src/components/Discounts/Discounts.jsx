import React from 'react'
import background from './media/background.png'
import s from './Discount.module.css'
import ButtonElem from '../../UI/ButtonElem/ButtonElem'

export default function Discounts() {
    
    const styles = {
        backgroundImage: `url('${background}')`,
        height: '600px',
        paddingTop: '80px'
    }

    return (
        <div style={styles}>
            <div className='wrapper'>
                <h1 className={s.title}>Amazing Discounts on Garden Products!</h1>
                <a href="#sale">
                    <ButtonElem text={"Check out"}/>
                </a>  
            </div>
        </div>
    )
}

