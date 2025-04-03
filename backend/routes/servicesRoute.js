const express = require('express');
const router = express.Router();
const servicesControllers = require('../controllers/servicesControllers');

router.post('/newService', servicesControllers.addService);
router.get('/', servicesControllers.getService);
router.put('/modify-service', servicesControllers.updateService);
router.delete('/delete-service', servicesControllers.deleteService);

module.exports = router;