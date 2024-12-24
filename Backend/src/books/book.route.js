const express = require('express')
const router = express.Router();
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, DeleteABook } = require('./book.controller');
const verifyAdmin = require('../middleware/verifyAdmin');

// post a book
router.post("/create-book", verifyAdmin, postABook)

// get all books
router.get("/",  getAllBooks)

// single books endpoint
router.get('/:id',  getSingleBook)

// update book data endpoint:
// put will replace everything
router.put("/edit/:id",verifyAdmin, UpdateBook);

// delete book end point
router.delete("/:id", verifyAdmin, DeleteABook);

module.exports =router
