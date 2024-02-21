import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fecthAllProducts,
  fetchCategoryProducts,
} from "../asyncActions/products";
import ProductItem from "../components/ProductItem/ProductItem";
import {
  filterBySaleAction,
  sortedPrice1,
  sortedPrice2,
  sortedPrice3,
  sortedPrice4,
  sortedPrice5,
} from "../store/productsReducer";
import s from "./Sort.module.css";

function ProductsPage({ type }) {
  const { id } = useParams();
  const { category_title, products } = useSelector((store) => store.products);
  const filtere_products = products.filter((el) => el.isShow);
  const dispatch = useDispatch();
  const checkboxRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      checkboxRef.current.checked = false;
    }, 0);

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

  return (
    <div className="wrapper">
      <h2>{category_title}</h2>
      <div className={`wrapper ${s.sort}`}>
        <div className={s.sortel}>
          <p>Price</p>
          <div className={s.sort_input}>
            <input placeholder="from"></input>
            <input placeholder="to"></input>
          </div>
        </div>
          <div className={s.check_container} style={styles}>
            <label className={s.label}>
              <p>Discounted items</p>
              <input
                ref={checkboxRef}
                type="checkbox"
                className={s.checkbox}
                onClick={handleSaleBox}
              />
              <p className={s.fake}></p>
            </label>
          </div>
        <div className={s.sortel}>
          <p>Sorted</p>
          <select
            onChange={(e) => {
              handleSort(e);
            }}>
            <option>by default</option>
            <option>price:low-high</option>
            <option>price:high-low</option>
            <option>title:A-Z</option>
            <option>title:Z-A</option>
          </select>
        </div>
      </div>
      <div className="products">
        {filtere_products.map((el) => (
          <Link className="link" key={el.id} to={`/products/${el.id}`}>
            <ProductItem {...el} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
