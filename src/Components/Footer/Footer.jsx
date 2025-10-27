import React from "react";
import logo from "../../assets/Fixit-group-logo-White-color.png";
import footerbg from "../../assets/Fixit-Group-Logo-Icon.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#b71c1c] text-white overflow-hidden pt-16 sm:pt-20 lg:pt-[150px]">
      {/* === Background Image === */}
      <div className="absolute inset-0">
        <img
          src={footerbg}
          alt="Footer Background"
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>

      {/* === Main Footer Content === */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-start gap-10 sm:gap-12 px-6 sm:px-10 text-center md:text-left">
        
        {/* === Logo Section === */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/4">
          <img
            src={logo}
            alt="Fixit Logo"
            className="w-[160px] sm:w-[200px] md:w-[220px] mb-6 object-contain"
          />
        </div>

        {/* === Office Info === */}
        <div className="w-full md:w-1/4 space-y-1">
          <h4 className="font-semibold text-lg uppercase mb-2">Office</h4>
          <p>House No. 09, Block-C</p>
          <p>Road No. 02</p>
          <p>Rampura, Banasree</p>
          <p className="mt-2">support@fixitgroupbd.com</p>
          <p className="pb-6 md:pb-[80px] lg:pb-[280px]">+880 1898-795771</p>
        </div>

        {/* === Quick Links === */}
        <div className="w-full md:w-1/4">
          <h4 className="font-semibold text-lg uppercase mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="#" className="hover:underline">Home</Link></li>
            <li><Link to="#" className="hover:underline">Our Business</Link></li>
            <li><Link to="#" className="hover:underline">Careers</Link></li>
            <li><Link to="#" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* === Legal & Press === */}
        <div className="w-full md:w-1/4 md:self-start pb-20 md:mt-0">
          <h4 className="font-semibold text-lg uppercase mb-2">Legal & Press</h4>
          <ul className="space-y-1">
            <li><Link to="#" className="hover:underline">Certificate</Link></li>
            <li><Link to="#" className="hover:underline">Papers</Link></li>
          </ul>
        </div>
      </div>

      {/* === Social Icons Center Bottom === */}
      <div className="relative z-10 flex justify-center gap-5 pb-0">
        <a
          href="https://www.facebook.com/fixitgroupbd"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:text-[#1877F2] hover:bg-white transition-all duration-300"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.instagram.com/fixit_group_/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:text-[#E4405F] hover:bg-white transition-all duration-300"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href=""
          target=""
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:text-[#0A66C2] hover:bg-white transition-all duration-300"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="https://www.youtube.com/@fixit-group"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:text-[#FF0000] hover:bg-white transition-all duration-300"
        >
          <FaYoutube size={20} />
        </a>
        <a
          href="https://x.com/Fixit_Group"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:text-[#1DA1F2] hover:bg-white transition-all duration-300"
        >
          <FaTwitter size={20} />
        </a>
      </div>

      {/* === Bottom Copyright === */}
      <div className="relative z-10 bg-[#8b1313]/60 backdrop-blur-md border-t border-white/10 py-4 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-around text-[13px] sm:text-sm text-center gap-2 mt-6">
        <p className="lg:mr-60">© 2025 Fixit Group. All Rights Reserved.</p>
        <p className="opacity-90">
          Designed by <span className="font-semibold">Jahid Hossain</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
