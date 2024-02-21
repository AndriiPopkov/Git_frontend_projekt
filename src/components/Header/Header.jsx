import React from 'react'
import s from './Header.module.css'
import basket from './media/basket.png'
import plant from './media/plant.png'
import ground from './media/ground.png'
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function Header() {

    // const location = useLocation();
    // const { pathname } = location;
    // console.log(pathname);

    // const url = "http://localhost:3000/products/all";
    // const containsProducts = url.includes("products");

    const countbasket = useSelector(store => store.productsbasket.count)

    const styles = {
        display: countbasket > 0 ? 'flex' : 'none'
    }

    const [close_burger, setClose_burger] = useState('none')

    return (
        <div className={s.linie} >
            <div className={[s.header, 'wrapper'].join(' ')}>
                <Link to={'/'}>
                    <div className={s.logo}>
                        <img className={s.plant} src={plant} alt="plant_icon" />
                        <img className={s.ground} src={ground} alt="ground_icon" />
                    </div>
                </Link>
                <nav>
                    <Link className='link' to={'/'}>
                        <p className={s.menu_el}>Main Page</p>
                    </Link>
                    <Link className='link' to={'/categories'}><p className={s.menu_el}>Categories</p></Link>
                    <Link className='link' to={'/products/all'}><p className={s.menu_el}>All products</p></Link>
                    <Link className='link' to={'/products/sales'}><p className={s.menu_el}>All sales</p></Link>
                </nav>
                <div className={s.elements}>
                    <Link to={'/basket'}>
                        <div style={{ position: 'relative' }}>
                            <p style={styles} className={s.count_basket}>{countbasket}</p>
                            <img className={s.icon_basket} src={basket} alt="basket_icon" />
                        </div>
                    </Link>
                    <div className={s.menu} onClick={() => setClose_burger('flex')}>
                        <div className={s.nav_menu}></div>
                        <div className={s.nav_menu}></div>
                        <div className={s.nav_menu}></div>
                    </div>
                    <div className={s.modal} style={{display: close_burger}}>
                        <p onClick={() => setClose_burger('none')} className={s.close}>x</p>
                        <Link className='link' to={'/'}><p onClick={() => setClose_burger('none')} className={s.text}>Main Page</p></Link>
                        <Link className='link' to={'/categories'}><p onClick={() => setClose_burger('none')} className={s.text}>Categories</p></Link>
                        <Link className='link' to={'/products/all'}><p onClick={() => setClose_burger('none')} className={s.text}>All products</p></Link>
                        <Link className='link' to={'/products/sales'}><p onClick={() => setClose_burger('none')} className={s.text}>All sales</p></Link>  
                    </div>
                </div>
            </div>
        </div>
    )
}


