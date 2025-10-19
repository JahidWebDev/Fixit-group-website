import React, { useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import logo from "../../assets/Fixit-Group-Logo.png";
import img1 from "../../assets/FixitGroup-Contact-Banner.png";
import emailjs from "emailjs-com";

const Contactus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const images = [img1];

  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace with your actual EmailJS credentials
    emailjs
      .sendForm(
        "service_m7ecbsq",
        "template_53nh9bd",
        form.current,
        "VV_o1hjWQVsWaOnT7"
      )
      .then(
        () => {
          setIsSending(false);
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          setIsSending(false);
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <section className="relative">
    <div
  className="relative bg-cover bg-center h-[800px] transition-all duration-700 ease-in-out"
  style={{ backgroundImage: `url(${images[currentIndex]})` }}
>
  ...
  <div className="absolute bottom-10 left-40 text-left z-50">
    <p className="text-white font-semibold text-3xl md:text-4xl drop-shadow-lg">
      Contact <span className=" font-bold">Us</span>
    </p>
  </div>

        <div className="absolute top-0 left-0 w-full z-20">
          <header className="absolute top-0 left-0 w-full z-50">
            {/* Main Container */}
            <div className="max-w-[1600px] mx-auto flex justify-between items-center px-5 py-3 md:px-10">
              {/* Logo */}
              <div className="flex items-center py-5">
                <Link to="/">
                  <img
                    src={logo}
                    alt="Fixit Logo"
                    className="h-[70px] w-[70px] md:h-[90px] md:w-[90px] lg:h-[105px] lg:w-[105px] cursor-pointer"
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              <ul className="hidden md:flex items-center gap-6 md:gap-10 lg:gap-14 text-white font-normal text-lg">
                <li className="relative group">
                  <Link
                    to="/"
                    className="transition-all duration-300 hover:text-yellow-400"
                  >
                    Home
                  </Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </li>

                <li className="relative group">
                  <Link
                    to="/ourbusiness"
                    className="transition-all duration-300 hover:text-yellow-400"
                  >
                    About Us
                  </Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </li>

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
                    <ul className="absolute top-10 left-0 w-64 rounded-xl shadow-xl py-3 bg-yellow-400/60 backdrop-blur-lg border border-yellow-300/50 text-black animate-fadeIn z-50">
                      {[
                        { name: "Dr. Fixit Ltd.", to: "/drfixit" },
                        { name: "Jaguar Lubricants", to: "/jaguar" },
                        { name: "Motul", to: "/motul" },
                        { name: "Robinson Can Industries", to: "/robinson" },
                      ].map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            className="block px-5 py-2 font-semibold transition-all duration-300 hover:bg-red-700/60 hover:text-white"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li className="relative group">
                  <Link
                    to="/careers"
                    className="transition-all duration-300 hover:text-yellow-400"
                  >
                    Careers
                  </Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>

              {/* Hamburger Icon */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-white focus:outline-none"
              >
                {menuOpen ? (
                  <FiX className="w-8 h-8" />
                ) : (
                  <FiMenu className="w-8 h-8" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <>
                <div
                  className="fixed inset-0 bg-black/40 z-40"
                  onClick={() => setMenuOpen(false)}
                />
                <div className="absolute top-[80px] right-4 left-4 z-50 bg-white text-black rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
                  <ul className="flex flex-col text-base font-medium py-4">
                    <li>
                      <Link
                        to="/"
                        className="block px-5 py-3 hover:bg-gray-100"
                      >
                        HOME
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/OurBusiness"
                        className="block px-5 py-3 hover:bg-gray-100"
                      >
                        ABOUT US
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => setSubmenuOpen(!submenuOpen)}
                        className="w-full flex justify-between items-center px-5 py-3 hover:bg-gray-100"
                      >
                        OUR BUSINESS
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
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {submenuOpen && (
                        <ul className="pl-6 bg-gray-50">
                          <li>
                            <Link
                              to="/drfixit"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Dr. Fixit Ltd.
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/jaguar"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Jaguar Lubricants
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/motul"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Motul
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/robinson"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Robinson Can Industries
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <Link
                        to="/careers"
                        className="block px-5 py-3 hover:bg-gray-100"
                      >
                        CAREERS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://wa.me/yourwhatsapp"
                        className="flex justify-center items-center gap-2 bg-green-500 text-white rounded-lg mx-4 my-2 py-2 font-semibold"
                      >
                        <span>Let’s Talk</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dealer"
                        className="flex justify-center items-center gap-2 bg-yellow-400 text-black rounded-lg mx-4 mb-2 py-2 font-semibold"
                      >
                        <span>Find Link Dealer</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </header>
        </div>

        <div className="absolute bottom-10 left-0 w-full text-center z-30">

</div>
      </div>

      {/* CONTACT FORM SECTION */}
      <section className="bg-[#FAF9F6] py-40 px-6 md:px-40">
        <div className="mb-10">
          <p className="text-sm font-semibold text-black mb-2">
            <span className="text-red-600">//</span> GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Let’s work together to create <br />
            <span className="font-bold bg-gradient-to-r from-[#C62828] to-[#F57C00] bg-clip-text text-transparent">
              the life and business
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Form */}
        <div className="bg-black/100 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto text-white">
  <h3 className="text-lg font-semibold mb-2">
    Send A Message
  </h3>
  <p className="text-sm text-gray-300 mb-6">
    Unlock your potential with expert guidance! Schedule a free consultation toward personal and business success.
  </p>

  <form ref={form} onSubmit={sendEmail} className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        required
        className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        required
        className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>

    <div className="grid grid-cols-2 gap-4">
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>

    <textarea
      name="message"
      placeholder="Message"
      rows="5"
      required
      className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
    ></textarea>

    <button
      type="submit"
      disabled={isSending}
      className={`flex items-center justify-center gap-2 bg-gradient-to-r from-[#C62828] to-[#F57C00] text-white font-semibold px-6 py-2 rounded-full transition ${
        isSending ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
      }`}
    >
      {isSending ? "Sending..." : "Submit Message"} <ArrowRight size={18} />
    </button>

    {sent && (
      <p className="text-green-500 text-sm mt-2">
        ✅ Message sent successfully!
      </p>
    )}
  </form>
</div>


          {/* Right Info */}
       <div className="flex flex-col justify-center space-y-10">
  <div>
    <h4 className="font-semibold text-gray-800 text-xl mb-2">Call Us</h4>
    <p className="text-base text-gray-600 mb-3">
      Call us today for personalized coaching and transformative growth!
    </p>
    <div className="flex items-center gap-3 font-medium text-gray-900 text-lg">
      <Phone className="text-[#F57C00]" size={24} />
      <span>+880 1898-795771</span>
    </div>
  </div>

  <hr className="border-t border-gray-300 w-4/5" />

  <div>
    <h4 className="font-semibold text-gray-800 text-xl mb-2">Email Us</h4>
    <p className="text-base text-gray-600 mb-3">
      Email us now for expert coaching and tailored growth solutions!
    </p>
    <div className="flex items-center gap-3 font-medium text-gray-900 text-lg">
      <Mail className="text-[#F57C00]" size={24} />
      <span>support@fixitgroupbd.com</span>
    </div>
  </div>

  <hr className="border-t border-gray-300 w-4/5" />

  <div>
    <h4 className="font-semibold text-gray-800 text-xl mb-2">Visit Us</h4>
    <p className="text-base text-gray-600 mb-3">
      Visit us for personalized coaching and guidance toward lasting success!
    </p>
    <div className="flex items-center gap-3 font-medium text-gray-900 text-lg">
      <MapPin className="text-[#F57C00]" size={24} />
      <span>House No. 09, Road No. 02, Block-C, Rampura, Banasree.</span>
    </div>
  </div>
</div>

        </div>
      </section>
    </section>
  );
};

export default Contactus;
