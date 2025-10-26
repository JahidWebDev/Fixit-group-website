import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

// import Container from "../../Container";
import logo2 from "../../assets/Fixit-Group-Logo-Red-and-White.png";
import mutolLogo from "../../assets/Motul-Logo.png";
import callIcon from "../../assets/Call-Icon-Green.png";
import LocationIcon from "../../assets/Location-Man-Icon.png";

import bannerImage1 from "../../assets/Motul-Orginal-Bangladesh.jpg";
import bannerImage2 from "../../assets/Motul-300V-10W40.jpg";

import bgImage1 from "../../assets/Bangladesh-Motul.jpg";
import bgImage2 from "../../assets/Motul-EsterCore-Bangladesh.jpg";
import Phuter from "../../assets/Phuter.png";

import product1 from "../../assets/Motul-4T-3000-20W-40-HC-Tech.png";
import product2 from "../../assets/MOTUL_ENGINE_OIL_4T_7100_10W-40.png";
import product3 from "../../assets/MOTUL-7100-4T-20W-50-FULL-SYNTHETIC-1L-FRANCE.png";

import product4 from "../../assets/MOTUL-5100-20W-50-4T.png";
import product5 from "../../assets/MOTUL-7100-4T-10W-30-FULL-SYNTHETIC-1L-Vietnam.png";
import product6 from "../../assets/MOTUL-300V-4T-10W-40-FULL-SYNTHETIC-1L.png";
import product7 from "../../assets/MOTUL-300V-4T-10W-30-FULL-SYNTHETIC-1L.png";
import product8 from "../../assets/MOTUL-7100-4T-10W-40-ESTER.png";
import product9 from "../../assets/Motul-4T-Plus-3000-10W-30-HC-Tech.png";
import product10 from "../../assets/Motul4T-Plus-3000-10W-40-HC-Tech.png";


