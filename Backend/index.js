const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors')

const app = express();
const port = process.env.port || 5000;

// middleware
app.use(express.json())
app.use(
  cors({
    origin: ["http://localhost:51773"],
    credentials:true
  })
);

// routes
const bookRoutes = require ("./src/books/book.route")
app.use('/api/books', bookRoutes)


async function main() {
  await mongoose.connect(process.env.DB_URL);
app.get("/", (req, res) => {
  res.send("Book server is running.");
});
}

main().then(()=>console.log("mongodb connected successfully!")).catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`);
});
