import React from "react";
import CarAdmixture from "../../assets/Car-Admixture-Admixture.png";

const Admixture = () => {
  return (
    <div className="py-16 md:py-[122px]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-6">
        {/* Left Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-green-700 leading-tight">
            2000 <span className="text-green-700">Ton</span>
          </h1>
          <p className="text-black font-semibold text-lg sm:text-2xl md:text-3xl mt-2">
            concrete admixture produced
          </p>
          <p className="text-gray-500 text-base sm:text-xl md:text-2xl">
            every year
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={CarAdmixture}
            alt="Concrete Admixture"
            className="w-40 sm:w-64 md:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Admixture;
