import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CardProduct from '../Home/CardProduct'
import './styles/similarProducts.css'


const SimilarProducts = ({ product }) => {
    // console.log(product) 

    //! Recomendacion de productos similares
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product?.categoryId}`
    const [filterProducts, getProducByCategory] = useFetch(url)

    useEffect(() => {
        if (product) {
            getProducByCategory()
        }
    }, [product])
    // console.log(filterProducts) //


    //!
    return (
        <div className="similar-products">
            <h2 className="similar-products__title">Discover similar products</h2>
            <div className="similar-products__container">
                {
                    filterProducts?.map(prod => {
                        if (prod.id !== product.id) {
                            return <CardProduct
                                key={prod.id}
                                product={prod}
                            />
                        }
                    })
                }
            </div>
        </div>
    )
}

export default SimilarProducts