const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { PORT } = require("./config/serverConfig")
const connectDB = require("./config/db")

const apiRoutes = require("./routes/index")

connectDB()

const app = express()

app.use(cors())




const setupAndStart = () => {

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.use('/api', apiRoutes)

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`)
    })
}

setupAndStart()