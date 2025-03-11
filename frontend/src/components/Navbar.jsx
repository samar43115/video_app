import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-400">
          VideoHub
        </Link>

        <div className="relative w-1/3 max-w-sm hidden sm:block">
          <input
            type="text"
            placeholder="Search Videos..."
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
