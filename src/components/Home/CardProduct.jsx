import React, { useEffect } from 'react'
import './styles/cardProduct.css'
import { useNavigate } from 'react-router-dom'
import useCrudCart from '../../hooks/useCrudCart'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../../store/slices/cart.slice'

const CardProduct = ({ product }) => {
    // console.log(product) //

    //! Para entrar a la pagina del producto seleccionado
    const navigate = useNavigate()

    const handleProductProduct = () => {
        navigate(`/product/${product.id}`)
    }
    // console.log(product) //

    //! Traer State Global of cartGlobal    //NEW 0508 ... quitar?
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProductsCartThunk())
    }, [])
    const { cartGlobal } = useSelector(state => state)    
    // console.log(cartGlobal) //



    //! Btn carrito de compras
    const {addProductToCart} = useCrudCart() //Hook, no se puede colocar en bloque directamente

    const handleBtnClick = e => {
        e.stopPropagation() //detiene cualquier evento del padre
        const data = {
            quantity: 1,
            productId: product.id,
        }
        addProductToCart(data)  //! OJO con la id que usare, para el caso .put
    }


    //!
    return (
        <article className='product' onClick={handleProductProduct}>
            <header className='product__header'>
                <img className='product__img product__img-1'
                    src={product.images[0].url}
                    alt="" />
                <img className='product__img product__img-2'
                    src={product.images[1].url}
                    alt="" />
            </header>
            <section className='product__section'>
                <h4 className='product__subtitle'>{product.brand}</h4>
                <h3 className='product__title'>{product.title}</h3>
            </section>
            <div className='product__price'>
                <span className='product__price-label'>Price: </span>
                <span className='product__price-value'>{product.price}</span>
            </div>
            <button className='product__btn' onClick={handleBtnClick}>
                <i className='bx bx-cart product__btn-icon'></i>
            </button>
        </article>
    )
}

export default CardProduct


/*
e.stopPropagation() //detiene cualquier evento del padre

Si nomas usara Javascript, lo sig es equivalente
    BTNCart.addEventListener('click', e => {
        e.stopPropagation() //detiene cualquier evento del padre
    }

        BTNCart.addEventListener('click', e => {
        e.preventDefault()
    }

*/