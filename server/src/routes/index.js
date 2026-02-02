const express = require('express');
const router = express.Router();
const Upload = require("../middlewares/multer")
const CloudinarController = require('../controllers/cloudinaryController')
const userController = require('../controllers/userController');
const UserAuth = require("../controllers/userAuthController");
const AuthToken = require("../middlewares/UserAuth.middleware");
const AdminAuth = require("../middlewares/adminAuth.middleware")
const AdminRegistration = require("../controllers/adminController")

router.get('/', (_req, res) => { res.send('Welcome to the API 🚀'); });
router.get('/users', AuthToken.verifyTokens, AdminAuth.isAdmin, userController.getAllUsers);
router.get('/users/:id' , userController.getUserById)

router.get('/profile' , AuthToken.verifyTokens , UserAuth.authUser)
router.get('/test-image' , CloudinarController.UploadInCloudinary)




router.post("/create-admin" , AuthToken.verifyTokens, AdminAuth.isAdmin , AdminRegistration.createAdmin)
router.post('/upload-product',AuthToken.verifyTokens, AdminAuth.isAdmin ,AdminRegistration.uploadProduct ,Upload.single("image"))
router.post('/auth/register' , UserAuth.register)
router.post('/auth/login' , UserAuth.login)

// router.post('/register')

module.exports = router;
