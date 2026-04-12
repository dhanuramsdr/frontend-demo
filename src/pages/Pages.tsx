import React from "react";
import { Link } from "react-router-dom";

const Pages = ({ products }: any) => {
  return (
    <div className="bg-black rounded-xl shadow-sm hover:shadow-2xl transition  overflow-hidden border-4 border-blue-300">
      <Link to={`/product/${products.id}`}>
        <div>
          <img src={products.image} alt={products.name} />
        </div>
        <div>
          <h3>{products.name}</h3>
          <p>{products.prize}</p>
        </div>
      </Link>
    </div>
  );
};

export default Pages;
