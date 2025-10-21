import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import logo2 from "../../assets/Fixit-Group-Logo-Red-and-White.png";
import drfixitLogo from "../../assets/Dr-Fixit-Logo.png";
import emailjs from "emailjs-com";
import callIcon from "../../assets/Call-Icon-Green.png";
import LocationIcon from "../../assets/Location-Man-Icon.png";
import mutolLogo from "../../assets/Motul-Logo.png";
import Phuter from "../../assets/Phuter.png";

import product1 from "../../assets/Motul-4T-3000-20W-40-HC-Tech.png";
import product2 from "../../assets/JAGUAR-4T-Motor-Engine-Oil-SN.png";
import product3 from "../../assets/JAGUAR-High-Performance-Gasoline-CNG-Engine-Oil-01.png";
import product4 from "../../assets/MOTUL-5100-20W-50-4T.png";
import product5 from "../../assets/JAGUAR-Multi-Grade-Engine-Oil-CH-4.png";
import product6 from "../../assets/JAGUAR-Diesel-Heavy-Duty-Engine-Oil.png";
import product7 from "../../assets/JAGUAR-Diesel-HD-50-Engine-Oil.png";
import product8 from "../../assets/JAGUAR-Diesel-Extra-Mileage-Engine-Oil.png";
import product9 from "../../assets/JAGUAR-Diesel-Extream-Power-Engine-Oil.png";
import product10 from "../../assets/JAGUAR-Hydralic-Oil-HV-Engine-Oil.png";
import product11 from "../../assets/JAGUAR-Hydralic-Oil-AW-Engine-Oil.png";
import product12 from "../../assets/JAGUAR-Gear-Oil-GL-4.png";
import product13 from "../../assets/JAGUAR-Hydralic-Oil-HV-Engine-Oil.png";

const products = [
{
    id: 1,
  title: "Motul 20W-40 4-Stroke Motorcycle Oil (1L)",
  brand: "Motul",
  category: "Motul 20W-40 4-Stroke Motorcycle Oil",
  capacity: "1 Litre",
  saeGrade: "20W-40",
  apiSpecification: "SM",
  jasoSpecification: "MA2 (HC-Tech)",
  origin: "France & India",
  import: "India & France",
  description1:
    "Motul 20W-40 4-Stroke Motorcycle Oil is specially formulated for all types of 4-stroke motorcycles up to 150cc. Designed to deliver excellent performance even in high-temperature conditions, this oil ensures smooth engine, gear, and wet clutch operation with outstanding protection and cleanliness.",
  image: product1,

},




 {
  id: 2,
  title: "JAGUAR 20W-40 4T / 20W-50 4T",
  brand: "JAGUAR",
  category: "Motorcycle Engine Oil",
  
  subtitle: "Jaguar 20W-40 SN Semi Synthetic – Premium Four-Stroke Motorcycle Engine Oil",
  description1:
    "Jaguar 20W-40 is a high-performance motorcycle engine oil specially formulated for modern four-stroke engines. Developed with advanced additive technology and highly refined mineral base oils, it ensures superior engine protection, smooth clutch performance, and extended engine life.",
  description2:
    "While optimized for the latest engine technology, Jaguar 20W-40 also provides excellent protection for older motorcycle engines, perfectly matching evolving engine technology trends from leading OEMs. Its heat-activated anti-wear molecules™ protect the engine instantly—from start-up to high-temperature, long-distance rides.",
  availablePackaging: "1 Liter",
  image: product2,
  Availability: "In Stock"
},


  {
  id: 3,
title: "Motul 7100 Fully Synthetic 4-Stroke Motorcycle Oil 1L (FRANCE)",
brand: "Motul",
category: "Motul 20W-50 Fully Synthetic (Ester Technology)",
capacity: "1 Liter",
saeGrade: "20W-50",
apiSpecification: "API SP",
jasoSpecification: "MA2 (JASO T903:2023)",
description1: "Motul 7100 is a best-in-class fully synthetic motor oil engineered with Ester Core® technology for maximum protection and out-standing performance in both on-road and off-road conditions. It is suitable for all types of high-performance 4-stroke motorcy-cles, whether they have an integrated or non-integrated gear-box, and whether they use a wet or dry clutch system.",
description2: "TPerfectly designed for motorcycles equipped with catalytic con-verters or secondary air injection systems, Motul 7100 ensures optimal engine cleanliness, reduced friction, and superior pro-tection under extreme riding conditions - from daily commutes to sport and adventure riding.",

image: product3

  },

{
  id: 4,
  title: "MOTUL 5100 20W-50 4T",
  brand: "Motul",
  category: "Motul 5100 20W-50 4T is a high-performance semi-synthetic engine oil",
  engineType: "4T (4-Stroke)",
  viscosity: "20W-50",
  apiSpecification: "API SP",
  jasoSpecification: "MA2 (2023)",

  
  description1:
    "Motul 5100 20W-50 4T is a high-performance semi-synthetic engine oil (Technosynthese®) designed for 4-stroke motorcycles that require reliability, smooth performance, and protection in everyday use and light recreational riding.",
  description2:
    "Formulated with Motul’s exclusive Ester technology, this oil en-sures easy cold starts, smoother gear shifting, and optimized fuel efficiency, while extending engine and gearbox life even under demanding conditions.",

  image: product4,
},



{
  id: 5,
  title: "Jaguar Advanced Fully Synthetic Engine Oil CH-4 20W-50",
  brand: "Jaguar",
  category: "High-Performance Synthetic Technology Diesel Engine Oil",
  capacity: "5 Liters",
  saeGrade: "20W-50",
  apiSpecification: "CH-4",
  madeIn: "UAE",
 
 description1:
  "Jaguar Advanced Fully Synthetic Engine Oil CH-4 20W50 is an ul-tra-high-performance diesel engine oil formulated with ad-vanced synthetic technology and premium base stocks. It pro-vides excellent lubrication, enhanced engine protection, and longer engine life for both modern and older generation diesel en-gines operating in the most demanding conditions.",

  image: product5,
},


{
  id: 6,
  title: "Jaguar Heavy Duty 15W-40 API CI-4/SM Engine Oil",
  brand: "Jaguar",
  category: "Premium High-Performance Diesel Engine Oil for Commercial Use",
  capacity: "10 Liters",
  saeGrade: "15W-40",
  apiSpecification: "CI-4/SM",
  madeIn: "UAE",
  description1:
    "Jaguar Heavy Duty 15W-40 API CI-4/SM is a high-performance, heavy-duty diesel engine oil developed using advanced technology base oils and a balanced additive system. It is specially engineered to deliver maximum protection and performance for turbo-charged and intercooled diesel engines operating under severe on-road and off-road conditions.",
  description2:
    "Formulated with superior thermal and oxidation stability, Jaguar Heavy Duty ensures longer engine life, enhanced cleanliness, and extended drain intervals making it the ideal choice for commercial vehicles, trucks, buses, and heavy equipment.",
  image: product6,
},


  {
    id: 7,
    title:
      "vehicles, trucks, buses, and heavy equipment.",

    brand: "Jaguar",
    category: "Admixture",
   category: "Premium High-Performance Diesel Engine Oil for Commercial Use",
  capacity: "10 Liters",
  saeGrade: "HD-50",
  apiSpecification: "SF/CD",
  madeIn: "UAE",
  description1:
    "Jaguar HD-50 API SF/CD is a high-quality multigrade motor oil spe-cially formulated for passenger vehicles, light trucks, and heavy-duty engines that operate under demanding conditions. De-signed with premium Group I base oils and advanced additive technology, Jaguar HD-50 ensures superior engine cleanliness, re-duced wear, and long-lasting protection against oxidation and cor-rosion.",
  description2:
    "This oil is suitable for naturally aspirated, turbocharged, and su-percharged engines used in both on-road and off-road applica-tions-making it an ideal choice for fleets, commercial vehicles, and older model cars that require SF/CD specification oils.",
    image: product7,
  },
  {
    id: 8,
    title:
      "Jaguar Extreme Power 20W50 - Super Premium Diesel Engine Oil (API-CF/SF)",
  brand: "Jaguar",
  category: "Diesel Engine Oil (API-CF/SF)",
  saeGrade: "20W50",
  apiSpecification: "CF/SF",
  madeIn: "UAE",
  
  description1:
    "Jaguar Extreme Power 20W50 (API-CF/SF) is a super premium heavy-duty diesel engine oil developed using advanced additive technology and 100% virgin base oils. ",
  description2:
    "Formulated for maximum engine protection, excellent cleanliness, and long-lasting performance, this oil ensures smooth operation even under the most demanding conditions.",
  description3:
    "Perfectly suited for turbocharged and naturally aspirated diesel engines, Jaguar Extreme Power offers strong film strength, ther-mal stability, and outstanding wear control, making it ideal for both on-road and off-road heavy-duty applications.",

    image: product8,
  },
  {
    id: 9,
    title:
      "Jaguar Extra Mileage 15W-40 API-CH4",

  brand: "Jaguar",
  category: "High-Performance Motor Oil for Gasoline & Diesel Engines",
  saeGrade: "20W50",
  apiSpecification: "CH4",
    capacity: "20 Liters",
  madeIn: "UAE",
    description1:
      "Jaguar Extra Mileage 20W-50 API-CH4 is a premium multigrade diesel engine oil specially engineered to provide outstanding pro-tection and performance for modern and older diesel engines. De-veloped using advanced additive technology and high-quality base oils, it helps to reduce engine wear, prevent sludge formation, and maintain engine cleanliness for longer service life.",
description2: "Whether used in trucks, buses, construction machinery, or agricul-tural equipment, Jaguar Extra Mileage ensures maximum engine protection under severe operating conditions and high-tempera-ture environments.",
    image: product9,
  },
  {
    id: 10,
    title:
      "Jaguar Hydraulic Oil HV ISO 68",
    brand: "Jaguar",
    category: "Premium Anti-Wear Hydraulic Oil - Engineered for Industrial and Heavy-Duty Performance",
      saeGrade: "HV ISO 68",
  apiSpecification: "HV",
    capacity: "20 Liters",
  madeIn: "UAE",
    description1:
      "Jaguar Hydraulic Oil HV ISO 68 is a high-performance, anti-wear hy-draulic fluid specially formulated to deliver maximum protection, extended equipment life, and superior performance in both indus-trial and mobile hydraulic systems. Built with advanced Friction GuardTM technology, it ensures smooth operation and energy-effi-cient performance even under extreme conditions.",
    image: product10,
   
  },
  {
    id: 11,
    title:
      "Jaguar Hydraulic Oil AW ISO 100",
    brand: "Jaguar",
    category: "Premium Anti-Wear Hydraulic Oil - Engineered for Industrial and Heavy-Duty Performance",
       saeGrade: "AW ISO 100",
  apiSpecification: "AW",
    capacity: "20 Liters",
  madeIn: "UAE",
    description1:
      "Jaguar Hydraulic Oil AW ISO 100 is a high-performance, anti-wear hydraulic fluid specially formulated to deliver maximum protec-tion, extended equipment life, and superior performance in both industrial and mobile hydraulic systems. Built with advanced Fric-tion GuardTM technology, it ensures smooth operation and ener-gy-efficient performance even under extreme conditions.",
    
    image: product11,
  },
  {
    id: 12,
   title:
      "Jaguar Gear Oil GL-4 SAE-90",

  brand: "Jaguar",
  category: "High-Performance Gearbox Lubricant for Passenger CarsTrucks & Heavy Vehicles",
  saeGrade: "20W50",
  apiSpecification: "CF/SF",
    capacity: "20 Liters",
  madeIn: "UAE",
    description1:
      "Jaguar Gear Oil GL-4 SAE-90 is a premium multi-vehicle gear lubri-cant designed for manual transmissions and transaxles in passen-ger cars, trucks, and other commercial vehicles. Specially formulat-ed with advanced anti-wear and oxidation-resistant additives, it ensures long-lasting protection, smooth gear shifting, and maxi-mum gearbox performance in all driving conditions.",
   
  
    image: product12, 
  },

  {
    id: 13,
    title:
      "Jaguar Hydraulic Oil HV ISO 68",
    brand: "Jaguar",
    category: "Premium Anti-Wear Hydraulic Oil - Engineered for Industrial and Heavy-Duty Performance",
      saeGrade: "HV ISO 68",
  apiSpecification: "HV",
    capacity: "20 Liters",
  madeIn: "UAE",
    description1:
      "Jaguar Hydraulic Oil HV ISO 68 is a high-performance, anti-wear hy-draulic fluid specially formulated to deliver maximum protection, extended equipment life, and superior performance in both indus-trial and mobile hydraulic systems. Built with advanced Friction GuardTM technology, it ensures smooth operation and energy-effi-cient performance even under extreme conditions.",
    image: product13, // update with your actual Fevilock image import
  },
];

