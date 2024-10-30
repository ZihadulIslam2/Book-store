import React, { useEffect, useState } from "react";
import BookCard from "../books/BookCard";

const category = [
  "choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSelles = () => {
  const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("choose a genre");

console.log("selectedCategory:  ",selectedCategory)

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  console.log("Books data: ", books);

  const filteredBook = selectedCategory === "choose a genre"?books : books.filter(book =>book.category === selectedCategory.toLowerCase())
  console.log("filtered book:  " ,filteredBook)

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6 "> Top Sellers</h2>
      {/* caragory filter */}

      <div className="mb-8 flex items-center">
        <select 
        onChange={(e)=>(setSelectedCategory(e.target.value))}
        name="category" id="category" className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none">

          {category.map((categoryData, index) => (
            <option value={categoryData} key={index}>
              {categoryData}
            </option>
            
          ))}
        </select>
      </div>
      {
        filteredBook.map((filteredBookData,index)=>(
          <BookCard key={index} book={filteredBookData}/>
        ))
      }
    </div>
  );
};

export default TopSelles;
