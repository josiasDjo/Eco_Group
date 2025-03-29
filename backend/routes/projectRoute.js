const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('addProject', projectController);
router.get('/', projectController);
router.put('update-project', projectController);
router.delete('delete-project', projectController);

module.exports = router;