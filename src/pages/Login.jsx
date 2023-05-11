import React from 'react'
import useAuthentication from '../hooks/useAuthentication'

const Login = () => {

    //! All related to login
    const {loginUser} =  useAuthentication()

    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const data = { email, password }
        loginUser(data)
    }

    //!
    return (
        <form onSubmit={handleLogIn}>
            <h2>Login</h2>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <button>Sign in</button>
        </form>
    )
}

export default Login