import { use } from 'react';


import PlayerCard from './PlayerCard';

const AvailablePlr = ({
  plyersPromise,
  setAvailableBalance,
  availableBalance,
  setSelectePlr,
selectedPlr}) => {
  const fetchPlayerDD = use(plyersPromise);
  // console.log(fetchPlayerDD);

  return (
    <div className="mt-10">
      <div className="2xl:max-w-[1300px] md:max-w-[800px] mx-auto grid 2xl:grid-cols-3 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 place-items-center gap-12 ">
        {fetchPlayerDD.map((player) => (
          <PlayerCard
            key={player.id}
            setSelectePlr={setSelectePlr}
            selectedPlr={selectedPlr}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            player={player}
          ></PlayerCard>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlr;
