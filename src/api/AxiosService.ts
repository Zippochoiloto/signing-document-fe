import axios from "axios"

const BaseURL = 'http://localhost:3001'

export const login =async (username: string, password: string) => {
    const req = await axios.post(`${BaseURL}/auth/login`, {
            username,
            password,
        })
    return req
}

export const uploadFile = async(form: FormData) => {
    return  await fetch(`${BaseURL}/signing-document/upload`, {
        method: 'POST',
        body: form,
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    })
}

const getToken = () => {
    return localStorage.getItem('access_token')
}
