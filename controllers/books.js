const Book = require('../models/books');
module.exports = {
  index: async (req,res,next) => {
    const books = await Book.find({});
    res.json(books);
  },

  newBook: async (req,res,next) => {
    const newBook = new Book(req.body);
    const book = await newBook.save();
    res.json(book);
  },

  getBookId: async (req,res,next) => {
    const {bookId} = req.params;
    const book = await Book.findById(bookId);
    res.json(book);
  },

  replaceUser: async (req,res,next) => {
    const {bookId} = req.params;
    const newBook = req.value;
    const result = await Book.findByIdAndUpdate(bookId,newBook);
    res.json({success:true});
  },

// we need to validations
  updateUser: async (req,res,next) => {
    const {bookId} = req.value;
    const newBook = req.value;
    const result = await Book.findByIdAndUpdate(bookId,newBook);
    res.json({success :true});
  }
};
