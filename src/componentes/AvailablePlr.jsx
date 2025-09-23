import { use } from "react";

import cardImg from '../assets/Group.png';
import Groupone from '../assets/Grounone.png';

const AvailablePlr = ({ plyersPromise }) => {
  const fetchPlayerDD = use(plyersPromise);
  console.log(fetchPlayerDD);


  return (
    <div className="mt-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-5">
        {fetchPlayerDD.map((player) => (
          <div>
            {/* <p key={player.id}>{player.name}</p>
          <img src={player.image} alt="" /> */}

            <div className="card bg-base-100 w-96 shadow-sm ">
              <figure>
                <img className="w-90 h-60 object-cover"
                  src={player.image}
          alt="Img"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <img src={cardImg} alt="" />
                  <h1>{player.name}</h1>
                </h2>
                <div className="mt-5 flex justify-between"><img src={Groupone} alt="" /> <button>{ player.role}</button></div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlr
