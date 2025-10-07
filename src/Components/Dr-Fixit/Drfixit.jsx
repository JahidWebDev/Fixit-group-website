import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../Container";
import logo2 from "../../assets/Fixit-Group-Logo.png";

const DrFixit = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
     <div className="bg-[#b71c1c] py-5 w-full  z-20">
          <Container>
            <header className="  w-full z-50">
              <div className="max-w-[1600px] mx-auto flex justify-between items-center px-5 py-3 md:px-10">
                {/* Logo */}
                <div className="flex items-center justify-between py-5">
                  <a href="/">
                    <img
                      src={logo2}
                      alt="Fixit Logo"
                      className="h-[70px] w-[70px] md:h-[90px] md:w-[90px] lg:h-[105px] lg:w-[105px] cursor-pointer"
                    />
                  </a>
                </div>

                {/* Menu */}
                <ul className="hidden md:flex items-center gap-6 md:gap-10 lg:gap-14 text-white font-normal text-lg">
                  {/* Home */}
                  <li className="relative group">
                    <a
                      href="/"
                      className="transition-all duration-300 hover:text-yellow-400"
                    >
                      Home
                    </a>
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
                        className="absolute top-10 left-0 w-64 rounded-xl shadow-lg py-3 
                                   bg-white/10 backdrop-blur-md border border-white/20 
                                   text-white animate-fadeIn"
                      >
                        <li>
                          <Link
                            to="/dr-fixit"
                            className="block px-5 py-2 hover:bg-yellow-500/20 hover:text-yellow-300 transition"
                          >
                            Dr. Fixit Ltd.
                          </Link>
                        </li>
                        <li>
                          {/* <a
                            href="/jaguar"
                            className="block px-5 py-2 hover:bg-yellow-500/20 hover:text-yellow-300 transition"
                          >
                            Jaguar Lubricants
                          </a> */}
                           <Link
                            to="/"
                            className="block px-5 py-2 hover:bg-yellow-500/20 hover:text-yellow-300 transition"
                          >
                            Jaguar Lubricants
                          </Link>
                        </li>
                        <li>
                          {/* <a
                            href="/motul"
                            className="block px-5 py-2  hover:bg-yellow-500/20 hover:text-yellow-300 transition"
                          >
                            Motul
                          </a> */}
                           <Link
                            to="/"
                            className="block px-5 py-2 hover:bg-yellow-500/20 hover:text-yellow-300 transition"
                          >
                           Motul
                          </Link>
                        </li>
                        <li>
                          {/* <a
                            href="/robinson"
                            className="block px-5 py-2  hover:bg-yellow-500/20 hover:text-yellow-300 transition"
                          >
                            Robinson Can Industries
                          </a> */}
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

                  {/* Careers */}
                  <li className="relative group">
                    <a
                      href="/careers"
                      className="transition-all duration-300 hover:text-yellow-400"
                    >
                      Careers
                    </a>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </li>

                  {/* Contact */}
                  <li>
                    <a
                      href="/contact"
                      className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition"
                    >
                      CONTACT
                    </a>
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

              {menuOpen && (
                <>
                  {/* Background Overlay */}
                  <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setMenuOpen(false)}
                  />

                  {/* Floating Dropdown Menu */}
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

                        {/* Submenu */}
                        {submenuOpen && (
                          <ul className="pl-6 bg-gray-50">
                            <li>
                              <a
                                href="/new-construction"
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                New Construction
                              </a>
                            </li>
                            <li>
                              <a
                                href="/repair-construction"
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                Repair Construction
                              </a>
                            </li>
                            <li>
                              <a
                                href="/remover"
                                className="block px-4 py-2 hover:bg-gray-100"
                              >
                                Remover
                              </a>
                            </li>
                          </ul>
                        )}
                      </li>

                      <li>
                        <a
                          href="/resource"
                          className="block px-5 py-3 hover:bg-gray-100"
                        >
                          RESOURCE
                        </a>
                      </li>
                      <li>
                        <a
                          href="/certificate"
                          className="block px-5 py-3 hover:bg-gray-100"
                        >
                          CERTIFICATE
                        </a>
                      </li>
                      <li>
                        <a
                          href="/team"
                          className="block px-5 py-3 hover:bg-gray-100"
                        >
                          TEAM
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://wa.me/yourwhatsapp"
                          className="flex justify-center items-center gap-2 bg-green-500 text-white rounded-lg mx-4 my-2 py-2 font-semibold"
                        >
                          <span>Let’s Talk</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/dealer"
                          className="flex justify-center items-center gap-2 bg-yellow-400 text-black rounded-lg mx-4 mb-2 py-2 font-semibold"
                        >
                          <span>Find a Dealer</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/app"
                          className="block px-5 py-3 hover:bg-gray-100"
                        >
                          APP FOR CONTRACTOR
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </header>
          </Container>
        </div>
  );
};

export default DrFixit;
