import React, { useEffect, useState } from "react";
import img1 from "../assets/arrow_left.png";
import img2 from "../assets/arrow_right.png";
const images = [
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&h=400&fit=crop",
];

const Imageslider = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };
  return (
    <div className="w-full shadow-lg overflow-hidden  relative ">
      {/*main carousel */}
      <div
        className="flex transition-transform duration-700 ease-in-out "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              alt="foods"
              className="h-64 w-full md:h-112.5 object-cover shrink-0 "
              style={{ display: "block" }}
            />
          );
        })}
      </div>
      {/*carousel button */}
      <button className="absolute left-4 top-1/2" onClick={prevSlide}>
        <img
          src={img1}
          alt="arrow left"
          className=" bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
        />
      </button>
      <button className="absolute right-4 top-1/2" onClick={nextSlide}>
        <img
          src={img2}
          alt="arrow right"
          className=" bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
        />
      </button>
      {/* selector */}
      <div className="absolute bottom-4 left-1/2">
        {images.map((_, index) => {
          return (
            <button
              className={`h-2 transition-all rounded-full ${current === index ? "bg-white w-4" : "bg-white/50 w-2"}`}
              key={index}
              onClick={() => setCurrent(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Imageslider;
