const express = require('express')
const router = express.Router()

router.get('/users', findAll)
router.get('/search', search)
router.get('/:id', findById)
router.post('/users/register', create)
router.post('/users/login', create)
router.put('/:id', update)
router.delete('/:id', deleteById)

module.exports = router