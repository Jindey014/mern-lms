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

const editBook = async (req, res) => {
    try {
        const bookDetail = await Book.findById(req.params.id)
        try {
            bookDetail.save()
            res.status(201).json("Book Details has been updated")
        } catch (err) {
            console.log("Error", err)
        }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}



const delBook = async (req, res) => {

}


module.exports = { addBook, getBooks, editBook }