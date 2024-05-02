import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CTA from "../components/cta/CTA";
import Player_LeaderBoard from "../components/players/player details/Player_LeaderBoard";
import playersData from "../components/players/player details/playersData";

const Players = () => {
  return (
    <>
      <Header />
      <div className="w-full h-[884px] apply_bg">
        <div className="w-[691px] h-[884px] mx-auto flex flex-col bg-white">
          <div className="w-[611px] h-[46px] mt-[40px] mx-auto relative">
            <h1 className="text-[16px] font-[700] text-primaryColor text-center">
              Players
            </h1>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300"></div>
          </div>
          <div className="w-[611px] h-[750px] mx-auto my-[8px]">
            <Player_LeaderBoard players={playersData}/>
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
};

export default Players;
