const MovieRepository = require("../repository/movie-repository");


class MovieService {
    constructor() {
        this.movieRepository = new MovieRepository()
    }

    async create(data) {
        try {
            const movie = await this.movieRepository.create(data)
            return movie
        } catch (error) {
            console.log(error)
            console.log(`Something went wrong in the service layer`)
        }
    }

    async findById(id) {
        try {
            const movie = await this.movieRepository.findById(id)
            return movie
        } catch (error) {
            console.log(error)
            console.log(`Something went wrong in the service layer`)
        }
    }

    async getAll() {
        try {
            const movies = await this.movieRepository.getAll({})
            return movies
        } catch (error) {
            console.log(error)
            console.log(`Something went wrong in the service layer`)
        }
    }
}

module.exports = MovieService