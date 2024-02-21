import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../../asyncActions/products'
import { ROOT_URL } from '../..'
import s from './Item.module.css'
import ButtonElem from '../../UI/ButtonElem/ButtonElem'
import minus from './media/minus.png'
import plus from './media/plus.png'
import { addProduct } from '../../store/basketProductsSlice'

export default function Item() {

    const { id } = useParams()
    const product = useSelector(store => store.product)
    const productsbasket = useSelector(store => store.productsbasket.products)
    const countbasket = useSelector(store => store.productsbasket.count)

    const [countProduct, setCountProduct] = useState(1)

    console.log('корзина', productsbasket, countbasket);

    const { title, image, discont_price, price, description
    } = product

    const styles = {
        display: discont_price > 0 ? 'flex' : 'none',
        background: discont_price > 0 ? 'yellow' : ''
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [dispatch])

    const sale = Math.floor((discont_price * 100 / price - 100) * -1)
    const discount = sale >= 100 ? '' : `-${sale}%`

    return (
        <div className={['wrapper', s.card].join(' ')}>
            <div>
                <img className={s.pic} src={ROOT_URL + image} alt={title} />
            </div>
            <div className={s.about}>
                <h3>{title}</h3>
                <div className={s.price}>
                    <div>
                        <p className={s.cont}>{`$${discont_price > 0 ? discont_price : price}`}</p>
                        <p className={s.newdiscount}>{discont_price === null ? '' : `$${price}`}</p>
                    </div>
                    <p className={s.proc} style={styles}>{discont_price === null ? '' : discount}</p>
                </div>
                <div className={s.counter}>
                    <div className={s.counter_btn}>
                        <button onClick={() => countProduct > 0 ? setCountProduct(countProduct - 1) : countProduct} className={s.m_p}>
                            <img src={minus} alt="minus" />
                        </button>
                        <p>{countProduct}</p>
                        <button onClick={() => setCountProduct(countProduct + 1)} className={s.m_p}>
                            <img src={plus} alt="plus" />
                        </button>
                    </div>
                    <ButtonElem onClick={() => {
                        dispatch(addProduct({ product, countProduct }))
                        setCountProduct(1)
                    }
                    }
                        style={{ width: '316px' }} text='Add to Cart' />
                </div>
                <p className={s.desc}>Description</p>
                <p className={s.text}>{description}</p>
            </div>
        </div>
    )
}
