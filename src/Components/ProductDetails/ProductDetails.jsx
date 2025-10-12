
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import emailjs from "emailjs-com";
import LocationIcon from "../../assets/Location-Man-Icon.png";

// import Container from "../../Container";
import logo2 from "../../assets/Fixit-Group-Logo-Red-and-White.png";
import drfixitLogo from "../../assets/Dr-Fixit-Logo.png";
import callIcon from "../../assets/Call-Icon-Green.png";
import bgImage from "../../assets/bg-images.png";

import product1 from "../../assets/Dr-Fixit-Brand-LW+-101-1-Litre.png";
import product2 from "../../assets/Dr-Fixit-Brand-Plaster-Master.png";
import product3 from "../../assets/Dr-Fixit-Brand-LW-101-30-Litre.png";
import product5 from "../../assets/Dr-Fixit-Brand-5400-Interior-Wall-Selaer.png";

import product8 from "../../assets/Dr-Fixit-Brand-302-Super-Latex-18-Litre 02.png";
import product9 from "../../assets/Fevilock-500-ml.png";
import product10 from "../../assets/Dr-Fixit-Brand-5100-Exterior-Sealer-18-Litre.png";
import product11 from "../../assets/Rust-Remover-01-Litre.png";
import product12 from "../../assets/Dr-Fixit-Brand-302-Super-Latex-1-Litre.png";





const products = [
  
  {
    id: 1,
    title: "Dr. Fixit LW+ 101 (1 Litre)",
    brand: "Dr. Fixit",
    category: "Waterproofing",
    quantity: "1 Litre",
    name: "LW+ 101",
    subtitle: "Liquid Waterproofing Compound",
    description:
      "Enhances waterproofing in concrete and mortar, improving workability and reducing shrinkage. Ideal for cement concrete and plaster to enhance cohesiveness, reduce cracks, and improve durability.",
    image: product1,
  },
  {
    id: 2,
    title: "Dr. Fixit Plaster Master",
    brand: "Dr. Fixit",
    category: "Surface Protection",
    quantity: "20 Kg",
    name: "Plaster Master",
    subtitle: "Durable Surface Protection Compound",
    description:
      "Provides excellent bonding between old and new concrete surfaces while increasing durability. Ensures stronger adhesion and reduced cracking over time.",
    image: product2,
  },
  {
    id: 3,
    title: "Dr. Fixit LW+ 101 (30 Litre)",
    brand: "Dr. Fixit",
    category: "Waterproofing",
    quantity: "30 Litre",
    name: "LW+ 101",
    subtitle: "Liquid Waterproofing Compound",
    description:
      "Large volume waterproofing additive ideal for concrete and plaster to ensure long-term protection and durability.",
    image: product3,
  },
  {
    id: 4,
    title: "Dr. Fixit 5400 Interior Wall Sealer",
    brand: "Dr. Fixit",
    category: "Paint Base",
    quantity: "18 Litre",
    name: "5400 Sealer",
    subtitle: "Interior Wall Sealer",
    description:
      "Protects walls from dampness and efflorescence, providing a smooth surface for painting.",
    image: product5,
  },
  {
    id: 5,
    title: "Fevilock 500 ml",
    brand: "Fevilock",
    category: "Adhesive",
    quantity: "500 ml",
    name: "Fevilock",
    subtitle: "Instant Adhesive",
    description:
      "High-strength bonding adhesive suitable for wood, metal, ceramics, and plastics.",
    image: product8,
  },
  {
    id: 6,
    title: "Dr. Fixit 5100 Exterior Sealer",
    brand: "Dr. Fixit",
    category: "Paint Base",
    quantity: "18 Litre",
    name: "5100 Sealer",
    subtitle: "Exterior Wall Sealer",
    description:
      "Long-lasting exterior wall protection from moisture and UV damage.",
    image: product9,
  },
  {
    id: 7,
    title: "Rust Remover (1 Litre)",
    brand: "Fixit",
    category: "Cleaning",
    quantity: "1 Litre",
    name: "Rust Remover",
    subtitle: "Metal Surface Cleaner",
    description:
      "Removes rust from metal surfaces effectively without damaging the base material.",
    image: product10,
  },
  {
    id: 8,
    title: "Dr. Fixit 302 Super Latex (1 Litre)",
    brand: "Dr. Fixit",
    category: "Bonding Agent",
    quantity: "1 Litre",
    name: "302 Latex",
    subtitle: "Super Latex Bonding Agent",
    description:
      "Improves adhesion between old and new concrete surfaces and enhances waterproofing.",
    image: product11,
  },
  {
    id: 9,
    title: "Dr. Fixit 302 Super Latex (1 Litre)",
    brand: "Dr. Fixit",
    category: "Bonding Agent",
    quantity: "1 Litre",
    name: "302 Latex",
    subtitle: "Super Latex Bonding Agent",
    description:
      "Improves adhesion between old and new concrete surfaces and enhances waterproofing.",
    image: product12,
  },
]

