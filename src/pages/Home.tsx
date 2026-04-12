import React from "react";
import Navbar from "../component/Navbar";
import Imageslider from "../component/Imageslider";
import Footer from "../component/Footer";
import Pages from "./Pages";

const Home = () => {
  const pages = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop",
      name: "burger",
      prize: 150,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=400&fit=crop",
      name: "pizza",
      prize: 150,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&h=400&fit=crop",
      name: "sandwedge",
      prize: 150,
    },
  ];
  return (
    <>
      <Navbar />
      <Imageslider />
      <div className="text-color mt-10 p-8 flex flex-col items-center justify-around">
        <h1 className="font-semibold text-center drop-shadow-2xl text-color text-2xl">
          special offeres
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pages.map((product) => {
            return <Pages key={product.id} products={product} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
