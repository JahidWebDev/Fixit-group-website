import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/Fixit-Group-Logo.png";
import img1 from "../../assets/plant-bg.jpg";
import img2 from "../../assets/plant-bg2.jpg";
import img3 from "../../assets/plant-bg3.jpg";

const Hero = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  // ✅ Single source of truth for nav links
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // const navLinks = [
  //   { name: "Home", to: "/" },
  //   { name: "About Us", to: "/our-business" },
  //   { name: "Our Business", to: "/Our Business" },
  //   { name: "Careers", to: "/Careers" },

  // ];

  const isActive = (path) => location.pathname === path;

  // ✅ Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // ✅ Next & Prev functions
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
<section id="hero" className="relative">
  <div
    className="bg-cover bg-center bg-no-repeat h-[90vh] sm:h-screen transition-all duration-700 ease-in-out"
    style={{
      backgroundImage: `url(${images[currentIndex]})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
    }}
  >
    {/* ✅ Navbar */}
    <div className="absolute top-0 left-0 w-full z-20">
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center px-5 py-3 md:px-10">
          {/* Logo */}
          <div className="flex items-center py-3 sm:py-5">
            <Link to="/">
              <img
                src={logo}
                alt="Fixit Logo"
                className="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] lg:h-[105px] lg:w-[105px] cursor-pointer"
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
                to="/ourbusiness"
                className="transition-all duration-300 hover:text-yellow-400"
              >
                About Us
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
            {/* Dropdown */}
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
                <ul className="absolute top-10 left-0 w-64 rounded-xl shadow-xl py-3 bg-yellow-400/60 backdrop-blur-lg border border-yellow-300/50 text-black animate-fadeIn z-50">
                  {[
                    { name: "Dr. Fixit Ltd.", to: "/drfixit" },
                    { name: "Jaguar Lubricants", to: "/jaguar" },
                    { name: "Motul", to: "/motul" },
                    { name: "Robinson Can Industries", to: "/robinson" },
                  ].map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="block px-5 py-2 font-semibold transition-all duration-300 hover:bg-red-700/60 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
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

          {/* Hamburger Menu */}
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

        {/* ✅ Mobile Menu (unchanged structure, just responsive spacing) */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMenuOpen(false)}
            />
            <div className="absolute top-[110px] right-4 left-4 z-50 bg-white text-black rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
              <ul className="flex flex-col text-base font-medium py-4">
                <li>
                  <Link to="/" className="block px-5 py-3 hover:bg-gray-100">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ourbusiness"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    ABOUT US
                  </Link>
                </li>
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
  {[
    { name: "Dr. Fixit Ltd.", link: "/drfixit" },
    { name: "Jaguar Lubricants", link: "/jaguar" },
    { name: "Motul", link: "/motul" },
    { name: "Robinson Can Industries", link: "/robinson" },
  ].map((item, i) => (
    <li key={i}>
      <Link
        to={item.link}
        className="block px-4 py-2 hover:bg-gray-100"
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>
                  )}
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    CAREERS
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
              </ul>
            </div>
          </>
        )}
      </header>
    </div>

    {/* ✅ Hero Content */}
    <div className="flex flex-col items-center justify-center h-full text-white text-center relative z-10">
      <div className="relative w-full h-full flex items-center justify-center text-white">
        {/* Desktop Text */}
        <div className="hidden md:block">
          <div className="absolute left-[10%] bottom-[20%] text-left">
            <h1 className="text-[80px] lg:text-[143px] font-semibold leading-none">
              Shield
            </h1>
            <div className="relative mt-6">
              <div className="absolute top-[-20px] left-0 w-[200px] md:w-[250px] border-t-4 md:border-t-6 border-white rounded-full"></div>
              <div className="absolute top-[-18px] left-[200px] w-[300px] md:w-[413px] border-t border-white rounded-full"></div>
              <div className="absolute top-[-260px] md:top-[-327px] left-[750px] md:left-[980px] w-[380px] md:w-[482px] border-t border-white rotate-[140deg] origin-left"></div>
              <p className="mt-3 text-[24px] md:text-[32px] font-['Open_Sans']">
                Strength • Safety • Sustainability
              </p>
            </div>
          </div>

          <div className="absolute right-[10%] top-1/4 text-right">
            <h1 className="text-[80px] lg:text-[143px] font-semibold leading-none">
              Life
            </h1>
            <div className="relative mt-6">
              <div className="absolute top-[-20px] right-0 w-[200px] md:w-[250px] border-t-4 md:border-t-6 border-white rounded-full"></div>
              <div className="absolute top-[-18px] right-[200px] w-[260px] md:w-[336px] border-t border-white rounded-full"></div>
              <p className="mt-3 text-[24px] md:text-[32px] font-['Open_Sans']">
                We Build • We Bond • We Believe
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Mobile Text */}
        <div className="block md:hidden text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-bold">Shield</h1>
          <p className="mt-2 text-base sm:text-lg">
            Strength • Safety • Sustainability
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold">Life</h1>
          <p className="mt-2 text-base sm:text-lg">
            We Build • We Bond • We Believe
          </p>
        </div>
      </div>
    </div>

    {/* ✅ Navigation Arrows */}
    <button
      onClick={prevSlide}
      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white text-5xl sm:text-6xl lg:text-7xl z-20 hover:scale-110 transition"
    >
      &#8249;
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white text-5xl sm:text-6xl lg:text-7xl z-20 hover:scale-110 transition"
    >
      &#8250;
    </button>

    {/* ✅ Bottom Button */}
    <button
      className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 
        bg-[#C0302D] text-white font-normal 
        px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base 
        md:px-6 md:py-3.5 md:text-lg tracking-wide 
        shadow-lg hover:bg-[#a82825] hover:scale-105 
        transition-all duration-300 z-20"
    >
      GET IN TOUCH
    </button>
  </div>
</section>

  );
};

export default Hero;
