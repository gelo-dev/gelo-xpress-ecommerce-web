const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const UserAuth = require("../controllers/userAuthController");
const AuthToken = require("../middlewares/UserAuth.middleware");
const AdminAuth = require("../middlewares/adminAuth.middleware")
const AdminRegistration = require("../controllers/adminController")

router.get('/', (_req, res) => { res.send('Welcome to the API 🚀'); });
router.get('/users', userController.getAllUsers);
router.get('/users/:id' , userController.getUserById)

router.get('/profile' , AuthToken.verifyTokens , UserAuth.authUser) //


router.post("/create-admin" , AuthToken.verifyTokens, AdminAuth.isAdmin , AdminRegistration.createAdmin)
router.post('/auth/register' , UserAuth.register)
router.post('/auth/login' , UserAuth.login)

// router.post('/register')

module.exports = router;
