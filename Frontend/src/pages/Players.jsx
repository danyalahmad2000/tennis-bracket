// Players.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerLeaderBoard from '../components/players/player details/Player_LeaderBoard';

const Players = () => {
  const [playersData, setPlayersData] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/players');
        setPlayersData(response.data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <>
      <div className="w-full h-[884px] apply_bg">
        <div className="w-[691px] h-[884px] mx-auto flex flex-col bg-white">
          <div className="w-[611px] h-[46px] mt-[40px] mx-auto relative">
            <h1 className="text-[16px] font-[700] text-primaryColor text-center">
              Players
            </h1>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300"></div>
          </div>
          <div className="w-[611px] h-[750px] mx-auto my-[8px]">
            <PlayerLeaderBoard players={playersData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Players;
