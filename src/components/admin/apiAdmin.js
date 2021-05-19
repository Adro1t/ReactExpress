import { API } from '../../config'

export const createCategory = (userId, token, category) => {
    return fetch(`${API}/postcategory/${userId}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error)
        })

}

export const getCategories = () => {
    return fetch(`${API}/categorylist`, {
        method: "GET",
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}

export const createProduct = (userId, token, product) => {
    return fetch(`${API}/postproduct/${userId}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error)
        })

}