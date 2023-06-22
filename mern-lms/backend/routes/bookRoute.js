const express = require("express")
const router = express.Router()
const { addBook, getBooks, editBook, } = require("../controller/book-controller")


router.route("/add").post(addBook)
router.route("/all").get(getBooks)
router.route("/book/:id").delete()
router.route("/edit/:id").post()

module.exports = router