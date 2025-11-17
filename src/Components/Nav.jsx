import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Car, Menu, X, LogIn } from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={"/"} className="flex item-center space-x-2 text-gray-800">
            <Car className="h-8 w-8" />{" "}
            <span className="text-xl font-bold">AutoRent</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to={"/"}
              className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to={"#"}
              className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
            >
              Cars
            </Link>
            <Link
              to={"#"}
              className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to={"#"}
              className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to={"/login"}
              className="py-1 px-2 flex items-center gap-2 rounded-sm transition duration-300 hover:bg-gray-200"
            >
              <LogIn className="h-4 w-4" />
              Login
            </Link>
            <Link
              to={"/register"}
              className="py-1 px-3 bg-blue-500 text-white rounded-sm transition duration-300 hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to={"/"}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Home
              </Link>
              <Link
                to={"#"}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Cars
              </Link>
              <Link
                to={"#"}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                About
              </Link>
              <Link
                to={"#"}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4 pb-5">
              <Link
                to={"/login"}
                className="py-1 px-2 flex items-center gap-2 rounded-sm transition duration-300 hover:bg-gray-200"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Link>
              <Link
                to={"/register"}
                className="py-1 px-3 bg-blue-500 text-white rounded-sm transition duration-300 hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
