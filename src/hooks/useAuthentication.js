import axios from "axios"

const useAuthentication = () => {

    const createNewUser = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        axios.post(url, data)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    const loginUser = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
            axios.post(url, data)
                .then(res => {
                    localStorage.setItem('token', res.data.token)    // .set, .get, .remove
                    console.log(res.data)   //NOTA 1
                })
                .catch(err => {
                    console.log(err)
                    localStorage.removeItem('token')    //Por seguridad, seria bueno Borrar el token
                })
    }


    return { createNewUser, loginUser }
}

export default useAuthentication


/* NOTA 1
localStorage --> Almacenamiento que tienen los navegadores 
-Si apagamaos o recargamos la pagina, si lo tenemos en localStorage, 
permitira que el usuario siga teniendo acceso

*/