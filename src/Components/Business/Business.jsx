import React from "react";

import fixitLogo from "../../assets/fixit.png";
import jaguarLogo from "../../assets/jaguar.png";
import motulLogo from "../../assets/motul.png";
import shadowLogo from "../../assets/shadow.png";
import Container from "../../Container";

const Business = () => {
  const businesses = [
    {
      name: "Dr. Fixit",
      logo: fixitLogo,
      link: "https://www.drfixit.co.in/",
    },
    {
      name: "Jaguar",
      logo: jaguarLogo,
      link: "https://www.jaguar.com/",
    },
    {
      name: "Motul",
      logo: motulLogo,
      link: "https://www.motul.com/",
    },
    {
      name: "Shadow Design & Printing",
      logo: shadowLogo,
      link: "https://shadow-printing.com/",
    },
  ];

  return (
    <section id="business">
      <div className="pt-20 md:pt-[200px]">
        <Container>
          <div className="text-center">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl pb-2 font-bold">
              OUR BUSINESS
            </h1>
            <p className="mt-3 pb-10 md:pb-[60px] text-gray-600 max-w-2xl md:max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
              At Fixit Group, we believe in building a family — united by purpose,
              driven by passion, and connected through a shared love for hard work.
            </p>

            {/* Logos Section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-12 justify-items-center pb-20 md:pb-[200px]">
              {businesses.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-12 sm:h-16 md:h-20 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Business;
