const express = require("express")
const router = express.Router()
const { addBook, getBooks, editBook, getBook, deleteBook } = require("../controller/book-controller")


router.route("/add").post(addBook)
router.route("/all").get(getBooks)
router.route("/:id").delete(deleteBook)
router.route("/:id").post(editBook)
router.route("/:id").get(getBook)

module.exports = router