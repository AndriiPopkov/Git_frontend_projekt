import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import BtnNav from "../../UI/BtnNav";
import s from './BreadCrumbs.module.css'

export default function BreadCrumbs() {

  const breadcrumbs = useBreadcrumbs()

  return (

      <div className='wrapper' >
      <div  className={s.bread} style={{display: breadcrumbs.length < 2 ? 'none' : 'flex'}}>
        <hr  className={s.line}></hr>
        {breadcrumbs
                    .filter(el => el.breadcrumb.props.children !== 'Products')
                    .map(el => <Link to={el.match.pathname}>
                    <BtnNav text={el.breadcrumb.props.children}></BtnNav>
                    </Link>)}
      </div>
    </div>

    
  )
}
