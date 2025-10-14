
import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

// import Container from "../../Container";
import logo2 from "../../assets/Fixit-Group-Logo-Red-and-White.png";
import drfixitLogo from "../../assets/Dr-Fixit-Logo.png";
import callIcon from "../../assets/Call-Icon-Green.png";
import LocationIcon from "../../assets/Location-Man-Icon.png";

import bgImage from "../../assets/Dr-Fixit-Brand-5400-Interior-Sealer-Ads-Baneer.png";
import fixitHelmet from "../../assets/Biulding-&-Cap.png";
import product1 from "../../assets/Dr-Fixit-Brand-LW+-101-1-Litre.png";
import product2 from "../../assets/Dr-Fixit-Brand-Plaster-Master.png";
import product3 from "../../assets/Dr-Fixit-Brand-LW-101-30-Litre.png";
import product5 from "../../assets/Dr-Fixit-Brand-5400-Interior-Wall-Selaer.png";

import product8 from "../../assets/Dr-Fixit-Brand-302-Super-Latex-18-Litre 02.png";
import product9 from "../../assets/Fevilock-500-ml.png";
import product10 from "../../assets/Dr-Fixit-Brand-5100-Exterior-Sealer-18-Litre.png";
import product11 from "../../assets/Rust-Remover-01-Litre.png";
import product12 from "../../assets/Dr-Fixit-Brand-302-Super-Latex-1-Litre.png";

