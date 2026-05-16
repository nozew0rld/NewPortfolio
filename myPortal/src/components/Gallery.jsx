import { useState } from "react";

import img1 from "../assets/me1.png";
import img2 from "../assets/me2.png";
import img3 from "../assets/me3.png";

function Gallery() {
  const images = [img1, img2, img3];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-[420px]">
      <div className="bg-[#2d2d30] rounded-3xl overflow-hidden border border-[#3e3e42] shadow-2xl">
        <div className="h-10 bg-[#2d2d30] flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        <img
          src={images[current]}
          alt=""
          className="w-full h-[500px] object-cover"
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-[-60px] top-1/2
                   -translate-y-1/2
                   text-white text-4xl
                   hover:text-sky-400 duration-300"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
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
