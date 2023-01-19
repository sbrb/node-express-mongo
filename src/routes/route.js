const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');
const orderController = require('../controllers/orderController');
const middleware = require('../middleware/middleware');

router.post('/createProduct', productController.createProduct);
router.post('/createUser', middleware.validation, userController.createUser);
router.post('/createOrder', middleware.validation, orderController.createOrder);

module.exports = router;