import axios from "axios"

const API = axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: { "Authorization": `Bearer ${import.meta.env.VITE_TOKEN}`}
})

export const graphQLRequest = async (query:string) => (await API.post("", { query: query })).data.data