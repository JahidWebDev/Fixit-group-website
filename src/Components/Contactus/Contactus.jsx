
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Container from "../../Container";
import logo from "../../assets/Fixit-Group-Logo.png";
import img1 from "../../assets/FixitGroup-Contact-Banner.png";

const Contactus = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
           const [dropdownOpen, setDropdownOpen] = useState(false);
           const [submenuOpen, setSubmenuOpen] = useState(false);
           // ✅ Single source of truth for nav links
           const [menuOpen, setMenuOpen] = useState(false);
         
           const images = [img1];


  return (
    <section className='relative'>
          <div
              className="bg-cover bg-cente h-[800px]  transition-all duration-700 ease-in-out"
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
            >
       <div className="absolute top-0 left-0 w-full z-20">
                <header className="absolute top-0 left-0 w-full z-50">
                  {/* Main Container */}
                  <div className="max-w-[1600px] mx-auto flex justify-between items-center px-5 py-3 md:px-10">
                    {/* Logo */}
                    <div className="flex items-center py-5">
                      <Link to="/">
                        <img
                          src={logo}
                          alt="Fixit Logo"
                          className="h-[70px] w-[70px] md:h-[90px] md:w-[90px] lg:h-[105px] lg:w-[105px] cursor-pointer"
                        />
                      </Link>
                    </div>
      
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6 md:gap-10 lg:gap-14 text-white font-normal text-lg">
                      {/* Home */}
                      <li className="relative group">
                        <Link
                          to="/"
                          className="transition-all duration-300 hover:text-yellow-400"
                        >
                          Home
                        </Link>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                      </li>
      
                      {/* About Us */}
                      <li className="relative group">
                        <Link
                          to="/ourbusiness"
                          className="transition-all duration-300 hover:text-yellow-400"
                        >
                          About Us
                        </Link>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                      </li>
      
                      {/* Dropdown - Our Business */}
                      <li className="relative">
                        <button
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="transition-all duration-300 hover:text-yellow-400 flex items-center"
                        >
                          Our Business
                          <svg
                            className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${
                              dropdownOpen ? "rotate-180" : "rotate-0"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
      
                        {dropdownOpen && (
                          <ul
                            className="absolute top-10 left-0 w-64 rounded-xl shadow-xl py-3
                              bg-yellow-400/60 backdrop-blur-lg border border-yellow-300/50
                              text-black animate-fadeIn z-50"
                          >
                            {[
                              { name: "Dr. Fixit Ltd.", to: "/drfixit" },
                              { name: "Jaguar Lubricants", to: "/jaguar" },
                              { name: "Motul", to: "/motul" },
                              { name: "Robinson Can Industries", to: "/robinson" },
                            ].map((item) => (
                              <li key={item.to}>
                                <Link
                                  to={item.to}
                                  className="block px-5 py-2 font-semibold  transition-all duration-300
                                    hover:bg-red-700/60  hover:text-white"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
      
                      {/* Careers */}
                      <li className="relative group">
                        <Link
                          to="/careers"
                          className="transition-all duration-300 hover:text-yellow-400"
                        >
                          Careers
                        </Link>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                      </li>
      
                      {/* Contact */}
                      <li>
                        <Link
                          to="/contact"
                          className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition"
                        >
                          CONTACT
                        </Link>
                      </li>
                    </ul>
      
                    {/* Hamburger Icon (Mobile) */}
                    <button
                      onClick={() => setMenuOpen(!menuOpen)}
                      className="md:hidden text-white focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={
                            menuOpen
                              ? "M6 18L18 6M6 6l12 12" // Close (X)
                              : "M4 6h16M4 12h16M4 18h16" // Hamburger
                          }
                        />
                      </svg>
                    </button>
                  </div>
      
                  {/* Mobile Menu */}
                  {menuOpen && (
                    <>
                      {/* Overlay */}
                      <div
                        className="fixed inset-0 bg-black/40 z-40"
                        onClick={() => setMenuOpen(false)}
                      />
      
                      {/* Floating Dropdown Menu */}
                      <div className="absolute top-[80px] right-4 left-4 z-50 bg-white text-black rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
                        <ul className="flex flex-col text-base font-medium py-4">
                          {/* Home */}
                          <li>
                            <Link
                              to="/"
                              className="block px-5 py-3 hover:bg-gray-100"
                            >
                              HOME
                            </Link>
                          </li>
      
                          {/* About Us */}
                          <li>
                            <Link
                              to="/OurBusiness"
                              className="block px-5 py-3 hover:bg-gray-100"
                            >
                              ABOUT US
                            </Link>
                          </li>
      
                          {/* Our Business Dropdown */}
                          <li>
                            <button
                              onClick={() => setSubmenuOpen(!submenuOpen)}
                              className="w-full flex justify-between items-center px-5 py-3 hover:bg-gray-100"
                            >
                              OUR BUSINESS
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-4 h-4 transition-transform ${
                                  submenuOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
      
                            {submenuOpen && (
                              <ul className="pl-6 bg-gray-50">
                                <li>
                                  <Link
                                    to="/drfixit"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                  >
                                    Dr. Fixit Ltd.
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                  >
                                    Jaguar Lubricants
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                  >
                                    Motul
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                  >
                                    Robinson Can Industries
                                  </Link>
                                </li>
                              </ul>
                            )}
                          </li>
      
                          {/* Careers */}
                          <li>
                            <Link
                              to="/careers"
                              className="block px-5 py-3 hover:bg-gray-100"
                            >
                              CAREERS
                            </Link>
                          </li>
      
                          {/* Let’s Talk Button */}
                          <li>
                            <Link
                              to="https://wa.me/yourwhatsapp"
                              className="flex justify-center items-center gap-2 bg-green-500 text-white rounded-lg mx-4 my-2 py-2 font-semibold"
                            >
                              <span>Let’s Talk</span>
                            </Link>
                          </li>
      
                          {/* Find Link Dealer */}
                          <li>
                            <Link
                              to="/dealer"
                              className="flex justify-center items-center gap-2 bg-yellow-400 text-black rounded-lg mx-4 mb-2 py-2 font-semibold"
                            >
                              <span>Find Link Dealer</span>
                            </Link>
                          </li>
      
                          {/* App for Contractor */}
                        </ul>
                      </div>
                    </>
                  )}
                </header>
              </div>
                </div>
    </section>
  )
}

export default Contactus