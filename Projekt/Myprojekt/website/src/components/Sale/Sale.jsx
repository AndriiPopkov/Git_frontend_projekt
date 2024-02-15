import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecthAllProducts } from '../../asyncActions/products'
import s from './Sale.module.css'
import { Link } from 'react-router-dom'
import ProductItem from '../ProductItem/ProductItem'

function Sale() {
    
    const { products } = useSelector(store => store.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fecthAllProducts('sale'))
    }, [])

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div id='sale' className={`wrapper ${s.products}`}>
            <div className={`wrapper ${s.header}`}>
                <h2>Sale</h2>
                <div className={s.cont}>
                    <hr className={s.line}></hr>
                    <Link to={'/products/sales'} >
                        <button onClick={handleClick} className={s.categories_btn}>All sales</button>
                    </Link>
                </div>
            </div>
            <div className={s.cont_sale}>
                {products.slice().sort((a, b) => b.price - a.price).slice(0, 4).map((el) => (
                    <Link className="link" key={el.id} to={`/products/${el.id}`}>
                        <ProductItem {...el} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sale
