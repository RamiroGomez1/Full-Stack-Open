import axios from "axios"

const serverUrl = 'http://localhost:3001/persons'

const getData = () => {
    const request = axios.get(serverUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.get(serverUrl, newObject)
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

export default { getData, create, del, changeNumber}