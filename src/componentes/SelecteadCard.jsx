import React from 'react';
import RemoveBtn from '../assets/Frame.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SelecteadCard = ({ playrss, RemoveSlect }) => {
  const hndcRemove = () => {
    RemoveSlect(playrss);
    toast.success(`${playrss.name} has been removed!`);
  };

  return (
    <div>
      <div className="flex justify-between items-center sm:p-0 p-5 border-2 border-gray-400 rounded-xl mt-5">
        <div className="flex gap-2 items-center p-3">
          <img
            className="w-20 h-20 object-cover rounded-2xl"
            src={playrss.image}
            alt={playrss.name}
          />
          <div>
            <h1 className="font-bold text-2xl">{playrss.name}</h1>
            <p className="text-xl font-medium mt-3 text-gray-500">
              {playrss.style}
            </p>
          </div>
        </div>
        <div className="p-3 cursor-pointer" onClick={hndcRemove}>
          <img src={RemoveBtn} alt="Remove" />
        </div>
      </div>
    </div>
  );
};

export default SelecteadCard;
