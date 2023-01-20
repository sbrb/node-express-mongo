const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');

router.post('/createBook', BookController.createBook);
router.get('/bookList', BookController.bookList);
router.get('/getBooksInYear', BookController.getBooksInYear);
router.get('/getParticularBooks', BookController.getParticularBooks);
router.get('/getXINRBooks', BookController.getXINRBooks);
router.get('/getRandomBooks', BookController.getRandomBooks);

module.exports = router;