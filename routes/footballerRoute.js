const express = require('express');
const router = express.Router();
const footballerController = require('../controllers/footballerController');

router.post('/create', footballerController.newFootballer);

module.exports = router;

