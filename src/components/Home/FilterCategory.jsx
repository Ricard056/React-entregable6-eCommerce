import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { getAllProductsThunk } from '../../store/slices/products.slice'
import './styles/filterCategory.css'

const FilterCategory = () => {

    //! Traer las categorias de la API
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
    const [categories, getAllCategories] = useFetch(url)

    useEffect(() => {
        getAllCategories()
    }, [])
    // console.log(categories) //

    //! onClick de las Categorias
    const dispatch = useDispatch()

    const handleClickCategories = id => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
        dispatch(getAllProductsThunk(url))
    }

    //! onClick en All Categories
    const handleClickAllProducts = () => {
        dispatch(getAllProductsThunk())
    }

    //!
    return (
        <article className="filter_category">
            <h3 className="filter_category__title">Category</h3>
            <ul className="filter_category__list">
                <li className="filter_category__item"
                    onClick={handleClickAllProducts}>All products</li>
                {
                    categories?.map(category => (
                        <li className="filter_category__item"
                            onClick={() => handleClickCategories(category.id)} key={category.id}>{category.name}</li>
                    ))
                }
            </ul>
        </article>
    )
}

export default FilterCategory