import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { categoriesReducer } from "./categoriesReducer";
import { productsReducer } from "./productsReducer";
import { productReducer } from "./productReducer";
import productsbasketSlice from "./basketProductsSlice";

import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from 'redux-persist'
import modalSlice from './modalSlice';

const persingConfig = {
    key: 'localStore',
    storage, 
    whitelist: ['productsbasket'], // оставляет только эти ключи объекта в LS
}

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    productsbasket: productsbasketSlice,
    modal: modalSlice
})

const persistedReducer = persistReducer(persingConfig, rootReducer)

// export const store = createStore(rootReducer, applyMiddleware(thunk))

export const store = configureStore({
    reducer: persistedReducer
})
export const persistor = persistStore(store)