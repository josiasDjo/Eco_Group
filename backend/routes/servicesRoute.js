const express = require('express');
const router = express.Router();
const servicesControllers = require('../controllers/servicesControllers');

router.post('', servicesControllers);
router.get('/', servicesControllers);
router.put('/modify-service', servicesControllers);
router.delete('/delete-service', servicesControllers);

module.exports = router;