const ProductDetails = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const p = products[index];

  const next = () => setIndex((prev) => (prev + 1) % products.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + products.length) % products.length);



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
    <section>
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


      {/* ******************************************* */}
          <div className="w-full bg-[#F8F8F8] py-25 px-6 md:px-12">
        <div className="max-w-[1700px] mx-auto relative">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full  transition"
          >
            <FaChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2  p-3 rounded-full  transition"
          >
            <FaChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Product Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2  items-start mt-4">
            <div className="flex flex-col items-center">
 <div className="border h-[500px] w-[400px] border-gray-200 rounded-2xl shadow-sm p-4 flex items-center justify-center">
  <img
    src={p.image}
    alt={p.title}
    className="max-w-full max-h-full object-contain"
  />
</div>


              <div className="mt-8">
                <button className="bg-[#f6b400] hover:bg-[#e0a200] text-black font-semibold px-8 py-3 rounded-md shadow-md transition">
                  Find a Dealer
                </button>
              </div>
            </div>
<div className="space-y-4 lg:ml-[-130px] text-gray-800">
  {/* Product Title */}
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
    {p.title}
  </h2>

  {/* Product Info */}
  <div className="space-y-2 text-lg md:text-1xl text-gray-700">
    <p>
      <span className="font-semibold">Brand:</span> {p.brand}
    </p>
    <p>
      <span className="font-semibold">Category:</span> {p.category}
    </p>
    <p>
      <span className="font-semibold">Quantity:</span> {p.quantity}
    </p>
    <p>
      <span className="font-semibold">Availability:</span>{" "}
      <span className="text-green-600 font-medium">In Stock</span>
    </p>
  </div>

  {/* Subtitle & Description */}
  <div className="pt-6">
    <h3 className="text-xl md:text-2xl font-semibold mb-3">{p.subtitle}</h3>
    <p className="text-lg md:text-xl w-[700px] text-gray-700 leading-relaxed">{p.description}</p>
  </div>
</div>

          </div>

          {/* Thumbnail Preview Bar */}
          <div className="flex justify-center gap-4 mt-16 flex-wrap">
            {products.map((prod, i) => (
              <button
                key={prod.id}
                onClick={() => setIndex(i)}
                className={`border rounded-xl p-2 transition-all ${
                  index === i
                    ? "border-[#f6b400] bg-[#fff8e1]"
                    : "border-gray-200 bg-white hover:border-[#f6b400]"
                }`}
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-[70px] h-auto object-contain"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    {/* =================================== */}
  <div className="min-h-screen bg-white flex justify-center py-16 px-6">
  <div className="w-full max-w-[1100px] text-gray-800 leading-relaxed text-[18px]">
    <h1 className="text-2xl font-semibold mb-10">
      Benefits of Water-Reducing and Waterproofing Admixture (LW+ 101)
    </h1>

    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-1">Improved Concrete Strength</h2>
        <p>
          Water-reducing admixtures like LW+ 101 lower the water-cement ratio,
          resulting in higher compressive strength and improved long-term
          durability.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-1">Enhanced Waterproofing</h2>
        <p>
          By reducing concrete porosity, LW+ 101 prevents water
          penetration—effectively protecting structures from leaks, dampness,
          and corrosion.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-1">Increased Workability</h2>
        <p>
          LW+ 101 improves the flow and ease of concrete placement without
          compromising strength, making construction more efficient and
          consistent.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-1">Reduced Shrinkage and Cracking</h2>
        <p>
          The lower water content helps minimize shrinkage and cracking, which
          in turn reduces long-term maintenance and repair costs.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-1">Better Durability and Longevity</h2>
        <p>
          LW+ 101 enhances resistance to environmental damage such as
          freeze-thaw cycles, sulfate attacks, and chloride penetration,
          extending the lifespan of the structure.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-1">Cost Savings</h2>
        <p>
          With increased durability and reduced repair needs, LW+ 101 offers
          significant long-term cost efficiency for construction projects.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-1">Applications:</h2>
        <p>
          LW+ 101 is ideal for use in foundations, basements, bridges, tunnels,
          and water-retaining structures, ensuring strong, durable, and
          moisture-resistant concrete in a variety of challenging environments.
        </p>
      </div>
    </div>
  </div>
</div>

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
  )
}

export default ProductDetails