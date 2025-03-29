const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('addProject');
router.get('/');
router.put('update-project');
router.delete('delete-project');