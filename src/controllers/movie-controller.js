const MovieService = require("../services/movie-service");
const uploadFile = require("../utils/upload");


const movieService = new MovieService()

const create = async (req, res) => {
    try {
        console.log(req.body)
        console.log(req.file.filename)
        if(!req.file) {
            return res.status(400).json({
                success: false,
                data: {},
                message: "Please prvoide image",
                err: {}
            })
        }
        let result = await uploadFile(req.file.path)
        console.log(result)
        req.body.image_url = result.secure_url
        const { title, release_year, genres, cast, director, trailer, download_link, image_url, language, description } = req.body
        const movie = await movieService.create({ title, release_year, genres, cast, director, trailer, download_link, image_url, language, description })
        return res.status(201).json({
            success: true,
            data: movie,
            message: "Successfully created a movie",
            err: {}
        })
    } catch (error) {
        console.log(`Something went wrong in controller layer`)
        return res.status(400).json({
            success: false,
            data: {},
            message: "Something went wrong",
            err: error
        })
    }
}

const getById = async (req, res) => {
    try {
        const movieId = req.params.id
        const movie = await movieService.findById(movieId)
        return res.status(200).json({
            success: true,
            data: movie,
            message: "Successfully fetched a movie",
            err: {}
        })
    } catch (error) {
        console.log(`Something went wrong in controller layer`)
        return res.status(400).json({
            success: false,
            data: {},
            message: "Something went wrong",
            err: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const movies = await movieService.getAll()
        return res.status(200).json({
            success: true,
            data: movies,
            message: "Successfully fetched all movies",
            err: {}
        })
    } catch (error) {
        console.log(`Something went wrong in controller layer`)
        return res.status(400).json({
            success: false,
            data: {},
            message: "Something went wrong",
            err: error
        })
    }
}

module.exports = {
    create,
    getById,
    getAll
}