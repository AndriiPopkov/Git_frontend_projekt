import React, { useEffect, useState } from 'react'
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
        handlerStyle()
    };

    const infoProduct = () => {
        const filteredProduct = data_product.filter(el => el.id === id)[0];
        dispatch(addProduct({ product: filteredProduct, countProduct }));
    }

    const styles = {
        background: discont_price > 0 ? 'yellow' : '',
    }
    const sale = Math.floor((discont_price * 100 / price - 100) * -1)
    const discount = sale >= 100 ? '' : `-${sale}%`

    const styles_after = {
        color: 'black',
        border: '2px solid black',
        backgroundColor: 'white',
    }

    const [isHovered, setIsHovered] = useState(false);

     const buttonStyles = {
        color: 'white',
        backgroundColor: isHovered ? 'black' : 'green',
    };

    const [change_btn, setChange_btn] = useState(buttonStyles)
    const [text_btn, setText_btn] = useState('Add to Cart')
    const [active, setActive] = useState(false)
    
    useEffect(() => {
        setChange_btn(buttonStyles)
    }, [isHovered])
   
    const handlerStyle = () => {
        setChange_btn(styles_after)
        setText_btn('Added')
        setActive(true)
        setTimeout(() => {
            setChange_btn({})
            setText_btn('Add to Cart')
            setActive(false)
        }, 1000);
    }

    return (
        <div className={s.product_item}>
            <div className={s.product_info}>
                <div className={s.container_picture}>
                    <img src={ROOT_URL + image} alt={title}></img>
                </div>
                <p style={styles}>{discount}</p>
                <button className={s.btn}
                    style={change_btn}
                    onClick={handleButtonClick}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
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

export default ProductItem
