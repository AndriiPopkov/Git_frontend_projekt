import { useDispatch, useSelector } from 'react-redux'
import s from './Sort.module.css'
import ProductItem from '../ProductItem/ProductItem'
import { Link } from 'react-router-dom';
import { allProductsAction } from '../../store/productsReducer';

export default function Sort() {

    const dispatch = useDispatch()
    const { products } = useSelector((store) => store.products);
    const ppp = useSelector((store) => store);
    // console.log(ppp);
    // console.log(products, category_title);
    let count = 0
    products.forEach(el => el.discont_price !== null ? count++ : '');
    // console.log(count);
    const styles = {
        display: products.length === count ? 'none' : 'flex'
    }

    const handleSort = (e) => {
        if (e.target.value === 'price:low-high') {
            const sortedLH = [...products].sort((a, b) => a.price - b.price);
            dispatch(allProductsAction(sortedLH));
        } else if (e.target.value === 'by default') {
            const bydefault = [...products].sort((a, b) => a.id - b.id)
            dispatch(allProductsAction(bydefault));
        } else if (e.target.value === 'price:high-low') {
            const sortedHL = [...products].sort((a, b) => b.price - a.price)
            dispatch(allProductsAction(sortedHL));
        } else if (e.target.value === 'title:A-Z') {
            const sortedAZ = [...products].sort((a, b) => {
                const nameA = a.title.toLowerCase(); 
                const nameB = b.title.toLowerCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
            dispatch(allProductsAction(sortedAZ));
        } else if (e.target.value === 'title:Z-A') {
            const sortedAZ = [...products].sort((a, b) => {
                const nameA = a.title.toLowerCase(); 
                const nameB = b.title.toLowerCase();
                if (nameA < nameB) return 1;
                if (nameA > nameB) return -1;
                return 0;
            });
            dispatch(allProductsAction(sortedAZ));
        } 
    };

    return (
        <div>
            <div className={`wrapper ${s.sort}`}>
                <div className={s.sortel}>
                    <p>Price</p>
                    <div className={s.sort_input}>
                        <input placeholder='from'></input>
                        <input placeholder='to'></input>
                    </div>
                </div>
                <div className={s.sortel} style={styles}>
                    <p>Discounted items</p>
                    <input className={s.check} type="checkbox" name="discountCheckbox"></input>
                </div>
                <div className={s.sortel}>
                    <select onChange={(e) => {
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
                {products.map((el) => (
                    <Link className='link' key={el.id} to={`/products/${el.id}`}>
                        <ProductItem {...el} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
