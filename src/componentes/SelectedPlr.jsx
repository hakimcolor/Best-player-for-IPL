import React from 'react';
import SelecteadCard from './SelecteadCard';

const SelectedPlr = ({ selectedPlr, RemoveSlect }) => {
  console.log(selectedPlr);
  // console.log(selectedPlr.player);

  return (
    <div className="2xl:max-w-[1300px] md:max-w-[800px] mx-auto">
      {selectedPlr.map((playrss) => (
        <SelecteadCard
          RemoveSlect={RemoveSlect}
          playrss={playrss}
        ></SelecteadCard>
      ))}
    </div>
  );
};

export default SelectedPlr;
