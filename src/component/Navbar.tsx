import React, { useState } from "react";
import img1 from "../assets/shopping_bag_24dp_75FBFD_FILL0_wght400_GRAD0_opsz24.png";
import { Link } from "react-router-dom";
import img2 from "../assets/search_24dp_75FBFD_FILL0_wght400_GRAD0_opsz24.png";
import img3 from "../assets/shopping_cart_24dp_75FBFD_FILL0_wght400_GRAD0_opsz24.png";
import img4 from "../assets/account_circle_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png";
import img5 from "../assets/menu_24dp_75FBFD_FILL0_wght400_GRAD0_opsz24.png";
import img6 from "../assets/close_24dp_75FBFD_FILL0_wght400_GRAD0_opsz24.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  const isAuthenticated = true;
  return (
    <nav className="sticky top-0 w-full bg-black shadow-gray-300 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between ">
        {/* log with name*/}
        <Link to="/" className="flex text-green-800 text-3xl ">
          <img src={img1} alt="img1" />
          <span>shopping</span>
        </Link>
        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link className="nav-menu" to="/">
            Home
          </Link>
          <Link className="nav-menu" to="/about">
            About Us
          </Link>
          <Link className="nav-menu" to="/contect">
            Products
          </Link>
          <Link className="nav-menu" to="/register">
            Contect Us
          </Link>
        </div>
        {/* search */}
        <div className="flex items-center space-x-2.5">
          <form className="hidden sm:flex  items-center border-4 border-blue-400 text-white rounded-2xl">
            <input
              type="search"
              placeholder="search here"
              className="focus:outline-none px-5 py-2 text-sm"
            />
            <button className="px-3 text-blue-600 hover:text-blue-300 ">
              <img src={img2} alt="search" />
            </button>
          </form>
          {/*cart and count */}
          <Link
            className="relative hover:text-blue-600 transition-all duration-300 ease-in-out group"
            to="/cart"
          >
            <img src={img3} alt="card" />
            <span className="text-white absolute bg-blue-400 rounded-full min-w-4 h-4  -top-4 -right-1.5 flex items-center justify-center">
              6
            </span>
          </Link>
          {/*register */}
          {!isAuthenticated && (
            <Link
              className="flex items-center space-x-1.5 border-4 border-blue-400 rounded-2xl"
              to="/register"
            >
              <img
                src={img4}
                alt="profile"
                className="bg-blue-600 rounded-full min-w-4 h-6"
              />
              <span className="text-blue-600">Register</span>
            </Link>
          )}

          {/*han burger for mobile*/}

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <img
              src={open ? img6 : img5}
              alt={open ? "close" : "menu"}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
      {/*mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-2"}`}
      >
        <div className="flex flex-col items-center gap-6">
          <Link className="nav-menu-mob" to="/">
            Home
          </Link>
          <Link className="nav-menu-mob" to="/about">
            About Us
          </Link>
          <Link className="nav-menu-mob" to="/contect">
            Products
          </Link>
          <Link className="nav-menu-mob" to="/register">
            Contect Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
