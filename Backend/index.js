const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors')

const app = express();
const port = process.env.port || 5000;

// middleware
app.use(express.json())
// app.use(
//   cors({
//     origin: ['http://localhost:5173'],
//     methods: 'GET,POST,PUT,DELETE',
//     credentials: true,
//   })
// )

app.use(
  cors({
    origin: '*', // Use '*' for testing, not recommended for production
    methods: 'GET,POST,PUT,DELETE',
  })
)


app.use((req, res, next) => {
  console.log('CORS middleware triggered for:', req.path)
  next()
})

// http://localhost:5174/
// routes
const bookRoutes = require ("./src/books/book.route")
app.use('/api/books', bookRoutes)

const orderRoutes = require("./src/orders/order.route")
app.use("/api/orders", orderRoutes )

const userRoutes = require("./src/users/user.route")
app.use('/api/auth', userRoutes)

  
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
