const express = require('express')
const { create, getById, getAll, getByLanguage } = require('../../controllers/movie-controller')
const upload = require('../../utils/storage')

const router = express.Router()

router.post('/create', upload.single('image'), create)
router.get('/all', getByLanguage)
// router.get('/all', getAll)
router.get('/:id', getById)

module.exports = router