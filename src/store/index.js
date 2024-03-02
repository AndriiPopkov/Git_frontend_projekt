import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { categoriesReducer } from "./categoriesReducer";
import { productsReducer } from "./productsReducer";
import { productReducer } from "./productReducer";
import productsbasketSlice from "./basketProductsSlice";

import storage from "redux-persist/lib/storage";
import {
    persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import modalSlice from './modalSlice';

const persistConfig = {
    key: 'localStore',
    storage, 
    whitelist: ['productsbasket', 'categories'], // оставляет только эти ключи объекта в LS
}

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    productsbasket: productsbasketSlice,
    modal: modalSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = createStore(rootReducer, applyMiddleware(thunk))

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)