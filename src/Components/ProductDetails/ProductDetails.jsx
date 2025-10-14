import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import logo2 from "../../assets/Fixit-Group-Logo-Red-and-White.png";
import drfixitLogo from "../../assets/Dr-Fixit-Logo.png";

import callIcon from "../../assets/Call-Icon-Green.png";  // WhatsApp icon

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
import { useLocation } from "react-router-dom";
 const products = [
  {
    id: 1,
    title: "Dr. Fixit LW+ 101 (1 Litre)",
    brand: "Dr. Fixit",
    category: "Waterproofing",
    quantity: "1 Litre",
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
    subtitle: "Durable Surface Protection Compound",
    description:
      "Provides excellent bonding between old and new concrete surfaces while increasing durability. Ensures stronger adhesion and reduced cracking over time.",
    image: product12,
  },
  {
    id: 3,
    title: "Dr. Fixit LW+ 101 (30 Litre)",
    brand: "Dr. Fixit",
    category: "Waterproofing",
    quantity: "30 Litre",
    subtitle: "Large Volume Waterproofing Additive",
    description:
      "Ideal for concrete and plaster to ensure long-term protection and durability.",
    image: product1,
  },
  {
    id: 4,
    title: "Dr. Fixit 5400 Interior Wall Sealer",
    brand: "Dr. Fixit",
    category: "Paint Base",
    quantity: "18 Litre",
    subtitle: "Interior Wall Sealer",
    description:
      "Protects walls from dampness and efflorescence, providing a smooth surface for painting.",
    image: product12,
  },
  {
    id: 5,
    title: "Fevilock 500 ml",
    brand: "Fevilock",
    category: "Adhesive",
    quantity: "500 ml",
    subtitle: "Instant Adhesive",
    description:
      "High-strength bonding adhesive suitable for wood, metal, ceramics, and plastics.",
    image: product12,
  },
  {
    id: 6,
    title: "Dr. Fixit 5100 Exterior Sealer",
    brand: "Dr. Fixit",
    category: "Paint Base",
    quantity: "18 Litre",
    subtitle: "Exterior Wall Sealer",
    description:
      "Long-lasting exterior wall protection from moisture and UV damage.",
    image: product10,
  },
  {
    id: 7,
    title: "Rust Remover (1 Litre)",
    brand: "Fixit",
    category: "Cleaning",
    quantity: "1 Litre",
    subtitle: "Metal Surface Cleaner",
    description:
      "Removes rust from metal surfaces effectively without damaging the base material.",
    image: product8,
  },
  {
    id: 8,
    title: "Dr. Fixit 302 Super Latex (1 Litre)",
    brand: "Dr. Fixit",
    category: "Bonding Agent",
    quantity: "1 Litre",
    subtitle: "Super Latex Bonding Agent",
    description:
      "Improves adhesion between old and new concrete surfaces and enhances waterproofing.",
    image: product3,
  },
  {
    id: 9,
    title: "Dr. Fixit 302 Super Latex (18 Litre)",
    brand: "Dr. Fixit",
    category: "Bonding Agent",
    quantity: "18 Litre",
    subtitle: "Super Latex Bonding Agent",
    description:
      "Ideal for large-scale bonding and waterproofing applications in construction.",
    image: product5,
  },
  {
    id: 10,
    title: "Dr. Fixit Extra Product 1",
    brand: "Dr. Fixit",
    category: "Specialty",
    quantity: "5 Litre",
    subtitle: "Example Product Subtitle",
    description: "Description for extra product 1.",
    image: product2,
  },
  {
    id: 11,
    title: "Dr. Fixit Extra Product 2",
    brand: "Dr. Fixit",
    category: "Specialty",
    quantity: "10 Litre",
    subtitle: "Example Product Subtitle",
    description: "Description for extra product 2.",
    image: product10,
  },
  {
    id: 12,
    title: "Dr. Fixit Extra Product 3",
    brand: "Dr. Fixit",
    category: "Specialty",
    quantity: "15 Litre",
    subtitle: "Example Product Subtitle",
    description: "Description for extra product 3.",
    image: product11,
  },
  {
    id: 13,
    title: "Dr. Fixit Extra Product 3",
    brand: "Dr. Fixit",
    category: "Specialty",
    quantity: "15 Litre",
    subtitle: "Example Product Subtitle",
    description: "Description for extra product 3.",
    image: product9,
  },
];

