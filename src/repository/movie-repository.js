const Movie = require("../models/movie");


class MovieRepository {

    async create(data) {
        try {
            const movie = await Movie.create(data)
            return movie
        } catch (error) {
            console.log(error)
            console.log('Something went wrong in repository layer')
        }
    }

    async findById(movieId) {
        try {
            const movie = await Movie.findById(movieId)
            return movie
        } catch (error) {
            console.log(error)
            console.log('Something went wrong in repository layer')
        }
    }

    async getAll() {
        try {
            const movies = await Movie.find({})
            return movies
        } catch (error) {
            console.log(error)
            console.log('Something went wrong in repository layer')
        }
    }
}

module.exports = MovieRepository