const MotulDetails = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const { id } = useParams();

  const initialIndex = id
    ? Math.max(
        0,
        products.findIndex((item) => item.id === parseInt(id))
      )
    : 0;

  const [index, setIndex] = useState(initialIndex);
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
    <section className="w-full  z-50">
      <header className="top-0 bg-[#000000] left-0 w-full z-50">
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
                    <div className="absolute top-[80px] right-4 left-4 z-50 bg-white text-black rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
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
      {/* =========================== */}
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
      {/* ============================ */}

      {/* ============================= */}
      <section id="banner" className="bg-white">
        <div className="max-w-full mx-auto py-30 px-6 md:px-70">
          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Image */}
            <div className="flex flex-col items-center">
  <div className="h-[580px] w-[500px] rounded-2xl shadow-md p-4 flex items-center justify-center group">
    <img
      src={p.image}
      alt={p.title}
      className="max-w-full max-h-[500px] object-contain transform transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
  </div>

  <div className="mt-8">
    <Link
      to="/find-dealer"
      className="bg-[#f6b400] hover:bg-[#e0a200] text-black font-semibold px-8 py-3 rounded-md shadow-md transition"
    >
      Find a Dealer
    </Link>
  </div>
</div>


            {/* Right: Info */}
<div className="lg:pt-[10px]">
  <div className="space-y-2 text-black md:pl-10 lg:pl-0">
    {/* === Title === */}
    <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold text-black">
      {p.title}
    </h2>

    {/* === Product Info === */}
    <div className="space-y-1.5 lg:pt-[5px]">
      {p.brand && (
        <p className="text-base md:text-lg">
          <span className="font-bold text-black">Brand:</span> {p.brand}
        </p>
      )}
      {p.category && (
        <p className="text-base md:text-lg">
          <span className="font-bold text-black">Category:</span> {p.category}
        </p>
      )}
      {p.capacity && (
        <p className="text-base md:text-lg">
          <span className="font-bold text-black">Capacity:</span> {p.capacity}
        </p>
      )}
      {p.saeGrade && (
        <p className="text-base md:text-lg">
          <span className="font-bold text-black">SAE Grade:</span> {p.saeGrade}
        </p>
      )}
      {p.apiSpecification && (
        <p className="text-base md:text-lg">
          <span className="font-bold text-black">API Specification:</span>{" "}
          {p.apiSpecification}
        </p>
      )}
      {p.jasoSpecification && (
        <p className="text-base md:text-lg">
          <span className="font-bold text-black">JASO Specification:</span>{" "}
          {p.jasoSpecification}
        </p>
      )}

      {/* === Origin & Import === */}
      {(p.origin || p.import) && (
        <>
          <h3 className="text-base md:text-lg font-bold text-black mt-4">
            Origin & Import Details
          </h3>
          {p.origin && (
            <p className="text-base md:text-lg">
              <span className="font-bold text-black">Country of Origin:</span>{" "}
              {p.origin}
            </p>
          )}
          {p.import && (
            <p className="text-base md:text-lg">
              <span className="font-bold text-black">Country of Import:</span>{" "}
              {p.import}
            </p>
          )}
        </>
      )}
    </div>

    {/* === Description === */}
    {(p.subtitle || p.description1 || p.description2 || p.description3) && (
      <div className="pt-4">
        {p.subtitle && (
          <h3 className="text-xl md:text-[22px] font-bold mb-5">
            {p.subtitle}
          </h3>
        )}
        {p.description1 && (
          <p className="text-base md:text-lg text-black leading-relaxed mb-2">
            {p.description1}
          </p>
        )}
        {p.description2 && (
          <p className="text-base md:text-lg text-black leading-relaxed mb-2">
            {p.description2}
          </p>
        )}
        {p.description3 && (
          <p className="text-base md:text-lg text-black leading-relaxed">
            {p.description3}
          </p>
        )}
      </div>
    )}
  </div>
</div>




          </div>

          {/* 🔹 Thumbnails */}
     <div className="flex justify-center gap-4 mt-20 flex-wrap">
  {products.map((prod, i) => (
    <button
      key={prod.id}
      onClick={() => setIndex(i)}
      className={`border rounded-xl p-2 transition-all flex items-center justify-center w-[90px] h-[90px] ${
        index === i
          ? "border-[#f6b400] bg-[#fff8e1] scale-105"
          : "border-gray-200 hover:border-[#f6b400]"
      }`}
    >
      <img
        src={prod.image}
        alt={prod.title}
        className="max-w-[70px] max-h-[70px] object-contain"
      />
    </button>
  ))}