const Motul = () => {
  
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
const images = [bannerImage1, bannerImage2];
  const [currentIndex, setCurrentIndex] = useState(0);
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // প্রতি 4 সেকেন্ডে পরিবর্তন হবে
    return () => clearInterval(interval);
  }, [images.length]);




   const [yPos, setYPos] = useState(window.innerHeight - 80);
  const [dragging, setDragging] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const rightOffset = 0;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ যখন dragging হবে, তখন body touch off থাকবে
  useEffect(() => {
    if (dragging) {
      document.body.style.overflow = "hidden";     // scroll বন্ধ
      document.body.style.touchAction = "none";    // touch বন্ধ
      document.body.style.pointerEvents = "none";  // click বন্ধ
    } else {
      document.body.style.overflow = "auto";       // scroll আবার চালু
      document.body.style.touchAction = "auto";    // touch চালু
      document.body.style.pointerEvents = "auto";  // click চালু
    }
  }, [dragging]);

  // === Handle Touch Start ===
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    const touch = e.touches[0];
    setOffsetY(touch.clientY - yPos);
    setDragging(true); // 👈 Drag শুরু
  };

  // === Handle Touch Move ===
  const handleTouchMove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    let newY = touch.clientY - offsetY;

    if (newY < 0) newY = 0;
    if (newY > window.innerHeight - 60) newY = window.innerHeight - 60;

    setYPos(newY);
  };

  // === Handle Touch End ===
  const handleTouchEnd = () => {
    setDragging(false); // 👈 Drag শেষ
  };
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const products = [
    {
      id: 1,
      name: "Motul 4T Plus 3000 20W-40 HC-Tech",
      desc: "1 Litre API SN JASO MA2",
      descone: "20W40",
      desctwo: " Mineral",
      img: product1,
    },
    {
      id: 2,
      name: "MOTUL ENGINE OIL 4T 7100 10W-40",
      desc: "1 Litre API SP JASO MA2",
      descone: "10W40",
      desctwo: " Full Synthetic",
      img: product2,
    },
    {
      id: 3,
      name: "MOTUL 7100 4T 20W-50 FULL SYNTHETIC 1L (Vietnam)",
      desc: "2 Litre API-SL 20W-50",
      descone: " Full Synthetic",
      img: product3,
    },
    {
      id: 4,
      name: "MOTUL 5100 10W-40 4T",
      desc: "1 Litre SAE 10W40, API: SP JASO MA2",
      descone: "Fully Synthetic",
      img: product4,
    },
    {
      id: 5,
      name: "MOTUL 7100 4T 10W-30 FULL SYNTHETIC 1L (Vietnam)",
      desc: "1 Litre API-SP 10W-30",
      
      descthree: "",
      category: "Febilock Glue",
      img: product5,
    },
    {
      id: 6,
      name: "MOTUL 300V 4T 10W-40",
      desc: "01 Litre",
      img: product6,
    },
    {
      id: 7,
      name: "MOTUL 300V 4T 10W-30",
      desc: "01 Litre",
       img: product7,
    },
    {
      id: 8,
      name: "MOTUL 7100 4T 10W-40 FULL SYNTHETIC 1L (Vietnam)",
      desc: "1 Litre API-SP 10W-40",
      descone: "Full Synthetic",
      img: product8,
    },
    {
      id: 9,
      name: "Motul 4T Plus 3000 10W-30 HC-Tech",
      desc: "1 Litre API SN JASO MA2 10W30",
      descone: "Mineral",
      img: product9,
    },
    {
      id: 10,
      name: "Motul 4T Plus 3000 10W-40 HC-Tech",
      desc: "1 Litre API SN JASO MA2 10W40",
      descone: "Mineral",
      img: product10,
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
          <section className="relative z-[-9999] border-b border-gray-200 bg-white py-10 px-10 md:px-48 flex flex-col md:flex-row items-center justify-between">
            {/* Left text */}
            <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-4">
              <p className="text-lg md:text-xl text-black">
                Business / <span className="font-bold">Motul Bangladesh</span>
              </p>
              <span className="hidden md:block w-[2px] h-9 bg-black"></span>
              <p className="text-gray-800 text-base md:text-lg leading-tight">
                100% Genuine Motul Lubricants-sourced directly
                <br className="hidden md:block" /> from the official importer
              </p>
            </div>
    
            {/* Right logo */}
            <div className="mt-4 md:mt-0">
              <img
                src={mutolLogo}
                alt="mutol Logo"
                className="w-[160px] md:w-[200px] object-contain"
              />
            </div>
          </section>
           <section
      className="
        relative 
        h-[150px]           
        sm:h-[600px]         
        md:h-[700px]         
        w-full 
        bg-cover 
        bg-center 
        bg-no-repeat 
        transition-all 
        duration-1000        
        ease-in-out
          
      "
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Banner Content */}
      <div className="relative z-10 flex items-center justify-center h-full"></div>

      {/* ✅ Fixed Green Rounded Shape with WhatsApp Icon */}
  <div
      className={`fixed z-50 flex items-center justify-center w-[120px] h-[60px] md:w-[145px] md:h-[70px]
             rounded-l-[150px] shadow-[0_4px_20px_rgba(0,0,0,0.2)]
             bg-gradient-to-r to-[#25D366]/100 from-[#25D366]/80
             backdrop-blur-lg
             transition-all duration-300 ease-out `}
      style={{
        top: isMobile ? `${yPos}px` : "50%",
        right: rightOffset,
        transform: isMobile ? "none" : "translateY(-50%)",
      }}
      onTouchStart={isMobile ? handleTouchStart : undefined}
      onTouchMove={isMobile ? handleTouchMove : undefined}
      onTouchEnd={isMobile ? handleTouchEnd : undefined}
    >
      <a
        href="https://wa.me/8801712345678"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center mr-[60px] lg:mr-[50%] bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-white opacity-70 animate-redPulse"></span>
        <img
          src={callIcon}
          alt="Call Icon"
          className="relative w-6 h-6 lg:w-7 lg:h-7 z-10"
        />
      </a>
    </div>




    </section>
    
<section className="py-20 md:py-40 px-6 md:px-20 lg:px-40 bg-white">
  <div className="max-w-[1500px] mx-auto">
    <div className="md:flex md:items-start md:gap-16">
      <div className="md:flex-1">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-10">
          <span className="mr-2">About</span>
          <span className="font-extrabold">Motul Bangladesh</span>
        </h2>

        <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed mb-10">
          World-renowned Motul Lubricants and Motul Engine Oils are now more
          accessible than ever in Bangladesh - brought to you directly by the
          only official importer of Motul Bangladesh.
        </p>

        <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed mb-10">
          Motul is one of the leading global brands, trusted for its engine
          oils, gear oils, motorcycle oils, car care products, and other
          high-performance automotive solutions. Now, you can experience
          Motul’s world-class performance, superior protection, and
          long-lasting engine support right here in Bangladesh.
        </p>

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-8">
          Why Choose Fixit Group for Motul?
        </h3>

        <ul className="space-y-4 ml-4 md:ml-10 lg:ml-16 text-gray-800">
          {[
            "100% Genuine Motul Lubricants-sourced directly from the official importer",
            "Maximum Engine Performance and Protection",
            "Premium Oils for Both Motorcycles and Cars",
            "Trusted Worldwide by Professional Racers and Engineers",
            "We Are the Only Official Motul Importer in Bangladesh!",
          ].map((item) => (
            <li key={item} className="flex items-start gap-4 md:gap-6">
              <span className="mt-2 md:mt-4 flex-shrink-0">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block"
                >
                  <rect width="12" height="12" rx="1" fill="#D31E2B" />
                </svg>
              </span>

              <span className="text-lg md:text-xl lg:text-2xl leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed mt-10">
          So rest assured - when you buy from us, you're getting authentic,
          high-quality Motul products with full confidence and guarantee.
        </p>
      </div>

      {/* Optional right column for an image or spacing */}
      <div className="hidden md:block md:w-1/3"></div>
    </div>
  </div>
</section>


    
          {/* ================= PRODUCTS GRID ================= */}
          <section className="bg-white py-10 px-6 md:px-12 lg:px-40">
            <div className="py-15">
               <div className="border-4 border-gray-300 rounded-xl px-6 py-4 mb-14 flex flex-wrap gap-4 items-center justify-between">
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

             <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-5 mt-2 sm:mt-0">
  {[
    "Bike",
    "CNG",
    "Car",
    "Bus",
    "Truc",
    "Industrial & Marine",
  ].map((cat) => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={`relative text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-semibold transition-all duration-300 ${
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

  <button className="bg-[#fbbf24] text-black font-semibold text-[15px] sm:text-[16px] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg shadow hover:bg-[#f59e0b] transition">
    FIND A DEALER
  </button>
</div>

            </div>
    
              {/* 🔹 Product Grid */}
              <div className="max-w-[1400px] mx-auto">
                {/* ✅ Responsive Grid: 1 card on mobile, 2 on small, 3 on md, 4 on lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {filteredProducts.map((p, index) => (
    <React.Fragment key={index}>
      {/* Product Card */}
      <div className="border-[2px] border-gray-200 rounded-2xl shadow-sm transition-all duration-300 flex flex-col justify-between bg-white">
        {/* Product Image */}
        <div className="flex justify-center items-center w-full h-[260px] border-b-[2px] border-gray-200 rounded-t-2xl mt-5 overflow-hidden">
          <img
            src={p.img}
            alt={p.name}
            className="object-contain w-auto h-[220px] transition-transform duration-300 hover:scale-105"
            onTouchStart={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = "";
            }}
          />
        </div>

        {/* Product Info */}
        <div className="p-5 flex flex-col flex-grow justify-between text-center gap-2">
          <h3 className="text-[17px] font-bold text-black leading-[1.4]">{p.name}</h3>
          <p className="text-[14px] text-gray-600 leading-[1.0]">{p.desc}</p>
          <p className="text-[14px] text-gray-600 leading-[1.0]">{p.descone}</p>
          <p className="text-[14px] text-gray-600 leading-[1.0]">{p.desctwo}</p>
          <p className="text-[14px] text-gray-600 leading-[1.0]">{p.descthree}</p>
        </div>

        {/* Buttons */}
        <div className="px-5 pb-5 flex flex-col gap-2 mt-auto">
          <Link
            to={`/motuldetails/${p.id}`}
            state={{ showBanner: true }}
            className="border border-[#0072BC] text-[#0072BC] text-[15px] font-medium py-2 px-4 rounded-md 
                       hover:bg-[#0072BC] hover:text-white transition-all duration-300 text-center inline-block"
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

      {/* Background Image after every 4 products */}
      {(index + 1) % 4 === 0 && (index + 1) / 4 <= 2 && (
        <div
          className="
            block 
            col-span-full 
            w-full 
            h-[60px] sm:h-[250px] 
            bg-center 
            lg:rounded-2xl 
            lg:shadow-inner 
            overflow-hidden
          "
          style={{
            backgroundImage: `url(${
              ((index + 1) / 4) % 2 === 1 ? bgImage1 : bgImage2
            })`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      )}
    </React.Fragment>
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
         <section
                className="relative mb-[50px] bg-black bg-cover bg-center bg-no-repeat py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 text-white overflow-hidden"
                style={{ backgroundImage: `url(${Phuter})` }}
              >
                {/* Responsive Overlay */}
                <div className="absolute inset-0 bg-black md:bg-black/20"></div>
        
                <div className="relative max-w-[1600px] mx-auto flex flex-col md:flex-row items-start justify-between gap-10 md:gap-12">
                  {/* Left Side */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-6">
                      <img
                        src={LocationIcon}
                        className="w-[55px] sm:w-[65px] md:w-[70px]"
                        alt="Location Icon"
                      />
                    </div>
        
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-snug text-center md:text-left">
                      Fill out the form below to become an{" "}
                      <br className="hidden md:block" />
                      <span className="font-bold text-white">
                        Authorized Dealer
                      </span> of{" "}
                      <span className="font-bold text-yellow-400">
                        Jaguar Lubricants
                      </span>
                    </h2>
        
                    <p className="mt-6 text-gray-300 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed text-justify md:text-left">
                      <span className="font-bold text-white">Jaguar Lubricants</span> is
                      committed to building strong, trustworthy, and sustainable
                      business relationships with each of its dealers.
                    </p>
        
                    <p className="mt-4 text-gray-300 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed text-justify md:text-left">
                      Our goal is to establish a new benchmark of{" "}
                      <span className="font-semibold text-yellow-400">
                        quality, durability, and reliability
                      </span>{" "}
                      in Bangladesh’s lubricant industry.
                    </p>
        
                    {/* Contact Info */}
                    <div className="flex flex-col md:flex-row items-center md:items-end py-4 md:py-6 mt-12 md:mt-20 space-y-4 md:space-y-0 md:space-x-8 text-white">
                      {/* Emergency */}
                      <div className="text-center md:text-left space-y-1">
                        <h3 className="text-base font-semibold text-yellow-400">
                          Emergency
                        </h3>
                        <p className="text-sm font-medium text-gray-300">
                          +8801788360303
                        </p>
                      </div>
        
                      {/* Call Icon */}
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-[50px] h-[50px] bg-yellow-500 rounded-full animate-ping opacity-30"></div>
                        <a
                          href="https://wa.me/8801788360303"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative z-10 flex items-center justify-center bg-white rounded-full w-[45px] h-[45px] shadow-yellow-400/40 shadow-md hover:scale-110 transition-transform duration-300"
                        >
                          <img
                            src={callIcon}
                            alt="WhatsApp Call Icon"
                            className="w-[32px] h-[32px]"
                          />
                        </a>
                      </div>
        
                      {/* Email */}
                      <div className="text-center md:text-right space-y-1">
                        <h3 className="text-base font-semibold text-yellow-400">
                          Email Address
                        </h3>
                        <p className="text-sm font-medium text-gray-300">
                          support@fixitgroupbd.com
                        </p>
                      </div>
                    </div>
                  </div>
        
                  {/* Right Side Form */}
                  <div className="bg-[#1A1A1A]/70 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8 md:w-[420px] w-full sm:max-w-[500px] mx-auto md:mx-0 mt-10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-yellow-400 text-center md:text-left">
                      Request a Quote
                    </h3>
        
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
                        placeholder="Your Phone Number"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none"
                        required
                      />
        
                      <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
                        <select
                          name="dealer"
                          value={formData.dealer}
                          onChange={handleChange}
                          className="w-full sm:w-1/2 p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none"
                          required
                        >
                          <option value="" disabled>
                            Dealer/Depo
                          </option>
                          <option value="Dealer">Dealer</option>
                          <option value="Depo">Depo</option>
                        </select>
        
                        <select
                          name="district"
                          value={formData.district}
                          onChange={handleChange}
                          className="w-full sm:w-1/2 p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none"
                          required
                        >
                          <option value="" disabled>
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
                        className="w-full bg-yellow-400 text-black font-semibold py-3 mt-3 rounded-md cursor-pointer hover:bg-yellow-300 transition disabled:opacity-60"
                      >
                        {loading ? "Sending..." : "Submit"}
                      </button>
                    </form>
        
                    {sent && (
                      <p className="text-green-400 text-center mt-3">
                        ✅ Mail sent successfully!
                      </p>
                    )}
                  </div>
                </div>
              </section>
        </section>
  )
}

export default Motul