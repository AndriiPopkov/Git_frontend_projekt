import React from 'react'
import { ROOT_URL } from '../..'
import s from './BasketElement.module.css'
import minus from './media/minus.png'
import plus from './media/plus.png'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteItem, deleteProduct } from '../../store/basketProductsSlice'

export default function BasketElement({ id, dataProduct, count }) {

    const products = useSelector(store => store.productsbasket)

    const dispatch = useDispatch()

    const countProduct = 1

    const {price, discont_price} = dataProduct

    const addCountProduct = () => {
        dispatch(addProduct({ product: dataProduct, countProduct }));
    }
    const newCount = count-1

    const delCountProduct = () => {
        dispatch(deleteProduct({ product: dataProduct, countProduct, newCount }));
    }

    const handler = (e) => {
        e.stopPropagation();
        dispatch(deleteItem({id, dataProduct, count}))
    }

    return (
        <div className={s.basket_element}>
            <span onClick={handler}>x</span>
            <img src={ROOT_URL + dataProduct.image} alt="" />
            <div>
                <p>{dataProduct.title}</p>
                <div className={s.count_price}>
                    <div className={s.counter}>
                        <button 
                            onClick={delCountProduct} 
                            className={s.p_m}>
                            <img src={minus} alt="minus" />
                        </button>
                        {count}
                        <button
                            onClick={addCountProduct}
                            className={s.p_m}>
                            <img src={plus} alt="plus" />
                        </button>
                    </div>
                    <div className={s.price}>
                        <p>{`$${discont_price === null ? price:discont_price}`}</p>
                        <p>{discont_price === null ? '':`$${price}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