const Drfixit  = () => {
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
      desc: "1 Liter Waterproofing Expert",
      category: "Admixture",
      img: product12,
    },
    {
      id: 3,
      name: "Dr Fixit Brand LW 101",
      desc: "05 Liter Waterproofing Expert",
      category: "Febilock Glue",
      img: product1,
    },
    {
      id: 4,
      name: "Dr Fixit Brand 302 Super Latex",
      desc: "05 Liter Waterproofing Expert",
      category: "Febilock Glue", 
      img: product12,
    },
    {
      id: 5,
      name: "Dr Fixit Brand LW 101",
      desc: "18 Liter Paint Expert",
      category: "Febilock Glue", 
      img: product12,
    },
    {
      id: 6,
      name: "Dr Fixit Brand 302 Super Latex",
      desc: "18 Liter Waterproofing Expert",
      category: "Febilock Glue", 
      img: product10,
    },
    {
      id: 7,
      name: "Dr Fixit Brand LW 101",
      desc: "30 Liter Waterproofing Expert",
      category: "Febilock Glue", 
      img: product8,
    },
    {
      id: 8,
      name: "Dr Fixit Brand 302 Super Latex",
      desc: "30 Liter Waterproofing Expert",
      category: "Febilock Glue", 
      img: product3,
    },
    {
      id: 9,
      name: "Dr Fixit Brand 5400 Interior Sealer",
      desc: " 18 Liter Paint Expert",
      category: "Febilock Glue", 
      img: product5,
    },
    {
      id: 10,
      name: "Dr Fixit Brand Plaster Master",
      desc: "18 Liter Muilti-Purpase Rust Remover",
      category: "Febilock Glue",
      img: product2,
    },
    {
      id: 11,
      name: "Dr Fixit Brand 5100 Exterior Sealer",
      desc: "18 Liter Paint Expert",
      category: "Febilock Glue", 
      img: product10,
    },
    {
      id: 12,
      name: "Dr Fixit Brand Rust Remover",
      desc: "1 Liter Muilti-Purpase Rust Remover",
      category: "Febilock Glue", 
      img: product11,
    },
    {
      id: 13,
      name: "Dr Fixit Brand Fevilock",
      desc: "500ml Liter Bonding Expert",
      category: "Febilock Glue", 
      img: product9,
    },
  ];

  // ✅ Filter logic
  const filteredProducts =
    selectedCategory === "All Products"
      ? products // show all products
      : products.filter((p) => p.category === selectedCategory);

  // const ProductsGrid = () => {
  //   const [selectedCategory, setSelectedCategory] = useState("All");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    dealer: "",
    district: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_2h4r499", // 🔹 Your EmailJS Service ID
        "template_jftpe7b", // 🔹 Replace with your EmailJS Template ID
        formData,
        "VV_o1hjWQVsWaOnT7" // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          setFormData({
            name: "",
            company: "",
            dealer: "",
            district: "",
            consent: false,
          });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send email.");
        }
      );
 
  };

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
      <section
        className="
    relative 
    h-[100px]            /* Default for mobile */
    sm:h-[600px]         /* Slightly taller on small tablets */
    md:h-[700px]         /* Original height on desktop */
    w-full 
    bg-cover 
    bg-center 
    bg-no-repeat 
  "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Banner Content */}
        <div className="relative z-10 flex items-center justify-center h-full"></div>

        {/* ✅ Fixed Green Rounded Shape with WhatsApp Icon */}
        <div
          className="  fixed 
    bottom-5 sm:bottom-55
    right-0 
    w-[120px] h-[60px] 
    md:w-[145px] md:h-[70px] 
    bg-[#25D366] 
    rounded-l-[150px] 
    flex items-center justify-center 
    shadow-xl 
    z-50 

   "
        >
          <a
            href="https://wa.me/8801712345678"
            target="_blank"
            rel="noopener noreferrer"
            className="
    relative 
    flex items-center justify-center 
    bg-white 
    p-2 sm:p-3 md:p-4         
    rounded-full 
    shadow-md 
    hover:scale-110 
    transition-transform 
    duration-300 
    overflow-visible 
    mr-[60px] sm:mr-[60px] md:mr-[70px] 
    
  "
          >
            {/* Glowing Pulse Effect */}
            <span className="absolute  inset-0 rounded-full bg-white opacity-70 animate-redPulse"></span>

            {/* WhatsApp Call Icon */}
            <img
              src={callIcon}
              alt="Call Icon"
              className="relative w-[30px] sm:w-[40px] md:w-[20px] z-10" 
            />
          </a>
        </div>
      </section>

      <section className="bg-[#F0F2F1] py-10 px-10 md:px-16">
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
      <section className="bg-white py-10 px-6 md:px-12 lg:px-40">
        <div className="py-15">
          {/* 🔹 Filter Section */}
          <div className="max-w-[1500px] mx-auto">
            <div className="border-4 border-gray-300 rounded-xl px-6 py-4 mb-14 flex flex-wrap gap-4 items-center justify-between">
              {/* ALL PRODUCTS Button */}
              <button
                onClick={() => setSelectedCategory("All Products")}
                className={`relative text-[18px] font-semibold transition-all duration-300 ${
                  selectedCategory === "All Products"
                    ? "text-black"
                    : "text-gray-700 hover:text-[#fbbf24]"
                }`}
              >
                ALL PRODUCTS
                {selectedCategory === "All Products" && (
                  <span className="absolute left-0 bottom-0 h-[3px] w-full bg-[#fbbf24] rounded-full animate-slideIn"></span>
                )}
              </button>

              <div className="flex flex-wrap items-center gap-5">
                {["Admixture", "Sealer", "Febilock Glue"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative text-[18px] font-semibold transition-all duration-300 ${
                      selectedCategory === cat
                        ? "text-black"
                        : "text-gray-700 hover:text-[#fbbf24]"
                    }`}
                  >
                    {cat.toUpperCase()}
                    {selectedCategory === cat && (
                      <span className="absolute left-0 bottom-0 h-[3px] w-full bg-[#fbbf24] rounded-full animate-slideIn"></span>
                    )}
                  </button>
                ))}

                <button className="bg-[#fbbf24] text-black font-semibold px-6 py-2.5 rounded-lg shadow hover:bg-[#f59e0b] transition">
                  FIND A DEALER
                </button>
              </div>
            </div>
          </div>

          {/* 🔹 Product Grid */}
          <div className="max-w-[1400px] mx-auto">
            {/* ✅ Responsive Grid: 1 card on mobile, 2 on small, 3 on md, 4 on lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((p, index) => (
                <div
                  key={index}
                  className="border-[2px] border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:scale-[1.02] bg-white"
                >
                  {/* 🖼 Product Image */}
                  <div className="flex justify-center items-end w-full h-[260px] border-b-[2px] border-gray-200 rounded-t-2xl mt-5">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="object-contain w-auto transition-transform duration-300 hover:scale-105"
                      style={{
                        maxHeight:
                          index === 8 || index === 10 || index === 9
                            ? "260px"
                            : index % 4 === 0 || index % 4 === 1
                            ? "220px"
                            : "260px",
                        transform:
                          index === 8 || index === 10 || index === 9
                            ? "scale(0.9)"
                            : index % 4 === 0 || index % 4 === 1
                            ? "scale(0.9)"
                            : "scale(1.1)",
                      }}
                    />
                  </div>

                  {/* 🧾 Product Info */}
                  <div className="p-5 flex flex-col flex-grow justify-between text-center">
                    <h3 className="text-[17px] font-bold text-[#222] mb-0 leading-[1.1]">
                      {p.name}
                    </h3>
                    <p className="text-[14px] text-gray-600 mt-0 mb-10 leading-[1.4]">
                      {p.desc}
                    </p>
                  </div>

                  {/* 🔘 Buttons */}
                    <div className="px-5 pb-5 flex flex-col gap-2 mt-auto">
<Link
  to={`/productdetails/${p.id}`}
  className="border border-[#0072BC] text-[#0072BC] text-[15px] font-medium py-2 rounded-md hover:bg-[#0072BC] hover:text-white transition-all duration-300 text-center"
>
  Product Details
</Link>

      <Link
        to="/find-dealer"
        className="bg-[#fbbf24] text-black text-[15px] font-medium py-2 rounded-md shadow-sm hover:bg-[#f59e0b] transition-all duration-300 text-center"
      >
        Find a Dealer
      </Link>
    </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <p className="text-center text-gray-500 mt-10">
                No products available in this category.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ================= from================= */}
      <section className="bg-[#f8f8f8] py-20 px-6 md:px-10">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Left Side */}
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-blue-500 text-6xl">
                <img
                  src={LocationIcon}
                  className="w-[70px]"
                  alt="LocationIcon"
                />
              </div>
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
            <div className="bg-black text-white mt-8 flex flex-col md:flex-row items-center justify-between p-6 rounded-md relative overflow-hidden">
              {/* Left Side - Emergency Contact */}
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-lg font-semibold">Emergency</h3>
                <p className="text-white font-medium">+8801788360303</p>
              </div>

              {/* Middle - Call Icon with WhatsApp Link + Red Pulse */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-[70px] h-[70px] bg-white rounded-full animate-redPulse"></div>
                <a
                  href="https://wa.me/8801788360303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center justify-center bg-white rounded-full w-[60px] h-[60px] shadow-lg hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={callIcon}
                    alt="WhatsApp Call Icon"
                    className="w-[35px] h-[35px]"
                  />
                </a>
              </div>

              {/* Right Side - Email Info */}
              <div className="text-center md:text-right mt-6 md:mt-0">
                <h3 className="text-lg font-semibold">Email Address</h3>
                <p className="font-medium">support@fixitgroupbd.com</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-[#0B63FF] rounded-md p-8 md:w-[420px] text-white shadow-lg mx-auto mt-10">
            <h3 className="text-2xl font-semibold mb-6">Request a Quote</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none"
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Your phone Number"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none"
                required
              />

              <div className="flex space-x-3">
                {/* Dealer/Depo Dropdown */}
                <select
                  name="dealer"
                  value={formData.dealer}
                  onChange={handleChange}
                  className="w-1/2 p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none"
                  required
                >
                  <option value="" disabled selected>
                    Dealer/Depo
                  </option>
                  <option value="Dealer">Dealer</option>
                  <option value="Depo">Depo</option>
                </select>

                {/* District Dropdown */}
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-1/2 p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none"
                  required
                >
                  <option value="" disabled selected>
                    District
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Khulna">Khulna</option>
                </select>
              </div>

              <div className="flex items-start space-x-2 text-sm mt-2">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1"
                />
                <p>
                  I consent to receiving calls based on the information provided
                  above.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-200 text-gray-600 font-semibold py-3 mt-3 rounded-md cursor-pointer hover:bg-white transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>

            {sent && (
              <p className="text-green-300 text-center mt-3">
                ✅ Mail sent successfully!
              </p>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Drfixit;


