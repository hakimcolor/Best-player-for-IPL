import React, { Suspense } from 'react';
import Navber from './componentes/Navber';
import AvailablePlr from './componentes/AvailablePlr';
const fetchPlayer = async () => {
  const res = await fetch('./pleare.json');
  return res.json();
};

function App() {
  const plyersPromise = fetchPlayer();
  return (
    <div>
      <Navber />

      <div className="items-center flex justify-between 2xl:max-w-[1300px] md:max-w-[800px] mx-auto mt-20">
        <div className=" font-bold text-[30px]">Available players </div>
        <div className="font-bold">
          <button className="bg-cyan-300 p-3  w-32 rounded-l-2xl cursor-pointer">Available</button>
          <button className="cursor-pointer rounded-r-2xl bg-gray-50 p-3  w-32">
            Selected<span>(0)</span>
          </button>
        </div>
      </div>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <AvailablePlr plyersPromise={plyersPromise}></AvailablePlr>
      </Suspense>
    </div>
  );
}

export default App;
