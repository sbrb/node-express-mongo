const { count } = require('console');
const BookModel = require('../models/bookModel');
//---------------------1------------------------
const createBook = async  (req, res) =>{
  let data = req.body;
  let savedData = await BookModel.create(data);
  res.send({ msg: savedData });
};
//------------------------2------------------------
const bookList = async (req, res) => {
  let savedData = await BookModel.find().select({bookName: 1, authorName: 1, _id: 0});
  res.send({ msg: savedData });
};
//----------------------------3-------------------------------
const getBooksInYear = async (req, res) => {
  let savedData = await BookModel.find({year: { $eq: req.body.year}})
  res.send({ msg: savedData });
};
//----------------------------4--------------------------------
const getParticularBooks = async (req, res) => {
  let savedData = await BookModel.find(req.body);
  res.send({ msg: savedData });
};
//-----------------------------5-----------------------------------
const getXINRBooks = async (req, res) => {
  let savedData = await BookModel.find({'price.indianPrice': {$in: [ '100', '200', '500' ]}});
  res.send({ msg: savedData });
};
//-----------------------------------6----------------------------
const getRandomBooks = async (req, res) => {
  let savedData = await BookModel.find({stockAvailable: true,totalPages: { $gt:  500}} )
  res.send({ msg: savedData });
};
module.exports = { createBook, bookList, getBooksInYear, getParticularBooks, getXINRBooks, getRandomBooks };

