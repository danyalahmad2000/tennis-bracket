// Community.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Community_LeaderBoard from "../components/community/Community_LeaderBoard";
import star from "../assets/images/star.svg";

const Community = () => {
  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("http://localhost:9000/community");
        setMembersData(response.data);
        console.log("Response", response);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <>
      <div className="w-full h-[884px] apply_bg">
        <div className="w-[691px] h-[884px] mx-auto flex flex-col bg-white">
          <div className="w-[611px] h-[24px] mt-[40px] mx-auto flex justify-center">
            <div className="w-[147px] h-[24px] flex flex-row justify-between">
              <div className="size-[24px]">
                <img src={star} alt="" />
              </div>
              <div className="w-[107px] h-[22px]">
                <h1 className="text-[16px] font-[700] text-primaryColor">
                  Leaderboards
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[611px] h-[750px] mx-auto my-[24px] overflow-hidden">
            <Community_LeaderBoard members={membersData} />
          </div>
          <button className="w-[611px] h-[44px] mb-[40px] mx-auto rounded-[8px] text-primaryColor text-[16px] text-center font-[500] border-[1px]">
            Start Group Chat
          </button>
        </div>
      </div>
    </>
  );
};

export default Community;
