import axios from "axios"
import {DocumentPayload} from "../pages/interface";

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

export const getAllDocuments = async () => {
    const req = await axios.get(`${BaseURL}/signing-document`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    })
    return req
}

export const updateDocument = async (id: string, payload: DocumentPayload) => {
    const req = await axios.post(`${BaseURL}/signing-document/${id}`, payload,  {headers: {
        Authorization: `Bearer ${getToken()}`
    }} )
    return req
}
