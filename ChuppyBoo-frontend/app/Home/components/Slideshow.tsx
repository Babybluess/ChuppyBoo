"use client";

import { useEffect, useState } from "react";

const Slideshow = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div>
      {/* <img
        alt={images[currentImageIndex]}
        src={images[currentImageIndex]}
        className="w-[300px] h-[400px] object-contain animate-wiggle"
      /> */}
      {/* <div className="bg-black w-[60%] h-[10%] blur-sm"></div> */}
      <div className="min-h-screen bg-gradient-to-b from-brown-800 to-brown-600 flex justify-center items-center p-10">
        <div className="flex space-x-6">
          {/* <!-- Card 1 --> */}
          <div className="w-64 bg-brown-700 rounded-3xl shadow-lg p-5 flex flex-col items-center space-y-4">
            <img
              src={images[0]}
              alt="Hedgehog"
              className="w-32 h-32 rounded-full shadow-md"
            />
          </div>

          {/* <!-- Card 2 --> */}
          <div className="w-48 bg-brown-700 rounded-3xl shadow-lg p-5 flex flex-col items-center space-y-4">
            <img
              src={images[1]}
              alt="Hedgehog"
              className="w-24 h-24 rounded-full shadow-md"
            />
          </div>
        </div>

        {/* <!-- Scattered Leaves --> */}
        <div className="absolute top-10 left-20">
          <img
            src="/path-to-your-image/leaf.png"
            alt="Leaf"
            className="w-10 opacity-50 rotate-45"
          />
        </div>
        <div className="absolute bottom-20 right-10">
          <img
            src="/path-to-your-image/leaf.png"
            alt="Leaf"
            className="w-8 opacity-70"
          />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
