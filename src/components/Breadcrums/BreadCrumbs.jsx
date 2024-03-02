import { Link, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import BtnNav from "../../UI/BtnNav";
import s from './BreadCrumbs.module.css'

export default function BreadCrumbs() {
  const categories = ['Annuals', 'Nursery', 'Garden Art', 'Plant Care', 'Seasonal']

  const { pathname } = useLocation();
  console.log(pathname);

  // const containsProducts = url.includes("products");

  const numbers = ['1', '2', '3', '4', '5']

  // function found (arr, num) {
  //   return arr.filter(el => el === num)[0];
  // }

  // const found = () => numbers.filter(el => el === '1')[0];
  // console.log(found(numbers));

  const breadcrumbs = useBreadcrumbs()
  const new_b = breadcrumbs.map(el => {
    if (el.breadcrumb.props.children === '1') 
    return 'Annuals'
    if (el.breadcrumb.props.children === '2')
    return 'Nursery'
  else return el.breadcrumb.props.children}
  )

  // const new_bread = breadcrumbs.map(el => ({name: typeof +el.breadcrumb.props.children === 'number' ? el.breadcrumb.props.children : categories[+el.breadcrumb.props.children - 1], 
  // pathname: el.match.pathname }))

  const new_bread = breadcrumbs.map(el => ({name: numbers.includes(el.breadcrumb.props.children) ? categories[+el.breadcrumb.props.children - 1] : el.breadcrumb.props.children, 
  pathname: el.match.pathname }))
  console.log(new_bread);

  console.log(new_b);
  console.log(breadcrumbs);
  // изменение цвета текста последнего элемента хлебной крошки
  // const new_breadcrumbs = breadcrumbs.map((el, index) => ({ ...el, id: index + 1 }));
  const styles = {
    display: breadcrumbs.length < 2 || pathname.includes("NotFoundPage") ? 'none' : 'flex'
  }
  return (
    <div className='wrapper'>
      <div className={s.bread_style} style={styles}>
        <hr className={s.linie}></hr>
        {new_bread
            .filter(el => el.name !== 'Products')
            .map(el => <Link className={s.btn_el} to={el.pathname} key={el.id}>
              <BtnNav 
                text={el.name}></BtnNav>
            </Link>)}
          {/* {breadcrumbs
            .filter(el => el.breadcrumb.props.children !== 'Products')
            .map(el => <Link className={s.btn_el} to={el.match.pathname} key={el.id}>
              <BtnNav 
                // изменение цвета текста последнего элемента хлебной крошки
                // style={{bcolor: el.id === new_breadcrumbs.length ? 'red' : ''}} 
                text={el.breadcrumb.props.children}></BtnNav>
            </Link>)} */}
      </div>
    </div>

  )
}
