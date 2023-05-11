import React from 'react'
import { useForm } from 'react-hook-form'
import useAuthentication from '../hooks/useAuthentication'
import defaultRegisterValues from '../utils/defaultRegisterValues'

const Register = () => {

    //! Para crear new User
    const { register, handleSubmit, reset } = useForm()

    const {createNewUser} = useAuthentication()

    const submit = data => {
        // console.log(data)
        createNewUser(data)
        reset(defaultRegisterValues)    //Para limpiar el form
    }

    //!
    return (
        <form onSubmit={handleSubmit(submit)}>
            <h2>Create a new User</h2>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input {...register('firstName')} type="text" id="firstName"></input>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input {...register('lastName')} type="text" id="lastName"></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input {...register('email')} type="email" id="email"></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input {...register('password')} type="password" id="password"></input>
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input {...register('phone')} type="tel" id="phone"></input>
            </div>
            <button>Register</button>
        </form>
    )
}

export default Register