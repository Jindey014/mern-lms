import axios from "axios"

const URL = "http://localhost:5000"

export const addBook = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data)
    } catch (error) {
        console.log("Error while calling add Book", error)
    }
}
export const getBooks = async () => {
    try {
        return await axios.get(`${URL}/all`)
    } catch (err) {
        console.log("Error in retrieving booklist", err)
    }
}

export const getBook = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (err) {
        console.log('Error in getting book details', err)
    }
}
export const editBook = async (book, id) => {
    try {
        return await axios.post(`${URL}/${id}`, book)
    } catch (err) {
        console.log("Error in editing book", err)
    }
}

export const deleteBook = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch (err) {
        console.log("Error in deleting book", err)
    }
}



