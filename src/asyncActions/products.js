import { asyncCategoriesListAction } from "../store/categoriesReducer"
import { ROOT_URL } from ".."
import { allProductsAction, categoryProductsAction, salesProductsAction } from "../store/productsReducer"
import { productAction } from "../store/productReducer"

export function fecthAllProducts(type){
    return function(dispatch){
        fetch(ROOT_URL+'/products/all')
            .then(res => res.json())
            .then(data => {
                if (type === 'all'){
                    dispatch(allProductsAction(data))
                } else if (type === 'sale'){
                    dispatch(salesProductsAction(data))
                }
            })
    }
}

export function fetchCategoryProducts(id){
    return function(dispatch){
        fetch(ROOT_URL+'/categories/'+id)
            .then(res => res.json())
            .then(data => dispatch(categoryProductsAction(data)))
    }
}

export function fetchCategoriesList() {
    return function(dispatch) {
        fetch('http://localhost:3333/categories/all')
        .then(res => res.json())
        .then(data => dispatch(asyncCategoriesListAction(data)))
    }
}

export function fetchProduct(id){
    return function(dispatch){
        fetch(ROOT_URL+'/products/'+id)
            .then(res => res.json())
            .then(data => dispatch(productAction(data[0])))
    }
}

export function postFetchOrder(order) {
    fetch(ROOT_URL+'/order/send', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(order)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

export function postFetchDiscont(discont) {
    fetch(ROOT_URL+'/sale/send', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(discont)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

