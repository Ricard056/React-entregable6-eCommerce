import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../store/slices/cart.slice'
import ProductInCart from '../components/Cart/ProductInCart'
import './styles/cart.css'
import usePurchases from '../hooks/usePurchases'

const Cart = () => {

    //! Traer State Global of cartGlobal
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProductsCartThunk())
    }, [])

    const { cartGlobal } = useSelector(state => state)
    // console.log(cartGlobal) //


    // //! Me avisa cuantos productos tengo en Cart (ORIGINAL) //Falta pasarlo a Header
    // let totalQuantity = 0;

    // for (let i = 0; i < cartGlobal.length; i++) {
    //     totalQuantity += cartGlobal[i].quantity;
    // }
    // // console.log(totalQuantity); // Example: output 5

    //! Precio total del Cart
    const totalPriceCart = cartGlobal?.reduce((acc, cv) => acc + cv.quantity * cv.product.price , 0)
    // console.log(totalPriceCart) //

    //! Realizar la compra en Cart
    const { buyThisCart } = usePurchases()

    const handlePurchase = () => {
        buyThisCart()
    }


    //!
    return (
        <div className='cart'>
            <h2 className='cart__title'>Cart</h2>
            <div className='cart__container'>
                {
                    cartGlobal?.map(prodCart => (
                        <ProductInCart
                            key={prodCart.id}
                            prodCart={prodCart}
                        />
                    ))
                }
            </div>
                <footer className='cart__footer'>
                    <span className='cart__total-label'>Total: </span>
                    <h3 className='cart__total-value'>{totalPriceCart}</h3>
                    <button className='cart__btn' onClick={handlePurchase}>Comprar ahora</button>
                </footer>
        </div >
    )
}

export default Cart


/* 
Los map() regresan un array ¿?
Operaciones mas importantes para array
map, filter, reduce
*/