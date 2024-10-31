import React, { useEffect, useState } from 'react'
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
import BookCard from '../books/BookCard';

const Recomended = () => {
      const [books, setBooks] = useState([]);

        useEffect(() => {
          fetch("books.json")
            .then((res) => res.json())
            .then((data) => setBooks(data));
        }, []);

  return (
    <div className='py-16'>
      <h2 className="text-3xl font-semibold mb-6 ">Recommended for you </h2>
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
        {books.length > 0 &&
          books.slice(8,18).map((BookData, index) => (
            <SwiperSlide key={index}>
              <BookCard book={BookData} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Recomended