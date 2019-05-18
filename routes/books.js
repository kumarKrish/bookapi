const express = require('express');
const BooksController = require('../controllers/books');
const router = require('express-promise-router')();

router.route('/')
  .get(BooksController.index)

  .post(BooksController.newBook);

router.route('/:bookId')
  .get(BooksController.getBookId)
  .put(BooksController.replaceUser)
  .patch(BooksController.updateUser);

module.exports = router;
