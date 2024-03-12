import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../../asyncActions/products'
import { ROOT_URL } from '../..'
import s from './ProductItem.module.css'
import minus from './media/minus.png'
import plus from './media/plus.png'
import { addProduct } from '../../store/basketProductsSlice'

export default function Item() {

    const { id } = useParams()
    console.log(id);
    const dispatch = useDispatch()
    const product = useSelector(store => store.product)

    const [countProduct, setCountProduct] = useState(1)
    const [active, setActive] = useState(false)

    const { title, image, discont_price, price, description } = product

    const styles = {
        display: discont_price > 0 ? 'flex' : 'none',
        background: discont_price > 0 ? 'yellow' : ''
    }

    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [dispatch])

    const sale = Math.floor((discont_price * 100 / price - 100) * -1)
    const discount = sale >= 100 ? '' : `-${sale}%`

    const [text_btn, setText_btn] = useState('Add to Cart')
    const handlerStyle = () => {
        setText_btn('Added')
        setActive(true)
        setTimeout(() => {
            setText_btn('Add to Cart')
            setActive(false)
        }, 2000);
    }

    return (
        <div className={['wrapper', s.card].join(' ')}>
            <h3 className={s.title_new}>{title}</h3>
            <div className={s.picture}>
                <img className={s.pic} src={ROOT_URL + image} alt={title} />
            </div>
            <div className={s.about}>
                <h3 className={s.title}>{title}</h3>
                <div className={s.price}>
                    <div>
                        <p className={s.cont}>{`$${discont_price > 0 ? discont_price : price}`}</p>
                        <p className={s.newdiscount}>{discont_price === null ? '' : `$${price}`}</p>
                    </div>
                    <p className={s.proc} style={styles}>{discont_price === null ? '' : discount}</p>
                </div>
                <div className={s.counter}>
                    <div className={s.counter_btn}>
                        <button onClick={() => countProduct > 1 ? setCountProduct(countProduct - 1) : countProduct} className={s.m_p}>
                            <img src={minus} alt="minus" />
                        </button>
                        <p>{countProduct}</p>
                        <button onClick={() => setCountProduct(countProduct + 1)} className={s.m_p}>
                            <img src={plus} alt="plus" />
                        </button>
                    </div>
                    <button className={text_btn === 'Add to Cart' ? s.btn : s.btn_added}
                        disabled={active}
                        onClick={() => {
                            dispatch(addProduct({ product, countProduct }))
                            setCountProduct(1)
                            handlerStyle()
                        }}
                    >{text_btn}
                    </button>
                </div>
                
            </div>
            <div className={s.description}>
                    <p className={s.desc}>Description</p>
                    <p className={s.text}>{description}</p>
                </div>
        </div>
    )
}
