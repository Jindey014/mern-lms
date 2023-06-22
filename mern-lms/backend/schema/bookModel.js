const mongoose = require("mongoose")
const Schema = mongoose.Schema
const autoIncrement = require("mongoose-auto-increment")

const bookSchema = new Schema({
    bookname: {
        type: String,
        required: true
    },
    authname: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})



const Book = mongoose.model("Book", bookSchema)
module.exports = Book