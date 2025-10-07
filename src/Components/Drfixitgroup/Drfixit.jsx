import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../Container";
import logo2 from "../../assets/Fixit-Group-Logo-Black-&-White.png";
import drfixitLogo from "../../assets/Dr-Fixit-Logo.png"
const Drfixit = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <section className="w-full  z-50">
      <Container>
              <header className="border-b bg-amber-600">
        <div className="max-w-[1600px] mx-auto px-20 sm:px-6 md:px-10 py-4 flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/" className="block">
              <img
                src={logo2}
                alt="Fixit Logo"
                className="h-[70px] w-[70px] md:h-[90px] md:w-[90px] lg:h-[105px] lg:w-[105px] cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 md:gap-10 lg:gap-14 text-white font-normal text-lg">
            <li className="relative group">
              <Link
                to="/"
                className="transition-all duration-300 hover:text-yellow-400"
              >
                Home
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link
                to="/our-business"
                className="transition-all duration-300 hover:text-yellow-400"
              >
                About Us
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </li>

            {/* Dropdown Menu */}
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
                <ul className="absolute top-10 left-0 w-64 rounded-xl shadow-lg py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white animate-fadeIn">
                  <li>
                    <Link
                      to="/dr-fixit"
                      className="block px-5 py-2 hover:bg-yellow-500/20 hover:text-yellow-300 transition"
                    >
                      Dr. Fixit Ltd.
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="block px-5 py-2 hover:bg-yellow-500/20 hover:text-yellow-300 transition"
                    >
                      Jaguar Lubricants
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="block px-5 py-2 hover:bg-yellow-500/20 hover:text-yellow-300 transition"
                    >
                      Motul
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="block px-5 py-2 hover:bg-yellow-500/20 hover:text-yellow-300 transition"
                    >
                      Robinson Can Industries
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative group">
              <Link
                to="/careers"
                className="transition-all duration-300 hover:text-yellow-400"
              >
                Careers
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li>
              <Link
                to="/contact"
                className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition"
              >
                CONTACT
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
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
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMenuOpen(false)}
            />
            <div className="absolute top-[80px] right-4 left-4 z-50 bg-white text-black rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
              <ul className="flex flex-col text-base font-medium py-4">
                <li>
                  <button
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                    className="w-full flex justify-between items-center px-5 py-3 hover:bg-gray-100"
                  >
                    PRODUCTS
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
                          to="/new-construction"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          New Construction
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/repair-construction"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Repair Construction
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/remover"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Remover
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link
                    to="/resource"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    RESOURCE
                  </Link>
                </li>
                <li>
                  <Link
                    to="/certificate"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    CERTIFICATE
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    TEAM
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://wa.me/yourwhatsapp"
                    className="flex justify-center items-center gap-2 bg-green-500 text-white rounded-lg mx-4 my-2 py-2 font-semibold"
                  >
                    Let’s Talk
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dealer"
                    className="flex justify-center items-center gap-2 bg-yellow-400 text-black rounded-lg mx-4 mb-2 py-2 font-semibold"
                  >
                    Find Link Dealer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/app"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    APP FOR CONTRACTOR
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </header>
      </Container>
            <section className="relative border-t-4 border-[#b71c1c] bg-white py-10 px-10 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Left text */}
      <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-4">
        <p className="text-lg md:text-xl text-black">
          Business / <span className="font-bold">Dr. Fixit Limited</span>
        </p>
        <span className="hidden md:block w-[1px] h-6 bg-black"></span>
        <p className="text-gray-800 text-base md:text-lg">
          Waterproofing Solution Expert
        </p>
      </div>

      {/* Right logo */}
      <div className="mt-4 md:mt-0">
        <img
          src={drfixitLogo}
          alt="Dr. Fixit Logo"
          className="w-[180px] md:w-[220px] object-contain"
        />
      </div>
    </section>  
    </section>

  );
};

export default Drfixit;
