import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="lg:w-full md:w-[1440px] h-[80px] bg-primaryColor flex justify-center items-center">
      <div className="w-[1700px] h-[31px] flex justify-between">
        <div className="mx-[32px]">
          <img
            className="h-[31px] w-[74px] object-cover object-center"
            src={logo}
            alt="Tennis Bracket Logo"
          />
        </div>
        <div className="w-[327px] h-[24px]">
          <p className="text-[16px] text-white"> © 2024 tennis bracket. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
