
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Container from "../../Container";
import logo from "../../assets/Fixit-Group-Logo.png";
import img1 from "../../assets/FixitGroup-Career-Banner.png";
const roles = [
  {
    id: 1,
    title: "Senior Sales Executive",
    desc:
      "Drive growth, build strong client relationships, and help us expand our market presence.",
  },
  {
    id: 2,
    title: "Regional Sales Manager",
    desc:
      "Lead regional growth, inspire your team, and drive strategic sales success.",
  },
  {
    id: 3,
    title: "Web Developer",
    desc:
      "Build and maintain high-performing, responsive, and user-friendly web applications.",
  },
];

const Careers = () => {
       const [currentIndex, setCurrentIndex] = useState(0);
        const [dropdownOpen, setDropdownOpen] = useState(false);
        const [submenuOpen, setSubmenuOpen] = useState(false);
        // ✅ Single source of truth for nav links
        const [menuOpen, setMenuOpen] = useState(false);
      
        const images = [img1];
  return (

   <section  className="relative">
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
     <section className="min-h-screen bg-[#f6f4f0] flex items-center py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left column */}
          <aside className="md:col-span-1 flex flex-col justify-start">
            
            {/* GET IN TOUCH line */}
            <p className="text-sm font-semibold text-gray-700 tracking-wide mb-4">
              <span className=" text-[#C74945]">//</span> GET IN TOUCH
            </p>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
              Our Open
          <span className="block text-4xl md:text-5xl font-bold mt-1 bg-gradient-to-r from-[#C74945] to-[#F19C30] text-transparent bg-clip-text">
  Roles
</span>
            </h2>

            {/* Contact info */}
            <div className="mt-50">
              <p className="text-sm font-semibold text-gray-700 mb-1">Or Contact us with</p>
              <a
                href="mailto:support@fixitgroupbd.com"
                className="inline-block text-[#b71c1c] underline font-medium"
              >
                support@fixitgroupbd.com
              </a>
            </div>
          </aside>

          {/* Right column: roles list */}
          <div className="md:col-span-2 flex flex-col gap-10">
            {roles.map((r) => (
              <article
                key={r.id}
                className="bg-transparent p-6 rounded-md flex flex-col md:flex-row items-start md:items-center justify-between"
              >
                <div className="w-full md:w-[70%]">
                  <p className="text-sm text-[#c24a35] font-semibold mb-2">
                    Open Roles
                  </p>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-gray-600 max-w-[70%]">{r.desc}</p>

                  {/* gradient line – matches your image */}
                  <div className="mt-6 h-[2px] w-full md:w-[95%] bg-gradient-to-r from-transparent via-[#b71c1c] to-transparent"></div>
                </div>

                {/* Submit button */}
                <div className="w-full md:w-[28%] mt-6 md:mt-0 flex md:justify-end">
           <button
  type="button"
  className="group relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm
             bg-gradient-to-r from-[#C3342D] via-[#DC6D2F] to-[#F19C30] text-white hover:brightness-95 transition"
>
  <span>Submit Application</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 transform transition-transform duration-300 group-hover:-rotate-45"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</button>

                </div>
              </article>
            ))}
          </div>
        </div>
        
      </div>
    </section>
   </section>


   
  );
};

export default Careers;
