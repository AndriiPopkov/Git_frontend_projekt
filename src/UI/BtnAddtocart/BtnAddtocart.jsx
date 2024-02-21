// import {useState } from "react"
// import s from './BtnAddtocart.module.css'

// export default function BtnAddtocart({text, onClick ,...otherProps}){

//     const [active, setActive] = useState(false)

//     function handle(e){
//         event.preventDefault()
//         // infoProduct(id)
//         onClick(e)
//         setActive(true)
//         setTimeout(() => {
//             setActive(false)
//         }, 2000)
//     }

//     return(
//         <button 
//             {...otherProps} 
//             className={active ? `${s.btn_active}` : `${s.add_cart_btn}`}
//             onClick={handle}
//             disabled={active}
//         >
//             {active ? 'Added' : text}
//         </button>
//     )
// }
