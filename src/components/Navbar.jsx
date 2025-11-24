import React, { useState } from "react";
import { Link } from "react-router-dom";
import GooeyNav from "./GooeyNav";


const items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/materials" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-5">
          <div className="flex justify-end items-center">
            <Link to="/">
              <div className="rounded-full w-[55px] h-[55px] flex items-center justify-center bg-white shadow-lg shadow-emerald-200/60 hover:shadow-2xl hover:shadow-emerald-300/70 transition-all duration-500 ease-in-out cursor-pointer ring-2 ring-emerald-100 hover:ring-4 hover:ring-emerald-200">
                <img
                  className="w-[45px] hover:scale-110 transition-transform duration-300"
                  src="/VillagersLogo.png"
                  alt="Villagers Logo"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[15, 10]}
            particleR={20}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={100}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div> 

        {/* Hamburger Menu Button - Visible only on mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-emerald-50 rounded-lg transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-emerald-700 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-emerald-700 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-emerald-700 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu - Dropdown */}
      <div
        className={`md:hidden bg-white border-t border-emerald-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 px-4 text-gray-700 font-bold hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
