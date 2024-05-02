import React from "react";

const CTA = () => {
  return (
    <>
      <div className="relative lg:w-full md:w-[1440px] h-[354px] header-reverse flex flex-col justify-center items-center">
        <h1 className="heading mx-auto text-[36px] font-[600] items-center justify-center mb-[12px] lg:mb-[12px] text-center">
          Start your Prediction before every Tournament
        </h1>
        <p className="font-[400] leading-[21.86px] text-[16px] mx-auto mb-[40px] lg:mb-[40px] tracking-wide text-center">
          More than <span className="text-primaryColor font-[600]">80k</span>{" "}
          active users play and win exciting prizes.
        </p>
        <div className="flex flex-col lg:flex-row">
          <button className="text-primaryColor font-[500] w-full lg:w-[100px] h-[44px] lg:h-[44px] flex items-center justify-center rounded-[8px] bg-white hover:text-blue-600 lg:mx-[12px] mb-[12px] lg:mb-0">
            Log in
          </button>
          <button className="text-white font-[500] w-full lg:w-[100px] h-[44px] lg:h-[44px] flex items-center justify-center rounded-[8px] bg-primaryColor">
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default CTA;
