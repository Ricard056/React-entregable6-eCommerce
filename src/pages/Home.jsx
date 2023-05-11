import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import FilterCategory from '../components/Home/FilterCategory'
import FilterByPrice from '../components/Home/FilterByPrice'
import './styles/home.css'


const Home = () => {

    //! 
    const { productsGlobal } = useSelector(state => state)
    // console.log(productsGlobal)


    //! Para el filtro (con los Tags)
    const input = useRef()
    const [inputValue, setInputValue] = useState('')

    const handleChangeInput = () => {
        setInputValue(input.current.value.toLowerCase().trim())
    }
    // console.log(inputValue)

    //! Para el filtro (con los numeros)
    const [fromTo, setFromTo] = useState({
        from: 0,
        to: Infinity,
    })
    // console.log(fromTo) //FilterByPrice si actualiza "fromTo"

    //! Combino logica de ambos filtros
    const productFilter = productsGlobal
        ?.filter(prod => prod.title.toLowerCase().includes(inputValue))
        .filter(prod => {
            const from = +fromTo.from
            const to = +fromTo.to
            const price = +prod.price
            if (from && to) { return from <= price && price <= to }
            if (from && !to) { return from <= price }
            if (!from && to) { return price <= to }
            if (!from && !to) { return true }
        })

    //! ELEMENTOS
    return (
        <div className='home'>
            <input className="home__search" type="text" onChange={handleChangeInput} ref={input} id="searchFilterProduct"  placeholder='Search'/>
            <div className="home__filters">
                <FilterCategory />
                <FilterByPrice setFromTo={setFromTo} />
            </div>
            <div className='home__Container_product'>
                {
                    productFilter?.map(prod => (
                        <CardProduct
                            key={prod.id}
                            product={prod}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home