const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const Connection = require('./database/db')
const bodyParser = require("body-parser")



const app = express()

app.use(cors())
app.use(express.json())


const port = process.env.PORT || 5000;

Connection()

app.use("/", require("./routes/bookRoute"))

app.listen(port, () => {
    console.log(`Server started on port : ${port}`)
})