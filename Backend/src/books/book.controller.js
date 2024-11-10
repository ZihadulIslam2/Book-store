const Book = require("./book.model");

const postABook = async (req, res) => {
  console.log("from book.route.js:  ", req.body);
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res.status(200).send({ message: "Book post successfully", book: newBook });
  } catch (error) {
    console.log("error creating book", error);
    res.status(500).send({
      message: "Fail to create a book",
    });
  }
};

// get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.log("error fetching books.", error);
    res.status(500).send({
      message: "Fail to fetch books",
    });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ message: "book is not found." });
    }
    res.status(200).send(book);
  } catch (error) {
    console.log("error to fetching single book.");
    res.status(500).send({
      message: "Failed to fetch single book.",
    });
  }
};

// update book data
const UpdateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      res.status(404).send({ message: "book is not found." });
    }

    res.status(200).send({
      message: "updated book successfully",
      book: updatedBook,
    });
  } catch (error) {
    console.log("error to update a book.");
    res.status(500).send({
      message: "Failed to update a book.",
    });
  }
};

// delete a book
const DeleteABook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      res.status(404).send({ message: "book is not found." });
    }
    res.status(200).send( { message:"deleted book successfully",
      book: deletedBook
    }) 
  } catch (error) {
    console.log("error to deleting a book.");
    res.status(500).send({
      message: "Failed to delete a book.",
    });
  }
};

module.exports = {
  postABook,
  getAllBooks,
  getSingleBook,
  UpdateBook,
  DeleteABook,
};
