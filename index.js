const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { PORT } = require("./src/config/serverConfig")
const connectDB = require("./src/config/db")

const apiRoutes = require("./src/routes/index")

connectDB()

const app = express()

app.use(cors())




const setupAndStart = () => {

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.get("/", (req, res) => {
        res.send("Welcome Home!")
    })

    app.use('/api', apiRoutes)

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`)
    })
}

setupAndStart()