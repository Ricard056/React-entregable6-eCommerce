import { configureStore } from "@reduxjs/toolkit";
import productsGlobal from './slices/products.slice'
import cartGlobal from './slices/cart.slice'

const store = configureStore({
    reducer: {
        //Aqui van todos los estados globales que crearemos
        productsGlobal,
        cartGlobal
    }
})

export default store