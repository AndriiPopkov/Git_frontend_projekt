import React, { useState } from 'react'
import { ROOT_URL } from '../..'
import s from './ProductCard.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../store/basketProductsSlice'

export default function ProductCard({ id, title, image, discont_price, price }) {

    const dispatch = useDispatch()
    const countProduct = 1
    const data_product = useSelector(store => store.products.products)

    const infoProduct = () => {
        const filteredProduct = data_product.filter(el => el.id === id)[0];
        dispatch(addProduct({ product: filteredProduct, countProduct }));
    }

    const styles = {
        background: discont_price > 0 ? 'yellow' : '',
    }
    const sale = Math.floor((discont_price * 100 / price - 100) * -1)
    const discount = sale >= 100 ? '' : `-${sale}%`

    const [text_btn, setText_btn] = useState('Add to Cart')
    const [active, setActive] = useState(false)

    const handleButtonClick = (event) => {
        event.preventDefault()
        infoProduct(id)
        setText_btn('Added')
        setActive(true)
        setTimeout(() => {
            setText_btn('Add to Cart')
            setActive(false)
        }, 2000)
    };

    return (
        <div className={s.product_item}>
            <div className={s.product_info}>
                <div className={s.container_picture}>
                    <img src={ROOT_URL + image} alt={title}></img>
                </div>
                <p style={styles}>{discount}</p>
                <button className={text_btn === 'Add to Cart' ? s.btn : s.btn_added }
                    onClick={handleButtonClick}
                    disabled={active}
                >{text_btn}</button>
            </div>
            <div className={s.description}>
                <div className={s.text_container}>
                    <p>{title}</p>
                </div>
                <div className={s.price}>
                    <p>{`$${discont_price > 0 ? discont_price : price}`}</p>
                    <p>{discont_price === null ? '' : `$${price}`}</p>
                </div>
            </div>
        </div>
    )
}

