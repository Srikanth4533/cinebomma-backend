const mongoose = require("mongoose")
const { MONGO_URL } = require("./serverConfig")

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL)
        console.log(`MongDB connected successfully...`)
    } catch (error) {
        console.log(error)
        console.log(`DB connection error`)
    }
}

module.exports = connectDB