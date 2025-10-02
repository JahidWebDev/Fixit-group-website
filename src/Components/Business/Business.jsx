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
    <div className="pt-[200px]">
      <Container>
        <div className="text-center">
          <h1 className="text-3xl pb-[5px] font-bold">OUR BUSINESS</h1>
          <p className="mt-3 pb-[60px] text-gray-600 max-w-3xl mx-auto">
            At Fixit Group, we believe in building a family-united by purpose,
            driven by passion, and connected through a shared love for hard work.
          </p>

          {/* Logo Section */}
          <div className="flex justify-center pb-[200px] items-center gap-10 mt-10 flex-wrap">
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
                  className="h-20 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Business;
