import React from "react";

import fixitLogo from "../../assets/Dr-Fixit-Logo.png";
import jaguarLogo from "../../assets/Jaguar-logo.png";
import motulLogo from "../../assets/Motul-Logo.png";
import shadowLogo from "../../assets/Robinson-Can-Industrise.png";
import Container from "../../Container";
import { Link } from "react-router-dom";

const Business = () => {

    const businesses = [
  {

    logo: fixitLogo,
    link: "/drfixit",
  },
  {
 
    logo: jaguarLogo,
    link: "/jaguar",
  },
  {

    logo: motulLogo,
    link: "/motul",
  },
  {
  
    logo: shadowLogo,
    link: "/robinson",
  },
];


  return (
    <section>
      <div className="pt-20 md:pt-[200px]">
        <Container>
          <div className="text-center">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl pb-2 font-bold">
              OUR BUSINESS
            </h1>
            <p className="mt-3 pb-10 md:pb-[60px] text-gray-700 max-w-[700px] md:max-w-[850px] mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-center">
              At <span className="font-semibold">Fixit Group</span>, we believe
              in building Link family - united by purpose, driven by passion,
              and connected through Link shared love for
              <span className=" "> hard work</span>.
            </p>

            {/* Logos Section */}
              <section className="">
         <div className="text-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10 justify-items-center pb-16 sm:pb-20 md:pb-[200px]">
            {businesses.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-[120px] sm:w-[160px] md:w-[220px] h-[60px] sm:h-[90px] md:h-[110px] transition-all duration-300">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-[80%] max-w-[90%] object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="mt-3 text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      
    </section>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Business;
