import React from "react";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
// import '../styles/globals.css';

// import '../globals.css'
// import ''

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-20 shadow-md bg-white">
      {/* Logo */}
      {/* <div className="text-2xl font-bold text-gray-800"> */}
        <Link href="/" className="font-bold text-2xl">Exclusive</Link>
      {/* </div> */}

      {/* Center Links */}
      <ul className="flex items-center space-x-8 text-base font-medium">
        <li>
          <Link href="/" className="text-gray-600 hover:text-gray-900 ">
            Home
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
        </li>
        <li>
          <Link href="/signup" className="text-gray-600 hover:text-gray-900">
            Sign Up
          </Link>
        </li>
      </ul>

      {/* Right Section: Search Box, Wishlist, Cart */}
      <div className="flex items-center space-x-4">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="What are you searching for"
            className="pl-4 pr-10 py-1 rounded-full bg-gray-100 text-gray-600 placeholder-gray-500 focus:outline-none"
          />
          <AiOutlineSearch className="absolute right-3 h-5 w-5 text-gray-500" />
        </div>
        <AiOutlineHeart className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
        <AiOutlineShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
      </div>
    </nav>
  );
}
