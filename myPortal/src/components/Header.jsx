import React, { useRef } from "react";

function Header() {
  const pillRef = useRef(null);

  const movePill = (e) => {
    const item = e.target;

    pillRef.current.style.width = `${item.offsetWidth}px`;
    pillRef.current.style.left = `${item.offsetLeft}px`;
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="w-5xl h-25 flex justify-start items-center gap-10 fixed bg-[#b0b0b0] rounded-[90px]">
        <div className="relative w-2xl h-15 flex justify-center items-center gap-10 rounded-[90px] bg-[#737373] ml-10 text-white overflow-hidden">
          <div
            ref={pillRef}
            className="absolute left-5 top-1/2 -translate-y-1/2
                       h-[52px] w-[120px]
                       bg-[#e4c8ff]
                       rounded-full
                       transition-all duration-300 ease-in-out"
          ></div>
          <a
            href="#"
            onMouseEnter={movePill}
            className="relative z-10 px-8 py-4 rounded-full font-medium text-white"
          >
            Home
          </a>
          <a
            href="#"
            onMouseEnter={movePill}
            className="relative z-10 px-8 py-4 rounded-full font-medium text-white"
          >
            About me
          </a>

          <a
            href="#"
            onMouseEnter={movePill}
            className="relative z-10 px-8 py-4 rounded-full font-medium text-white"
          >
            Journey
          </a>

          <a
            href="#"
            onMouseEnter={movePill}
            className="relative z-10 px-8 py-4 rounded-full font-medium text-white"
          >
            Skills
          </a>
        </div>

        <div className="flex items-center gap-5">
          <button className="w-[100px] h-[30px] text-[10px] text-white bg-black rounded-md hover:bg-white hover:text-black border border-black duration-500">
            English
          </button>

          <button className="w-[129px] h-[39px] text-[14px] text-white bg-black rounded-[15px] hover:bg-white hover:text-black border border-black duration-500">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
