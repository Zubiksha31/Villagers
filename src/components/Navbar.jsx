import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-emerald-700">
          Villagers
        </Link>
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-emerald-700 font-bold">
            Home
          </Link>
          <Link to="/materials" className="text-gray-700 hover:text-emerald-700 font-bold">
            Products
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-emerald-700 font-bold">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
