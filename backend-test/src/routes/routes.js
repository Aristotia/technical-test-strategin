const express = require('express')
const router = express.Router()
const {
  findAll,
  findById,
  search,
  register,
  login,
  update,
  deleteById,
} = require('../controllers/controller.todo')

router.get('/', findAll)
router.get('/search', search)
router.get('/:id', findById)
router.post('/users/register', register)
router.post('/users/login', login)
router.put('/:id', update)
router.delete('/:id', deleteById)

module.exports = router