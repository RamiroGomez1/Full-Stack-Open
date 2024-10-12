import axios from "axios"

const serverUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'


const getData = () => {
    const request = axios.get(serverUrl)
    return request.then(response => response.data)
}

export default { getData }

/*
const create = (newObject) => {
    const request = axios.post(serverUrl, newObject)
    return request.then(response => response.data)
}

const del = (id) => {
    const request = axios.delete(`${serverUrl}/${id}`)
    return request.then(response => response.data)
}

const changeNumber = (id, newObject) => {
    const request = axios.put(`${serverUrl}/${id}`, newObject)
    return request.then(response => response.data)
}
*/