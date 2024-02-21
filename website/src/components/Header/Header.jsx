import React from 'react'
import s from './Header.module.css'
import basket from './media/basket.png'
import plant from './media/plant.png'
import ground from './media/ground.png'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function Header() {

    const countbasket = useSelector(store => store.productsbasket.count)

    const styles = {
        display: countbasket > 0 ? 'flex' : 'none'
    }

    return (
        <div className={s.linie} >
            <div className={[s.header, 'wrapper'].join(' ')}>
                <Link to={'/'}>
                    <div className={s.logo}>
                        <img className={s.plant} width='36' src={plant} alt="plant_icon" />
                        <img className={s.ground} width='36' src={ground} alt="ground_icon" />
                    </div>
                </Link>
                <nav>
                    <Link className='link' to={'/'}>
                        <p>Main Page</p>
                    </Link>
                    <Link className='link' to={'/categories'}><p>Categories</p></Link>
                    <Link className='link' to={'/products/all'}><p>All products</p></Link>
                    <Link className='link' to={'/products/sales'}><p>All sales</p></Link>
                </nav>
                <div className={s.elements}>
                    <Link to={'/basket'}>
                        <div style={{ position: 'relative' }}>
                            <p style={styles} className={s.count_basket}>{countbasket}</p>
                            <img width='48' height='48' src={basket} alt="basket_icon" />
                        </div>
                    </Link>
                    <div className={s.menu}>
                        <div className={s.nav_menu}></div>
                        <div className={s.nav_menu}></div>
                        <div className={s.nav_menu}></div>
                    </div>

                </div>
              <nav className={[s.modal, 'wrapper'].join(' ')}>
                    <Link className='link' to={'/'}><p>Main Page</p></Link>
                    <Link className='link' to={'/categories'}><p>Categories</p></Link>
                    <Link className='link' to={'/products/all'}><p>All products</p></Link>
                    <Link className='link' to={'/products/sales'}><p>All sales</p></Link>
            </nav> 
            </div>
            
        </div>
    )
}


