import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Container from "../../Container";
import logo from "../../assets/Logo.png";
import img1 from "../../assets/plant-bg.jpg";
import img2 from "../../assets/plant-bg2.jpg";
import img3 from "../../assets/plant-bg3.jpg";

const Hero = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Single source of truth for nav links
  const navLinks = [
    { name: "About Us", href: "#hero" },
    { name: "Our Business", href: "#business" },
    { name: "Careers", href: "#careers" },
  ];

  // ✅ Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // ✅ Next & Prev functions
   const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <section id="hero" className="relative">
      <div
        className="bg-cover bg-center h-screen transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full bg-transparent z-20">
          <Container>
            <div className="flex justify-between items-center py-4 px-4 md:px-6 lg:px-10">
              {/* Logo */}
              <img
                src={logo}
                alt="Logo"
                className="h-[70px] w-[70px] md:h-[90px] md:w-[90px] lg:h-[105px] lg:w-[105px]"
              />

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-6 md:gap-10 lg:gap-14 text-white">
                <ul className="flex gap-6 md:gap-8 lg:gap-9 font-OpenSans">
                  {navLinks.map((link) => (
                    <li
                      key={link.name}
                      className="relative cursor-pointer transition-colors duration-300 hover:text-gray-300
                        after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] 
                        after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>

                {/* Contact Button */}
                <button
                  className="relative px-4 py-2 md:px-6 rounded-lg text-sm md:text-base lg:text-lg
                    text-white font-semibold bg-gray-600 overflow-hidden transition-all duration-500 
                    hover:bg-[#C0302D] hover:border-[#F6AB2F]"
                >
                  CONTACT
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden text-white text-3xl cursor-pointer">
                {menuOpen ? (
                  <FiX onClick={() => setMenuOpen(false)} />
                ) : (
                  <FiMenu onClick={() => setMenuOpen(true)} />
                )}
              </div>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
              <div className="md:hidden bg-black/50 backdrop-blur-md text-white px-6 py-6 space-y-6 text-lg rounded-lg shadow-lg">
                <ul className="flex flex-col gap-6 font-OpenSans">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)} // close menu on click
                        className="cursor-pointer hover:text-gray-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2 rounded-lg text-base text-white font-semibold bg-gray-600 transition-all duration-500 hover:bg-[#C0302D]">
                  CONTACT
                </button>
              </div>
            )}
          </Container>
        </div>

        {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-full text-white text-center relative z-10">
  <Container className="relative w-full h-screen flex items-center justify-center text-white">

    {/* ✅ Desktop Text with Lines */}
    <div className="hidden md:block">
      {/* Left Text */}
      <div className="absolute left-[10%] bottom-[20%] text-left">
        <h1 className="text-[143px] font-semibold leading-none">Shield</h1>
        <div className="relative mt-6">
          <div className="absolute top-[-20px] left-0 w-[250px] border-t-4 border-white rounded-full animate-lineGrow"></div>
          <div className="absolute top-[-18px] left-[200px] w-[413px] border-t border-white rounded-full animate-lineGrow delay-200"></div>
          <div className="absolute top-[-327px] left-[980px] w-[482px] border-t border-white rotate-[140deg] origin-left animate-lineGrow delay-500"></div>
          <p className="mt-4 md:text-10xl text-[32px]">Strength • Safety • Sustainability</p>
        </div>
      </div>

      {/* Right Text */}
      <div className="absolute right-[10%] top-1/4 text-right">
        <h1 className="text-[143px] font-semibold leading-none">Life</h1>
        <div className="relative mt-6">
          <div className="absolute top-[-20px] right-0 w-[250px] border-t-4 border-white rounded-full animate-lineGrow"></div>
          <div className="absolute top-[-18px] right-[200px] w-[336px] border-t border-white rounded-full animate-lineGrow delay-200"></div>
          <p className="mt-4 text-[32px]">We Build • We Bond • We Believe</p>
        </div>
      </div>
    </div>

    {/* ✅ Mobile Text without Lines */}
    <div className="block md:hidden text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-bold">Shield</h1>
      <p className="mt-2 text-base sm:text-lg">Strength • Safety • Sustainability</p>

      <h1 className="mt-6 text-4xl sm:text-5xl font-bold">Life</h1>
      <p className="mt-2 text-base sm:text-lg">We Build • We Bond • We Believe</p>
    </div>

  </Container>
</div>
 <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white px-3 py-1 text-6xl transition"
          >
            &#8249;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white px-3 py-1 text-6xl transition"
          >
            &#8250;
          </button>
      </div>
    </section>
  );
};

export default Hero;
