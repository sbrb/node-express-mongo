const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/controller');

router.post('/createAuthor', Controllers.createAuthor);
router.post('/createBook', Controllers.createBook);
router.get('/chetanBhagat', Controllers.chetanBhagat);
router.get('/updateTwoStates', Controllers.updateTwoStates);
router.get('/bookPriceRange', Controllers.bookPriceRange);

module.exports = router;