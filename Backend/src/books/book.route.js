const express = require('express')
const router = express.Router();
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, DeleteABook } = require('./book.controller');

// post a book
router.post("/create-book", postABook)

// get all books
router.get("/",  getAllBooks)

// single books endpoint
router.get('/:id',  getSingleBook)

// update book data endpoint:
// put will replace everything
router.put("/edit/:id", UpdateBook);

// delete book end point
router.delete("/:id", DeleteABook);



module.exports =router
