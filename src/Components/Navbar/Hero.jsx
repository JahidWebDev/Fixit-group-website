import logo from "../../assets/Logo.png";
import React, { useState } from "react";
import Container from "../../Container";
import img1 from "../../assets/plant-bg.jpg";
import img2 from "../../assets/plant-bg2.jpg";
import img3 from "../../assets/plant-bg3.jpg";
const Hero = () => {
  const images = [img1, img2, img3];
  // Track current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next & Prev functions
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full">
        <Container>
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <img src={logo} alt="Logo" className="h-[105px] w-[105px]" />

            {/* Navigation */}
            <div className="flex items-center text-[22px] gap-9 text-white">
              {/* Nav Links */}
              <ul className="flex gap-9 font-OpenSans">
                <li className="cursor-pointer hover:text-gray-300 transition duration-300">
                  About Us
                </li>
                <li className="cursor-pointer hover:text-gray-300 transition duration-300">
                  Our Business
                </li>
                <li className="cursor-pointer hover:text-gray-300 transition duration-300">
                  Careers
                </li>
              </ul>

              {/* Button */}
              <button
                className="relative px-6 py-2 rounded-lg text-white font-semibold 
  bg-gray-600 overflow-hidden 
  transition-all duration-500 hover:bg-[#C0302D] hover:text-white hover:border-[#F6AB2F]"
              >
                <span className="relative z-10">CONTACT</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 opacity-0 hover:opacity-30 transition duration-500"></span>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-full text-white text-center relative">
        {/* <Container className="relative w-full h-screen flex items-center justify-center text-white">

  <div className="absolute left-[10%] bottom-[20%] text-left">
    <h1 className="text-[143px] font-semibold leading-none">Shield</h1>
    <div className="relative mt-6">

      <div className="absolute top-[-20px] rounded-full left-0 w-[250px] border-t-4 border-white"></div>
      <div className="absolute top-[-18px] rounded-full left-[200px] w-[413px] border-t border-white"></div>
      <div className="absolute top-[-327px] left-[980px] w-[482px] border-t border-white rotate-[140deg] origin-left"></div>

   
      <p className="mt-4 text-[32px]">Strength • Safety • Sustainability</p>
    </div>

  <div className="absolute right-[10%] top-1/4 text-right">
    <h1 className="text-[143px] font-semibold leading-none">Life</h1>

      <div className="absolute top-[-20px] rounded-full right-0 w-[250px] border-t-4 border-white"></div>
      <div className="absolute top-[-18px] rounded-full right-[200px] w-[350px] border-t border-white"></div>
     

      <p className="mt-4 text-[32px]">We Build • We Bond • We Believe</p>
    </div>  
  </div>
</Container> */}
        <Container className="relative w-full h-screen flex items-center justify-center text-white">
          {/* Left Text with Decorative Lines */}
          <div className="absolute left-[10%] bottom-[20%] text-left">
            <h1 className="text-[143px] font-semibold leading-none">Shield</h1>
            <div className="relative mt-6">
              {/* Decorative Lines */}
              <div className="absolute top-[-20px] left-0 w-[250px] border-t-4 border-white rounded-full animate-lineGrow"></div>
              <div className="absolute top-[-18px] left-[200px] w-[413px] border-t border-white rounded-full animate-lineGrow delay-200"></div>
              <div className="absolute top-[-327px] left-[980px] w-[482px] border-t border-white rotate-[140deg] origin-left animate-lineGrow delay-500"></div>

              {/* Caption */}
              <p className="mt-4 text-[32px]">
                Strength • Safety • Sustainability
              </p>
            </div>
          </div>

          {/* Right Text with Decorative Lines */}
          <div className="absolute right-[10%] top-1/4 text-right">
            <h1 className="text-[143px] font-semibold leading-none">Life</h1>
            <div className="relative mt-6">
              {/* Decorative Lines */}
              <div className="absolute top-[-20px] right-0 w-[250px] border-t-4 border-white rounded-full animate-lineGrow"></div>
              <div className="absolute top-[-18px] right-[200px] w-[350px] border-t border-white rounded-full animate-lineGrow delay-200"></div>
              {/* Optional Diagonal Line */}
              {/* <div className="absolute top-[-160px] right-0 w-[600px] border-t border-white rotate-[-140deg] origin-right animate-lineGrow delay-500"></div> */}

              {/* Caption */}
              <p className="mt-4 text-[32px]">
                We Build • We Bond • We Believe
              </p>
            </div>
          </div>
        </Container>

        {/* Get in touch button */}
        <button className="absolute bottom-12 bg-red-600 px-8 py-3 text-white font-semibold">
          GET IN TOUCH
        </button>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl md:text-6xl px-3 py-1 rounded-full transition"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl md:text-6xl px-3 py-1 rounded-full transition"
        >
          &#8250;
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 w-full flex justify-center gap-3">
          {images.map((_, index) => (
            <div key={index} onClick={() => setCurrentIndex(index)}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
