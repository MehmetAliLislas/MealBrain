import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative flex justify-between items-center h-32 bg-gradient-to-l from-[#ff6100] to-[#ffb841]  text-white py-5 px-6 sm:px-20">
      <nav className="flex w-full justify-between items-center">
        <Link to="/">
          <img
            src="src/assets/nav-logo.svg"
            alt="MealBrain"
            className="w-28 h-28 sm:w-36 sm:h-36"
          />
        </Link>
        <button
          className="block sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <div className="hidden sm:flex gap-10 text-xs sm:text-base font-medium">
          <Link
            to="/ask-ai"
            className="py-4 px-6 hover:bg-white hover:opacity-90 hover:text-black ease-in-out transition-all duration-300 rounded-full"
          >
            Ask delicious foods to AI
          </Link>
          <Link
            to="/about"
            className="py-4 px-6 hover:bg-white hover:opacity-90 hover:text-black ease-in-out transition-all duration-300 rounded-full"
          >
            Why Meal Brain
          </Link>
        </div>
      </nav>
      <div
        className={`fixed top-0 right-0 h-full w-full bg-gradient-to-b from-orange-600 to-orange-300 z-40 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl font-semibold text-white">
          <Link to="/" onClick={closeMenu}>
            <img
              src="src/assets/logo.svg"
              alt="MealBrain"
              className="w-20 h-20 w-72 h-72"
            />
          </Link>
          <Link to="/ask-ai" onClick={closeMenu}>
            Ask delicious foods to AI
          </Link>
          <Link to="/about" onClick={closeMenu}>
            Why Meal Brain
          </Link>
          <button
            className="absolute top-5 right-5 text-white"
            onClick={closeMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
