import { Link, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import BtnNav from "../../UI/BtnNav";
import s from './BreadCrumbs.module.css'

export default function BreadCrumbs() {

  const { pathname } = useLocation();
  // console.log(pathname);

  // const containsProducts = url.includes("products");

  const breadcrumbs = useBreadcrumbs()
  // изменение цвета текста последнего элемента хлебной крошки
  // const new_breadcrumbs = breadcrumbs.map((el, index) => ({ ...el, id: index + 1 }));
  const styles = {
    display: breadcrumbs.length < 2 || pathname.includes("NotFoundPage") ? 'none' : 'flex'
  }
  return (
    <div className='wrapper' >
      <div className={s.bread_style} style={styles}>
        <hr className={s.linie}></hr>
          {breadcrumbs
            .filter(el => el.breadcrumb.props.children !== 'Products')
            .map(el => <Link className={s.btn_el} to={el.match.pathname} key={el.id}>
              <BtnNav 
                // изменение цвета текста последнего элемента хлебной крошки
                // style={{bcolor: el.id === new_breadcrumbs.length ? 'red' : ''}} 
                text={el.breadcrumb.props.children}></BtnNav>
            </Link>)}
      </div>
    </div>

  )
}
