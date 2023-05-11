import { useDispatch, useSelector } from "react-redux"
import useCrudCart from "../../hooks/useCrudCart"
import { useEffect } from "react"
import { getAllProductsCartThunk } from "../../store/slices/cart.slice"
import './styles/productInCart.css'

const ProductInCart = ({ prodCart }) => {
    // console.log(prodCart) //


    //! Borrar producto en Cart
    const { deleteProductFromCart } = useCrudCart()

    const handleDeleteCart = () => {
        deleteProductFromCart(prodCart.id)
    }


    //!
    return (
        <article className="prod_in_cart__container">
            <header className="prod_in_cart__header">
                <img src={prodCart.product.images[0].url} alt="" />
            </header>
            <h3 className="prod_in_cart__title">{prodCart.product.title}</h3>
            <button className="prod_in_cart__delete-btn" onClick={handleDeleteCart}>
                <i className='bx bx-trash'></i>
            </button>
            <footer className="prod_in_cart__footer">
                <span className="prod_in_cart__quantity">Cantidad: <span>{prodCart.quantity}</span></span>
                <div>
                    <span className="prod_in_cart__subtotal">Subtotal: </span>
                    <span className="prod_in_cart__subtotal_value">{prodCart.product.price * prodCart.quantity}</span>
                </div>
            </footer>
        </article>
    )
}

export default ProductInCart