import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/filterByPrice.css'

const FilterByPrice = ({ setFromTo }) => {

    //! Agarrar los datos del user para el Filter (lo mando a Home.jsx)
    const { reset, register, handleSubmit } = useForm()

    const submit = data => {
        setFromTo(data)
        reset({
            from: '',
            to: '',
        })
    }

    //!
    return (
        <article className="filter_price">
            <h3 className="filter_price__title">Price</h3>
            <div className="filter_price__container">
                <form className="filter_price__form" onSubmit={handleSubmit(submit)}>
                    <div className="filter_price__group">
                        <label className="filter_price__label" htmlFor="from">From</label>
                        <input className="filter_price__input" {...register('from')} type="number" id="from" placeholder='$ Min.' />
                    </div>
                    <div className="filter_price__group">
                        <label className="filter_price__label" htmlFor="to">to</label>
                        <input className="filter_price__input" {...register('to')} type="number" id="to" placeholder='$ Max.' />
                    </div>
                    <button className="filter_price__button">Filter Price</button>
                </form>
            </div>
        </article>
    )
}

export default FilterByPrice

/*
Antes tenia
id= "from"
Pero chrome me daba una advertencia... Lo corregi asi:
from="from"
*/