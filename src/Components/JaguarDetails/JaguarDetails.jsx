import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import logo2 from "../../assets/Fixit-Group-Logo-Red-and-White.png";
import drfixitLogo from "../../assets/Dr-Fixit-Logo.png";
import emailjs from "emailjs-com";
import callIcon from "../../assets/Call-Icon-Green.png";
import LocationIcon from "../../assets/Location-Man-Icon.png";
import jaguarLogo from "../../assets/Jaguar-logo.png";
import Phuter from "../../assets/Phuter.png";

import product1 from "../../assets/JAGUAR-4T-Motor-Engine-Oil-SM.png";
import product2 from "../../assets/JAGUAR-4T-Motor-Engine-Oil-SN.png";
import product3 from "../../assets/JAGUAR-High-Performance-Gasoline-CNG-Engine-Oil-01.png";
import product4 from "../../assets/JAGUAR-Multi-Grade-Engine-Oil.png";
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
  title: "JAGUAR 20W-40 4T / 20W-50 4T",
  brand: "Jaguar",
  category: "Motor Cycle Engine Oil (Motor Engine Oil)",
  capacity: "1 Liter",
  saeGrade: "20W-40",
  apiSpecification: "SM JASO MA2",
  madeIn: "UEA",
  subtitle: "Jaguar 20W-40 - Premium Four-Stroke Motorcycle Engine Oil",
  description1:
    "Jaguar 20W-40 is a high-performance motorcycle engine oil specially formulated for modern four-stroke engines. Developed with advanced additive technology and highly refined mineral base oils, it ensures superior engine protection, smooth clutch performance, and extended engine life.",
  description2:
    "While optimized for the latest engine technology, Jaguar 20W-40 also provides excellent protection for older motorcycle engines, perfectly matching evolving engine technology trends from leading OEMs. Its heat-activated anti-wear molecules™ protect the engine instantly from start-up to high-temperature, long-distance rides.",
  availablePackaging: "1 Liter",
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
    title:
      "Jaguar Perfect CNG 20W-50 - Premium Synthetic-Technology Engine Oil",
    brand: "Jaguar",
    category: "CNG Engine Oil, (Gasoline Engine Oil)",
     capacity: "2 Liter",
  saeGrade: "20W-40",
  apiSpecification: "SL",
  madeIn: "UEA",
    subtitle: "Jaguar, CNG Oil 2L, 20W-50Engine Oil API-SL/CF-2L, Semi Synthetic",
    description1:
      "Jaguar Perfect CNG 20W-50 is a premium synthetic-technology engine oil designed for CNG, LPG, petrol, and diesel engines. Formulated with advanced Friction-Shield TechnologyTM, it pro-vides superior engine wear protection, reduces friction, and en-sures long-lasting engine life.",
    description2: "This high-performance oil delivers excellent cleanliness, oxida-tion stability, and high-temperature protection, making it ideal for vehicles that operate in hot or severe driving conditions. Wheth-er you drive a CNG car, van, or light truck, Jaguar Perfect CNG 20W-50 keeps your engine running smoother and cleaner every day.",
      availablePackaging: "2 litre",
    image: product3,
  },

