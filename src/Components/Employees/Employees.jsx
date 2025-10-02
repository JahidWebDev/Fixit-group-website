import React from 'react'
import loveicon from "../../assets/LoveIcon.png";
import manicon from "../../assets/ManIcon.png";

const Employees = () => {
  return (
    <div className="bg-[#faf3e7] py-[122px]">
      <div className="flex justify-center items-center gap-20">
        
        {/* Left Heart Image */}
        <div>
          <img src={loveicon} alt="Heart Icon" className="w-[350px]" />
        </div>

        {/* Right Text + Icon */}
        <div className="text-left">
          <p className="text-black font-semibold text-lg">A Strong Family of</p>
          <h1 className="text-6xl font-extrabold text-green-700">
            450+ <span className="text-gray-600 text-5xl font-semibold">Employees</span>
          </h1>
          <img src={manicon} alt="Employees Icon" className="mt-6 w-[80px]" />
        </div>
      </div>
    </div>
  )
}

export default Employees
