import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/me1.png";
import img2 from "../assets/me2.png";
import img3 from "../assets/me3.png";
import "swiper/css";

function Gallery() {
  const swiperRef = useRef(null);

  const images = [img1, img2, img3];

  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-[420px]">
      <div className="bg-[#2d2d30] rounded-3xl overflow-hidden border border-[#3e3e42] shadow-2xl">
        <div className="h-10 bg-[#2d2d30] flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt=""
                className="w-full h-[500px] object-cover select-none"
                draggable="false"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        onClick={() => swiperRef.current.slidePrev()}
        className="absolute left-[-60px] top-1/2
                   -translate-y-1/2
                   text-white text-4xl
                   hover:text-sky-400 duration-300"
      >
        ‹
      </button>

      <button
        onClick={() => swiperRef.current.slideNext()}
        className="absolute right-[-60px] top-1/2
                   -translate-y-1/2
                   text-white text-4xl
                   hover:text-sky-400 duration-300"
      >
        ›
      </button>
    </div>
  );
}

export default Gallery;