</div>


          {/* 🔹 Dynamic Text Content */}
          <div className="mt-20 ">
            {p.id === 1 && (
     <div className="max-w-[1700px] mx-auto font-sans text-black border-t border-gray-300 py-8 text-[15px] leading-relaxed">
    {/* === Application === */}
    <section className="mb-6">
      <h2 className="font-semibold text-[17px] mb-2">Application:</h2>
      <p className="mb-2 font-semibold  text-[17px]  text-black">
        Buy genuine Motul 20W-40 Motorcycle Oil in Bangladesh from the only official Motul importer.
      </p>
      <ul className="space-y-1 ml-4">
        <li>
          <span className="text-red-600 mr-2">▪</span>
          High-performance sport bikes and superbikes
        </li>
        <li>
          <span className="text-red-600 mr-2">▪</span>
          Track, racing, and endurance motorcycles
        </li>
        <li>
          <span className="text-red-600 mr-2">▪</span>
          Street and adventure motorcycles with 4-stroke engines
        </li>
        <li>
          <span className="text-red-600 mr-2">▪</span>
          Suitable for bikes with catalytic converters and modern emission systems
        </li>
      </ul>
    </section>

    {/* === Performance Standards === */}
    <section className="mb-6">
      <h2 className="font-semibold text-[17px] mb-2">Performance Standards</h2>
      <ul className="space-y-1 ml-4">
        <li><span className="text-red-600 mr-2">▪</span>Oil Type: 100% Synthetic (Ester Core®)</li>
        <li><span className="text-red-600 mr-2">▪</span>Viscosity Grade: SAE 10W40</li>
        <li><span className="text-red-600 mr-2">▪</span>Product Type: 4T Motorcycle Oil</li>
        <li><span className="text-red-600 mr-2">▪</span>Standards: Exceeds API SP & JASO MA2 requirements</li>
        <li><span className="text-red-600 mr-2">▪</span>Technology: Double Ester Core® Racing Technology</li>
      </ul>
    </section>

    {/* === Key Features === */}
    <section className="mb-6">
      <h2 className="font-semibold text-[17px] mb-2">Key Features & Benefits</h2>
      <ul className="space-y-1 ml-4">
        <li><span className="text-red-600 mr-2">▪</span>Suitable for all 4-stroke bikes up to 150cc</li>
        <li><span className="text-red-600 mr-2">▪</span>Performs exceptionally well under high-temperature conditions</li>
        <li><span className="text-red-600 mr-2">▪</span>High detergent and dispersant properties keep the engine, gear, and clutch clean</li>
        <li><span className="text-red-600 mr-2">▪</span>Reinforced anti-wear technology extends engine life and maintains performance</li>
        <li><span className="text-red-600 mr-2">▪</span>Meets international standards for engine protection and reliability</li>
      </ul>
    </section>

    {/* === Technical Properties === */}
    <section className="mb-6">
      <h2 className="font-semibold text-[17px] mb-2">Technical Properties</h2>
      <table className="w-full text-left border-collapse text-[15px]">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="py-1">Property</th>
            <th className="py-1">Test Method</th>
            <th className="py-1">Typical Value</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["SAE Grade", "—", "20W50"],
            ["Density @ 15.6°C (g/ml)", "ASTM D4052", "0.885"],
            ["Kinematic Viscosity @ 40°C (mm²/s)", "ASTM D445", "106"],
            ["Kinematic Viscosity @ 100°C (mm²/s)", "ASTM D445", "14.4"],
            ["Viscosity Index", "ASTM D2270", "140"],
            ["Pour Point (°C)", "ASTM D97", "-33"],
            ["Flash Point (°C)", "ASTM D92", "228"],
            ["Sulfated Ash (% wt)", "ASTM D874", "1.3"],
            ["Total Base Number (mgKOH/g)", "ASTM D2896", "12"],
          ].map(([prop, method, value], i) => (
            <tr key={i} className="border-b border-gray-200">
              <td className="py-1">{prop}</td>
              <td className="py-1">{method}</td>
              <td className="py-1">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>

    {/* === Available Packs === */}
    <section>
      <h2 className="font-semibold text-[17px] mb-2">Available Packs</h2>
      <p>1L | 3.5L | 5L | 7.5L | 10L | 20L | 50L | 210L Barrel</p>
    </section>
  </div>
            )}

            {p.id === 2 && (
             <div className="max-w-[1700px] mx-auto font-sans text-black border-t border-b border-gray-300 py-8 text-[15px] leading-relaxed">
      {/* === Application === */}
      <section className="mb-6">
        <h2 className="font-semibold text-[17px] mb-2">Application:</h2>
        <ul className="space-y-1 ml-4">
          <li>
            <span className="text-red-600 mr-2">▪</span>Recommended for modern
            four-stroke motorcycle engines requiring JASO MA or JASO MA2
            specifications.
          </li>
          <li>
            <span className="text-red-600 mr-2">▪</span>Provides strong
            protection for older motorcycle engines built before the introduction
            of JASO MA/MA2.
          </li>
        </ul>
      </section>

      {/* === Specifications and Approvals === */}
      <section className="mb-6">
        <h2 className="font-semibold text-[17px] mb-2">
          Specifications and Approvals:
        </h2>
        <p className="mb-1">
          This product meets or exceeds the requirements of the following
          industry standards:
        </p>
        <ul className="space-y-1 ml-4">
          <li>
            <span className="text-red-600 mr-2">▪</span>JASO MA / JASO MA2
          </li>
          <li>
            <span className="text-red-600 mr-2">▪</span>API SL
          </li>
        </ul>
      </section>

      {/* === Key Features === */}
      <section className="mb-6">
        <h2 className="font-semibold text-[17px] mb-2">Key Features & Benefits</h2>

        <p className="font-semibold">Advanced Engine Protection:</p>
        <p className="mb-3">
          Instant protection from{" "}
          <span className="italic">heat-activated anti-wear molecules</span>™
          ensures smooth performance and reduced metal wear even at high
          temperatures.
        </p>

        <p className="font-semibold">Enhanced Wear Resistance:</p>
        <p className="mb-3">
          Provides up to 57% more wear protection than the industry standard
          (based on API SL Sequence IVA test).
        </p>

        <p className="font-semibold">Smooth Clutch Operation:</p>
        <p className="mb-3">
          High-traction formulation helps prevent clutch slippage and allows
          smoother gear shifting.
        </p>

        <p className="font-semibold">Engine & Gearbox Protection:</p>
        <p className="mb-3">
          Designed to protect both <strong>engine</strong> and{" "}
          <strong>gearbox</strong> in one circulation system, minimizing friction
          and corrosion.
        </p>

        <p className="font-semibold">Cleaner Engine Performance:</p>
        <p>
          Prevents deposit formation and helps keep the{" "}
          <strong>engine clean</strong>, ensuring longer life and consistent
          efficiency.
        </p>
      </section>

      {/* === Technical Properties === */}
      <section className="mb-6">
        <h2 className="font-semibold text-[17px] mb-2">Technical Properties</h2>
        <table className="w-full text-left border-collapse text-[15px]">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-1">Property</th>
              <th className="py-1">Test Method</th>
              <th className="py-1">Typical Value</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Grade", "SAE 20W–40", "—"],
              ["Kinematic Viscosity @ 40°C (mm²/s)", "ASTM D445", "122"],
              ["Kinematic Viscosity @ 100°C (mm²/s)", "ASTM D445", "15"],
              ["Density @ 15.6°C (g/ml)", "ASTM D4052", "0.88"],
              ["Pour Point (°C)", "ASTM D97", "-30"],
              ["Flash Point (°C)", "ASTM D92", "230"],
              ["Sulfated Ash (mass %)", "ASTM D874", "0.8"],
              ["Total Base Number (mg KOH/g)", "ASTM D2896", "5.9"],
              ["Mini-Rotary Viscometer @ -20°C (mPa.s)", "ASTM D4684", "12,500"],
              ["Hi-Temp Hi-Shear Viscosity @ 150°C (mPa.s)", "ASTM D4683", "4.1"],
            ].map(([prop, method, value], i) => (
              <tr key={i} className="border-b border-gray-200">
                <td className="py-1">{prop}</td>
                <td className="py-1">{method}</td>
                <td className="py-1">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* === Health and Safety === */}
      <section>
        <h2 className="font-semibold text-[17px] mb-2">Health and Safety</h2>
        <p className="mb-3">
          For safe handling and use, please refer to the Material Safety Data
          Sheet (MSDS) available at:
        </p>
        <p className="text-blue-700 underline">
          www.jaguarlubricants.com
        </p>
        <p className="mt-3">
          Jaguar Super Moto 20W-40 - Premium protection, smooth performance, and
          longer engine life for your motorcycle.
        </p>
      </section>
    </div>
            )}

            {p.id === 3 && (
<div className="max-w-[1700px] mx-auto font-sans text-black border-t border-gray-300 py-8 text-[15px] leading-relaxed">
  {/* === Application === */}
  <section className="mb-6">
    <h2 className="font-semibold text-[17px] mb-2">Application:</h2>
    <p className="mb-2 font-semibold text-[17px] text-black">
      Jaguar Advanced Fully Synthetic Engine Oil CH-4 20W50 is recommended for:
    </p>
    <ul className="space-y-1 ml-4">
      <li>
        <span className="text-red-600 mr-2">▪</span>
        Naturally aspirated and turbocharged diesel engines from leading Japanese, European, and American manufacturers
      </li>
      <li>
        <span className="text-red-600 mr-2">▪</span>
        Heavy-duty trucks, buses, and light commercial vehicles operating in both highway and off-highway conditions
      </li>
      <li>
        <span className="text-red-600 mr-2">▪</span>
        Off-road machinery in construction, mining, quarrying, and agriculture industries
      </li>
      <li>
        <span className="text-red-600 mr-2">▪</span>
        Mixed fleet applications, including diesel and gasoline engines where CH-4 performance level is specified
      </li>
    </ul>
  </section>

  {/* === Why Choose Motul 7100 === */}
  <section className="mb-6">
    <h2 className="font-semibold text-[17px] mb-2">Why Choose Motul 7100?</h2>
    <ul className="space-y-1 ml-4">
      <li><span className="text-red-600 mr-2">▪</span>Delivers sharp engine response and ultimate clutch performance</li>
      <li><span className="text-red-600 mr-2">▪</span>Provides maximum protection in extreme temperatures and heavy loads</li>
      <li><span className="text-red-600 mr-2">▪</span>Ensures longer engine life and stable oil performance</li>
      <li><span className="text-red-600 mr-2">▪</span>Trusted worldwide by riders, racers, and manufacturers</li>
    </ul>
    <p className="mt-2 font-semibold text-black">
      Buy Genuine Motul 7100 in Bangladesh from the only official Motul importer. Experience true Motul performance — Power. Protection. Performance.
    </p>
  </section>

  {/* === Key Features & Benefits === */}
  <section className="mb-6">
    <h2 className="font-semibold text-[17px] mb-2">Key Features & Benefits</h2>
    <ul className="space-y-1 ml-4">
      <li><span className="text-red-600 mr-2">▪</span>Ester-based synthetic oil reduces internal friction and enhances engine efficiency</li>
      <li><span className="text-red-600 mr-2">▪</span>High-temperature and high-speed resistance ensures durable protection</li>
      <li><span className="text-red-600 mr-2">▪</span>Superior anti-wear additives extend engine and gearbox life</li>
      <li><span className="text-red-600 mr-2">▪</span>Keeps clutch, gearbox, and engine clean throughout the oil drain interval</li>
      <li><span className="text-red-600 mr-2">▪</span>Optimized phosphorus and sulfur content for better catalytic converter performance</li>
      <li><span className="text-red-600 mr-2">▪</span>Enhanced clutch grip and smoother shifting for sport and adventure riders</li>
      <li><span className="text-red-600 mr-2">▪</span>Compatible with modern emission systems and exhaust after-treatment technologies</li>
    </ul>
  </section>

  {/* === Technical Properties === */}
  <section className="mb-6">
    <h2 className="font-semibold text-[17px] mb-2">Technical Properties</h2>
    <table className="w-full text-left border-collapse text-[15px]">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="py-1">Property</th>
          <th className="py-1">Test Method</th>
          <th className="py-1">Typical Value</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["SAE Grade", "—", "20W50"],
          ["Density @ 15.6°C (g/ml)", "ASTM D4052", "0.885"],
          ["Kinematic Viscosity @ 40°C (mm²/s)", "ASTM D445", "106"],
          ["Kinematic Viscosity @ 100°C (mm²/s)", "ASTM D445", "14.4"],
          ["Viscosity Index", "ASTM D2270", "140"],
          ["Pour Point (°C)", "ASTM D97", "-33"],
          ["Flash Point (°C)", "ASTM D92", "228"],
          ["Sulfated Ash (% wt)", "ASTM D874", "1.3"],
          ["Total Base Number (mgKOH/g)", "ASTM D2896", "12"],
        ].map(([prop, method, value], i) => (
          <tr key={i} className="border-b border-gray-200">
            <td className="py-1">{prop}</td>
            <td className="py-1">{method}</td>
            <td className="py-1">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>

  {/* === Available Packs === */}
  <section>
    <h2 className="font-semibold text-[17px] mb-2">Available Packs</h2>
    <p>1 L | 3.5 L | 5 L | 7.5 L | 10 L | 20 L | 50 L | 210 L Barrel</p>
  </section>
</div>

            )}
            {p.id === 4 && (
   <div className="max-w-[1700px] mx-auto font-sans text-black border-t border-gray-300 py-8 text-[15px] leading-relaxed">
  {/* === Application === */}
  <section className="mb-6">
    <h2 className="font-semibold text-[17px] mb-2">Application:</h2>
    <p className="mb-2 font-semibold text-[17px] text-black">
      Jaguar Advanced Fully Synthetic Engine Oil CH-4 20W50 is recommended for:
    </p>
    <ul className="space-y-1 ml-4">
      <li>
        <span className="text-red-600 mr-2">▪</span>
        Naturally aspirated and turbocharged diesel engines from leading Japanese, European, and American manufacturers
      </li>
      <li>
        <span className="text-red-600 mr-2">▪</span>
        Heavy-duty trucks, buses, and light commercial vehicles operating in highway and off-highway conditions
      </li>
      <li>
        <span className="text-red-600 mr-2">▪</span>
        Off-road machinery in construction, mining, quarrying, and agriculture industries
      </li>
      <li>
        <span className="text-red-600 mr-2">▪</span>
        Mixed fleet applications including diesel and gasoline engines where CH-4 performance is specified
      </li>
    </ul>
  </section>

  {/* === Performance Standards === */}
  <section className="mb-6">
    <h2 className="font-semibold text-[17px] mb-2">Performance Standards</h2>
    <ul className="space-y-1 ml-4">
      <li><span className="text-red-600 mr-2">▪</span>Street and commuter trucks/buses</li>
      <li><span className="text-red-600 mr-2">▪</span>Dual-sport and mixed fleet vehicles</li>
      <li><span className="text-red-600 mr-2">▪</span>Light off-road and industrial machinery</li>
      <li><span className="text-red-600 mr-2">▪</span>Provides long-lasting protection and superior performance for engines expecting CH-4 standards</li>
      <li><span className="text-red-600 mr-2">▪</span>Reliable performance in both on-road and off-road conditions</li>
    </ul>
  </section>

  {/* === Key Features & Benefits === */}
  <section className="mb-6">
    <h2 className="font-semibold text-[17px] mb-2">Key Features & Benefits</h2>
    <ul className="space-y-1 ml-4">
      <li><span className="text-red-600 mr-2">▪</span>Technosynthese® formula reinforced with Motul Esters for maximum reliability</li>
      <li><span className="text-red-600 mr-2">▪</span>Smooth engine response and gear shifting for a refined driving experience</li>
      <li><span className="text-red-600 mr-2">▪</span>Optimized fuel economy and reduced internal friction</li>
      <li><span className="text-red-600 mr-2">▪</span>Extended engine life — protection up to 16,000 km depending on OEM</li>
      <li><span className="text-red-600 mr-2">▪</span>Excellent high-temperature stability for both on-road and off-road use</li>
      <li><span className="text-red-600 mr-2">▪</span>Keeps engine and clutch clean for consistent performance</li>
      <li><span className="text-red-600 mr-2">▪</span>Compatible with catalytic converters and modern emission systems</li>
    </ul>
  </section>

  {/* === Technical Properties === */}
  <section className="mb-6">
    <h2 className="font-semibold text-[17px] mb-2">Technical Properties</h2>
    <table className="w-full text-left border-collapse text-[15px]">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="py-1">Property</th>
          <th className="py-1">Test Method</th>
          <th className="py-1">Typical Value</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["SAE Grade", "—", "20W50"],
          ["Density @ 15.6°C (g/ml)", "ASTM D4052", "0.885"],
          ["Kinematic Viscosity @ 40°C (mm²/s)", "ASTM D445", "106"],
          ["Kinematic Viscosity @ 100°C (mm²/s)", "ASTM D445", "14.4"],
          ["Viscosity Index", "ASTM D2270", "140"],
          ["Pour Point (°C)", "ASTM D97", "-33"],
          ["Flash Point (°C)", "ASTM D92", "228"],
          ["Sulfated Ash (% wt)", "ASTM D874", "1.3"],
          ["Total Base Number (mgKOH/g)", "ASTM D2896", "12"],
        ].map(([prop, method, value], i) => (
          <tr key={i} className="border-b border-gray-200">
            <td className="py-1">{prop}</td>
            <td className="py-1">{method}</td>
            <td className="py-1">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>

  {/* === Available Packs === */}
  <section>
    <h2 className="font-semibold text-[17px] mb-2">Available Packs</h2>
    <p>1L | 3.5L | 5L | 7.5L | 10L | 20L | 50L | 210L Barrel</p>
  </section>
</div>

            )}

            {p.id === 5 && (
                <div className="max-w-[1700px] mx-auto font-sans text-black border-t  border-gray-300 py-8 text-[15px] leading-relaxed">
      {/* === Application === */}
      <section className="mb-6">
        <h2 className="font-semibold text-[17px] mb-2">Application:</h2>
        <p className="mb-2">
          Jaguar Advanced Fully Synthetic Engine Oil CH-4 20W50 is recommended for:
        </p>
        <ul className="space-y-1 ml-4">
          <li>
            <span className="text-red-600 mr-2">▪</span>
            Naturally aspirated and turbocharged diesel engines from leading Japanese, European, and American manufacturers.
          </li>
          <li>
            <span className="text-red-600 mr-2">▪</span>
            Heavy-duty trucks, buses, and light commercial vehicles operating in both highway and off-highway conditions.
          </li>
          <li>
            <span className="text-red-600 mr-2">▪</span>
            Off-road machinery in industries such as construction, mining, quarrying, and agriculture.
          </li>
          <li>
            <span className="text-red-600 mr-2">▪</span>
            Mixed fleet applications, including diesel and gasoline engines where CH-4 performance level is specified.
          </li>
        </ul>
      </section>

      {/* === Performance Standards === */}
      <section className="mb-6">
        <h2 className="font-semibold text-[17px] mb-2">Performance Standards</h2>
        <ul className="space-y-1 ml-4">
          <li><span className="text-red-600 mr-2">▪</span>API: CH-4</li>
          <li><span className="text-red-600 mr-2">▪</span>MB Approval: 228.3</li>
          <li><span className="text-red-600 mr-2">▪</span>Mack: EO-M Plus / EO-N</li>
          <li><span className="text-red-600 mr-2">▪</span>MTU: Oil Category 2</li>
          <li><span className="text-red-600 mr-2">▪</span>Renault Trucks: RLD-2</li>
          <li><span className="text-red-600 mr-2">▪</span>Volvo: VDS-3</li>
        </ul>
      </section>

      {/* === Key Features === */}
      <section className="mb-6">
        <h2 className="font-semibold text-[17px] mb-2">Key Features & Benefits</h2>

        <p className="font-semibold">High thermal and oxidation stability:</p>
        <p className="mb-3">Minimizes sludge formation, deposits, and viscosity thickening under high temperatures.</p>

        <p className="font-semibold">Excellent TBN reserves:</p>
        <p className="mb-3">Provides effective acid neutralization and improved deposit control for longer oil life.</p>

        <p className="font-semibold">Shear stability (Stay-in-grade performance):</p>
        <p className="mb-3">Maintains consistent viscosity and wear protection even under extreme operating conditions.</p>

        <p className="font-semibold">Advanced detergency and dispersancy:</p>
        <p className="mb-3">Keeps the engine cleaner, extending component life and ensuring smoother performance.</p>

        <p className="font-semibold">Superior soot and deposit control:</p>
        <p className="mb-3">Prevents oil thickening and ensures efficient oil circulation.</p>

        <p className="font-semibold">Excellent low-temperature properties:</p>
        <p className="mb-3">Protects the engine from cold-start wear and ensures smooth startup in winter.</p>

        <p className="font-semibold">Seal and gasket compatibility:</p>
        <p className="mb-3">Extends the life of gaskets and seals, minimizing oil leakage.</p>

        <p className="font-semibold">Meets OEM specifications:</p>
        <p>Suitable for mixed fleet operations — one oil for multiple applications.</p>
      </section>

      {/* === Technical Properties === */}
      <section className="mb-6">
        <h2 className="font-semibold text-[17px] mb-2">Technical Properties</h2>
        <table className="w-full text-left border-collapse text-[15px]">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-1">Property</th>
              <th className="py-1">Test Method</th>
              <th className="py-1">Typical Value</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["SAE Grade", "—", "20W50"],
              ["Density @ 15.6°C (g/ml)", "ASTM D4052", "0.885"],
              ["Kinematic Viscosity @ 40°C (mm²/s)", "ASTM D445", "106"],
              ["Kinematic Viscosity @ 100°C (mm²/s)", "ASTM D445", "14.4"],
              ["Viscosity Index", "ASTM D2270", "140"],
              ["Pour Point (°C)", "ASTM D97", "-33"],
              ["Flash Point (°C)", "ASTM D92", "228"],
              ["Sulfated Ash (% wt)", "ASTM D874", "1.3"],
              ["Total Base Number (mgKOH/g)", "ASTM D2896", "12"],
            ].map(([prop, method, value], i) => (
              <tr key={i} className="border-b border-gray-200">
                <td className="py-1">{prop}</td>
                <td className="py-1">{method}</td>
                <td className="py-1">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* === Available Packs === */}
      <section>
        <h2 className="font-semibold text-[17px] mb-2">Available Packs</h2>
        <p>1L | 3.5L | 5L | 7.5L | 10L | 20L | 50L | 210L Barrel</p>
      </section>
    </div>
            )}

            {p.id === 6 && (
          <section className="max-w-[1700px] mx-auto bg-white text-black p-6 md:p-10 leading-relaxed">
      {/* Application */}
      <div className="border-t  border-gray-300 py-6">
        <h2 className="font-semibold text-lg mb-4">Application:</h2>
        <p className="mb-4">
          Jaguar Heavy Duty 15W-40 API CI-4/SM is recommended for:
        </p>
        <ul className="space-y-2 pl-6">
          <li className="flex items-start">
            <span className="text-red-600 mr-2">▪</span>
            Turbocharged and naturally aspirated diesel engines.
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">▪</span>
            Heavy-duty trucks and buses operating under continuous load conditions.
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">▪</span>
            Construction, mining, and agricultural machinery used in off-highway environments.
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">▪</span>
            Mixed fleet operations, including light and heavy commercial vehicles.
          </li>
        </ul>
      </div>

      {/* Performance Standards */}
      <div className=" py-6">
        <h2 className="font-semibold text-lg mb-4">Performance Standards</h2>
        <ul className="space-y-2 pl-6">
          <li className="flex items-start">
            <span className="text-red-600 mr-2">▪</span>API: CI-4 / SM
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">▪</span>Daimler Chrysler: MB 227.0
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">▪</span>
            Meets or exceeds requirements of major global OEMs for heavy-duty diesel engines.
          </li>
        </ul>
      </div>

      {/* Key Features & Benefits */}
      <div className=" py-6">
        <h2 className="font-semibold text-lg mb-4">Key Features & Benefits</h2>

        <div className="space-y-4">
          <div>
            <p className="font-semibold">
              Excellent oxidation & thermal stability:
            </p>
            <p>
              Prevents oil thickening, reduces sludge and high-temperature deposits for prolonged engine life.
            </p>
          </div>

          <div>
            <p className="font-semibold">Outstanding anti-wear protection:</p>
            <p>
              Minimizes wear and ring sticking, ensuring smoother performance and longer engine durability.
            </p>
          </div>

          <div>
            <p className="font-semibold">Extended TBN reserve:</p>
            <p>
              Provides long-term protection against corrosion and acid build-up for extended oil life.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Enhanced detergent & dispersant properties:
            </p>
            <p>
              Keeps engine components cleaner and reduces deposit formation.
            </p>
          </div>

          <div>
            <p className="font-semibold">Superior soot and sludge control:</p>
            <p>
              Ensures cleaner combustion and better efficiency under heavy load.
            </p>
          </div>

          <div>
            <p className="font-semibold">Excellent cold start properties:</p>
            <p>
              Reduces start-up wear and ensures smooth engine operation in low temperatures.
            </p>
          </div>

          <div>
            <p className="font-semibold">Compatible with seals and gaskets:</p>
            <p>Helps reduce oil leaks and extend component life.</p>
          </div>

          <div>
            <p className="font-semibold">Multi-fleet usability:</p>
            <p>
              Suitable for both diesel and gasoline engines, simplifying mixed fleet operations.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Properties */}
      <section className="mb-6">
  <h2 className="font-semibold text-[17px] mb-2">Technical Properties</h2>
  <table className="w-full text-left border-collapse text-[15px]">
    <thead>
      <tr className="border-b border-gray-300">
        <th className="py-1">Property</th>
        <th className="py-1">Test Method</th>
        <th className="py-1">Typical Value</th>
      </tr>
    </thead>
    <tbody>
      {[
        ["SAE Grade", "—", "15W-40"],
        ["Kinematic Viscosity @ 40°C (mm²/s)", "ASTM D445", "106"],
        ["Kinematic Viscosity @ 100°C (mm²/s)", "ASTM D445", "14.6"],
        ["Viscosity Index", "ASTM D2270", "99"],
        ["Sulfated Ash (% wt)", "ASTM D874", "1.1"],
        ["Total Base Number (mgKOH/g)", "ASTM D2896", "10.1"],
        ["Pour Point (°C)", "ASTM D97", "-21"],
        ["Flash Point (°C)", "ASTM D92", "256"],
        ["Density @ 15°C (kg/l)", "ASTM D4052", "0.89"],
      ].map(([prop, method, value], i) => (
        <tr key={i} className="border-b border-gray-200">
          <td className="py-1">{prop}</td>
          <td className="py-1">{method}</td>
          <td className="py-1">{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
</section>


      {/* Available Packs */}
      <div className="py-6">
        <h2 className="font-semibold text-lg mb-4">Available Packs</h2>
        <p>1 L | 3.5 L | 5 L | 7.5 L | 10 L | 20 L | 50 L | 210 L Barrel</p>
      </div>
    </section>
            )}

            {p.id === 7 && (
             <section className="max-w-[1700px] mx-auto bg-white text-black p-6 md:p-10 leading-relaxed">
  {/* Application */}
  <div className="border-t border-gray-300 py-6">
    <h2 className="font-semibold text-lg mb-4">Application:</h2>
    <ul className="space-y-2 pl-6">
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Suitable for light to medium-duty diesel engines that require CD and CC oil categories.
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Compatible with economical gasoline engines requiring SF and SE grade motor oils.
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Recommended for engines operating in high-temperature environments or severe driving conditions.
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Ideal for fleet operators, construction vehicles, agricultural equipment, and older passenger cars.
      </li>
    </ul>
  </div>

  {/* Performance Standards */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Performance Standards</h2>
    <ul className="space-y-2 pl-6">
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>API: CI-4 / SM
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>Daimler Chrysler: MB 227.0
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Meets or exceeds requirements of major global OEMs for heavy-duty diesel engines.
      </li>
    </ul>
  </div>

  {/* Key Features & Benefits */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Key Features & Benefits</h2>

    <div className="space-y-4">
      <div>
        <p className="font-semibold">Excellent Engine Protection:</p>
        <p>Minimizes wear and tear on engine parts, extending engine life.</p>
      </div>

      <div>
        <p className="font-semibold">High Oxidation & Corrosion Resistance:</p>
        <p>Keeps engines cleaner and prevents sludge formation.</p>
      </div>

      <div>
        <p className="font-semibold">Effective Acid Neutralization:</p>
        <p>Protects vital components from harmful combustion acids.</p>
      </div>

      <div>
        <p className="font-semibold">Smooth Engine Performance:</p>
        <p>Enhances engine efficiency under both high-temperature and cold-start conditions.</p>
      </div>

      <div>
        <p className="font-semibold">Versatile Application:</p>
        <p>
          Perfect for vehicles requiring API SF/CD or CC oils for diesel and SF/SE oils for gasoline engines.
        </p>
      </div>
    </div>
  </div>

  {/* Technical Properties */}
  <section className="mb-6">
    <h2 className="font-semibold text-[17px] mb-2">Technical Properties</h2>
    <table className="w-full text-left border-collapse text-[15px]">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="py-1">Property</th>
          <th className="py-1">Test Method</th>
          <th className="py-1">Typical Value</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Appearance (Visual)", "-", "-"],
          ["Color (ASTM D-1500)", "L", "3.0"],
          ["Kinematic Viscosity @ 40°C", "ASTM D-7042", "cSt"],
          ["Kinematic Viscosity @ 100°C", "ASTM D-7042", "cSt"],
          ["Viscosity Index (min)", "ASTM D-2270", "-"],
          ["Specific Gravity @ 15°C", "ASTM D-4052", "g/cm³"],
          ["Flash Point (min)", "ASTM D-92", "°C"],
          ["Pour Point (max)", "ASTM D-97", "°C"],
          ["Total Base Number (TBN)", "ASTM D-2896", "6 mg KOH/g"],
        ].map(([prop, method, value], i) => (
          <tr key={i} className="border-b border-gray-200">
            <td className="py-1">{prop}</td>
            <td className="py-1">{method}</td>
            <td className="py-1">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>

  {/* Available Packs */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Available Packs</h2>
    <p>1 L | 3.5 L | 5 L | 7.5 L | 10 L | 20 L | 50 L | 210 L Barrel</p>
  </div>
</section>

            )}
            {p.id === 8 && (
    <section className="max-w-[1700px] mx-auto bg-white text-black p-6 md:p-10 leading-relaxed">
  {/* Application */}
  <div className="border-t border-gray-300 py-6">
    <h2 className="font-semibold text-lg mb-4">Application:</h2>
    <ul className="space-y-2 pl-6">
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Suitable for turbocharged and naturally aspirated diesel engines.
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Ideal for light and heavy-duty commercial vehicles, buses, and trucks.
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Perfect for off-highway applications such as mining, construction, and agriculture.
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Meets the requirements of vehicles and equipment recommending API CH-4 specification oils.
      </li>
    </ul>
  </div>

  {/* Specification */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Specification</h2>
    <ul className="space-y-2 pl-6">
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>API-CH-4
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>SAE Grade-20W-50
      </li>
    </ul>
  </div>

  {/* Key Features & Benefits */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Key Features & Benefits</h2>

    <div className="space-y-4">
      <div>
        <p className="font-semibold">Prolonged Engine Life:</p>
        <p>Provides superior wear protection for piston rings, cylinder liners, and valve trains.</p>
      </div>

      <div>
        <p className="font-semibold">Clean Engine Performance:</p>
        <p>Helps prevent harmful deposit build-up and keeps the engine running efficiently.</p>
      </div>

      <div>
        <p className="font-semibold">Improved Oxidation Stability:</p>
        <p>Reduces oil degradation and thickening under extreme temperatures.</p>
      </div>

      <div>
        <p className="font-semibold">Enhanced Lubrication Film:</p>
        <p>Maintains consistent oil pressure for smooth operation and fuel efficiency.</p>
      </div>

      <div>
        <p className="font-semibold">Reliable Performance:</p>
        <p>Designed to perform in both on-road and off-road diesel engines, even under heavy load.</p>
      </div>
    </div>
  </div>

  {/* Why Choose Jaguar Extra Mileage */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Why Choose Jaguar Extra Mileage?</h2>
    <p>
      With its advanced formula and long-drain performance, Jaguar Extra Mileage 15W-40 delivers excellent
      engine cleanliness, minimal wear, and maximum durability—helping you get the most mileage and
      reliability from every drop.
    </p>
  </div>

  {/* Available Packs */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Available Packs</h2>
    <p>1 L | 3.5 L | 5 L | 7.5 L | 10 L | 20 L | 50 L | 210 L Barrel</p>
  </div>
</section>


            )}
            {p.id === 9 && (
                    <section className="max-w-[1700px] mx-auto bg-white text-black p-6 md:p-10 leading-relaxed">
  {/* Application */}
  <div className="border-t border-gray-300 py-6">
    <h2 className="font-semibold text-lg mb-4">Application:</h2>
    <ul className="space-y-2 pl-6">
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Suitable for diesel and gasoline engines (turbocharged or naturally aspirated).
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Recommended for trucks, buses, construction equipment, mining machinery, and agricultural vehicles.
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Can also be used in gearboxes, torque converters, and hydraulic systems where the manufacturer specifies engine oil of this grade.
      </li>
    </ul>
  </div>

  {/* Specification */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Specification</h2>
    <ul className="space-y-2 pl-6">
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>API CF / SF / CD
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>ACEA E2
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>MB 228.0
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>MTU TYPE-1
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>Caterpillar TO-2
      </li>
    </ul>
  </div>

  {/* Key Features & Benefits */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Key Features & Benefits</h2>

    <div className="space-y-4">
      <div>
        <p className="font-semibold">Outstanding Engine Protection:</p>
        <p>Prevents wear, deposits, and sludge for longer engine life.</p>
      </div>

      <div>
        <p className="font-semibold">High Temperature Stability:</p>
        <p>Resists oxidation and maintains viscosity under extreme heat.</p>
      </div>

      <div>
        <p className="font-semibold">Enhanced Fuel Economy:</p>
        <p>Friction-reducing additives help improve fuel efficiency.</p>
      </div>

      <div>
        <p className="font-semibold">Cold Start Performance:</p>
        <p>Rapid oil circulation minimizes engine wear during cold starts.</p>
      </div>

      <div>
        <p className="font-semibold">Excellent Detergency:</p>
        <p>Keeps engine parts clean and free from harmful deposits.</p>
      </div>

      <div>
        <p className="font-semibold">All-Weather Reliability:</p>
        <p>Designed to perform in both hot and cold climates.</p>
      </div>

      <div>
        <p className="font-semibold">Extended Drain Interval:</p>
        <p>Formulated for durability, reducing oil change frequency.</p>
      </div>
    </div>
  </div>

  {/* Technical Properties */}
  <section className="mb-6">
    <h2 className="font-semibold text-[17px] mb-2">Technical Properties</h2>
    <table className="w-full text-left border-collapse text-[15px]">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="py-1">Property</th>
          <th className="py-1">Test Method</th>
          <th className="py-1">Typical Value</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Appearance", "Visual", "Clear & Bright"],
          ["Water", "Hot Plate", "Nil"],
          ["Color", "ASTM D-1500", "L3.5"],
          ["Density @29.5°C (g/cm³)", "ASTM D-4052", "0.882"],
          ["Viscosity @100°C (cSt)", "ASTM D-445", "18.9"],
          ["Viscosity @40°C (cSt)", "ASTM D-445", "165.2"],
          ["Viscosity Index", "ASTM D-2270", "125"],
          ["Pour Point (°C)", "ASTM D-97", "-15"],
          ["Flash Point (°C)", "ASTM D-92", "250"],
          ["TBN (mgKOH/g)", "ASTM D-2896", "8"],
          ["Foam Characteristics", "ASTM D-892", "0/0"],
        ].map(([prop, method, value], i) => (
          <tr key={i} className="border-b border-gray-200">
            <td className="py-1">{prop}</td>
            <td className="py-1">{method}</td>
            <td className="py-1">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>

  {/* Available Packs */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Available Packs</h2>
    <p>1 L | 3.5 L | 5 L | 7.5 L | 10 L | 20 L | 50 L | 210 L Barrel</p>
  </div>
</section>

            )}
            {p.id === 10 && (
        <section className="max-w-[1700px] mx-auto bg-white text-black p-6 md:p-10 leading-relaxed">

  {/* Application */}
  <div className="border-t border-gray-300 py-6">
    <h2 className="font-semibold text-lg mb-4">Application:</h2>
    <ul className="space-y-2 pl-6">
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Jaguar Hydraulic Oil HV ISO 68 is recommended for hydraulic systems operating under high-pressure or heavy-load conditions.
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Ideal for industrial machinery, construction equipment, plastic molding machines, and mobile hydraulics.
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Suitable for systems requiring a premium anti-wear hydraulic fluid meeting international OEM specifications.
      </li>
    </ul>
  </div>

  {/* Specifications & Approvals */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Specifications & Approvals</h2>
    <ul className="space-y-2 pl-6">
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>ASTM D6158, Eaton E-FDGN-TB002-E, Bosch Rexroth, DIN 51524 Parts 1, 2, 3
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>Parker Denison HF-0 / HF-1 / HF-2, Cincinnati/MAG IAS P-69, US Steel 127, 136
      </li>
    </ul>
  </div>

  {/* Key Features & Benefits */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Key Features & Benefits</h2>

    <div className="space-y-4">
      <div>
        <p className="font-semibold">Exceptional Anti-Wear Protection:</p>
        <p>Advanced additive system reduces metal-to-metal contact, minimizing wear in pumps, valves, and hydraulic motors.</p>
      </div>

      <div>
        <p className="font-semibold">Superior Oxidation Stability:</p>
        <p>Provides up to 5,000 hours of oxidation resistance, ensuring longer oil life and reduced maintenance costs.</p>
      </div>

      <div>
        <p className="font-semibold">Enhanced System Cleanliness:</p>
        <p>Effectively controls sludge, varnish, and deposits for improved hydraulic efficiency.</p>
      </div>

      <div>
        <p className="font-semibold">Wide Temperature Range Performance:</p>
        <p>Maintains excellent viscosity and flow in both hot and cold operating conditions.</p>
      </div>

      <div>
        <p className="font-semibold">Corrosion & Rust Protection:</p>
        <p>Guards against rust formation and component corrosion, extending system life.</p>
      </div>

      <div>
        <p className="font-semibold">Fast Air & Water Separation:</p>
        <p>Improves filtration and prevents foaming in high-pressure environments.</p>
      </div>
    </div>
  </div>

  {/* Technical Properties */}
  <section className="mb-6">
    <h2 className="font-semibold text-[17px] mb-2">Technical Properties</h2>
    <table className="w-full text-left border-collapse text-[15px]">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="py-1">Property</th>
          <th className="py-1">Test Method</th>
          <th className="py-1">Typical Value</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Viscosity @ 40°C", "ASTM D445", "69.25 cSt"],
          ["Viscosity @ 100°C", "ASTM D445", "8.95 cSt"],
          ["Viscosity Index", "ASTM D2270", "103"],
          ["Flash Point", "ASTM D92", "228°C"],
          ["Pour Point", "ASTM D5950", "-30°C"],
          ["Oxidation Stability", "ASTM D943", "5000 hours"],
          ["Zinc, wt.%", "ASTM D5185", "0.041"],
        ].map(([prop, method, value], i) => (
          <tr key={i} className="border-b border-gray-200">
            <td className="py-1">{prop}</td>
            <td className="py-1">{method}</td>
            <td className="py-1">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>

  {/* Available Packs */}
  <div className="py-6 ">
    <h2 className="font-semibold text-lg mb-4">Available Packs</h2>
    <p>5L | 20L | 60L | 208L Drums</p>
  </div>
</section>

            )}
            {p.id === 11 && (
              <section className="max-w-[1700px] mx-auto bg-white text-black p-6 md:p-10 leading-relaxed">

  {/* Application */}
  <div className="border-t border-gray-300 py-6">
    <h2 className="font-semibold text-lg mb-4">Application:</h2>
    <ul className="space-y-2 pl-6">
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Jaguar Hydraulic Oil AW ISO 100 is recommended for hydraulic systems operating under high-pressure or heavy-load conditions.
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Ideal for industrial machinery, construction equipment, plastic molding machines, and mobile hydraulics.
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Suitable for systems requiring a premium anti-wear hydraulic fluid meeting international OEM specifications.
      </li>
    </ul>
  </div>

  {/* Specifications & Approvals */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Specifications & Approvals</h2>
    <ul className="space-y-2 pl-6">
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>ASTM D6158, Eaton E-FDGN-TB002-E, Bosch Rexroth, DIN 51524 Parts 1, 2, 3
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>Parker Denison HF-0 / HF-1 / HF-2, Cincinnati/MAG IAS P-69, US Steel 127, 136
      </li>
    </ul>
  </div>

  {/* Key Features & Benefits */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Key Features & Benefits</h2>

    <div className="space-y-4">
      <div>
        <p className="font-semibold">Exceptional Anti-Wear Protection:</p>
        <p>Advanced additive system reduces metal-to-metal contact, minimizing wear in pumps, valves, and hydraulic motors.</p>
      </div>

      <div>
        <p className="font-semibold">Superior Oxidation Stability:</p>
        <p>Provides up to 5,000 hours of oxidation resistance, ensuring longer oil life and reduced maintenance costs.</p>
      </div>

      <div>
        <p className="font-semibold">Enhanced System Cleanliness:</p>
        <p>Effectively controls sludge, varnish, and deposits for improved hydraulic efficiency.</p>
      </div>

      <div>
        <p className="font-semibold">Wide Temperature Range Performance:</p>
        <p>Maintains excellent viscosity and flow in both hot and cold operating conditions.</p>
      </div>

      <div>
        <p className="font-semibold">Corrosion & Rust Protection:</p>
        <p>Guards against rust formation and component corrosion, extending system life.</p>
      </div>

      <div>
        <p className="font-semibold">Fast Air & Water Separation:</p>
        <p>Improves filtration and prevents foaming in high-pressure environments.</p>
      </div>
    </div>
  </div>

  {/* Technical Properties */}
  <section className="mb-6">
    <h2 className="font-semibold text-[17px] mb-2">Technical Properties</h2>
    <table className="w-full text-left border-collapse text-[15px]">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="py-1">Property</th>
          <th className="py-1">Test Method</th>
          <th className="py-1">Typical Value</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Viscosity @ 40°C", "ASTM D445", "100 cSt"],
          ["Viscosity @ 100°C", "ASTM D445", "11.5 cSt"],
          ["Viscosity Index", "ASTM D2270", "98"],
          ["Flash Point", "ASTM D92", "230°C"],
          ["Pour Point", "ASTM D5950", "-27°C"],
          ["Oxidation Stability", "ASTM D943", "5000 hours"],
          ["Zinc, wt.%", "ASTM D5185", "0.042"],
        ].map(([prop, method, value], i) => (
          <tr key={i} className="border-b border-gray-200">
            <td className="py-1">{prop}</td>
            <td className="py-1">{method}</td>
            <td className="py-1">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>

  {/* Available Packs */}
  <div className="py-6 ">
    <h2 className="font-semibold text-lg mb-4">Available Packs</h2>
    <p>5L | 20L | 60L | 208L Drums</p>
  </div>
</section>

            )}
            {p.id === 12 && (
           <section className="max-w-[1700px] mx-auto bg-white text-black p-6 md:p-10 leading-relaxed">

  {/* Application */}
  <div className="border-t border-gray-300 py-6">
    <h2 className="font-semibold text-lg mb-4">Application:</h2>
    <ul className="space-y-2 pl-6">
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Jaguar Gear Oil GL-4 SAE-90 is suitable for manual transmissions and transaxles in passenger cars, buses, trucks, and vans.
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Ideal for industrial and agricultural gear systems requiring GL-4 performance.
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Suitable for vehicles where the manufacturer recommends API GL-4 gear oil.
      </li>
    </ul>
  </div>

  {/* Performance Standards */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Performance Standards</h2>
    <ul className="space-y-2 pl-6">
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>API GL-4
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>MIL-L-2105
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>ZF TE-ML 02A / 17A / 19A
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>MAN 341 Type Z2
      </li>
    </ul>
  </div>

  {/* Key Features & Benefits */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Key Features & Benefits</h2>

    <div className="space-y-4">
      <div>
        <p className="font-semibold">Outstanding Gear Protection:</p>
        <p>High-quality base oils and modern additives protect gears against wear, scuffing, and pitting, even under heavy load.</p>
      </div>

      <div>
        <p className="font-semibold">Smooth Shifting Performance:</p>
        <p>Maintains consistent lubrication for smooth and quiet gear engagement in all temperatures.</p>
      </div>

      <div>
        <p className="font-semibold">Excellent Thermal Stability:</p>
        <p>Resists oxidation and oil thickening at high temperatures for longer oil life.</p>
      </div>

      <div>
        <p className="font-semibold">Corrosion & Foam Resistance:</p>
        <p>Protects against rust, oxidation, foaming, and deposit build-up that can reduce gearbox efficiency.</p>
      </div>

      <div>
        <p className="font-semibold">Extended Gear Life:</p>
        <p>Reduces metal-to-metal contact, extending the service life of gear components.</p>
      </div>

      <div>
        <p className="font-semibold">All-Season Performance:</p>
        <p>Performs reliably across a wide range of operating temperatures, ensuring protection in both hot and cold climates.</p>
      </div>
    </div>
  </div>

  {/* Available Packs */}
  <div className="py-6 ">
    <h2 className="font-semibold text-lg mb-4">Available Packs</h2>
    <p>5L | 20L | 60L | 208L Drums</p>
  </div>
</section>

            )}
            {p.id === 13 && (
                          <section className="max-w-[1700px] mx-auto bg-white text-black p-6 md:p-10 leading-relaxed">

  {/* Application */}
  <div className="border-t border-gray-300 py-6">
    <h2 className="font-semibold text-lg mb-4">Application:</h2>
    <ul className="space-y-2 pl-6">
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Jaguar Hydraulic Oil AW ISO 100 is recommended for hydraulic systems operating under high-pressure or heavy-load conditions.
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Ideal for industrial machinery, construction equipment, plastic molding machines, and mobile hydraulics.
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>
        Suitable for systems requiring a premium anti-wear hydraulic fluid meeting international OEM specifications.
      </li>
    </ul>
  </div>

  {/* Specifications & Approvals */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Specifications & Approvals</h2>
    <ul className="space-y-2 pl-6">
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>ASTM D6158, Eaton E-FDGN-TB002-E, Bosch Rexroth, DIN 51524 Parts 1, 2, 3
      </li>
      <li className="flex items-start">
        <span className="text-red-600 mr-2">▪</span>Parker Denison HF-0 / HF-1 / HF-2, Cincinnati/MAG IAS P-69, US Steel 127, 136
      </li>
    </ul>
  </div>

  {/* Key Features & Benefits */}
  <div className="py-6">
    <h2 className="font-semibold text-lg mb-4">Key Features & Benefits</h2>

    <div className="space-y-4">
      <div>
        <p className="font-semibold">Exceptional Anti-Wear Protection:</p>
        <p>Advanced additive system reduces metal-to-metal contact, minimizing wear in pumps, valves, and hydraulic motors.</p>
      </div>

      <div>
        <p className="font-semibold">Superior Oxidation Stability:</p>
        <p>Provides up to 5,000 hours of oxidation resistance, ensuring longer oil life and reduced maintenance costs.</p>
      </div>

      <div>
        <p className="font-semibold">Enhanced System Cleanliness:</p>
        <p>Effectively controls sludge, varnish, and deposits for improved hydraulic efficiency.</p>
      </div>

      <div>
        <p className="font-semibold">Wide Temperature Range Performance:</p>
        <p>Maintains excellent viscosity and flow in both hot and cold operating conditions.</p>
      </div>

      <div>
        <p className="font-semibold">Corrosion & Rust Protection:</p>
        <p>Guards against rust formation and component corrosion, extending system life.</p>
      </div>

      <div>
        <p className="font-semibold">Fast Air & Water Separation:</p>
        <p>Improves filtration and prevents foaming in high-pressure environments.</p>
      </div>
    </div>
  </div>

  {/* Technical Properties */}
  <section className="mb-6">
    <h2 className="font-semibold text-[17px] mb-2">Technical Properties</h2>
    <table className="w-full text-left border-collapse text-[15px]">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="py-1">Property</th>
          <th className="py-1">Test Method</th>
          <th className="py-1">Typical Value</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Viscosity @ 40°C", "ASTM D445", "100 cSt"],
          ["Viscosity @ 100°C", "ASTM D445", "11.5 cSt"],
          ["Viscosity Index", "ASTM D2270", "98"],
          ["Flash Point", "ASTM D92", "230°C"],
          ["Pour Point", "ASTM D5950", "-27°C"],
          ["Oxidation Stability", "ASTM D943", "5000 hours"],
          ["Zinc, wt.%", "ASTM D5185", "0.042"],
        ].map(([prop, method, value], i) => (
          <tr key={i} className="border-b border-gray-200">
            <td className="py-1">{prop}</td>
            <td className="py-1">{method}</td>
            <td className="py-1">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>

  {/* Available Packs */}
  <div className="py-6  border-gray-300">
    <h2 className="font-semibold text-lg mb-4">Available Packs</h2>
    <p>5L | 20L | 60L | 208L Drums</p>
  </div>
</section>
            )}
          </div>
        </div>
      </section>
      <section
        className="relative mb-[50px] bg-black bg-cover bg-center py-20 px-6 md:px-10 text-white"
        style={{ backgroundImage: `url(${Phuter})` }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/5"></div>

        <div className="relative max-w-[1600px] mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Left Side */}
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-yellow-400 text-6xl">
                <img
                  src={LocationIcon}
                  className="w-[70px]"
                  alt="Location Icon"
                />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-normal leading-snug">
              Fill out the form below to become an <br />
              <span className="font-bold text-white">
                Authorized Dealer
              </span> of{" "}
              <span className="font-bold text-yellow-400">
                Jaguar Lubricants
              </span>
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed">
              <span className="font-bold text-white">Jaguar Lubricants</span> is
              committed to building strong, trustworthy, and sustainable
              business relationships with each of its dealers.
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Our goal is to establish a new benchmark of{" "}
              <span className="font-semibold text-yellow-400">
                quality, durability, and reliability
              </span>{" "}
              in Bangladesh’s lubricant industry.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center py-4 rounded-md mt-40  text-white space-y-3 md:space-y-0 md:space-x-8">
              {/* Left – Emergency */}
              <div className="text-center md:text-left space-y-1">
                <h3 className="text-base font-semibold text-yellow-400">
                  Emergency
                </h3>
                <p className="text-sm font-medium text-gray-300">
                  +8801788360303
                </p>
              </div>

              {/* Center – Call Icon */}
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
                    className="w-[22px] h-[22px]"
                  />
                </a>
              </div>

              {/* Right – Email */}
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
          <div
            className="bg-[#1A1A1A]/70 backdrop-blur-md border border-white/10 
  rounded-xl p-8 md:w-[420px] shadow-[0_4px_30px_rgba(0,0,0,0.5)] 
  mx-auto mt-10  "
          >
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
              Request a Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-100 text-black focus:outline-none"
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Your Phone Number"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-100 text-black focus:outline-none"
                required
              />

              <div className="flex space-x-3">
                <select
                  name="dealer"
                  value={formData.dealer}
                  onChange={handleChange}
                  className="w-1/2 p-3 rounded-md bg-gray-100 text-black focus:outline-none"
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
                  className="w-1/2 p-3 rounded-md bg-gray-100 text-black focus:outline-none"
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
  );
};

export default MotulDetails;
