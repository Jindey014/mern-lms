const mongoose = require("mongoose")

const Connection = async () => {
    const URL = `mongodb+srv://admin:admin1426@cluster0.8oyi7zq.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL)
        console.log("Database connected sucessfully")
    } catch (err) {
        console.log("Error while connecting with database", err)
    }
}

module.exports = Connection