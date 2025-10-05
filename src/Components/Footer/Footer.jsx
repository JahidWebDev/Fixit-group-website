import React from "react";
import logo from "../../assets/Fixit-group-logo-White-color.png";
import footerbg from "../../assets/Fixit-Group-footer.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#b71c1c] text-white m-0 pt-20 overflow-hidden">
      {/* Background shape */}
      <div className="absolute inset-0">
        <img
          src={footerbg}
          alt="background"
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 py-20 px-8">
        {/* Logo */}
        <div className="flex-shrink-0 pb-40 flex items-center justify-center md:justify-start">
          <img
            src={logo}
            alt="Fixit Logo"
            className="w-[220px] h-auto object-contain"
          />
        </div>

        {/* Office Info */}
        <div className="flex flex-col  pb-40 space-y-1 text-center md:text-left">
          <h4 className="font-bold mb-2 uppercase">Office</h4>
          <p>House No. 09, Block-C</p>
          <p>Road No. 02</p>
          <p>Rampura, Banasree</p>
          <p className="mt-2">support@fixitgroupbd.com</p>
          <p>+880 1898-795771</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col pb-40 md:flex-row md:space-x-10 text-center md:text-left">
          {/* Quick Links */}
          <div className="flex flex-col space-y-4 mb-6 md:mb-0">
            <h4 className="font-bold mb-2 uppercase">Quick Links</h4>
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Our Business</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>

          {/* Legal & Press */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold mb-2 uppercase">Legal & Press</h4>
            <a href="#" className="hover:underline">Certificate</a>
            <a href="#" className="hover:underline">Papers</a>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="relative z-10 bg-[#8b1313] py-3 px-8 flex flex-col md:flex-row items-center justify-around text-sm m-0">
        <p className="m-0">Copyright © 2025 Fixit Group. All Rights Reserved.</p>
        <p className="m-0">Designed by Jahid Hossain</p>
      </div>
    </footer>
  );
};

export default Footer;
