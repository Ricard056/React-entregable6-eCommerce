import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInfo from '../components/ProductId/ProductIdInfo'
import SliderImgs from '../components/ProductId/SliderImgs'
import SimilarProducts from '../components/ProductId/SimilarProducts'
import './styles/productId.css'


const ProductId = () => {

    //! Para guardar el "id" que pase de App.jsx
    const { id } = useParams()

    //! Para entrar a la nueva web del producto seleccionado (de Discover similar products)
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    const [product, getProducById] = useFetch(url)

    useEffect(() => {
        getProducById()
    }, [id])
    // console.log(product)

    //!




    //!
    return (
        <div >
            {/* <div className='prod-showCase__container'> */}
            <SliderImgs product={product} />
            <ProductIdInfo product={product} />
            {/* </div> */}
            <SimilarProducts product={product} />
        </div>
    )
}

export default ProductId