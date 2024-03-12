import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fecthAllProducts,
  fetchCategoryProducts,
} from "../../asyncActions/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import {
  filterBySaleAction,
  filterFromToAction,
  sortedPrice1,
  sortedPrice2,
  sortedPrice3,
  sortedPrice4,
  sortedPrice5,
} from "../../store/productsReducer";
import s from "./ProductsPage.module.css";

function ProductsPage({ type }) {
  const { id } = useParams();
  const { category_title, products } = useSelector((store) => store.products);

  const filtere_products = products.filter((el) => el.isShow && el.isShowPrice);

  const dispatch = useDispatch();
  const checkboxRef = useRef();
  console.log(checkboxRef);
  const formRef = useRef();
  const optionRef = useRef()
  const fromRef = useRef()
  const toRef = useRef()

  useEffect(() => {
    window.scrollTo(0, 0);
      checkboxRef.current.checked = false;
      optionRef.current.value = 'by default'
      fromRef.current.value = ''
      toRef.current.value = ''
    if (type !== "category") {
      dispatch(fecthAllProducts(type));
    } else {
      dispatch(fetchCategoryProducts(id));
    }
  }, [id, type]);

  let count = 0;
  products.forEach((el) => (el.discont_price !== null ? count++ : ""));

  const styles = {
    display: type === "sale" ? "none" : "flex",
  };

  const handleSort = (e) => {
    if (e.target.value === "price:low-high") {
      dispatch(sortedPrice1());
    } else if (e.target.value === "price:high-low") {
      dispatch(sortedPrice2());
    } else if (e.target.value === "title:A-Z") {
      dispatch(sortedPrice3());
    } else if (e.target.value === "title:Z-A") {
      dispatch(sortedPrice4());
    } else {
      dispatch(sortedPrice5());
    }
  };

  function handleSaleBox(e) {
    dispatch(filterBySaleAction(e.target.checked));
  }

  function priceFormHandler(e) {
    let form_data = new FormData(e.target.parentElement);
    let data = Object.fromEntries(form_data);
    data.from = (data.from) ? +data.from : 0
    data.to = (!data.to) ? +Infinity : +data.to // положительная бесконечность
    console.log(data);
    dispatch(filterFromToAction(data));
  }

  return (
    <div className="wrapper">
      <h2>{category_title}</h2>
      <div className={`wrapper ${s.sort}`}>
        <div className={s.sortel}>
          <p>Price</p>
          <form ref={formRef} className={s.sort_input} onKeyUp={priceFormHandler}>
            <input ref={fromRef} placeholder="from" name="from"></input>
            <input ref={toRef} placeholder="to" name="to" ></input>
          </form>
        </div>
        <div className={s.check_container} style={styles}>
          <label className={s.label}>
            <p>Discounted items</p>
            <input
              ref={checkboxRef} type="checkbox" className={s.checkbox} onClick={handleSaleBox}/>
            <p className={s.fake}></p>
          </label>
        </div>
        <div className={s.sortel}>
          <p>Sorted</p>
          <select ref={optionRef} onChange={(e) => {handleSort(e)}}>
            <option>by default</option>
            <option>price:low-high</option>
            <option>price:high-low</option>
            <option>title:A-Z</option>
            <option>title:Z-A</option>
          </select>
        </div>
      </div>
      <div className={s.products}>
        {filtere_products.map((el) => (
          <Link className="link" key={el.id} to={`/products/${el.id}`}>
            <ProductCard {...el} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
