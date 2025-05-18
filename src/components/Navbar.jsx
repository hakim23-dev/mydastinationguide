import React from 'react'
import { FaGlobe, FaUserCircle, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-4 shadow-sm bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
          <img src="./mdg.png" alt="MDG Logo" className="h-auto w-20" />
          <span className="font-bold text-lg text-gray-800">MDG</span>
      </div>

        {/* Menu Items */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-red-600">Explore</a>
          <Link to={"/review"} className="hover:text-red-600">Reviews</Link>
          <Link to={"/contact"} className="hover:text-red-600">Contact</Link>
      </div>

        {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
          <FaGlobe className="text-gray-600 cursor-pointer" />
          <FaUserCircle className="text-gray-600 text-xl cursor-pointer" />
          <FaBars className="md:hidden text-gray-600 text-xl cursor-pointer" />
      </div>
    </nav>
  )
}
