const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const UserAuth = require("../controllers/userAuthController")

router.get('/', (_req, res) => { res.send('Welcome to the API 🚀'); });
router.get('/users', userController.getAllUsers);
router.get('/users/:id' , userController.getUserById)



router.post('/auth/register' , UserAuth.register)
router.post('/auth/login' , UserAuth.login)

// router.post('/register')

module.exports = router;
