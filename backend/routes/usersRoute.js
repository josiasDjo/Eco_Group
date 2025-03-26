const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.post('/new-user', usersController.createUser);
router.get('/', usersController.getUser);
router.put('/update/user', usersController, usersController.resetPassword);
router.put('/user/reset-my-password', usersController.updateUser);
router.delete('/delete/myAccount', usersController);

module.exports = router;
