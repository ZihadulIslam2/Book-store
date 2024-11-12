import React, { useEffect, useState } from "react";
import BookCard from "../books/BookCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination } from "swiper/modules";

// import required modules
import { Navigation } from 'swiper/modules';
import { useFetchAllBooksQuery } from "../../redux/features/cart/booksApi";


const category = [
  "choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSelles = () => {
  const [selectedCategory, setSelectedCategory] = useState("choose a genre");

  console.log("selectedCategory:  ", selectedCategory);

 const {data: books=[]} =useFetchAllBooksQuery()
 console.log("TopSelles __:",books)

  console.log("Books data: ", books);

  const filteredBook =
    selectedCategory === "choose a genre"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );
  console.log("filtered book:  ", filteredBook);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6 "> Top Sellers</h2>
      {/* caragory filter */}

      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {category.map((categoryData, index) => (
            <option value={categoryData} key={index}>
              {categoryData}
            </option>
          ))}
        </select>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {filteredBook.length > 0 &&
          filteredBook.map((filteredBookData, index) => (
            <SwiperSlide key={index}>
              <BookCard book={filteredBookData} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TopSelles;
