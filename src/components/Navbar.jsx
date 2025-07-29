import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenDental, setIsDropdownOpenDental] = useState(false);
  const [isDropdownOpenPharma, setIsDropdownOpenPharma] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let leaveTimeout = null;

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-4 flex items-center justify-between">
        {/* ✅ Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://mededu.info/wp-content/uploads/elementor/thumbs/Screenshot-2024-06-16-111756_processed-qthcyh12m8ajk7wa1cui925p7d7434ve3ulwjhfaio.png"
            alt="logo"
            className="lg:ml-16 w-28 sm:w-32 md:w-36"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <Link to="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>

          {/* Medical Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => {
              leaveTimeout = setTimeout(() => {
                setIsDropdownOpen(false);
              }, 1000);
            }}
          >
            <button className="hover:text-blue-500 flex items-center gap-1">
              Medical
              <RiArrowDropDownLine
                className={`text-2xl transition-transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                <Link
                  to="/medical/government"
                  className="block px-4 py-2 hover:bg-blue-100 transition"
                >
                  Top 10 Government Colleges in India
                </Link>
                <Link
                  to="/medical/government"
                  className="block px-4 py-2 hover:bg-blue-100 transition"
                >
                  Top 10 Private Colleges in India
                </Link>
              </div>
            )}
          </div>

          {/* Dental Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpenDental(true)}
              onMouseLeave={() => {
              leaveTimeout = setTimeout(() => {
                setIsDropdownOpenDental(false);
              }, 1000);
            }}
          >
            <button className="hover:text-blue-500 flex items-center gap-1">
              Dental
              <RiArrowDropDownLine
                className={`text-2xl transition-transform ${
                  isDropdownOpenDental ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isDropdownOpenDental && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                <Link
                  to="/dental/government"
                  className="block px-4 py-2 hover:bg-blue-100 transition"
                >
                  Top 10 Government Colleges in India
                </Link>
                <Link
                  to="/dental/private"
                  className="block px-4 py-2 hover:bg-blue-100 transition"
                >
                  Top 10 Private Colleges in India
                </Link>
              </div>
            )}
          </div>

          {/* ✅ Pharma Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpenPharma(true)}
              onMouseLeave={() => {
              leaveTimeout = setTimeout(() => {
                setIsDropdownOpenPharma(false);
              }, 1000);
            }}
          >
            <button className="hover:text-blue-500 flex items-center gap-1">
              Pharma
              <RiArrowDropDownLine
                className={`text-2xl transition-transform ${
                  isDropdownOpenPharma ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isDropdownOpenPharma && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                <Link
                  to="/pharma/government"
                  className="block px-4 py-2 hover:bg-blue-100 transition"
                >
                  Top 10 Government Colleges in India
                </Link>
                <Link
                  to="/pharma/private"
                  className="block px-4 py-2 hover:bg-blue-100 transition"
                >
                  Top 10 Private Colleges in India
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* ✅ Sign In / Sign Up (always visible on desktop & tablet) */}
        <div className="hidden md:flex space-x-3 lg:mr-16">
          <Link
            to="/signin"
            className="border bg-[rgb(9,30,68)] text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-[rgb(223,225,230)] text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* ✅ Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* ✅ Mobile/Tablet Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t w-full">
          <div className="flex flex-col space-y-2 p-4">
            <Link to="/" className="py-2 hover:text-blue-500">
              Home
            </Link>

            {/* 📱 Mobile Medical Dropdown */}
            <div>
              <button
                className="flex justify-between items-center w-full py-2 hover:text-blue-500"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Medical
                <RiArrowDropDownLine
                  className={`text-xl transition-transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="pl-4">
                  <Link
                    to="/medical/government"
                    className="block py-1 text-gray-600"
                  >
                    Govt Colleges
                  </Link>
                  <Link
                    to="/medical/private"
                    className="block py-1 text-gray-600"
                  >
                    Private Colleges
                  </Link>
                </div>
              )}
            </div>

            {/* 📱 Mobile Dental Dropdown */}
            <div>
              <button
                className="flex justify-between items-center w-full py-2 hover:text-blue-500"
                onClick={() =>
                  setIsDropdownOpenDental(!isDropdownOpenDental)
                }
              >
                Dental
                <RiArrowDropDownLine
                  className={`text-xl transition-transform ${
                    isDropdownOpenDental ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {isDropdownOpenDental && (
                <div className="pl-4">
                  <Link
                    to="/dental/government"
                    className="block py-1 text-gray-600"
                  >
                    Govt Colleges
                  </Link>
                  <Link
                    to="/dental/private"
                    className="block py-1 text-gray-600"
                  >
                    Private Colleges
                  </Link>
                </div>
              )}
            </div>

            {/* 📱 Mobile Pharma Dropdown */}
            <div>
              <button
                className="flex justify-between items-center w-full py-2 hover:text-blue-500"
                onClick={() =>
                  setIsDropdownOpenPharma(!isDropdownOpenPharma)
                }
              >
                Pharma
                <RiArrowDropDownLine
                  className={`text-xl transition-transform ${
                    isDropdownOpenPharma ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {isDropdownOpenPharma && (
                <div className="pl-4">
                  <Link
                    to="/pharma/government"
                    className="block py-1 text-gray-600"
                  >
                    Govt Colleges
                  </Link>
                  <Link
                    to="/pharma/private"
                    className="block py-1 text-gray-600"
                  >
                    Private Colleges
                  </Link>
                </div>
              )}
            </div>

            {/* 📱 Mobile Sign In / Sign Up */}
            <div className="flex flex-col space-y-2 pt-4">
              <Link
                to="/signin"
                className="border bg-[rgb(9,30,68)] text-white px-4 py-2 rounded-lg text-center hover:bg-blue-900 transition"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-[rgb(223,225,230)] text-black px-4 py-2 rounded-lg text-center hover:bg-gray-300 transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
