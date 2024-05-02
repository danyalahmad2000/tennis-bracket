import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CTA from "../components/cta/CTA";
import Community_LeaderBoard from "../components/community/Community_LeaderBoard";
import membersData from "../components/community/membersData";

const Players = () => {
  return (
    <>
      <Header />
      <div className="w-full h-[884px] apply_bg">
        <div className="w-[691px] h-[884px] mx-auto flex flex-col bg-white">
          <div className="w-[611px] h-[46px] mt-[40px] mx-auto relative">
            <h1 className="text-[16px] font-[700] text-primaryColor text-center">
              Leaderboards
            </h1>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300"></div>
          </div>
          <div className="w-[611px] h-[750px] mx-auto my-[24px] overflow-hidden">
            <Community_LeaderBoard members={membersData} />
          </div>
          <button className="w-[611px] h-[44px] mb-[40px] mx-auto rounded-[8px] text-primaryColor text-[16px] text-center font-[500] border-[1px]">
            Start Group Chat
          </button>
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
};

export default Players;
