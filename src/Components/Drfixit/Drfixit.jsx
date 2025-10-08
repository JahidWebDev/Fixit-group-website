import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Container from "../../Container";
import logo2 from "../../assets/Fixit-Group-Logo-Black-&-White.png";
import drfixitLogo from "../../assets/Dr-Fixit-Logo.png";
import bgImage from "../../assets//Backround.png";
import fixitHelmet from "../../assets/Biulding-&-Cap.png";
import product1 from "../../assets/Dr-Fixit-Logo.png";
import product2 from "../../assets/Dr-Fixit-Logo.png";
import product3 from "../../assets/Dr-Fixit-Logo.png";
// import product4 from "../../assets/Dr-Fixit-Logo.png";
// import product5 from "../../assets/Dr-Fixit-Logo.png";
// import product6 from "../../assets/Dr-Fixit-Logo.png";

const Drfixit = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const products = [
    {
      id: 1,
      name: "Dr Fixit Brand LW 101",
      desc: "1 Liter Waterproofing Expert",
      category: "Admixture",
      img: product1,
    },
    {
      id: 2,
      name: "Dr Fixit Brand 302 Super Latex",
      desc: "0.5 Liter Waterproofing Expert",
      category: "Sealer",
      img: product2,
    },
    {
      id: 3,
      name: "Dr Fixit Brand 302 Super Latex",
      desc: "1 Liter Waterproofing Expert",
      category: "Febiblock Glue",
      img: product3,
    },
    {
      id: 4,
      name: "Dr Fixit Brand 302 Super Latex",
      desc: "1 Liter Waterproofing Expert",
      category: "Febiblock Glue",
      img: product3,
    },
    {
      id: 5,
      name: "Dr Fixit Brand 302 Super Latex",
      desc: "1 Liter Waterproofing Expert",
      category: "Febiblock Glue",
      img: product3,
    },
    {
      id: 6,
      name: "Dr Fixit Brand 302 Super Latex",
      desc: "1 Liter Waterproofing Expert",
      category: "Febiblock Glue",
      img: product3,
    },
  ];

  // ✅ Filter logic
  const filteredProducts =
    selectedCategory === "All Products"
      ? products // show all products
      : products.filter((p) => p.category === selectedCategory);

  // const ProductsGrid = () => {
  //   const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="w-full  z-50">
      <header className="top-0 bg-[#B71C1C] left-0 w-full z-50">
        {/* Main Container */}
        <div className="max-w-[1600px] mx-auto flex justify-between items-center px-5 py-3 md:px-10">
          {/* Logo */}
          <div className="flex items-center py-5">
            <Link to="/">
              <img
                src={logo2}
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
                    <span>Let’s Talk</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dealer"
                    className="flex justify-center items-center gap-2 bg-yellow-400 text-black rounded-lg mx-4 mb-2 py-2 font-semibold"
                  >
                    <span>Find Link Dealer</span>
                  </Link>
                </li>
                <li>
                  <Link to="/app" className="block px-5 py-3 hover:bg-gray-100">
                    APP FOR CONTRACTOR
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </header>
      <section className="relative z-[-9999]  border-[#b71c1c] bg-white py-10 px-10 md:px-44 flex flex-col md:flex-row items-center justify-between">
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
      <section>
        <div
          className="h-screen w-full  bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      </section>
      <section className="bg-[#f5f5f5] py-10 px-10 md:px-16">
        <div className="max-w-[1300px] mx-auto">
          {/* Heading and Image in one line */}
          <div className="flex flex-col md:flex-row justify-between items-center lg:items-end mb-8">
            {/* Heading */}
            <h2 className="text-10xl md:text-[43px] font-normal text-black mb-6 md:mb-0 lg:mb-2">
              About <span className="font-bold">Dr. Fixit Limited</span>
            </h2>

            {/* Image */}
            <div className="w-[180px] md:w-[260px] lg:w-[600px] flex justify-center md:justify-end">
              <img
                src={fixitHelmet}
                alt="Dr. Fixit Helmet"
                className="object-contain lg:translate-y-1"
              />
            </div>
          </div>

          {/* Paragraphs */}
          <p className="text-[15px] md:text-[30px] text-[#222] leading-relaxed mb-5 text-justify">
            In 2024, our business entered a new phase when we officially
            registered with the Government of Bangladesh under the name{" "}
            <span className="font-bold">Dr. Fixit Limited</span>, completing all
            legal and business documentation along with{" "}
            <span className="font-bold">RJSC certification</span>. This
            significant milestone marked the beginning of a new era in{" "}
            <span className="font-bold">Fixit Group’s</span> history, where we
            received overwhelming positive feedback from our valued customers.
            Alhamdulillah!
          </p>

          <p className="text-[15px] md:text-[30px] text-[#222] leading-relaxed text-justify">
            We quickly gained the trust of our customers, and within a short
            period, <span className="font-bold">Dr. Fixit Limited</span>{" "}
            established itself as a trusted and reliable name in Bangladesh’s{" "}
            <span className="font-bold">Construction Chemical Industry</span>.
            We offer a wide range of products including{" "}
            <span className="font-bold">
              Concrete Admixture, Waterproofing Solutions for Leak-free Homes,
              Damp Proofing, Damp Guard, Heat Proofing, and Wall Crack Solutions
            </span>
            , which have become a symbol of quality and reliability for our
            clients. Today, <span className="font-bold">Dr. Fixit Limited</span>{" "}
            maintains a leading position in the construction industry in
            Bangladesh, and every product and service we provide ensures
            customer trust and satisfaction.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="bg-white  py-10 px-6 md:px-12 lg:px-40">
        <div className=" py-15">
          <div className="max-w-[1500px]  mx-auto ">
            <div className="border-4 border-gray-300 rounded-xl px-6 py-4 mb-14 flex items-center justify-between">
              {/* Left Side - All Products */}
              <button
                onClick={() => setSelectedCategory("All Products")}
                className={`text-[18px] font-medium transition-all duration-300 ${
                  selectedCategory === "All Products"
                    ? "text-black font-semibold "
                    : "text-gray-800 hover:text-black"
                }`}
              >
                ALL PRODUCTS
              </button>

              {/* Right Side - Other Categories + Dealer Button */}
              <div className="flex items-center gap-6">
                {["Admixture", "Sealer", "Febilock Glue"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[18px] font-medium transition-all duration-300 ${
                      selectedCategory === cat
                        ? "text-black font-semibold"
                        : "text-gray-800 hover:text-black"
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}

                {/* Find a Dealer Button */}
                <button className="bg-[#fbbf24] text-black font-semibold px-6 py-2 rounded-md hover:bg-[#f59e0b]">
                  FIND A DEALER
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col justify-between"
                >
                  <div className="flex justify-center items-center h-[220px] p-4">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="object-contain h-full w-auto"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-[15px] font-semibold text-center text-[#222] leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      {p.desc}
                    </p>
                  </div>

                  <div className="px-4 pb-5 flex flex-col gap-2">
                    <button className="border border-[#fbbf24] text-[#222] text-sm py-2 rounded hover:bg-[#fbbf24] hover:text-white transition">
                      Product Details
                    </button>
                    <button className="bg-[#fbbf24] text-white text-sm py-2 rounded hover:bg-[#f59e0b] transition">
                      Find a Dealer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No products available in this category.
            </p>
          )}
        </div>
      </section>

      <section className="bg-[#f8f8f8] py-20 px-6 md:px-10">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Left Side */}
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-blue-500 text-6xl">👥</div>
            </div>

            <h2 className="text-3xl md:text-4xl font-normal leading-snug text-gray-900">
              Fill out the form below to become an <br />
              <span className="font-bold">Authorized Dealer</span> of{" "}
              <span className="font-bold">Dr. Fixit Limited.</span>
            </h2>

            <p className="text-gray-700 mt-6 leading-relaxed">
              <span className="font-bold">Dr. Fixit Limited</span> is committed
              to building strong, trustworthy, and sustainable business
              relationships with each of its dealers.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Our sole objective is to work together to establish a new standard
              of quality, durability, and reliability in Bangladesh’s
              construction industry.
            </p>

            {/* Contact Info */}
            <div className="bg-black text-white mt-8 flex flex-col md:flex-row items-center justify-between p-6 rounded-md">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold">Emergency</h3>
                <p className="text-white font-medium">+8801788360303</p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="text-lg font-semibold">Email Address</h3>
                  <p className="font-medium">support@fixitgroupbd.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-[#0B63FF] rounded-md p-8 md:w-[420px] text-white shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Request a Quote</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your Company or Shop Name"
                className="w-full p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none"
              />

              <div className="flex space-x-3">
                <select className="w-1/2 p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none">
                  <option>Dealer/Depo</option>
                </select>
                <select className="w-1/2 p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none">
                  <option>District</option>
                </select>
              </div>

              <div className="flex items-start space-x-2 text-sm mt-2">
                <input type="checkbox" className="mt-1" />
                <p>
                  I consent to receiving calls based on the information provided
                  above.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-200 text-gray-600 font-semibold py-3 mt-3 rounded-md cursor-pointer hover:bg-white transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Drfixit;
