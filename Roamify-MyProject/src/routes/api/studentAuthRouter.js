const express = require("express");
const studentAuthController = require('../../controller/studentAuthController');
const router = express.Router();

router.get('/', studentAuthController.homePage);
router.get('/login', studentAuthController.login);
router.get('/login/callback', studentAuthController.callback);
router.get('/list', studentAuthController.isLoggedIn, studentAuthController.getAllStudents);
router.get('/logout', studentAuthController.logout);

module.exports = router;
