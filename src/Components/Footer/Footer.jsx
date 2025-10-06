import React from "react";
import logo from "../../assets/Fixit-group-logo-White-color.png";
import footerbg from "../../assets/Fixit-Group-Logo-Icon.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#b71c1c] text-white overflow-hidden pt-20 lg:pt-[150px]">
      {/* Background Image */}
      <div className=" absolute inset-0">
        <img
          src={footerbg}
          alt="Footer Background"
          className="w-[1810px] h-full object-contain md:object-cover opacity-90 scale-110 "
        />
      </div>

    

   {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 px-6 sm:px-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/4">
          <img
            src={logo}
            alt="Fixit Logo"
            className="w-[180px] sm:w-[200px] md:w-[220px] mb-6  object-contain"
          />
        </div>

        {/* Office Info */}
        <div className="text-center md:text-left w-full md:w-1/4 space-y-1">
          <h4 className="font-semibold text-lg uppercase mb-2">Office</h4>
          <p>House No. 09, Block-C</p>
          <p>Road No. 02</p>
          <p>Rampura, Banasree</p>
          <p className="mt-2">support@fixitgroupbd.com</p>
          <p className=" lg:pb-[320px]">+880 1898-795771</p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left w-full md:w-1/4">
          <h4 className="font-semibold text-lg uppercase mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Our Business</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Legal & Press */}
        <div className="text-center md:text-left w-full md:w-1/4">
          <h4 className="font-semibold text-lg uppercase mb-2">Legal & Press</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Certificate</a></li>
            <li><a href="#" className="hover:underline">Papers</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative z-10 bg-[#8b1313]/95 py-4 px-6 flex flex-col md:flex-row items-center justify-around text-xs sm:text-sm text-center">
        <p>© 2025 Fixit Group. All Rights Reserved.</p>
        <p>Designed by Jahid Hossain</p>
      </div>
    </footer>
  );
};

export default Footer;
