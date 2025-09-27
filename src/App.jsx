import React, { Suspense, useState } from 'react';
import Navber from './componentes/Navber';
import AvailablePlr from './componentes/AvailablePlr';
import SelectedPlr from './componentes/SelectedPlr';
import Footer from './componentes/Footer';
 import { ToastContainer } from 'react-toastify';
const fetchPlayer = async () => {
  const res = await fetch('./pleare.json');
  return res.json();
};

const plyersPromise = fetchPlayer();

function App() {
  const [availableBalance, setAvailableBalance] = useState(990000000);
  const [returand, setReturand] = useState();
  const [selectedPlr, setSelectePlr] = useState([]);
  // console.log(selectedPlr);

  const handeldClick = () => {
    setReturand(!returand);
  };
  const RemoveSlect = (e) => {
    const filteData = selectedPlr.filter((plr) => plr.id !== e.id);
    setSelectePlr(filteData);
    setAvailableBalance(availableBalance + e.price);
  };

  // if you use async await so you  need first call the function in the app componentes and then you can props other componentes ok

  return (
    <div>
      <Navber availableBalance={availableBalance} />
      {/* <div className="items-center flex justify-between 2xl:max-w-[1300px] md:max-w-[800px] mx-auto mt-20">
        <div className=" font-bold text-[30px]">
          {returand
            ? `Selected Player (${selectedPlr.length}/7)`
            : 'Available players'}{' '}
        </div>
        <div className="font-bold">
          <button
            onClick={handeldClick}
            className={` ${
              returand ? 'bg-gray-50' : 'bg-cyan-600 text-white'
            } p-3  w-32 rounded-l-2xl cursor-pointer`}
          >
            Available
          </button>
          <button
            onClick={handeldClick}
            className={`cursor-pointer rounded-r-2xl bg-gray-50 ${
              returand ? 'bg-red-600 text-white' : 'bg-gray-50'
            } p-3  w-32`}
          >
            Selected<span>({selectedPlr.length})</span>
          </button>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row items-center justify-between 2xl:max-w-[1300px] md:max-w-[800px] mx-auto mt-20 px-4">
        {/* Title */}
        <div className="font-bold text-2xl sm:text-3xl mb-4 md:mb-0">
          {returand
            ? `Selected Player (${selectedPlr.length}/7)`
            : 'Available players'}
        </div>

        {/* Buttons */}
        <div className="flex w-full md:w-auto">
          <button
            onClick={handeldClick}
            className={`flex-1 md:flex-none shadow-2xl ${
              returand
                ? 'bg-gray-100 text-black font-bold'
                : 'bg-cyan-600 text-white font-bold'
            } p-3 rounded-l-2xl md:w-32 text-center`}
          >
            Available
          </button>
          <button
            onClick={handeldClick}
            className={`flex-1 md:flex-none shadow-2xl ${
              returand
                ? 'bg-red-600 text-white font-bold'
                : 'bg-gray-100 text-black font-bold'
            } p-3 rounded-r-2xl md:w-32 text-center`}
          >
            Selected <span>({selectedPlr.length})</span>
          </button>
        </div>
      </div>
      {returand ? (
        <SelectedPlr
          returand={returand}
          RemoveSlect={RemoveSlect}
          selectedPlr={selectedPlr}
        ></SelectedPlr>
      ) : (
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <AvailablePlr
            setSelectePlr={setSelectePlr}
            selectedPlr={selectedPlr}
            setAvailableBalance={setAvailableBalance}
            plyersPromise={plyersPromise}
            availableBalance={availableBalance}
          ></AvailablePlr>
        </Suspense>
      )}{' '}
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
