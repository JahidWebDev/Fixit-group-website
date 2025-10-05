import React from "react";
import logo from "../../assets/Fixit-group-logo-White-color.png";
import footerbg from "../../assets/Fixit-Group-footer.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#b71c1c] text-white overflow-hidden m-0 pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={footerbg}
          alt="Footer Background"
          className="w-full h-full object-cover sm:object-contain md:object-cover lg:object-cover opacity-100"
        />
      </div>

      {/* Overlay (optional subtle tint for better text contrast) */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 py-20 px-10 sm:px-8">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
          <img
            src={logo}
            alt="Fixit Logo"
            className="w-[150px] sm:w-[190px] md:w-[220px] h-auto object-contain"
          />
        </div>

        {/* Office Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1 w-full md:w-auto">
          <h4 className="font-bold mb-2 uppercase text-base sm:text-lg">Office</h4>
          <p>House No. 09, Block-C</p>
          <p>Road No. 02</p>
          <p>Rampura, Banasree</p>
          <p className="mt-2">support@fixitgroupbd.com</p>
          <p>+880 1898-795771</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row sm:space-x-10 items-center md:items-start text-center md:text-left w-full md:w-auto">
          {/* Quick Links */}
          <div className="flex flex-col space-y-2 mb-6 sm:mb-0">
            <h4 className="font-bold mb-2 uppercase text-base sm:text-lg">Quick Links</h4>
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Our Business</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>

          {/* Legal & Press */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold mb-2 uppercase text-base sm:text-lg">Legal & Press</h4>
            <a href="#" className="hover:underline">Certificate</a>
            <a href="#" className="hover:underline">Papers</a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative z-10 bg-[#8b1313]/95 py-3 px-4 sm:px-8 flex flex-col md:flex-row items-center justify-around  text-xs sm:text-sm text-center gap-1 sm:gap-2">
        <p>Copyright © 2025 Fixit Group. All Rights Reserved.</p>
        <p>Designed by Jahid Hossain</p>
      </div>
    </footer>
  );
};

export default Footer;
