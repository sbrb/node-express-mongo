const bookMod = require('../models/bookModel');

const createBook = async (req, res) => {
  let data = req.body;
  let savedData = await bookMod.create(data);
  res.send({ message: savedData });
};

const getBooks = async (req, res) => {
  let allBooks = await bookMod.find();
  res.send({ message: allBooks });
};

module.exports.createBook = createBook;
module.exports.getBooks = getBooks;
