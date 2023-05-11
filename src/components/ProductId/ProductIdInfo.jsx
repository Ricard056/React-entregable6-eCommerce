import React, { useState } from 'react'
import './styles/productIdInfo.css'
import useCrudCart from '../../hooks/useCrudCart'

const ProductIdInfo = ({ product }) => {
    // console.log(product) 

    //! El contador del producto
    const [quantity, setQuantity] = useState(1)

    const handlePlus = () => setQuantity(quantity + 1)
    const handleMinus = () => {
        if (quantity - 1 >= 0) {
            setQuantity(quantity - 1)
        }
    }

    //! 
    const { addProductToCart, deleteProductFromCart, updateProductInCart } = useCrudCart()

    const handleAddToCart = () => {
        const data = {
            quantity: quantity,
            productId: product.id
        }
        addProductToCart(data) //! OJO con la id, para el caso .put
    }



    //!
    return (
        <section className="product-info">
            <h3 className="product-info__brand">{product?.brand}</h3>
            <h2 className="product-info__title">{product?.title}</h2>
            <p className="product-info__description">{product?.description}</p>
            <footer className="product-info__footer">
                <div>
                    <span className="product-info__price_text">Price: </span>
                    <span className="product-info__price_number">{product?.price}</span>
                </div>
                <div className="quantity-controls">
                    <button className="quantity-controls__button" onClick={handleMinus}>
                        -
                    </button>
                    <div>{quantity}</div>
                    <button className="quantity-controls__button" onClick={handlePlus}>
                        +
                    </button>
                </div>
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    Add to cart <i className='bx bx-cart'></i>
                </button>
            </footer>
        </section>
    );
}

export default ProductIdInfo



