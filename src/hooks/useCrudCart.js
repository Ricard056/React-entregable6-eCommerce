import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"

const useCrudCart = () => {

    const dispatch = useDispatch() //NOTA 1: ...

    const addProductToCart = (data) => {    //OJO con la id
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
        axios.post(url, data, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCartThunk())   //Update Cart global ¿?
            })
            .catch(err => {
                console.log(err)
                if (err?.response.data.error === 'Product already added to cart') {
                    //!Ejecutar el update
                    console.log('data.quantity ' + data.quantity)
                    // const updatedData = { quantity: data.quantity + 1  }; //TEST: quantity: 4
                    // console.log(updatedData)
                    // updateProductInCart(id, updatedData);
                }
            })
    }

    const deleteProductFromCart = (id) => { //EXAMPLE: https://e-commerce-api-v2.academlo.tech/api/v1/cart/121
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
        axios.delete(url, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCartThunk())
            })
            .catch(err => console.log(err))
    }

    const updateProductInCart = (id, data) => { //EXAMPLE: https://e-commerce-api-v2.academlo.tech/api/v1/cart/4
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
        axios.put(url, data, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCartThunk())
            })
            .catch(err => console.log(err))
    }

    return { addProductToCart, deleteProductFromCart, updateProductInCart }
}

export default useCrudCart

/*
const dispatch = useDispatch() //Ningun hook se puede en bloque de codigo, por eso lo pongo en raiz
*/



