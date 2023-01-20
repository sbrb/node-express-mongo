const express = require('express');
const router = express.Router();
const bookCon = require('../controllers/bookController');

router.post('/createBook', bookCon.createBook);
router.get('/getBook', bookCon.getBooks);

module.exports = router;