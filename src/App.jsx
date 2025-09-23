import React, { Suspense } from 'react';
import Navber from './componentes/Navber';
import AvailablePlr from './componentes/AvailablePlr';
const fetchPlayer = async () => {
const res = await fetch('./pleare.json')
  return res.json();
}

function App() {
  const plyersPromise = fetchPlayer()
  return (
    <div>
      <Navber />
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <AvailablePlr plyersPromise={plyersPromise}></AvailablePlr>
      </Suspense>
    </div>
  );
}

export default App;
