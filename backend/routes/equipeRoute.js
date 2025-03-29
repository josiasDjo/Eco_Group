const express = require('express');
const router = express.Router();
const EquipeController = require('../controllers/equipeController');

router.post('add_member', EquipeController.addToTeam);
router.get('/', EquipeController.getAllMember);
router.put('/updateMember', EquipeController.updateMember);
router.delete('deleteMember', EquipeController.deleteMember);

module.exports = router;