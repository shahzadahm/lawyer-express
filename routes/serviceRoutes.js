const express = require('express');
const { getAllServices, saveAllServices } = require('../controllers/serviceController');
const router = express.Router();

router.get('/services', getAllServices);
router.post('/services', saveAllServices);

module.exports = router;
