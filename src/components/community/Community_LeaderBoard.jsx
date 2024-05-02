import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Community_LeaderBoard = ({ members }) => {
  return (
    <>
      {members.map((member, index) => (
        <div key={index} className="w-[611px] h-[75px] flex justify-between">
          <div className="w-[200px] h-[43px] flex flex-row items-center justify-between my-auto">
            <img
              className="size-[32px] rounded-full border-solid border-[1px] border-[#7D7D7D]"
              src={member.image}
              alt=""
            />

            <div className="w-[155px] h-[43px] flex flex-col justify-between">
              <p className="h-[22px] text-[16px]">{member.name}</p>
              <p className="font-[400] text-[14px]">@{member.username}</p>
            </div>
          </div>
          <div className="w-[95px] h-[22px] my-auto flex flex-row items-center">
            {member.arrow === "green" ? (
              <div className="size-[16px]">
                <FaArrowUp style={{ color: "green" }} />
              </div>
            ) : (
              <div className="size-[16px]">
                <FaArrowDown style={{ color: "red" }} />
              </div>
            )}
            <div className="ml-[6px] w-[75px] h-[22px] text-[16px] font-[700]">
              {member.points}+ pts
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Community_LeaderBoard;
