import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'



export const Header = () => {

    //!
    return (
        <header className="header">
            <h1 className="header__logo">
                <Link className="header__logo-link" to='/'>
                    <span className="header__logo-text">e-commerce</span>
                    <i className="header__logo-icon bx bx-store"></i>
                </Link>
            </h1>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    {
                        localStorage.getItem('token') ? (
                            <li className="header__nav-welcome">Welcome</li>
                        ) : (
                            <>
                                <li ><Link className="header__nav-link" to='/login'>
                                    Login</Link></li>
                                <li ><Link className="header__nav-link" to='/register'>
                                    Register</Link></li>
                            </>
                        )
                    }
                    <li ><Link className="header__nav-link" to='/purchases'>
                        Purchase</Link></li>
                    <li ><Link className="header__nav-link" to='/cart'>
                        <i className='header__nav-item__cart bx bx-cart'></i>
                        <span className="header__nav-item__cart__cart-number">
                            0</span>
                    </Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header



/*    
Link es para pasarme a otro links mios
*/