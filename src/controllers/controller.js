const AuthorModel = require('../models/authorsModel');
const BookModel = require('../models/BookModel');
//---------------------1------------------------
const createAuthor = async (req, res) => {
  const data = req.body;
  const savedData = await AuthorModel.create(data);
  res.send({ message: savedData });
};
//--------------------------2----------------------------
const createBook = async (req, res) => {
  const data = req.body;
  const savedData = await BookModel.create(data);
  res.send({ message: savedData });
};
//------------------------------3------------------------------
const chetanBhagat = async (req, res) => {
  const findAuthor = await AuthorModel.find({ authorName: 'Chetan Bhagat' })
  const findBook = await BookModel.find({ authorId: { $eq: findAuthor[0].authorId } });
  res.send({ message: findBook });
};
//------------------------------4---------------------------------
const updateTwoStates = async (req, res) => {
  const bookDetails = await BookModel.findOne({ bookName: 'two states' })
  const id = bookDetails.authorId
  const author = await AuthorModel.find({ authorId: id }).select({ authorName: 1, _id: 0 })
  const bookName = bookDetails.name
  const updatedPrice = await BookModel.findOneAndUpdate({ name: bookName }, { price: req.body.price }, { new: true }).select({ price: 1, _id: 0 })
  res.send({ message: author, updatedPrice }
  )
}
//----------------------------5-----------------------------------
const bookPriceRange = async (req, res) => {
  const book = await BookModel.find({ prices: { $gte: '50', $lte: '100' } })
  const data = book.map(a => a.authorId)
  const authorName = await AuthorModel.find({ authorId: data }).select({ authorName: 1, _id: 0 });
  res.send(authorName);
}

module.exports = { createBook, createAuthor, chetanBhagat, updateTwoStates, bookPriceRange }
