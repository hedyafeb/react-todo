const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const isLoggedIn = require('../middlewares/isLoggedIn')

 

router.get('/allUsers', isLoggedIn, userController.readAll)


module.exports = router;
