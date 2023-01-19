const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/getWeatherAll',controller.getWeatherAll);
router.get('/getWeatherTemp',controller.getWeatherTemp);
router.get('/arrangeByTemp',controller.arrangeByTemp);

module.exports = router;
