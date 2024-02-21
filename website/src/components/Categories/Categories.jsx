import React from 'react'
import s from './Categories.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriesList } from '../../asyncActions/products'
import CategoryItem from '../CategoryItem/CategoryItem'
import { useEffect } from 'react'
import BtnNav from '../../UI/BtnNav'

export default function Categories() {

    const categories = useSelector(store => store.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesList())
    }, [])

    return (
        <div className={`wrapper ${s.categories}`}>
            <div className={`wrapper ${s.header}`}>
                <h2>Categories</h2>
                <div className={s.cont}>
                    <hr className={s.line}></hr>
                    <Link to={'/categories'}>
                        <BtnNav text='All categories'></BtnNav>
                        {/* <button className={s.categories_btn}>All categories</button> */}
                    </Link>
                </div>
            </div>

            <div className={s.cont_category}>
                {categories.slice(0, 4).map(el => <Link key={el.id} className='link' to={`/categories/${el.id}`}>
                    <CategoryItem  {...el}/></Link>)}
            </div>
        </div>
    )
}


