const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
      author: String,
      bookName: String,
      title: String
})

const Book = mongoose.model('book',bookSchema);
module.exports = Book;
