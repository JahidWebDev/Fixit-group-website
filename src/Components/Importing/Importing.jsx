import React from 'react'
import LubricantImg from "../../assets/all.png";

const Importing = () => {
  return (
    <div className="bg-[#faf3e7] py-[122px]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img 
            src={LubricantImg} 
            alt="Lubricants Importing" 
            className="w-[350px]" 
          />
        </div>

        {/* Right Text (same style as Admixture) */}
        <div className="text-center md:text-left">
          <h1 className="text-[100px] font-extrabold text-green-700">
            1000 <span className="text-green-700">Ton</span>
          </h1>
          <p className="text-black font-semibold text-3xl">
            Lubricants Importing
          </p>
          <p className="text-gray-500 text-2xl">
            every year
          </p>
        </div>

      </div>
    </div>
  )
}

export default Importing
