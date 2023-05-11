import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProductsGlobal: (state, action) => action.payload
    }
})

export const { setProductsGlobal } = productsSlice.actions

export default productsSlice.reducer

// get all products --> https://documenter.getpostman.com/view/17877993/2s8ZDczLBj
//! thunk
export const getAllProductsThunk =
    (url = "https://e-commerce-api-v2.academlo.tech/api/v1/products") =>
        (dispatch) => {
            axios
                .get(url)
                .then((res) => dispatch(setProductsGlobal(res.data)))
                .catch((err) => console.log(err));
        };

//! thunk (before 2023 05 09)
// export const getAllProductsThunk = () => dispatch => {
//     const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
//     axios.get(url)
//     .then(res => dispatch(setProductsGlobal(res.data)))
//     .catch(err => console.log(err))
// }

/*  
FUNCION GENERAL
llamada asíncrona y set al estado
o
para meter el resultado de una promesa en un estado global
*/

