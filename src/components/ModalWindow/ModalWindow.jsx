import { useDispatch, useSelector } from 'react-redux'
import s from './ModalWindow.module.css'
import { changeOrderModal } from '../../store/modalSlice'
import { sendOrder } from '../../store/basketProductsSlice'

export default function ModalWindow() {

    const dispatch = useDispatch()
    const {orderModal} = useSelector(store => store.modal)

    const handleClick = () => {
        dispatch(changeOrderModal(false))
        dispatch(sendOrder())
    }
    
    return (
        <div className={orderModal ? s.modal_open : s.modal}>
            <div>
                <div className={s.header}>
                    <p>Сongratulations!</p>
                    <p 
                    onClick={handleClick}
                    >x</p>
                </div>
                <p>Your order has been successfully placed on the website</p>
                <p>A manager will contact you shortly to confirm your order</p>
            </div>
        </div>
    )
}
