import React, { useEffect } from 'react'
import { ROOT_URL } from '../..'
import s from './ProductItem.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../store/basketProductsSlice'

function ProductItem({ id, title, image, discont_price, price }) {

    const dispatch = useDispatch()
    const countProduct = 1
    const data_product = useSelector(store => store.products.products)

    const handleButtonClick = (event) => {
        event.preventDefault()
        infoProduct(id)
    };

    const infoProduct = () => {
        const filteredProduct = data_product.filter(el => el.id === id)[0];
        dispatch(addProduct({ product: filteredProduct, countProduct }));
    }

    const newtitle = `${title.slice(0, 19)}...`
    const styles = {
        background: discont_price > 0 ? 'yellow' : '',
    }
    const sale = Math.floor((discont_price * 100 / price - 100) * -1)
    const discount = sale >= 100 ? '' : `-${sale}%`

    return (
        <div className={s.product_item}>
            <div className={s.product_item_img}>
                <img src={ROOT_URL + image} alt={title}></img>
                <p style={styles}>{discount}</p>
                <button className={s.btn} 
                onClick={handleButtonClick}
                >Add to cart</button>    
            </div>
            <div className={s.description}>
                <p>{newtitle}</p>
                <div className={s.price}>
                    <p>{`$${discont_price > 0 ? discont_price : price}`}</p>
                    <p>{discont_price === null ? '' : `$${price}`}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