{
  id: 4,
  title: "Jaguar Premium Multi-Grade Engine Oil",
  brand: "Jaguar",
  category: "Fully Synthetic Engine Oil for Cars & Motorcycles",
  capacity: "4 Liters",
  saeGrade: "20W-50",
  apiSpecification: " SM",
  madeIn: "UAE",
  
  description1:
    "Jaguar Premium Multi-Grade Engine Oil SAE 20W-50 is a fully synthetic, high-performance engine oil engineered to deliver superior wear protection, cleaner performance, and longer engine life. Designed for modern petrol and diesel engines, this advanced formula ensures excellent lubrication even under extreme heat and heavy-load driving conditions.",
  description2:
    "The fully synthetic base oils combined with anti-wear and detergent additives provide exceptional film strength, reduce friction, and keep engine components clean for smoother performance and extended oil drain intervals.",
  description3:
    "Whether you drive a car, SUV, or motorcycle, Jaguar 20W-50 API SM offers reliable, long-lasting protection and consistent power delivery for your engine.",

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
    description:
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
   
  
    image: product12, // ensure this is your correct rust remover image import
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

const JaguarDetails = ({}) => {
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
      {/* =========================== */}
      <section className="relative z-[-9999] border-b border-gray-200 bg-white py-10 px-10 md:px-48 flex flex-col md:flex-row items-center justify-between">
        {/* Left text */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-4">
          <p className="text-lg md:text-xl text-black">
            Business / <span className="font-bold">Jaguar Lubricants</span>
          </p>
          <span className="hidden md:block w-[2px] h-9 bg-black"></span>
          <p className="text-gray-800 text-base md:text-lg leading-tight">
            High-Performance Engine Oil in Bangladesh
            <br className="hidden md:block" /> Imported from UAE
          </p>
        </div>

        {/* Right logo */}
        <div className="mt-4 md:mt-0">
          <img
            src={jaguarLogo}
            alt="Jaguar Logo"
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
<div className="h-[580px] w-[500px] rounded-2xl shadow-sm p-4 flex items-center justify-center overflow-hidden ">
  <img src={p.image} alt={p.title} className="max-w-full max-h-full object-contain" />
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
  <div className="space-y-2 text-gray-800 md:pl-10 lg:pl-0">
    {/* Title */}
    <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold text-gray-900">
      {p.title}
    </h2>

    {/* Product Info */}
    <div className="lg:pt-[10px] space-y-1">
      <p className="text-base md:text-lg">
        <span className="font-bold text-gray-900">Brand:</span> {p.brand}
      </p>
      <p className="text-base md:text-lg">
        <span className="font-bold text-gray-900">Category:</span> {p.category}
      </p>
      <p className="text-base md:text-lg">
        <span className="font-bold text-gray-900">Capacity:</span> {p.capacity}
      </p>
      <p className="text-base md:text-lg">
        <span className="font-bold text-gray-900">SAE Grade:</span> {p.saeGrade}
      </p>
      <p className="text-base md:text-lg">
        <span className="font-bold text-gray-900">API Specification:</span>{" "}
        {p.apiSpecification}
      </p>
      <p className="text-base md:text-lg">
        <span className="font-bold text-gray-900">Made In:</span> {p.madeIn}
      </p>
      <p className="text-base md:text-lg">
                    <span className="font-semibold">Quantity:</span>{" "}
                    {p.quantity}
                  </p>
                    <p className="text-base md:text-lg">
                  <span className="font-semibold">Availability:</span>{" "}
                  <span className="text-green-600 font-medium">In Stock</span>
                </p>
    </div>

    {/* Description */}
    <div className="pt-4">
      <h3 className="text-xl md:text-[22px] font-bold mb-5">{p.subtitle}</h3>
      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-2">
        {p.description1}
      </p>
      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        {p.description2}
      </p>
      <p className="text-base md:text-lg mt-2 text-gray-700 leading-relaxed">
        {p.description3}
      </p>
      <p className="text-base md:text-lg text-gray-700 leading-relaxed pt-2">
        <span className="font-bold text-gray-900">Available Packaging:</span>{" "}
        {p.availablePackaging}
      </p>
    </div>
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
              <section className="py-20 px-8 md:px-13 mx-auto text-gray-800">
                {/* Header */}
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Dr. Fixit LW+ 101 (1 Litre)
                  </h1>
                  <p className="text-lg md:text-xl">
                    Integral liquid waterproofing compound designed to enhance
                    concrete strength, reduce permeability, and ensure long-term
                    durability in all types of structures.
                  </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-10">
                  {/* Key Benefits */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Key Benefits
                    </h2>
                    <ul className="list-disc list-inside text-lg md:text-xl space-y-3">
                      <li>
                        <span className="font-semibold">
                          Improved Concrete Strength:
                        </span>{" "}
                        Water reduction improves compressive strength and
                        long-term durability.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Enhanced Waterproofing:
                        </span>{" "}
                        Reduces concrete porosity to prevent leaks and dampness.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Increased Workability:
                        </span>{" "}
                        Improves ease of placement without compromising
                        strength.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Reduced Shrinkage:
                        </span>{" "}
                        Minimizes cracking and surface shrinkage for better
                        finish.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Better Durability:
                        </span>{" "}
                        Resists damage from environmental exposure and chemical
                        attacks.
                      </li>
                      <li>
                        <span className="font-semibold">Cost Efficiency:</span>{" "}
                        Reduces maintenance cost with improved life of concrete.
                      </li>
                    </ul>
                  </div>

                  {/* Dosage */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Dosage
                    </h2>
                    <p className="text-lg md:text-xl">
                      Use <span className="font-semibold">200 ml</span> of Dr.
                      Fixit LW+ 101 for every{" "}
                      <span className="font-semibold">50 kg</span> bag of
                      cement. Mix properly for best waterproofing and strength
                      results.
                    </p>
                  </div>

                  {/* Shelf Life */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Shelf Life
                    </h2>
                    <p className="text-lg md:text-xl">
                      Best before <span className="font-semibold">2 years</span>{" "}
                      from date of manufacture when stored in sealed packaging.
                    </p>
                  </div>

                  {/* Storage */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Storage
                    </h2>
                    <p className="text-lg md:text-xl">
                      Store in a cool, dry place away from direct sunlight and
                      heat.
                    </p>
                  </div>

                  {/* Applications */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Applications
                    </h2>
                    <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
                      <li>Foundations and basements</li>
                      <li>RCC roofs, slabs, and terraces</li>
                      <li>Columns and beams</li>
                      <li>Tunnels and bridges</li>
                      <li>Water-retaining structures</li>
                      <li>Plastering for internal & external walls</li>
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {p.id === 2 && (
              <section className=" py-20 px-6">
                <div className="max-w-[1700px] mx-auto text-gray-800 leading-relaxed">
                  {/* Header */}
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-start">
                    Dr Fixit Brand 302 Super Latex
                  </h2>

                  {/* Description */}
                  <p className="text-lg md:text-xl mb-8">
                    <span className="font-semibold">
                      Dr. Fixit 302 Super Latex
                    </span>{" "}
                    is a high-performance polymer-based waterproofing and
                    bonding agent specially designed to improve adhesion,
                    flexibility, and durability of cement-based mixes. It is
                    ideal for use in waterproof coatings, bonding coats, and
                    repair mortars.
                  </p>

                  {/* Applications */}
                  <div className="space-y-8">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                      Applications
                    </h3>
                    <p className="text-lg md:text-xl">
                      It can be used effectively in the following applications:
                    </p>

                    <div className="space-y-6 pl-4 border-l-4 border-yellow-400">
                      <div>
                        <h4 className="text-2xl font-semibold text-gray-900">
                          • Waterproof Coating:
                        </h4>
                        <p className="text-lg">
                          Mix Dr. Fixit 302 Super Latex with cement in a 1:2
                          ratio (Latex : Cement) to form a brushable slurry.
                          Apply this coating over concrete slabs, terraces, and
                          roofs to provide a durable waterproof barrier.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-2xl font-semibold text-gray-900">
                          • Bond Coat for Old and New Concrete:
                        </h4>
                        <p className="text-lg">
                          Prepare a bonding coat by mixing Dr. Fixit 302 Super
                          Latex with cement in a 1:1 ratio. Apply it between old
                          and new concrete or plaster surfaces to ensure
                          excellent adhesion and strength.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-2xl font-semibold text-gray-900">
                          • Repair Mortars:
                        </h4>
                        <p className="text-lg">
                          Add Dr. Fixit 302 Super Latex to cement–sand mortar to
                          improve bond strength, flexibility, and water
                          resistance — ideal for patch repairs, resurfacing, and
                          spalled concrete restoration.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mt-16 space-y-6">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      Benefits of Dr. Fixit 302 Super Latex
                    </h3>
                    <p className="text-lg">
                      Dr. Fixit 302 Super Latex is a high-quality co-polymer
                      latex liquid that provides excellent bonding,
                      waterproofing, and durability to cement-based mixes. Its
                      versatile formulation makes it ideal for multiple
                      construction and repair applications.
                    </p>

                    <ul className="list-disc pl-8 text-lg">
                      <li>Floors and slabs</li>
                      <li>Columns and beams</li>
                      <li>Chhajjas and balconies</li>
                      <li>Waterproofing of toilets and bathrooms</li>
                      <li>Small terraces and concrete surfaces</li>
                    </ul>
                  </div>

                  {/* Coverage */}
                  <div className="mt-16 space-y-6">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      Coverage
                    </h3>
                    <p className="text-lg">
                      The recommended coverage of Dr. Fixit 302 Super Latex
                      varies depending on its application type:
                    </p>

                    <ul className="list-disc pl-8 text-lg space-y-2">
                      <li>
                        <span className="font-semibold">
                          Waterproof Coating:
                        </span>{" "}
                        Approximately 2–2.2 m²/kg for 2 coats when mixed in 1:2
                        ratio.
                      </li>
                      <li>
                        <span className="font-semibold">Mortar Modifier:</span>{" "}
                        Use 6–7.5 kg per 50 kg bag of cement to enhance bond
                        strength and flexibility.
                      </li>
                      <li>
                        <span className="font-semibold">Bonding Agent:</span>{" "}
                        Coverage is about 4.2-4.5 m²/kg per coat depending on
                        surface condition.
                      </li>
                    </ul>
                    <p className="text-gray-700 text-base italic">
                      *Actual coverage may vary slightly based on surface
                      texture, application method, and site environment.*
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div className="mt-16 space-y-6">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      Key Benefits
                    </h3>
                    <ol className="list-decimal pl-8 text-lg space-y-2">
                      <li>
                        Forms a strong bond between old and new concrete or
                        plaster surfaces.
                      </li>
                      <li>
                        Prevents dampness and water penetration through treated
                        surfaces.
                      </li>
                      <li>
                        Serves as a multipurpose waterproofing and bonding
                        solution.
                      </li>
                      <li>
                        Enhances the water resistance and durability of repair
                        mortars.
                      </li>
                      <li>
                        Reduces shrinkage cracks, ensuring longer-lasting
                        repairs and coatings.
                      </li>
                    </ol>
                  </div>

                  {/* Uses */}
                  <div className="mt-16 space-y-8">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      Uses of Dr. Fixit 302 Super Latex
                    </h3>
                    <ul className="list-disc pl-8 text-lg space-y-2">
                      <li>
                        <span className="font-semibold">
                          Waterproof Coating:
                        </span>{" "}
                        Improves water resistance when mixed with cement and
                        applied as a coating on concrete surfaces, roofs, and
                        terraces.
                      </li>
                      <li>
                        <span className="font-semibold">Bonding Agent:</span>{" "}
                        Ensures strong adhesion between old and new concrete or
                        plaster surfaces.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Repair Mix Modifier:
                        </span>{" "}
                        Enhances durability, strength, and flexibility of repair
                        mortar or concrete, while minimizing cracks and
                        improving surface finish.
                      </li>
                    </ul>
                  </div>

                  {/* SBR Waterproofing */}
                  <div className="mt-16 space-y-8">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      SBR Waterproofing with Dr. Fixit 302 Super Latex
                    </h3>
                    <p className="text-lg">
                      Dr. Fixit 302 Super Latex is a premium Styrene Butadiene
                      Rubber (SBR) latex that provides long-lasting
                      waterproofing, bonding, and durability. When added to
                      cement, it enhances water resistance, flexibility, and
                      strength of concrete, mortar, and plaster.
                    </p>

                    <h4 className="text-2xl font-semibold text-gray-900">
                      Uses and Benefits:
                    </h4>
                    <ul className="list-disc pl-8 text-lg space-y-2">
                      <li>
                        <span className="font-semibold">
                          Waterproof Coating:
                        </span>{" "}
                        Forms a seamless waterproof barrier protecting roofs,
                        terraces, and slabs from seepage.
                      </li>
                      <li>
                        <span className="font-semibold">Bonding Agent:</span>{" "}
                        Acts as a strong adhesive bridge between old and new
                        concrete or plaster.
                      </li>
                      <li>
                        <span className="font-semibold">
                          Repair & Strengthening:
                        </span>{" "}
                        Enhances strength, flexibility, and crack resistance of
                        repair mortars and concrete.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {p.id === 3 && (
              <section className="py-20 px-6">
                <div className="max-w-[1700px] mx-auto text-gray-800 leading-relaxed">
                  {/* Header */}
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-start">
                    Dr Fixit Brand LW 101
                  </h2>

                  {/* Introduction */}
                  <p className="text-lg md:text-xl mb-8">
                    <span className="font-semibold">
                      Dr. Fixit Dr.proof LW+
                    </span>{" "}
                    is a high-performance integral liquid waterproofing compound
                    that improves the strength, durability, and waterproofing
                    efficiency of concrete and plaster. Follow these steps to
                    ensure the best results during construction:
                  </p>

                  {/* Application Steps */}
                  <div className="space-y-6 pl-4 border-l-4 border-yellow-400">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                      Application Steps:
                    </h3>

                    <ol className="list-decimal pl-8 text-lg space-y-2">
                      <li>
                        Mix cement, sand, and aggregates in proper proportion
                        with 2/3rd of the total mixing water.
                      </li>
                      <li>
                        Mix Dr. Fixit Dr.proof LW+ with the remaining 1/3rd
                        portion of mixing water, and then add this mixture to
                        the premixed concrete or mortar.
                      </li>
                      <li>
                        Mix thoroughly until a uniform and cohesive consistency
                        is achieved.
                      </li>
                      <li>
                        Maintain the Water–Cement Ratio below 0.5 to achieve
                        higher durability and strength in concrete or mortar.
                      </li>
                    </ol>

                    <p className="text-lg mt-4">
                      For the best performance, always use Dr. Fixit Dr.proof
                      LW+ in plastering, RCC works, and other concrete
                      applications to achieve long-lasting waterproofing and
                      crack resistance.
                    </p>
                  </div>

                  {/* Recommended Areas */}
                  <div className="mt-16 space-y-6">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      Recommended Areas of Application:
                    </h3>
                    <p className="text-lg">
                      Dr. Fixit Dr.proof LW+ is suitable for use in:
                    </p>

                    <ul className="list-disc pl-8 text-lg space-y-2">
                      <li>Roof slabs</li>
                      <li>Columns and beams</li>
                      <li>Footings and foundations</li>
                      <li>RCC water-retaining structures</li>
                      <li>Internal and external wall plastering</li>
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mt-16 space-y-6">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      Key Benefits of Using Dr. Fixit Dr.proof LW+
                    </h3>

                    <ol className="list-decimal pl-8 text-lg space-y-2">
                      <li>
                        Enhances the cohesiveness of concrete for improved
                        durability.
                      </li>
                      <li>
                        Provides superior protection to steel reinforcement
                        against corrosion.
                      </li>
                      <li>Effectively prevents dampness and water seepage.</li>
                      <li>Minimizes plaster shrinkage, reducing cracks.</li>
                      <li>
                        Improves the overall strength and workability of mortar.
                      </li>
                    </ol>

                    <p className="text-gray-700 italic text-base">
                      *For more information on the features and benefits, refer
                      to the official technical data sheet.*
                    </p>
                  </div>

                  {/* Performance Details */}
                  <div className="mt-16 space-y-6">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      Performance Enhancements
                    </h3>

                    <div className="space-y-4 pl-4 border-l-4 border-yellow-400">
                      <div>
                        <h4 className="text-2xl font-semibold text-gray-900">
                          Increased Workability:
                        </h4>
                        <p className="text-lg">
                          Dr. Fixit Dr.proof LW+ enhances the flow and ease of
                          concrete placement without affecting its strength,
                          ensuring efficient and consistent construction
                          results.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-2xl font-semibold text-gray-900">
                          Reduced Shrinkage and Cracking:
                        </h4>
                        <p className="text-lg">
                          The optimized water content helps minimize shrinkage
                          and surface cracks, reducing long-term maintenance and
                          repair costs.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dosage */}
                  <div className="mt-16 space-y-6">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      Dosage
                    </h3>
                    <p className="text-lg">
                      Use <span className="font-semibold">200 ml</span> of Dr.
                      Fixit Dr.proof LW+ for every 50 kg bag of cement.
                    </p>
                  </div>

                  {/* Mixing Ratio */}
                  <div className="mt-16 space-y-6">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      Mixing Ratio
                    </h3>
                    <p className="text-lg">
                      For optimal waterproofing results, mix Dr. Fixit Dr.proof
                      LW+ at{" "}
                      <span className="font-semibold">
                        200 ml per 50 kg bag of cement.
                      </span>{" "}
                      This integral waterproofing admixture improves concrete
                      durability, minimizes cracks, and protects against
                      moisture - making it the ideal choice for long-lasting
                      waterproof concrete applications.
                    </p>
                  </div>
                </div>
              </section>
            )}
            {p.id === 4 && (
              <section className="py-20 px-6">
                <div className="max-w-[1700px] mx-auto text-gray-800 leading-relaxed">
                  {/* Header */}
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-start">
                    Dr Fixit 302 Super Latex (30kg)
                  </h2>

                  {/* Introduction */}
                  <div className="space-y-8 pl-4 border-l-4 border-yellow-400">
                    <p className="text-lg md:text-xl">
                      <span className="font-semibold">
                        Dr. Fixit 302 Super Latex
                      </span>{" "}
                      is a Styrene Butadiene Rubber (SBR) based waterproofing
                      and bonding agent designed for use with cement for
                      concrete and mortar repair. It enhances adhesion,
                      flexibility, and water resistance, ensuring long-lasting
                      durability in construction and repair applications.
                    </p>

                    <p className="text-lg md:text-xl">
                      This polymer latex is ideal for applications such as
                      waterproof coatings, bonding old and new concrete, patch
                      repairs, and protective coatings for slabs, terraces, and
                      bathrooms.
                    </p>
                  </div>

                  {/* Recommended Areas of Application */}
                  <div className="mt-16 space-y-6">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      Recommended Areas of Application
                    </h3>
                    <ul className="list-disc pl-8 text-lg md:text-xl space-y-2">
                      <li>Waterproofing of bathrooms, terraces, and roofs</li>
                      <li>Bonding coat for old and new concrete or plaster</li>
                      <li>Repair mortar and concrete modification</li>
                      <li>Chhajjas, balconies, and slabs</li>
                      <li>Protective coating for RCC structures</li>
                    </ul>
                  </div>

                  {/* Application Method */}
                  <div className="mt-16 space-y-8">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      Application Method
                    </h3>
                    <ol className="list-decimal pl-8 text-lg md:text-xl space-y-3">
                      <li>
                        Clean the surface to remove dust, oil, grease, or loose
                        particles.
                      </li>
                      <li>
                        Mix{" "}
                        <span className="font-semibold">
                          Dr. Fixit 302 Super Latex
                        </span>{" "}
                        with cement in the ratio of{" "}
                        <span className="font-semibold">
                          1:2 (Latex : Cement)
                        </span>{" "}
                        to form a smooth, brushable slurry.
                      </li>
                      <li>
                        Apply two coats of the slurry with a brush, keeping an
                        interval of{" "}
                        <span className="font-semibold">4-6 hours</span> between
                        coats.
                      </li>
                      <li>
                        For bonding coats, mix in{" "}
                        <span className="font-semibold">
                          1:1 (Latex : Cement)
                        </span>{" "}
                        ratio and apply before new concrete placement.
                      </li>
                      <li>
                        For repair mortars, add{" "}
                        <span className="font-semibold">10–15% Latex</span> by
                        weight of cement for enhanced adhesion and strength.
                      </li>
                    </ol>
                  </div>

                  {/* Coverage */}
                  <div className="mt-16 space-y-4">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      Coverage
                    </h3>
                    <ul className="list-disc pl-8 text-lg md:text-xl space-y-2">
                      <li>
                        <span className="font-semibold">
                          Waterproof coating:
                        </span>{" "}
                        2-2.2 m²/kg for 2 coats (1:2 ratio)
                      </li>
                      <li>
                        <span className="font-semibold">Bonding coat:</span>{" "}
                        4-4.5 m²/kg per coat (1:1 ratio)
                      </li>
                      <li>
                        <span className="font-semibold">
                          Repair mortar modifier:
                        </span>{" "}
                        6-7.5 kg per 50 kg of cement
                      </li>
                    </ul>
                    <p className="text-gray-700 text-base italic">
                      *Coverage may vary depending on surface texture and site
                      conditions.*
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div className="mt-16 space-y-4">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      Key Benefits
                    </h3>
                    <ol className="list-decimal pl-8 text-lg md:text-xl space-y-3">
                      <li>
                        Provides excellent bonding between old and new concrete
                        or plaster.
                      </li>
                      <li>
                        Prevents water seepage and dampness through treated
                        surfaces.
                      </li>
                      <li>
                        Enhances flexibility and tensile strength of cement
                        mortar.
                      </li>
                      <li>
                        Reduces shrinkage cracks and increases durability.
                      </li>
                      <li>
                        Improves resistance to chemicals and corrosion in RCC
                        structures.
                      </li>
                    </ol>
                  </div>

                  {/* Dosage */}
                  <div className="mt-16 space-y-4">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      Dosage
                    </h3>
                    <p className="text-lg md:text-xl">
                      Use <span className="font-semibold">6–7.5 kg</span> of Dr.
                      Fixit 302 Super Latex per{" "}
                      <span className="font-semibold">50 kg</span> of cement
                      when used as a modifier. Adjust ratios according to use
                      type as recommended above.
                    </p>
                  </div>

                  {/* SBR Waterproofing Section */}
                  <div className="mt-16 space-y-4">
                    <h3 className="text-3xl font-semibold text-gray-900">
                      SBR Waterproofing Advantages
                    </h3>
                    <p className="text-lg md:text-xl">
                      Being an SBR-based polymer, Dr. Fixit 302 Super Latex
                      forms a flexible, seamless, and durable waterproof
                      barrier. It protects concrete from cracks, seepage, and
                      deterioration caused by water ingress.
                    </p>
                    <ul className="list-disc pl-8 text-lg md:text-xl space-y-2">
                      <li>Provides long-lasting waterproof protection</li>
                      <li>Enhances structural bonding and strength</li>
                      <li>Ideal for repairing damaged concrete surfaces</li>
                      <li>Minimizes future maintenance and leakage issues</li>
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {p.id === 5 && (
              <section className="py-20 px-8 md:px-13 mx-auto text-gray-800">
                {/* Header */}
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Dr. Fixit LW+ 101 (18 Litre)
                  </h1>
                  <p className="text-lg md:text-xl">
                    High-performance integral liquid waterproofing compound for
                    concrete and plaster that enhances strength, durability, and
                    long-term protection against water seepage.
                  </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-10">
                  {/* Application Steps */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Application Method
                    </h2>
                    <p className="text-lg md:text-xl mb-4">
                      Dr. Fixit LW+ 101 should be mixed properly with cement,
                      sand, and aggregates for best performance. Follow these
                      steps during concrete or plaster preparation:
                    </p>
                    <ol className="list-decimal list-inside space-y-3 text-lg md:text-xl">
                      <li>
                        Mix cement, sand, and aggregates in proper proportion
                        with <span className="font-semibold">2/3rd</span> of the
                        total mixing water.
                      </li>
                      <li>
                        Mix Dr. Fixit LW+ with the remaining{" "}
                        <span className="font-semibold">1/3rd portion</span> of
                        water and add this to the premixed concrete or mortar.
                      </li>
                      <li>
                        Mix thoroughly until a uniform and cohesive consistency
                        is achieved.
                      </li>
                      <li>
                        Maintain the{" "}
                        <span className="font-semibold">
                          water–cement ratio
                        </span>{" "}
                        below <span className="font-semibold">0.5</span> to
                        achieve better durability and strength.
                      </li>
                    </ol>
                  </div>

                  {/* Recommended Areas */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Recommended Areas of Application
                    </h2>
                    <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
                      <li>Roof slabs and terraces</li>
                      <li>Columns, beams, and footings</li>
                      <li>Foundations and basements</li>
                      <li>RCC water-retaining structures</li>
                      <li>Internal and external wall plastering</li>
                    </ul>
                  </div>

                  {/* Workability */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Increased Workability
                    </h2>
                    <p className="text-lg md:text-xl">
                      Enhances the flow and ease of concrete placement without
                      affecting strength, ensuring smooth, cohesive, and
                      consistent mixes.
                    </p>
                  </div>

                  {/* Shrinkage Control */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Reduced Shrinkage and Cracking
                    </h2>
                    <p className="text-lg md:text-xl">
                      Optimized water content minimizes shrinkage and surface
                      cracks, reducing maintenance and improving structure
                      lifespan.
                    </p>
                  </div>

                  {/* Dosage */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Dosage
                    </h2>
                    <p className="text-lg md:text-xl">
                      Use <span className="font-semibold">200 ml</span> of Dr.
                      Fixit LW+ 101 for every{" "}
                      <span className="font-semibold">50 kg</span> bag of cement
                      for best waterproofing and strength performance.
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Key Benefits
                    </h2>
                    <ul className="list-disc list-inside text-lg md:text-xl space-y-3">
                      <li>Improves cohesion and workability of concrete.</li>
                      <li>
                        Provides superior protection to steel reinforcement
                        against corrosion.
                      </li>
                      <li>Effectively prevents dampness and water seepage.</li>
                      <li>Minimizes plaster shrinkage and cracking.</li>
                      <li>
                        Improves overall strength and durability of mortar and
                        concrete.
                      </li>
                    </ul>
                  </div>

                  {/* Mixing Ratio */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Mixing Ratio
                    </h2>
                    <p className="text-lg md:text-xl">
                      Mix <span className="font-semibold">200 ml</span> of Dr.
                      Fixit LW+ 101 per{" "}
                      <span className="font-semibold">50 kg</span> bag of
                      cement. This ensures improved waterproofing, minimizes
                      cracks, and enhances durability for long-lasting concrete
                      applications.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {p.id === 6 && (
              <section className="py-20 px-8 md:px-13 mx-auto text-gray-800">
                {/* Heading */}
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Dr. Fixit 302 Super Latex
                  </h1>
                  <p className="text-lg md:text-xl">
                    Premium SBR (Styrene Butadiene Rubber) Latex for
                    waterproofing, bonding, and enhancing durability of
                    cement-based mixes.
                  </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-10">
                  {/* Application Section */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Application
                    </h2>
                    <p className="mb-4">
                      Dr. Fixit 302 Super Latex is ideal for waterproof
                      coatings, bonding coats, and repair mortars.
                    </p>
                    <ul className="list-disc list-inside space-y-3">
                      <li>
                        <strong>Waterproof Coating:</strong> Mix with cement in
                        a 1:2 ratio to form a brushable slurry for slabs,
                        terraces, and roofs.
                      </li>
                      <li>
                        <strong>Bond Coat:</strong> Mix in a 1:1 ratio for
                        excellent adhesion between old and new concrete/plaster
                        surfaces.
                      </li>
                      <li>
                        <strong>Repair Mortars:</strong> Add to cement-sand
                        mortar to improve bond strength, flexibility, and water
                        resistance.
                      </li>
                    </ul>
                  </div>

                  {/* Benefits Section */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Benefits
                    </h2>
                    <ul className="list-disc list-inside space-y-3">
                      <li>
                        Forms strong bonds between old and new concrete or
                        plaster surfaces.
                      </li>
                      <li>Prevents dampness and water penetration.</li>
                      <li>Multipurpose waterproofing and bonding solution.</li>
                      <li>
                        Enhances durability and water resistance of repair
                        mortars.
                      </li>
                      <li>
                        Reduces shrinkage cracks for long-lasting repairs.
                      </li>
                    </ul>
                  </div>

                  {/* Coverage Section */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Coverage
                    </h2>
                    <ul className="list-disc list-inside space-y-3">
                      <li>
                        <strong>Waterproof Coating:</strong> 2-2.2 m²/kg for 2
                        coats (cement:latex = 2:1).
                      </li>
                      <li>
                        <strong>Mortar Modifier:</strong> 6-7.5 kg per 50 kg bag
                        of cement.
                      </li>
                      <li>
                        <strong>Bonding Agent:</strong> 4.2-4.5 m²/kg per coat
                        depending on surface texture.
                      </li>
                    </ul>
                  </div>

                  {/* Uses Section */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Uses
                    </h2>
                    <ul className="list-disc list-inside space-y-3">
                      <li>
                        Waterproof coatings for roofs, terraces, and concrete
                        surfaces.
                      </li>
                      <li>
                        Bonding old and new concrete/plaster to prevent
                        delamination.
                      </li>
                      <li>
                        Repair mix modifier for durability, strength, and crack
                        resistance.
                      </li>
                      <li>
                        Floors, slabs, columns, beams, balconies, toilets, and
                        bathrooms.
                      </li>
                    </ul>
                  </div>

                  {/* SBR Waterproofing Section */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      SBR Waterproofing
                    </h2>
                    <p className="mb-3">
                      Dr. Fixit 302 Super Latex is a Styrene Butadiene Rubber
                      (SBR) latex that provides long-lasting waterproofing,
                      bonding, and durability.
                    </p>
                    <ul className="list-disc list-inside space-y-3">
                      <li>
                        <strong>Waterproof Coating:</strong> Forms seamless
                        waterproof barriers on roofs, slabs, and terraces.
                      </li>
                      <li>
                        <strong>Bonding Agent:</strong> Ensures strong adhesion
                        between old and new concrete/plaster.
                      </li>
                      <li>
                        <strong>Repair & Strengthening:</strong> Improves
                        strength, flexibility, and crack resistance of mortars
                        and concrete.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {p.id === 7 && (
              <section className=" py-20 px-8 md:px-13 mx-auto text-gray-800">
                {/* Heading */}
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Dr Fixit Brand LW 101
                  </h1>
                  <p className="text-lg md:text-xl">
                    High-performance polymer-based waterproofing and bonding
                    agent for cement-based mixes.
                  </p>
                </div>

                {/* Application Section */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Application
                    </h2>
                    <p className="mb-4">
                      Dr. Fixit 302 Super Latex is ideal for waterproof
                      coatings, bonding coats, and repair mortars.
                    </p>
                    <ul className="list-disc list-inside space-y-3">
                      <li>
                        <strong>Waterproof Coating:</strong> Mix with cement in
                        1:2 ratio to form a brushable slurry for slabs,
                        terraces, and roofs.
                      </li>
                      <li>
                        <strong>Bond Coat:</strong> Mix in 1:1 ratio for
                        excellent adhesion between old and new concrete/plaster
                        surfaces.
                      </li>
                      <li>
                        <strong>Repair Mortars:</strong> Add to cement-sand
                        mortar to improve bond strength, flexibility, and water
                        resistance.
                      </li>
                    </ul>
                  </div>

                  {/* Benefits Section */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Benefits
                    </h2>
                    <ul className="list-disc list-inside space-y-3">
                      <li>
                        Forms strong bonds between old and new concrete or
                        plaster surfaces.
                      </li>
                      <li>Prevents dampness and water penetration.</li>
                      <li>Multipurpose waterproofing and bonding solution.</li>
                      <li>
                        Enhances durability and water resistance of repair
                        mortars.
                      </li>
                      <li>
                        Reduces shrinkage cracks for longer-lasting repairs.
                      </li>
                    </ul>
                  </div>

                  {/* Coverage Section */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Coverage
                    </h2>
                    <ul className="list-disc list-inside space-y-3">
                      <li>
                        <strong>Waterproof Coating:</strong> 2-2.2 m²/kg for 2
                        coats (cement:latex = 2:1).
                      </li>
                      <li>
                        <strong>Mortar Modifier:</strong> 6-7.5 kg per 50 kg bag
                        of cement.
                      </li>
                      <li>
                        <strong>Bonding Agent:</strong> 4.2-4.5 m²/kg per coat
                        depending on surface texture.
                      </li>
                    </ul>
                  </div>

                  {/* Uses Section */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Uses
                    </h2>
                    <ul className="list-disc list-inside space-y-3">
                      <li>
                        Waterproof coatings for roofs, terraces, and concrete
                        surfaces.
                      </li>
                      <li>
                        Bonding old and new concrete/plaster to prevent
                        delamination.
                      </li>
                      <li>
                        Repair mix modifier for durability, strength, and crack
                        resistance.
                      </li>
                      <li>
                        Floors, slabs, columns, beams, balconies, toilets, and
                        bathrooms.
                      </li>
                    </ul>
                  </div>

                  {/* SBR Waterproofing Section */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      SBR Waterproofing
                    </h2>
                    <p className="mb-3">
                      Dr. Fixit 302 Super Latex is a Styrene Butadiene Rubber
                      (SBR) latex that provides long-lasting waterproofing,
                      bonding, and durability.
                    </p>
                    <ul className="list-disc list-inside space-y-3">
                      <li>
                        <strong>Waterproof Coating:</strong> Forms seamless
                        waterproof barriers on roofs, slabs, and terraces.
                      </li>
                      <li>
                        <strong>Bonding Agent:</strong> Ensures strong adhesion
                        between old and new concrete/plaster.
                      </li>
                      <li>
                        <strong>Repair & Strengthening:</strong> Improves
                        strength, flexibility, and crack resistance of mortars
                        and concrete.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            )}
            {p.id === 8 && (
              <section className="py-16 px-6 md:px-16 max-w-[1700px] mx-auto text-gray-800">
                {/* Heading */}
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Dr. Fixit Dr.proof LW+ 101
                  </h1>
                  <p className="text-lg md:text-xl">
                    High-performance integral liquid waterproofing and
                    water-reducing admixture for concrete and plaster.
                  </p>
                </div>

                {/* Application Section */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Application
                    </h2>
                    <p className="mb-4">
                      Dr. Fixit Dr.proof LW+ improves the strength, durability,
                      and waterproofing efficiency of concrete and plaster.
                      Follow these steps for best results:
                    </p>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>
                        Mix cement, sand, and aggregates in proper proportion
                        with 2/3 of the total mixing water.
                      </li>
                      <li>
                        Mix Dr. Fixit Dr.proof LW+ with the remaining 1/3 of the
                        mixing water and add to premixed concrete or mortar.
                      </li>
                      <li>
                        Mix thoroughly until a uniform and cohesive consistency
                        is achieved.
                      </li>
                      <li>
                        Maintain water–cement ratio below 0.5 for higher
                        durability and strength.
                      </li>
                    </ol>
                    <p className="mt-2">
                      Use in plastering, RCC works, and other concrete
                      applications for long-lasting waterproofing and crack
                      resistance.
                    </p>
                  </div>

                  {/* Recommended Areas */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Recommended Areas of Application
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Roof slabs</li>
                      <li>Columns and beams</li>
                      <li>Footings and foundations</li>
                      <li>RCC water-retaining structures</li>
                      <li>Internal and external wall plastering</li>
                    </ul>
                  </div>

                  {/* Key Benefits */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Key Benefits
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Enhances cohesiveness of concrete for improved
                        durability.
                      </li>
                      <li>Protects steel reinforcement against corrosion.</li>
                      <li>Prevents dampness and water seepage effectively.</li>
                      <li>Minimizes plaster shrinkage and reduces cracks.</li>
                      <li>
                        Improves overall strength and workability of mortar.
                      </li>
                    </ul>
                  </div>

                  {/* Dosage & Mixing Ratio */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Dosage & Mixing Ratio
                    </h2>
                    <p className="mb-2">
                      Use 200 ml of Dr. Fixit Dr.proof LW+ per 50 kg bag of
                      cement.
                    </p>
                    <p>
                      For optimal waterproofing results, mix as recommended to
                      improve concrete durability, minimize cracks, and protect
                      against moisture.
                    </p>
                  </div>

                  {/* Workability & Crack Reduction */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Additional Benefits
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Enhances workability and flow of concrete without
                        affecting strength.
                      </li>
                      <li>
                        Reduces shrinkage and surface cracks for long-term
                        durability.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            )}
            {p.id === 9 && (
              <section className="py-16 px-6 md:px-16 max-w-[1700px] mx-auto text-gray-800">
                {/* Heading */}
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Dr. Fixit 5400 Interior Wall Sealer
                  </h1>
                  <p className="text-lg md:text-xl">
                    High-performance water-based wall primer for interior walls.
                  </p>
                </div>

                {/* Application Method */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Application Method
                    </h2>
                    <p>
                      Can be applied using a brush or roller for uniform
                      coverage.
                    </p>
                  </div>

                  {/* Thinning */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Thinning
                    </h2>
                    <p>
                      If required, dilute with up to 5% water. Do not exceed
                      recommended dilution.
                    </p>
                  </div>

                  {/* Drying Time */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Drying Time
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Touch Dry: Approximately 15 minutes</li>
                      <li>Hard Dry: Approximately 1 hour</li>
                    </ul>
                  </div>

                  {/* Recoating Interval */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Recoating Interval
                    </h2>
                    <p>Minimum 2 hours between coats.</p>
                  </div>

                  {/* Number of Coats */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Number of Coats
                    </h2>
                    <p>1 coat is sufficient for effective sealing.</p>
                  </div>

                  {/* Theoretical Coverage */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Theoretical Coverage
                    </h2>
                    <p>
                      Approximately 10-12 m² per liter per coat, depending on
                      surface porosity and texture.
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Key Benefits
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Seals porous and uneven surfaces to prevent paint
                        absorption.
                      </li>
                      <li>
                        Ensures better paint adhesion and long-lasting finish.
                      </li>
                      <li>
                        Reduces paint consumption due to uniform coverage.
                      </li>
                      <li>
                        Quick-drying formula allows for faster application and
                        recoating.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            )}
            {p.id === 10 && (
              <section className=" py-16 px-6 md:px-16 max-w-[1700px] mx-auto text-gray-800">
                {/* Heading */}
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Dr Fixit Brand Plaster Master
                  </h1>
                  <p className="text-lg md:text-xl">
                    High-performance polymer-based waterproofing and bonding
                    agent for concrete repair.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Application */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Application
                    </h2>
                    <p className="mb-4">
                      Dr. Fixit 302 Super Latex improves adhesion, flexibility,
                      and durability of cement-based mixes. Ideal for waterproof
                      coatings, bonding coats, and repair mortars.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Waterproof Coating:</strong> Mix with cement 1:2
                        (Latex:Cement) and apply on slabs, terraces, or roofs.
                      </li>
                      <li>
                        <strong>Bond Coat:</strong> Mix 1:1 with cement for
                        bonding old and new concrete/plaster surfaces.
                      </li>
                      <li>
                        <strong>Repair Mortars:</strong> Add to cement-sand
                        mortar to improve bond strength, flexibility, and water
                        resistance.
                      </li>
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Benefits
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Forms strong bonds between old and new concrete or
                        plaster.
                      </li>
                      <li>Prevents dampness and water penetration.</li>
                      <li>
                        Serves as a multipurpose waterproofing and bonding
                        solution.
                      </li>
                      <li>
                        Enhances water resistance and durability of repair
                        mortars.
                      </li>
                      <li>
                        Reduces shrinkage cracks for long-lasting repairs and
                        coatings.
                      </li>
                    </ul>
                  </div>

                  {/* Coverage */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Coverage
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Waterproof Coating:</strong> 2-2.2 m²/kg for 2
                        coats (cement:latex = 2:1)
                      </li>
                      <li>
                        <strong>Mortar Modifier:</strong> 6-7.5 kg per 50 kg bag
                        of cement
                      </li>
                      <li>
                        <strong>Bonding Agent:</strong> 4.2-4.5 m²/kg per coat
                        depending on surface porosity
                      </li>
                    </ul>
                  </div>

                  {/* Uses */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Uses
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Waterproof coatings for roofs, terraces, and concrete
                        surfaces
                      </li>
                      <li>
                        Bonding agent for old and new concrete or plaster
                        surfaces
                      </li>
                      <li>
                        Repair mix modifier to enhance durability, strength, and
                        flexibility
                      </li>
                      <li>
                        Floors, slabs, columns, beams, balconies, toilets, and
                        bathrooms
                      </li>
                    </ul>
                  </div>

                  {/* SBR Waterproofing */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      SBR Waterproofing
                    </h2>
                    <p className="mb-2">
                      Dr. Fixit 302 Super Latex is a premium Styrene Butadiene
                      Rubber (SBR) latex that provides long-lasting
                      waterproofing, bonding, and durability. It improves water
                      resistance, flexibility, and strength of concrete, mortar,
                      and plaster.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Waterproof Coating:</strong> Forms seamless
                        barriers on roofs, terraces, and slabs
                      </li>
                      <li>
                        <strong>Bonding Agent:</strong> Strong adhesive bridge
                        between old and new surfaces
                      </li>
                      <li>
                        <strong>Repair & Strengthening:</strong> Enhances
                        strength, flexibility, and crack resistance of mortars
                        and concrete
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            )}
            {p.id === 11 && (
              <section className=" py-16 px-6 md:px-16 max-w-[1700px] mx-auto text-gray-800">
                {/* Heading */}
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Dr. Fixit 5100 Exterior Sealer
                  </h1>
                  <p className="text-lg md:text-xl">
                    High-performance exterior sealer for porous and uneven
                    surfaces.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Application Method */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Application Method
                    </h2>
                    <p>
                      Can be applied using a brush or roller for uniform
                      coverage.
                    </p>
                  </div>

                  {/* Thinning */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Thinning
                    </h2>
                    <p>
                      If required, dilute with up to 5% water. Do not exceed
                      recommended dilution.
                    </p>
                  </div>

                  {/* Drying Time */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Drying Time
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Touch Dry: Approximately 15 minutes</li>
                      <li>Hard Dry: Approximately 1 hour</li>
                    </ul>
                  </div>

                  {/* Recoating Interval */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Recoating Interval
                    </h2>
                    <p>Minimum 2 hours between coats.</p>
                  </div>

                  {/* Number of Coats */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Number of Coats
                    </h2>
                    <p>1 coat is sufficient for effective sealing.</p>
                  </div>

                  {/* Theoretical Coverage */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Theoretical Coverage
                    </h2>
                    <p>
                      Approximately 10-12 m² per liter per coat, depending on
                      surface porosity and texture.
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Key Benefits
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Seals porous and uneven surfaces to prevent paint
                        absorption.
                      </li>
                      <li>
                        Ensures better paint adhesion and long-lasting finish.
                      </li>
                      <li>
                        Reduces paint consumption due to uniform coverage.
                      </li>
                      <li>
                        Quick-drying formula allows for faster application and
                        recoating.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            )}
            {p.id === 12 && (
              <section className="py-16 px-6 md:px-16 max-w-[1700px] mx-auto text-gray-800">
                {/* Heading */}
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Dr. Fixit Rust Remover
                  </h1>
                  <p className="text-lg md:text-xl">
                    Fast and efficient solution for removing rust and corrosion
                    from metal surfaces.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Key Features & Benefits */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Key Features & Benefits
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Fast and Efficient:</strong> Quickly dissolves
                        rust and corrosion.
                      </li>
                      <li>
                        <strong>Protects Metal Surfaces:</strong> Cleans without
                        harming the underlying metal.
                      </li>
                      <li>
                        <strong>Easy to Use:</strong> Apply directly, scrub or
                        wipe, and rinse.
                      </li>
                      <li>
                        <strong>Versatile Application:</strong> Suitable for
                        tools, machinery, steel structures, and other metal
                        surfaces.
                      </li>
                      <li>
                        <strong>Improves Lifespan:</strong> Regular use prevents
                        further rusting and prolongs the life of metal assets.
                      </li>
                    </ul>
                  </div>

                  {/* Usage */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Usage
                    </h2>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>
                        Apply Dr. Fixit Rust Remover on the affected surface.
                      </li>
                      <li>Allow it to act for the recommended time.</li>
                      <li>
                        Scrub or wipe off rust and rinse thoroughly with water.
                      </li>
                    </ol>
                    <p className="mt-2">
                      For detailed instructions, safety precautions, and
                      recommended application methods, refer to the Technical
                      Data Sheet (TDS).
                    </p>
                  </div>
                </div>
              </section>
            )}
            {p.id === 13 && (
              <section className=" py-16 px-6 md:px-16 max-w-[1700px] mx-auto text-gray-800">
                {/* Heading */}
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Water-Based Adhesive
                  </h1>
                  <p className="text-lg md:text-xl">
                    Safe, non-toxic adhesive suitable for a variety of
                    household, school, and office applications.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Application Method */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Application Method
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Woodworking and carpentry projects</li>
                      <li>Paper, cardboard, and craft activities</li>
                      <li>School and office usage</li>
                    </ul>
                  </div>

                  {/* Key Features & Benefits */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Key Features & Benefits
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Water-Based Adhesive:</strong> Easy to apply,
                        dries clear, and works on multiple surfaces.
                      </li>
                      <li>
                        <strong>Child-Safe & Non-Toxic:</strong> Safe for
                        children and everyday environments.
                      </li>
                      <li>
                        <strong>Hygienic:</strong> Suitable for home, school,
                        and office applications.
                      </li>
                      <li>
                        <strong>High-Quality Standard:</strong> Meets European
                        standard quality for consistent performance and
                        durability.
                      </li>
                    </ul>
                  </div>

                  {/* Usage Instructions */}
                  <div>
                    <h2 className="text-3xl font-semibold border-l-4 border-yellow-400 pl-4 mb-4">
                      Usage Instructions
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Apply on clean surfaces for best results.</li>
                      <li>
                        Allow sufficient drying time to achieve a strong and
                        durable bond.
                      </li>
                    </ul>
                  </div>
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

              <div className="flex space-x-3">
                <select
                  name="dealer"
                  value={formData.dealer}
                  onChange={handleChange}
                  className="w-1/2 p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none"
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
                  className="w-1/2 p-3 rounded-md bg-gray-100 text-gray-900 focus:outline-none"
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

export default JaguarDetails;
