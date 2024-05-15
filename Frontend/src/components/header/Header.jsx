import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaBars } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import logo from "../../assets/images/logo.png";
import headerImg01 from "../../assets/images/headerImg01.png";
import headerImg02 from "../../assets/images/headerImg02.png";
import headerImg03 from "../../assets/images/headerImg03.png";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tournamentName, setTournamentName] = useState("");

  // Fetch tournament name asynchronously
  useEffect(() => {
    // Your asynchronous data fetching logic here
    // For example, fetch tournament name from an API
    const fetchTournamentName = async () => {
      try {
        const response = await fetch(
          "http://localhost:20000/fetchTournamentName"
        );
        const data = await response.json();
        setTournamentName(data.tournamentName); // Assuming API response contains tournamentName
      } catch (error) {
        console.error("Error fetching tournament name:", error);
      }
    };

    fetchTournamentName();
  }, []);

  const toggleTournaments = () => {
    setIsTournamentsOpen(!isTournamentsOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      {/* Top NAV */}
      <div className="lg:w-full md:w-full h-[80px] bg-primaryColor flex justify-center items-center">
        <div className="lg:max-w-[1700px] md:w-full h-[46px] mx-4 md:mx-0 flex flex-row items-center justify-between">
          <div className="mx-10 md:mx-0">
            <img
              className="ml-[14px] h-[46px] w-[111px] object-cover object-center"
              src={logo}
              alt="Tennis Bracket Logo"
            />
          </div>
          <div className="flex items-center md:hidden">
            <FaBars
              className="text-white text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <div className="hidden md:flex flex-row items-center">
            {topNavLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="flex flex-row text-white mx-2 md:mx-4 hover:text-gray-200 relative"
                activeClassName="text-gray-300"
                onClick={
                  link.path === "/tournaments" ? toggleTournaments : undefined
                }
              >
                {link.display}
                {link.path === "/tournaments" && (
                  <span className="ml-2 md:ml-[12px] mt-1">
                    {isTournamentsOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-2 md:gap-6 mx-5">
            <div className="rounded-[8px] bg-primaryColor text-white font-[500]">
              <Link to="/login">Log in</Link>
            </div>
            <Link to="/signup">
              <button className="text-primaryColor font-[500] w-[100px] h-[44px] flex items-center justify-center rounded-[8px] bg-white hover:text-blue-600">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-primaryColor">
          <div className="flex flex-col items-center pt-4">
            {topNavLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="text-white my-2 hover:text-gray-200"
                activeClassName="text-gray-300"
                onClick={
                  link.path === "/tournaments" ? toggleTournaments : toggleMenu
                }
              >
                {link.display}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Main Nav */}
      <div className="lg:w-full md:w-[1440px] h-auto header pt-[64px] px-[20px] lg:px-[120px]">
        <div className="lg:w-full md:w-[1440px]">
          <div className="lg:w-full md:w-[1440px] flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:w-[50%]">
              <div className="mb-[24px]">
                <h3 className="text-[18px] font-[500] text-textSecondaryColor">
                  July 31st, 2023
                </h3>
                <h1 className="text-[48px] font-[700] text-black">
                  {tournamentName}
                </h1>
              </div>
              <div className="flex items-center mb-[8px]">
                <button className="w-[60px] h-[30px] rounded-[16px] px-[2px] font-[600] bg-[#ECFDF3] text-[#027A48] mr-[24px]">
                  Live
                </button>
                <GrLocation className="mr-[10px]" />
                <p className="text-[18px] font-[500] text-textSecondaryColor py-[5px]">
                  New York, USA
                </p>
              </div>
              <p className="text-[16px] font-[600] text-textSecondaryColor mb-[24px] tracking-wide">
                Over <span className="text-primaryColor font-[700]">6.5k</span>{" "}
                have joined already
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end lg:w-[50%] gap-[16px]">
              <img
                className="w-[140px] h-[140px] rounded-[16px] object-cover object-center"
                src={headerImg01}
                alt="headerImg01"
              />
              <img
                className="w-[140px] h-[140px] rounded-[16px] object-cover object-center"
                src={headerImg02}
                alt="headerImg02"
              />
              <img
                className="w-[140px] h-[140px] rounded-[16px] object-cover object-center"
                src={headerImg03}
                alt="headerImg03"
              />
              <div className="flex justify-center items-center w-[74px] h-[140px] rounded-[16px] bg-[#737373CC]">
                <div className="text-[22px] font-[700] text-white">+32</div>
              </div>
            </div>
          </div>
          {/* Main Nav Links */}
          <div className="lg:w-full md:w-[1440px] mt-8 flex flex-wrap justify-center md:justify-start">
            {mainNavLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="text-[14px] font-[500] text-textSecondaryColor mr-[32px] mb-[16px] hover:text-primaryColor hover:underline hover:underline-offset-[16px]"
              >
                {link.display}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
