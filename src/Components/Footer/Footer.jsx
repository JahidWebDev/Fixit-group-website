import React from "react";
import logo from "../../assets/Logo2.png"; // নিশ্চিত করুন ফাইল এখানে আছে

const Footer = () => {
  return (
    <footer className="relative bg-[#b71c1c] text-white">
      {/* Background shape */}
      <div className="absolute inset-0">
        <img
          src="/footer-bg.png" // public folder এ রাখুন
          alt="background"
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 py-16 px-8">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <img
            src={logo}
            alt="Fixit Logo"
            className="w-[180px] h-auto object-contain"
          />
        </div>

        {/* Office Info */}
        <div className="flex flex-col space-y-1 text-center md:text-left">
          <h4 className="font-bold mb-2 uppercase">Office</h4>
          <p>House No. 09, Block-C</p>
          <p>Road No. 02</p>
          <p>Rampura, Banasree</p>
          <p className="mt-2">support@fixitgroupbd.com</p>
          <p>+880 1898-795771</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row md:space-x-10 text-center md:text-left">
          {/* Quick Links */}
          <div className="flex flex-col space-y-1 mb-6 md:mb-0">
            <h4 className="font-bold mb-2 uppercase">Quick Links</h4>
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Our Business</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>

          {/* Legal & Press */}
          <div className="flex flex-col space-y-1">
            <h4 className="font-bold mb-2 uppercase">Legal & Press</h4>
            <a href="#" className="hover:underline">Certificate</a>
            <a href="#" className="hover:underline">Papers</a>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="relative z-10 bg-[#8b1313] py-3 px-8 flex flex-col md:flex-row items-center justify-around text-sm">
        <p>Copyright © 2025 Fixit Group. All Rights Reserved.</p>
        <p>Designed by Jahid Hossain</p>
      </div>
    </footer>
  );
};

export default Footer;
