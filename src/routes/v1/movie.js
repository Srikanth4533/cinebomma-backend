const express = require('express')
const { create, getById, getAll } = require('../../controllers/movie-controller')
const upload = require('../../utils/storage')

const router = express.Router()

router.post('/create', upload.single('image'), create)
router.get('/:id', getById)
router.get('/all', getAll)

module.exports = router