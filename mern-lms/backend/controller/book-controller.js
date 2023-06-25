const Book = require("../schema/bookModel")

const addBook = async (req, res) => {
    const bookname = req.body.bookname
    const authname = req.body.authname


    const newBook = new Book({ bookname, authname })

    try {
        await newBook.save()
        res.status(201).json("New Book has been added!!")
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


const getBooks = async (req, res) => {
    try {
        const booklist = await Book.find()
        res.status(201).json(booklist)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


const getBook = async (req, res) => {

    try {
        const booklist = await Book.findById(req.params.id)
        res.status(201).json(booklist)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const editBook = async (req, res) => {
    let book = req.body;
    // const editBook = new Book(book)
    try {
        await Book.findByIdAndUpdate(req.params.id, book)
        res.status(201).json(editBook)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}



const deleteBook = async (req, res) => {
    try {
        await Book.deleteOne({ _id: req.params.id })
        res.status(200).json({ message: "User deleted sucessfully" })
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}


module.exports = { addBook, getBooks, editBook, getBook, deleteBook }