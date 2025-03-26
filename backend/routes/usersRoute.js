const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.post('/new-user', usersController.createUser);
router.post('/', usersController.getUser);
router.put('/update/user', usersController.resetPassword);
router.put('/reset-my-password', usersController.updateUser);
router.delete('/delete/myAccount', usersController.deleteAccount);

module.exports = router;
