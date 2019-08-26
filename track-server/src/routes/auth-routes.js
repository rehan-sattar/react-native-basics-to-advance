const express = require('express')
const AuthController = require('../controllers/auth-controllers')
const router = express.Router()

// signup route
router.post('/signup', AuthController.signup)
module.exports = router
