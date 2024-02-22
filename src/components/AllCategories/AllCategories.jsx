import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from './AllCategories.module.css'
import CategoryItem from "../CategoryItem/CategoryItem";
import { Link } from "react-router-dom";
import { fetchCategoriesList } from "../../asyncActions/products";

export default function AllCategories() {

  const categories = useSelector((store) => store.categories);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesList())
  }, [])

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className={[s.sec, 'wrapper'].join(' ')}>
      <h2>Categories</h2>
      <div className={s.cont_img}>

        {categories.map((el) => (
          <Link onClick={handleClick} key={el.id} className= 'link' to={`/categories/${el.id}`}>
            <CategoryItem {...el} />
          </Link>
        ))}
      </div>
    </section>
  );
}

