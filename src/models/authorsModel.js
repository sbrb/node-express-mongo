const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
  {
    authorName: String,
    authorId: {
      type: String,
      unique: true,
      required: true
    },
    age: Number,
    address: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model('Author', authorSchema);
