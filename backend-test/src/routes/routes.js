const express = require('express')
const router = express.Router()
const {
  findAll,
  findById,
  search,
  create,
  update,
  deleteById,
} = require('../controllers/UserController')

router.get('/', findAll)
router.get('/search', search)
router.get('/:id', findById)
router.post('/users/register', create)
router.post('/users/login', create)
router.put('/:id', update)
router.delete('/:id', deleteById)

module.exports = router