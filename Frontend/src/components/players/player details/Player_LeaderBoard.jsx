import React from "react";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Player_LeaderBoard = ({ players }) => {
  return (
    <>
      {players.map((player, index) => (
        <div key={index} className="w-[611px] h-[75px] flex justify-between">
          <div className="w-[200px] h-[43px] flex flex-row items-center justify-between my-auto">
            <img
              className="size-[32px] rounded-full border-solid border-[1px] border-[#7D7D7D] object-cover object-center"
              src={player.image} // Dynamically set the src attribute
              alt=""
            />
  
            <div className="w-[155px] h-[43px] flex flex-col justify-between">
              <p className="h-[22px] text-[16px]">{player.name}</p>
              <div className="flex flex-row">
                <p className="font-bold text-[14px]">#{player.rank}</p>
                <p className="ml-[6px] w-[149px] h-[19px] text-[14px] font-[400] my-auto">
                  {player.category}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[95px] h-[22px] my-auto flex flex-row items-center">
            {player.arrow === "green" ? (
              <div className="size-[16px]">
                <FaArrowUp style={{ color: 'green' }} />
              </div>
            ) : (
              <div className="size-[16px]">
                <FaArrowDown style={{ color: 'red' }} />
              </div>
            )}
            <div className="ml-[6px] w-[75px] h-[22px] text-[16px] font-[700]">{player.points}+ pts</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Player_LeaderBoard;
