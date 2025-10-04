import React from "react";
import LubricantImg from "../../assets/Credit-card-Oil-dam-all.png";

const Importing = () => {
  return (
    <div className="bg-[#faf3e7] py-16 md:py-[122px]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-6 md:px-12">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={LubricantImg}
            alt="Lubricants Importing"
            className="w-40 sm:w-56 md:w-[350px] object-contain"
          />
        </div>

        {/* Right Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl md:text-[100px] font-extrabold text-green-700 leading-tight">
            1000 <span className="text-green-700">Ton</span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-black mt-2">
            Lubricants Importing
          </p>
          <p className="text-base sm:text-xl md:text-2xl text-gray-500 mt-1">
            every year
          </p>
        </div>

      </div>
    </div>
  );
};

export default Importing;
