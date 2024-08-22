const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    release_year: {
        type: Number,
        required: true
    },
    cast: {
        type: [
            String
        ],
        required: true
    },
    genres: {
        type: [
            String
        ],
        required: true
    },
    director: {
        type: String,
        required: true
    },
    trailer: {
        type: String,
        required: true
    },
    download_link: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, { timestamps: true })

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie