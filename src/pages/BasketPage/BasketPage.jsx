import { useDispatch, useSelector } from 'react-redux'
import BasketElement from '../../components/BasketElement/BasketElement'
import s from './BasketPage.module.css'
import ButtonElem from '../../UI/ButtonElem/ButtonElem'
import { Link } from 'react-router-dom'
import { postFetchOrder } from '../../asyncActions/products'
import { changeOrderModal } from '../../store/modalSlice'
import BtnNav from '../../UI/BtnNav'
import { useState } from 'react'

export default function BasketPage() {

  const dispatch = useDispatch()

  const { products } = useSelector(store => store.productsbasket)
  const productsbasket = products

  const total = productsbasket.
    reduce((accum, el) => accum + (el.count * (el.dataProduct.discont_price === null
      ? el.dataProduct.price : el.dataProduct.discont_price)), 0)
  const sumPrice = Math.ceil(total * 100) / 100;

  const styles_btn = {
    width: '100%',
    marginTop: '32px',
    border: 'none'
  }

  const styles_btn_after = {
    width: '100%',
    marginTop: '32px',
    border: '1px solid black',
    color: 'black',
    backgroundColor: 'white'
  }

  const [style_btn, setStyle_btn] = useState(styles_btn)
  const [text_btn, setText_btn] = useState('Order')

  const form_submit = (event) => {
    event.preventDefault()
    const { name, phone_number, email } = event.target
    const new_order = {
      id: Date.now(),
      name: name.value,
      phone: phone_number.value,
      email: email.value,
      order: {
        data_order: productsbasket,
        sumOrder: sumPrice
      }
    }
    console.log(new_order);
    postFetchOrder(new_order)
    dispatch(changeOrderModal(true))
    setText_btn('The order is Placed')
    setStyle_btn(styles_btn_after)
    // event.target.reset()
  }

  return (
    <div className={[s.section, 'wrapper'].join(' ')}>
      <div className={`wrapper ${s.header}`}>
        <h2>Shopping cart</h2>
        <div className={s.cont}>
          <hr className={s.line}></hr>
          <Link to={'/products/all'}>
            <BtnNav text='Back to the store'></BtnNav>
          </Link>
        </div>
      </div>

      <div className={s.basketisnull}
        style={{ display: productsbasket.length === 0 ? 'flex' : 'none' }}>
        <p>Looks like you have no items in your basket currently.</p>
        <Link to={'/products/all'}>
          <button style={{ width: '290px', height: '58px', paddingTop: '' }}>Continue Shopping</button>
        </Link>
      </div>
      <div className={s.info}>
        <div className={s.container}>
          {productsbasket.map(el => <BasketElement key={el.id} {...el} />)}
        </div>
        <div className={s.box}>
          <section className={s.sum} 
          style={{ display: productsbasket.length === 0 ? 'none' : 'flex' }}>
            <h3>Order details</h3>
            <h3 style={{ color: '#8B8B8B', marginTop: '32px' }}>{`${productsbasket.length} items`}</h3>
            <div className={s.total}>
              <h3 style={{ color: '#8B8B8B' }}>Total</h3>
              <p
                className={s.total_price}>{`$${sumPrice}`}</p>
            </div>
            <form className={s.form} onSubmit={form_submit}>
              <input placeholder='Name' name='name'></input>
              <input placeholder='Phone number' name='phone_number'></input>
              <input placeholder='Email' name='email'></input>
              <ButtonElem style={style_btn} text={text_btn} />
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}
