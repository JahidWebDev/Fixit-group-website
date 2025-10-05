import React, { useState } from "react";
import Container from "../../Container";

import logo2 from "../../assets/Fixit-Group-Logo.png";
import img4 from "../../assets/Fixit-Group-About-us.png";
import logo5 from "../../assets/Fixit-Group-Logo-Black-&-White.png";
import waveShape from "../../assets/Fixit-Group-Branding-Icon.png";

import fixitLogo from "../../assets/Dr.Fixit-Logo.png";
import jaguarLogo from "../../assets/Jaguar-logo.png";
import motulLogo from "../../assets/Motul-Logo.png";
import shadowLogo from "../../assets/Shadow-Design-logo.png";

const OurBusiness = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const businesses = [
    {
      name: "Dr. Fixit",
      logo: fixitLogo,
      link: "https://www.drfixit.co.in/",
    },
    {
      name: "Jaguar",
      logo: jaguarLogo,
      link: "https://www.jaguar.com/",
    },
    {
      name: "Motul",
      logo: motulLogo,
      link: "https://www.motul.com/",
    },
    {
      name: "Shadow Design & Printing",
      logo: shadowLogo,
      link: "https://shadow-printing.com/",
    },
  ];

  return (
    <section className="relative">
      {/* ================== Banner Section ================== */}
      <div
        className="relative bg-center bg-cover h-[60vh] sm:h-[68vh] md:h-[76vh] lg:h-[82vh]"
style={{ backgroundImage: `url(${img4})` }}
aria-label="Hero background"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Container>
           <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-5 py-3 md:px-10">
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
                  <a
                    href="/our-business"
                    className="transition-all duration-300 hover:text-yellow-400"
                  >
                    About Us
                  </a>
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
                        <a
                          href="/dr-fixit"
                          className="block px-5 py-2  hover:bg-yellow-500/20 hover:text-yellow-300 transition"
                        >
                          Dr. Fixit Ltd.
                        </a>
                      </li>
                      <li>
                        <a
                          href="/jaguar"
                          className="block px-5 py-2 hover:bg-yellow-500/20 hover:text-yellow-300 transition"
                        >
                          Jaguar Lubricants
                        </a>
                      </li>
                      <li>
                        <a
                          href="/motul"
                          className="block px-5 py-2  hover:bg-yellow-500/20 hover:text-yellow-300 transition"
                        >
                          Motul
                        </a>
                      </li>
                      <li>
                        <a
                          href="/robinson"
                          className="block px-5 py-2  hover:bg-yellow-500/20 hover:text-yellow-300 transition"
                        >
                          Robinson Can Industries
                        </a>
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
`




`
      {/* Mobile Menu */}
      {menuOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuOpen(false)}
          />

          {/* Floating Dropdown Menu */}
          <div
            className="absolute top-[80px] right-4 left-4 z-50 bg-white text-black rounded-2xl shadow-xl overflow-hidden animate-fadeIn"
          >
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Submenu */}
                {submenuOpen && (
                  <ul className="pl-6 bg-gray-50">
                    <li>
                      <a href="/new-construction" className="block px-4 py-2 hover:bg-gray-100">
                        New Construction
                      </a>
                    </li>
                    <li>
                      <a href="/repair-construction" className="block px-4 py-2 hover:bg-gray-100">
                        Repair Construction
                      </a>
                    </li>
                    <li>
                      <a href="/remover" className="block px-4 py-2 hover:bg-gray-100">
                        Remover
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a href="/resource" className="block px-5 py-3 hover:bg-gray-100">
                  RESOURCE
                </a>
              </li>
              <li>
                <a href="/certificate" className="block px-5 py-3 hover:bg-gray-100">
                  CERTIFICATE
                </a>
              </li>
              <li>
                <a href="/team" className="block px-5 py-3 hover:bg-gray-100">
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
                <a href="/app" className="block px-5 py-3 hover:bg-gray-100">
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

        {/* Banner Content */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Fixit Group
            </h1>
            <p className="text-base md:text-xl max-w-2xl mx-auto">
              Building a stronger, smarter Bangladesh with innovation, quality,
              and trust.
            </p>
          </div>
        </div>
      </div>

      {/* ================== About Section ================== */}
      <section className="relative overflow-hidden">
        {/* Wave Shape (orange background with curve) */}
        <div className="bg-[#A12420] w-full h-[200px]">
          <div className="absolute top-0 right-0 w-full z-0">
            <img
              src={waveShape}
              alt="Wave Shape"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-6 px-10 md:px-12 lg:px-50 pt-10 pb-8">
            <img
              src={logo5}
              alt="Fixit Logo"
              className="h-[70px] w-[70px] md:h-[90px] md:w-[90px] lg:h-[105px] lg:w-[105px]  object-contain"
            />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              About <span className="text-[#A12420]">Fixit Group</span>
            </h2>
          </div>
        </div>

        {/* Header (Logo + About Text on orange area) */}

        {/* Red Content Section (corrected color) */}
        <div className="relative bg-[#A12420] text-white px-6 md:px-12 lg:px-10 py-16 z-[-1000]">
          <div className="max-w-[1488px] mx-auto">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <span className="font-bold text-yellow-300">Fixit Group</span>{" "}
                began its journey in 2019, entering the construction market in
                Bangladesh under the <strong>National</strong> brand. We
                initially introduced a wide range of construction chemical
                products, including{" "}
                <strong>
                  Concrete Admixture, Waterproofing Experts for Leak-free Home,
                  Damp Proofing, Wall Crack & Water Wall Sealer
                </strong>
                . Within a short period, these products gained the trust and
                confidence of customers nationwide, establishing{" "}
                <span className="font-bold text-yellow-300">Fixit Group</span>{" "}
                as a trusted and reliable name in the{" "}
                <strong>Construction Chemical Industry of Bangladesh.</strong>
              </p>

              <p>
                In 2022, we expanded into the Lubricant Industry through our new
                brand, <span className="font-bold text-yellow-300">JAGUAR</span>
                . Our goal was to provide high-quality Industrial Lubricants and
                Automotive Lubricants, ensuring superior performance for both
                industrial and automotive sectors. Today, Jaguar Lubricants
                stands as a symbol of quality and long-lasting performance in
                the Bangladesh market.
              </p>

              <p>
                In 2024, our business entered a new era when we officially
                registered with the Bangladesh Government under the name{" "}
                <span className="font-bold text-yellow-300">
                  Dr. Fixit Limited
                </span>
                , obtaining RJSC certification along with all required legal and
                business documents. This milestone marked a significant chapter
                in Fixit Group’s history—a period of strong growth and
                overwhelming positive feedback from our valued customers.
                Alhamdulillah!
              </p>

              <p>
                In 2025, we proudly became the{" "}
                <span className="font-bold text-yellow-300">
                  Authorized Importer of Motul
                </span>{" "}
                in Bangladesh. Through this partnership, we brought
                world-renowned <strong>Motul Lubricants</strong> to the local
                market, further strengthening our presence in the{" "}
                <strong>automotive and industrial lubricant industry.</strong>
              </p>

              <p>
                However, our entrepreneurial journey began much earlier—back in
                2014, with a printing business named{" "}
                <span className="italic font-bold">
                  Shadow Design & Printing
                </span>
                . From that humble beginning, we have gradually expanded across
                multiple sectors, driven by dedication, innovation, and customer
                trust.
              </p>

              <p>
                Today,{" "}
                <span className="font-bold text-yellow-300">Fixit Group</span>{" "}
                stands as a symbol of quality, durability, and reliability in{" "}
                <strong>
                  Bangladesh’s construction, lubricant, and printing industries.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================== Logo Grid Section ================== */}
      <section>
        <div className="pt-20 md:pt-[200px]">
          <Container>
            <div className="text-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-12 justify-items-center pb-20 md:pb-[200px]">
                {businesses.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-12 sm:h-16 md:h-20 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ================== Vision / Mission / Goals ================== */}
      <div className="max-w-8xl mx-auto bg-[#e6e7e870] my-10 text-gray-900 ">
        {" "}
        {/* Vision Section */}{" "}
        <section className="flex p-10 flex-col md:flex-row items-stretch transition-all duration-300 cursor-pointer hover:bg-[#F9AE41]">
          {" "}
          {/* Left Heading */}{" "}
          <div className="md:w-1/3 flex items-center justify-center">
            {" "}
            <h2 className="text-4xl md:text-5xl font-semibold text-center">
              {" "}
              Our Vision{" "}
            </h2>{" "}
          </div>{" "}
          {/* Right Content */}{" "}
          <div className="md:flex-1 p-10">
            {" "}
            <p className="text-justify leading-relaxed text-lg w-[800px]">
              {" "}
              To become one of the leading multi-sector companies in Bangladesh,
              recognized for innovation, quality, and customer trust in the
              fields of construction chemicals, lubricants, and printing
              solutions. We aim to support national industrial growth through
              sustainable, high-performance, and reliable products that make
              life easier and businesses stronger.{" "}
            </p>{" "}
          </div>{" "}
        </section>{" "}
        {/* Mission Section */}{" "}
        <section className="flex p-10 flex-col md:flex-row items-stretch transition-all duration-300 cursor-pointer bg-[#F9AE41]">
          {" "}
          {/* Left Heading */}{" "}
          <div className="md:w-1/3 flex items-center justify-center p-10">
            {" "}
            <h2 className="text-4xl md:text-5xl font-semibold text-center">
              {" "}
              Our Mission{" "}
            </h2>{" "}
          </div>{" "}
          {/* Right Content */}{" "}
          <div className="md:flex-1 p-10">
            {" "}
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
              {" "}
              <li>
                {" "}
                Deliver premium-quality products & services that exceed customer
                expectations.{" "}
              </li>{" "}
              <li>
                {" "}
                Maintain honesty, transparency & professionalism in all
                operations.{" "}
              </li>{" "}
              <li>
                {" "}
                Foster innovation & sustainability across all business sectors.{" "}
              </li>{" "}
              <li>
                {" "}
                Build long-term, trust-based relationships with customers,
                employees and partners.{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </section>{" "}
        {/* Goals Section */}{" "}
        <section className="flex p-10 flex-col md:flex-row items-stretch transition-all duration-300 hover:bg-[#F9AE41]">
          {" "}
          {/* Left Heading */}{" "}
          <div className="md:w-1/3 flex items-center justify-center p-10">
            {" "}
            <h2 className="text-4xl md:text-5xl font-semibold text-center">
              {" "}
              Our Goals{" "}
            </h2>{" "}
          </div>{" "}
          {/* Right Content */}{" "}
          <div className="md:flex-1 p-10">
            {" "}
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed marker:text-red-500">
              {" "}
              <li>
                Expand Fixit Group’s footprint both nationally and globally.
              </li>{" "}
              <li>
                {" "}
                Strengthen our portfolio in construction chemicals, industrial &
                automotive lubricants, and printing solutions.{" "}
              </li>{" "}
              <li>
                {" "}
                Ensure 100% customer satisfaction through quality and
                after-sales service.{" "}
              </li>{" "}
              <li>
                {" "}
                Promote eco-friendly & sustainable practices for a better
                future.{" "}
              </li>{" "}
              <li>
                {" "}
                Develop a skilled and dedicated team to drive continuous growth.{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </section>{" "}
      </div>

      {/* ================== Final Statement ================== */}
      <div className="flex items-center justify-center px-4 py-[80px] bg-white text-center">
        <p className="text-xl leading-relaxed max-w-3xl">
          <span className="text-red-600 underline font-semibold">
            FIXIT GROUP
          </span>{" "}
          <span className="text-black">
            is dedicated to quality, sustainability, and innovation – building a
            stronger, smarter Bangladesh.
          </span>
        </p>
      </div>
    </section>
  );
};

export default OurBusiness;
