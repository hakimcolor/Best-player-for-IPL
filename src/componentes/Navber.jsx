import React from 'react';
import navImg from '../assets/logo.png';
import logoImg from '../assets/coin.png';
import bgImg from '../assets/bg-shadow.png';
import LogoFooter from '../assets/banner-main.png';

const Navber = () => {
  return (
    <div className="2xl:max-w-[1300px] md:max-w-[800px] mx-auto px-4">
      {/* Navbar */}
      <div className="navbar flex items-center justify-between bg-white rounded-xl shadow-lg py-3 px-6 mb-6">
        <div className="flex items-center gap-2">
          <img className="w-[60px] h-[60px]" src={navImg} alt="Logo" />
        </div>
        <div className="flex items-center bg-yellow-100 rounded-full px-4 py-2 shadow gap-2">
          <span className="text-lg font-semibold text-gray-700">
            6,000,000,000
          </span>
          <img src={logoImg} alt="Coin" className="w-[28px] h-[28px]" />
          <span className="text-sm font-medium text-yellow-700">Coins</span>
        </div>
      </div>

      {/* Main Card */}
      <div
        className="relative rounded-xl mt-5 overflow-hidden shadow-xl"
        style={{
          background: 'black'
          ,
          backgroundImage : `url(${bgImg})`
        }}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src={bgImg}
          alt=""
        />
        <div className="relative flex flex-col items-center justify-center text-center text-white p-8 gap-y-6 z-10">
          <img
            className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[170px] mb-4 drop-shadow-lg"
            src={LogoFooter}
            alt="Banner"
          />
          <h1 className="text-[22px] md:text-[28px] lg:text-[36px] font-extrabold leading-snug drop-shadow">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-gray-200 text-base md:text-lg lg:text-xl font-medium">
            Beyond Boundaries, Beyond Limits
          </p>
          <button className="p-3 px-6 bg-yellow-300 font-bold text-black rounded-xl shadow hover:bg-yellow-400 transition-all duration-200">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
// ...existing code...
