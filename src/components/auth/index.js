import { API } from '../../config'

//for signup
export const signup = (user) => {
    //hitting the route from backend
    return fetch(`${API}/postuser`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
        //converting data into string   
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })

}

//for signin
export const signin = (user) => {
    //hitting the route from backend
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
        //converting data into string   
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })

}

//to authenticate
export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data))
        next()
    }
}

//redirect if authenticated by user role
export const isAuthenticated = () => {
    if (typeof window === undefined) {
        return false
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    } else {
        return false
    }
}