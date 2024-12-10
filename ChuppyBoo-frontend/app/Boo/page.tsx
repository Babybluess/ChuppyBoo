import React, { useState } from "react";
import { BooList } from "../const/data";

function BooScreen() {
  const [pre, setPre] = useState(0);
  return (
    <div
      id="controls-carousel"
      className="w-full h-full"
      data-carousel="static"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="duration-700 ease-in-out" data-carousel-item>
        <img
          src={BooList[pre].origin}
          alt=""
          className="w-full h-full object-cover absolute z-0 left-0 top-0"
        />
        <div className="w-[60%] flex gap-4 bg-[#674a46] rounded-xl border-white border-[1px] absolute p-2 z-20 -translate-x-1/2 left-1/2 justify-center">
          <div className="flex flex-col gap-6 text-white">
            <span>Name:</span>
            <span>Property:</span>
            <span>Planet:</span>
            <span>Special card:</span>
          </div>
          <div className="flex flex-col gap-6 text-white">
            <span>{BooList[pre].name}</span>
            <span>{BooList[pre].property}</span>
            <span>{BooList[pre].planet}</span>
            <img
              src={BooList[pre].specialSkill}
              alt="skill"
              className="w-14 rounded-lg object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 z-10 items-center h-[50%]">
          <img
            src={BooList[pre].avatar}
            className="absolute block w-3/4 object-contain -translate-x-1/2 -translate-y-1/2 top-3/4 left-1/2"
            alt="..."
          />
        </div>
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() => setPre(pre == 0 ? 1 : pre - 1)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            className="w-4 h-4 text-amber-600 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={() => setPre(pre == 1 ? 0 : pre + 1)}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-amber-600 dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default BooScreen;
