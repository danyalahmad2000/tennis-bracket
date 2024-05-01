import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import logo from "../../assets/images/logo.png";
import headerImg01 from "../../assets/images/headerImg01.png"; // Import your placeholder image
import headerImg02 from "../../assets/images/headerImg02.png"; // Import your placeholder image
import headerImg03 from "../../assets/images/headerImg03.png"; // Import your placeholder image

const topNavLinks = [
  {
    path: "/tournaments",
    display: "Tournaments",
  },
  {
    path: "/how-to-play",
    display: "How to Play",
  },
];

const mainNavLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/play",
    display: "Play",
  },
  {
    path: "/community",
    display: "Community",
  },
  {
    path: "/players",
    display: "Players",
  },
];

const Header = () => {
  const [isTournamentsOpen, setIsTournamentsOpen] = useState(false);

  const toggleTournaments = () => {
    setIsTournamentsOpen(!isTournamentsOpen);
  };

  return (
    <div className="header-container">
      {/* Top NAV */}
      <div className="lg:w-full md:w-[1440px] h-[80px] bg-primaryColor flex justify-center items-center">
        <div className="lg:w-[1700px] md:w-[1280px] h-[46px] mx-[32px] flex flex-row items-center justify-between">
          <div className="ml-[50px]">
            <img
              className="h-[46px] w-[111px] object-cover object-center"
              src={logo}
              alt="Tennis Bracket Logo"
            />
          </div>
          <div className="flex flex-row items-center">
            {topNavLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="flex flex-row text-white mx-4 hover:text-gray-200 relative"
                activeClassName="text-gray-300"
                onClick={
                  link.path === "/tournaments" ? toggleTournaments : undefined
                }
              >
                {link.display}
                {link.path === "/tournaments" && (
                  <span className="ml-[12px] mt-1">
                    {isTournamentsOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <div className="rounded-[8px] bg-primaryColor text-white font-[500]">
              <Link to="/login">Log in</Link>
            </div>
            <Link to="/signup">
              <button className="text-primaryColor font-[500] w-[100px] h-[44px] flex items-center justify-center rounded-[8px] bg-white hover:text-blue-600 mr-[50px]">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Top NAV */}

      {/* Main Nav  */}
      <div className="lg:w-full md:w-[1440px] h-[333px] header pt-[64px]">
        <div className="lg:w-full md:w-[1440px] h-[269px]">
          <div className="lg:w-full md:w-[1440px] h-[183px] px-[120px] flex justify-between items-center">
            {/* Left Content */}
            <div className="flex flex-col w-[325px] h-[183px]">
              <div className="w-[325px] h-[91px] mb-[24px]">
                <h3 className="w-[123px] h-[25px] text-[18px] font-[500] text-textSecondaryColor">
                  July 31st, 2023
                </h3>
                <h1 className="w-[325px] h-[66px] text-[48px] font-[700] text-black">
                  US Open 2023
                </h1>
              </div>
              <div className="w-[230px] h-[68px] flex items-center mb-[8px]">
                <button className="w-[60px] h-[30px] rounded-[16px] px-[2px] font-[600] bg-[#ECFDF3] text-[#027A48] mr-[24px]">
                  Live
                </button>
                <GrLocation className="mr-[10px]" />
                <p className="text-[18px] font-[500] text-textSecondaryColor py-[5px]">
                  New York, USA
                </p>
              </div>
              <p className="text-[16px] font-[600] text-textSecondaryColor mb-[24px] tracking-wide  ">
                Over <span className="text-primaryColor font-[700]">6.5k</span>{" "}
                have joined already
              </p>
              {/* Main Navigation Links */}
              <div className="flex items-center mt-[25px]">
                {mainNavLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.path}
                    className="text-[14px] font-[500] text-textSecondaryColor mr-[32px] hover:text-primaryColor hover:underline hover:underline-offset-[16px]"
                  >
                    {link.display}
                  </NavLink>
                ))}
              </div>
              {/* Main Navigation Links */}
            </div>
            {/* Left Content */}

            {/* Right Content */}
            <div className="w-[542px] h-[140px] gap-[16px] flex items-center justify-end">
              <img
                className="w-[140px] h-[140px] rounded-[16px] object-cover object-center"
                src={headerImg01} // Use your image source here
                alt="headerImg01"
              />
              <img
                className="w-[140px] h-[140px] rounded-[16px] object-cover object-center"
                src={headerImg02} // Use your image source here
                alt="headerImg02"
              />
              <img
                className="w-[140px] h-[140px] rounded-[16px] object-cover object-center"
                src={headerImg03} // Use your image source here
                alt="headerImg03"
              />
              <div className="flex justify-center items-center w-[74px] h-[140px] rounded-[16px] bg-[#737373CC]">
                <div className="text-[22px] font-[700] text-white">+32</div>
              </div>
            </div>

            {/* Right Content */}
          </div>
        </div>
      </div>
      {/* Main Nav */}
    </div>
  );
};

export default Header;
