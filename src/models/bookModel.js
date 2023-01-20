const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: String,
    authorId: {
      type: String,
      required: true,
    },
    price: String,
    ratings: Number,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Book", bookSchema);