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
const getAllBooks = async( req,res)=>{
    try {
        const books = await Book.find().sort({ createdAt: -1})
        res.status(200).send(books);

    } catch (error) {
        console.log("error fetching books.", error);
        res.status(500).send({
          message: "Fail to fetch books",
        });
    }

}

module.exports = {
  postABook,
  getAllBooks,
};