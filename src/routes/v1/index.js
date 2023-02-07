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


router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
)

router.get('/dummy', (req,res)=> {
    return res.status(200).json({message : 'ok'});
});


module.exports = router;