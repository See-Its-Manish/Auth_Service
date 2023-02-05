const express = require('express');
const UserController = require('../../controllers/user-controller');
const {AuthReuestValidator} = require('../../middlewares/index');
const router = express.Router();
 
router.post(
    '/signup',
    AuthReuestValidator.validateUserAuth,
    UserController.create
);
router.post(
    '/signin',
    AuthReuestValidator.validateUserAuth,
    UserController.signIn
);

module.exports = router;