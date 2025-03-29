const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('addProject', projectController.addProjects);
router.get('/', projectController.getAllProjects);
router.put('update-project', projectController.updateProjects);
router.delete('delete-project', projectController.deleteProjects);

module.exports = router;