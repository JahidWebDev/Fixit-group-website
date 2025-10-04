import React, { useState } from "react";
import Container from "../../Container";
import logo2 from "../../assets/Fixit-Group-Logo.png";
import img4 from "../../assets/Fixit-Group-About-us.png";
import logo5 from "../../assets/Fixit-Group-Logo-Black-&-White.png";
import waveShape from "../../assets/Fixit-Group-Branding-Icon.png"; // <-- use your wave image here
const OurBusiness = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className="relative">
      {/* Banner Section */}
      <div
        className="h-[80vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${img4})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Container>
            <nav className="flex items-center justify-between py-5">
              {/* Logo */}
              <a href="/">
                <img
                  src={logo2}
                  alt="Fixit Logo"
                  className="h-[70px] w-[70px] md:h-[90px] md:w-[90px] lg:h-[105px] lg:w-[105px] cursor-pointer"
                />
              </a>

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

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-400 transition-all duration-300 ${
                      dropdownOpen ? "w-full" : "w-0"
                    }`}
                  ></span>

                  {dropdownOpen && (
                    <ul className="absolute top-10 left-0 w-64 rounded-xl shadow-lg py-3 
                                   bg-white/10 backdrop-blur-md border border-white/20 
                                   text-white animate-fadeIn">
                      <li>
                        <a
                          href="/dr-fixit"
                          className="block px-5 py-2 rounded-lg hover:bg-yellow-500/20 hover:text-yellow-300 text-yellow-300 transition"
                        >
                          Dr. Fixit Ltd.
                        </a>
                      </li>
                      <li>
                        <a
                          href="/jaguar"
                          className="block px-5 py-2 rounded-lg hover:bg-yellow-500/20 hover:text-yellow-300 transition"
                        >
                          Jaguar Lubricants
                        </a>
                      </li>
                      <li>
                        <a
                          href="/motul"
                          className="block px-5 py-2 rounded-lg hover:bg-yellow-500/20 hover:text-yellow-300 transition"
                        >
                          Motul
                        </a>
                      </li>
                      <li>
                        <a
                          href="/robinson"
                          className="block px-5 py-2 rounded-lg hover:bg-yellow-500/20 hover:text-yellow-300 transition"
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

              {/* Mobile Menu Icon */}
              <div className="md:hidden text-white text-3xl cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </nav>
          </Container>
        </div>

        {/* Banner Content */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Fixit Group
            </h1>
            <p className="text-base md:text-xl max-w-2xl mx-auto">
              Building a stronger, smarter Bangladesh with innovation, quality, and trust.
            </p>
          </div>
        </div>
      </div>
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
          <span className="font-bold text-yellow-300">Fixit Group</span> began its
          journey in 2019, entering the construction market in Bangladesh under the{" "}
          <strong>National</strong> brand. We initially introduced a wide range of
          construction chemical products, including{" "}
          <strong>
            Concrete Admixture, Waterproofing Experts for Leak-free Home, Damp Proofing,
            Wall Crack & Water Wall Sealer
          </strong>
          . Within a short period, these products gained the trust and confidence of
          customers nationwide, establishing{" "}
          <span className="font-bold text-yellow-300">Fixit Group</span> as a trusted
          and reliable name in the{" "}
          <strong>Construction Chemical Industry of Bangladesh.</strong>
        </p>

        <p>
          In 2022, we expanded into the Lubricant Industry through our new brand,{" "}
          <span className="font-bold text-yellow-300">JAGUAR</span>. Our goal was to
          provide high-quality Industrial Lubricants and Automotive Lubricants,
          ensuring superior performance for both industrial and automotive sectors.
          Today, Jaguar Lubricants stands as a symbol of quality and long-lasting
          performance in the Bangladesh market.
        </p>

        <p>
          In 2024, our business entered a new era when we officially registered with
          the Bangladesh Government under the name{" "}
          <span className="font-bold text-yellow-300">Dr. Fixit Limited</span>,
          obtaining RJSC certification along with all required legal and business
          documents. This milestone marked a significant chapter in Fixit Group’s
          history—a period of strong growth and overwhelming positive feedback from our
          valued customers. Alhamdulillah!
        </p>

        <p>
          In 2025, we proudly became the{" "}
          <span className="font-bold text-yellow-300">Authorized Importer of Motul</span>{" "}
          in Bangladesh. Through this partnership, we brought world-renowned{" "}
          <strong>Motul Lubricants</strong> to the local market, further strengthening
          our presence in the{" "}
          <strong>automotive and industrial lubricant industry.</strong>
        </p>

        <p>
          However, our entrepreneurial journey began much earlier—back in 2014, with a
          printing business named{" "}
          <span className="italic font-bold">Shadow Design & Printing</span>. From that
          humble beginning, we have gradually expanded across multiple sectors, driven
          by dedication, innovation, and customer trust.
        </p>

        <p>
          Today, <span className="font-bold text-yellow-300">Fixit Group</span> stands
          as a symbol of quality, durability, and reliability in{" "}
          <strong>Bangladesh’s construction, lubricant, and printing industries.</strong>
        </p>
      </div>
    </div>
  </div>
</section>



    </section>
    
  );
};

export default OurBusiness;

