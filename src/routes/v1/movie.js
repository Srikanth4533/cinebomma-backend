const express = require('express')
const { create, getById, getAll } = require('../../controllers/movie-controller')
const upload = require('../../utils/storage')

const router = express.Router()

router.post('/create', upload.single('image'), create)
router.get('/all', getAll)
router.get('/:id', getById)

module.exports = router