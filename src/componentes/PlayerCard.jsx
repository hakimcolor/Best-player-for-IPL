import React, { useState } from 'react';
import cardImg from '../assets/Group.png';
import Groupone from '../assets/Grounone.png';

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  setSelectePlr,
  selectedPlr,
}) => {
  const [selecteated, setSelecteated] = useState(false);

  const hnDLClick = () => {
    setSelecteated(true);
    setAvailableBalance(availableBalance - player.price);
    setSelectePlr([...selectedPlr, player]);
  };

  return (
    <div>
      <div className="w-[332px] sm:w-82 md:w-full">
        <div className="card bg-base-100 shadow-2xl w-full">
          <figure>
            <img
              className="h-90 w-96 sm:h-64 md:h-60 object-cover p-2 rounded-4xl"
              src={player.image}
              alt={player.name}
            />
          </figure>
          <div className="card-body p-[16px]">
            <h2 className="card-title flex items-center gap-2">
              <img src={cardImg} alt="Icon" />
              <span>{player.name}</span>
            </h2>
            <div className="mt-5 flex justify-between items-center">
              <div className="flex items-center">
                <img className="py-2" src={Groupone} alt="Nation" />
                <span className="ml-2 mt-[-8px] font-bold text-gray-400">
                  {player.nation}
                </span>
              </div>

              <button className="p-2 bg-gray-200 font-sans text-black px-5 rounded-xl">
                {player.role}
              </button>
            </div>
            <hr className="mt-5" />
            <div className="font-bold mt-2">
              Rating : <span className="text-green-600">{player.rating}</span>
              /100
            </div>
            <div className="flex justify-between py-2 font-bold">
              <span>Style :-</span>
              <span>{player.style}</span>
            </div>
            <div className="flex justify-between items-center mt-2 w-full ">
              <span className="font-bold py-2">Price : ${player.price}</span>
              <button
                disabled={selecteated}
                onClick={hnDLClick}
                className={`p-2 border-2 px-5 rounded-xl cursor-pointer ${
                  selecteated
                    ? 'bg-gray-300 text-gray-400 cursor-not-allowed'
                    : 'border-gray-300'
                }`}
              >
                {selecteated ? 'Selected' : 'Choose Player'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
