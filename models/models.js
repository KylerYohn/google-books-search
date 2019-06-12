const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  authors: [],
  description: String,
  image: String,
  link: String
});

const Book = Mongoose.model("Book", bookSchema);

module.exports = Book;
