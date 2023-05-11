import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import Header from './components/shared/Header'
import ProductId from './pages/ProductId'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'

function App() {

  //! Al abrir el programa, subimos del API al state global
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])


  //! 
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductId />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/purchases' element={<Purchases />} />
      </Routes>
    </div>
  )
}

export default App


/*   
        <Route path='/product:id' element={<ProductId />} />
Nomas capturo el "id" en ProductId con useParams; unicamente en ProductId
*/

/*
    const config = {
      Header: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,   //Para bearer token, y uso de localStorage
      }
    }             // Must be an obj
*/

/*
0738
import axios from 'axios'
import getConfigToken from './utils/getConfigToken'

  //! Para mandar el token del backend 
  const getPostCart = (url, data) => {

    axios
      .post(url, data, getConfigToken())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  };

  useEffect(() => {
    getPostCart("https://e-commerce-api-v2.academlo.tech/api/v1/cart", {
      quantity: 1,
      productId: 3,
    });
  }, [])
*/