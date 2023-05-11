import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"
import { useState } from "react"

const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'

const usePurchases = () => {

    const dispatch = useDispatch() 

    const [purchases, setPurchases] = useState()

    const buyThisCart = () => {
        axios.post(url, {}, getConfigToken())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCartThunk())
            })
            .catch(err => console.log(err))
    }

    const getAllProductsPurchased = () => {
        axios.get(url, getConfigToken())
        .then(res => setPurchases(res.data))
        .catch(er => console.log(err))
    }

    return { purchases, getAllProductsPurchased, buyThisCart }
}

export default usePurchases