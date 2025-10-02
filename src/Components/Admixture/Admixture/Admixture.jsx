import React from 'react'
import CarAdmixture from "../../../assets/CarAdmixture.png"; 

const Admixture = () => {
  return (
    <div className="py-[122px]">
      <div className="flex justify-center items-center gap-20">
        
        {/* Left Text */}
        <div className="text-left">
          <h1 className="text-[100px] font-extrabold text-green-700">
            2000 <span className="text-green-700">Ton</span>
          </h1>
          <p className="text-black font-semibold text-3xl">
            concrete admixture produced
          </p>
          <p className="text-gray-500 text-2xl">every year</p>
        </div>

        {/* Right Image */}
        <div>
          <img src={CarAdmixture} alt="Concrete Admixture" className="w-[400px]" />
        </div>
      </div>
    </div>
  )
}

export default Admixture
