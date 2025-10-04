import React from "react";
import loveicon from "../../assets/LoveIcon.png";
import manicon from "../../assets/ManIcon.png";

const Employees = () => {
  return (
    <section id="careers">
      <div className="bg-[#faf3e7] py-16 md:py-[122px]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-6 md:px-12">
          
          {/* Left Heart Image (Always visible, responsive) */}
          <div className="flex justify-center">
            <img 
              src={loveicon} 
              alt="Heart Icon" 
              className="w-32 sm:w-44 md:w-64 lg:w-[350px]" 
            />
          </div>

          {/* Right Text + Icon */}
          <div className="text-center md:text-left">
            <p className="text-black font-semibold text-base sm:text-lg">
              A Strong Family of
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-green-700 mt-2">
              450+{" "}
              <span className="text-gray-600 text-xl sm:text-3xl md:text-5xl font-semibold">
                Employees
              </span>
            </h1>
            
            {/* Man Icon (Always visible, responsive) */}
            <div className="flex justify-center md:justify-start">
              <img 
                src={manicon} 
                alt="Employees Icon" 
                className="mt-6 w-10 sm:w-14 md:w-20" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Employees;

