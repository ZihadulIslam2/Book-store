const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();
const port = process.env.port || 5000;

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
