const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/getState', controller.getStates);
router.get('/getDistricts/:stateId', controller.getDistricts);
router.get('/getByPin', controller.getByPin);
router.post('/getOtp', controller.getOtp);
router.post('/confirmOTP', controller.confirmOTP);
//Assignment
router.get('/getDistrictId', controller.getDistrictId);

module.exports = router;
