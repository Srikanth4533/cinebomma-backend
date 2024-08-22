const express = require('express')

const router = express.Router()

const movieRoutes = require("./movie")

router.use("/movie", movieRoutes)

module.exports = router