import React from "react";
import logo from "../../assets/Logo2.png"; // নিশ্চিত করুন ফাইল এখানে আছে

const Footer = () => {
  return (
    <footer className="relative bg-[#b71c1c] text-white">
      {/* Background shape */}
      <div className="absolute inset-0 opacity-100">
        <img
          src="/footer-bg.png" // background image (public folder)
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main content */}
     <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 py-12 px-8">
  {/* Logo + Office Info */}
  <div className="flex items-center">
    <img
      src={logo}
      alt="Fixit Logo"
      className="w-[200px] h-auto mr-6 object-contain"
    />
    <div className="flex flex-col space-y-1 space-x-3.7">
      <h4 className="font-bold mb-2 uppercase">Office</h4>
      <p>House No. 09, Block-C</p>
      <p>Road No. 02</p>
      <p>Rampura, Banasree</p>
      <p className="mt-2">support@fixitgroupbd.com</p>
      <p>+880 1898-795771</p>
    </div>
  </div>

  {/* Quick Links */}
  <div className="flex flex-col space-y-1">
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


      {/* Bottom copyright bar */}
      <div className="relative z-10 bg-[#8b1313] py-3 px-8 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>Copyright © 2025 Fixit Group. All Rights Reserved.</p>
        <p>Designed Jahid Hossain</p>
      </div>
    </footer>
  );
};

export default Footer;