const ProductDetails = ({  }) => {






 const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);



  const { id } = useParams();

  const initialIndex = id
    ? Math.max(0, products.findIndex((item) => item.id === parseInt(id)))
    : 0;

  const [index, setIndex] = useState(initialIndex);
  const p = products[index];

  const next = () => setIndex((prev) => (prev + 1) % products.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + products.length) % products.length);


  
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
{/* =========================== */}
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
      {/* ============================ */}


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

      {/* ============================= */}
    <section id="navigate" className="bg-[#F8F8F8]">
      <div className="max-w-full mx-auto py-40 px-6 md:px-70">
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="flex flex-col items-center">
            <div className="border h-[560px] w-[450px] border-gray-200 rounded-2xl shadow-sm p-4 flex items-center justify-center bg-[#F8F8F8]">
              <img
                src={p.image}
                alt={p.title}
                className="max-w-[160%] max-h-[100%] mt-[60px] object-contain"
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
          <div className="lg:pt-[30px]">
            <div className="space-y-2 text-gray-800 md:pl-10 lg:pl-0">
              <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-900">
                {p.title}
              </h2>

              <div className="lg:pt-[50px]">
                <p className="text-lg md:text-xl">
                  <span className="font-semibold">Brand:</span> {p.brand}
                </p>
                <p className="text-lg md:text-xl">
                  <span className="font-semibold">Category:</span> {p.category}
                </p>
                <p className="text-lg md:text-xl">
                  <span className="font-semibold">Quantity:</span> {p.quantity}
                </p>
              </div>

              <p className="text-lg md:text-xl">
                <span className="font-semibold">Availability:</span>{" "}
                <span className="text-green-600 font-medium">In Stock</span>
              </p>

              <div className="pt-6">
                <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                  {p.subtitle}
                </h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Thumbnails */}
        <div className="flex justify-center gap-4 mt-12 flex-wrap">
          {products.map((prod, i) => (
            <button
              key={prod.id}
              onClick={() => setIndex(i)}
              className={`border rounded-xl p-2 transition-all ${
                index === i
                  ? "border-[#f6b400] bg-[#fff8e1] scale-105"
                  : "border-gray-200 bg-[#F8F8F8] hover:border-[#f6b400]"
              }`}
            >
              <img
                src={prod.image}
                alt={prod.title}
                className="w-[70px] h-auto object-contain"
              />
            </button>
          ))}
        </div>

        {/* 🔹 Dynamic Text Content */}
        <div className="mt-20 ">
          {p.id === 1 && (
             <section className="bg-[#F9FAFB] py-16 px-6">
      <div className="max-w-[1700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Benefits of Water-Reducing and Waterproofing Admixture (LW+ 101)
        </h2>

        <div className="space-y-8 text-gray-800 leading-relaxed">
          {/* Improved Concrete Strength */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Improved Concrete Strength:
            </h3>
            <p>
              Water-reducing admixtures like LW+ 101 lower the water-cement ratio,
              resulting in higher compressive strength and improved long-term durability.
            </p>
          </div>

          {/* Enhanced Waterproofing */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Enhanced Waterproofing:
            </h3>
            <p>
              By reducing concrete porosity, LW+ 101 prevents water penetration—
              effectively protecting structures from leaks, dampness, and corrosion.
            </p>
          </div>

          {/* Increased Workability */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Increased Workability:
            </h3>
            <p>
              LW+ 101 improves the flow and ease of concrete placement without compromising
              strength, making construction more efficient and consistent.
            </p>
          </div>

          {/* Reduced Shrinkage and Cracking */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Reduced Shrinkage and Cracking:
            </h3>
            <p>
              The lower water content helps minimize shrinkage and cracking, reducing
              long-term maintenance and repair costs.
            </p>
          </div>

          {/* Dosage */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Dosage:</h3>
            <p>200 ml per 50 kg bag of cement</p>
          </div>

          {/* Shelf Life */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Shelf Life:</h3>
            <p>
              Best before 2 years from the date of manufacture (in sealed pack).
            </p>
          </div>

          {/* Storage */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Storage:</h3>
            <p>
              Store in a cool and dry place away from direct sunlight.
            </p>
          </div>

          {/* Better Durability and Longevity */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Better Durability and Longevity:
            </h3>
            <p>
              LW+ 101 enhances resistance to environmental damage such as freeze-thaw cycles,
              sulfate attacks, and chloride penetration, extending the lifespan of the structure.
            </p>
          </div>

          {/* Cost Savings */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Cost Savings:</h3>
            <p>
              With increased durability and reduced repair needs, LW+ 101 offers significant
              long-term cost efficiency for construction projects.
            </p>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Applications:</h3>
            <p>
              LW+ 101 is ideal for use in foundations, basements, bridges, tunnels, and
              water-retaining structures, ensuring strong, durable, and moisture-resistant
              concrete in a variety of challenging environments.
            </p>
          </div>
        </div>
      </div>
    </section>
          )}

          {p.id === 2 && (
            <div className="space-y-8 text-gray-800 leading-relaxed">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Benefits of Dr. Fixit Plaster Master
              </h3>
              <div>
                <h4 className="text-2xl font-semibold text-gray-900">
                  Better Bonding:
                </h4>
                <p>
                  Improves adhesion between plaster and concrete, preventing
                  delamination.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-gray-900">
                  Reduced Cracks:
                </h4>
                <p>Minimizes cracking and shrinkage during plastering.</p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-gray-900">
                  Durability:
                </h4>
                <p>Increases life and performance of plastered surfaces.</p>
              </div>
            </div>
          )}

          {p.id === 3 && (
            <div className="space-y-8 text-gray-800 leading-relaxed">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Benefits of LW 101 (30 Litre)
              </h3>
              <p>
                Designed for large-scale construction, providing the same
                waterproofing and strength benefits as LW+ 101 but in a large,
                economical pack size.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
    </section>
  );
};

export default ProductDetails;
