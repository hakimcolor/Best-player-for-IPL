import React from 'react';
import navImg from '../assets/logo.png';
import logoImg from '../assets/coin.png';
import bgImg from '../assets/bg-shadow.png';
import LogoFooter from'../assets/banner-main.png'

const Navber = () => {
  return (
    <div>
      <div className="navbar 2xl:max-w-[1200px] md:max-w-[800px] mx-auto">
        <div className="flex-1">
          <img className="w-[60px] h-[60px]" src={navImg} alt="Logo" />
        </div>
        <div className="flex items-center">
          <span className="mr-2">6000000000</span>
          <span className="mr-1">coin</span>
          <img src={logoImg} alt="Coin" className="w-[30px] h-[30px]" />
        </div>
      </div>

      <div className="bg-black  2xl:max-w-[1200px] md:max-w-[800px] mx-auto rounded-xl mt-5 relative">
        <div>
          <img className='rounded-xl' src={bgImg} alt="" />
        </div>
        {/* <div className="absolute top-13 left-30 text-white flex flex-col items-center justify-center text-center   ">
          <img className="w-[24px h-[120px]" src={LogoFooter} alt="" />
          <h1 className="text-[24px] font-bold  ">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-gray-300">Beyond Boundaries Beyond Limits</p>
        </div> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 gap-y-4">
          <img
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[140px] lg:h-[160px] mb-4"
            src={LogoFooter}
            alt=""
          />

          <h1 className="text-[18px] md:text-[22px] lg:text-[32px] font-bold leading-snug">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          <p className="text-gray-300 text-sm md:text-base lg:text-lg">
            Beyond Boundaries Beyond Limits
          </p>
          <button className='p-2 bg-yellow-200 font-bold  text-black rounded-xl'>Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
