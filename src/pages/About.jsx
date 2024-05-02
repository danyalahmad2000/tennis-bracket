import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CTA from "../components/cta/CTA";

const About = () => {
  return (
    <>
    <Header/>
      <div className="lg:w-full md:w-full h-auto lg:h-[670px]">
        <div className="lg:w-full md:w-[90%] lg:max-w-[1440px] xl:max-w-[1700px] h-auto lg:h-[590px] flex flex-col mx-auto">
          <div className="px-[20px] py-[40px]">
            <h3 className="text-[18px] lg:text-[20px] font-[400] text-[#444444] mb-[16px]">
              Event Details
            </h3>
            <h1 className="text-[32px] lg:text-[40px] font-[500] text-black mb-[32px]">
              US Open
            </h1>
            <p className="text-[16px] lg:text-[18px] font-[400] text-[#444444] mb-[32px]">
              The US Open Tennis Championships, commonly called the US Open, is
              a hardcourt tennis tournament held annually in Queens, New York.
              Since 1987, the US Open has been chronologically the fourth and
              final Grand Slam tournament of the year (except in 2020, when the
              French Open was delayed to occur after the US Open due to the
              COVID-19 lockdowns). The other three, in chronological order, are
              the Australian Open, French Open and Wimbledon. The US Open starts
              on the last Monday of August and continues for two weeks, with the
              middle weekend coinciding with the US Labor Day holiday. The
              tournament is one of the oldest tennis championships in the world,
              originally known as the U.S. National Championship, for which
              men's singles and men's doubles were first played in August 1881.
              It is the only Grand Slam that was not affected by cancellation
              due to World War I and World War II, nor interrupted by the
              COVID-19 pandemic in 2020. All the players participating should be
              at least fourteen (14) years old.
            </p>

            <p className="text-[16px] lg:text-[18px] font-[400] text-[#444444] mb-[32px]">
              The tournament consists of five primary championships: men's and
              women's singles, men's and women's doubles, and mixed doubles. The
              tournament also includes events for senior, junior, and wheelchair
              players. Since 1978, the tournament has been played on acrylic
              hardcourts at the USTA Billie Jean King National Tennis Center in
              Flushing Meadows–Corona Park, Queens, New York City. The US Open
              is owned and organized by the United States Tennis Association
              (USTA), a non-profit organization, and the chairperson of the US
              Open is Patrick Galbraith. Revenue from ticket sales,
              sponsorships, and television contracts is used to develop tennis
              in the United States.
            </p>

            <p className="text-[16px] lg:text-[18px] font-[400] text-[#444444] mb-[32px]">
              This tournament, from 1971 to 2021, employed standard tiebreakers
              (first to seven points, win by two) in every set of a singles
              match.[2] Since 2022, new tiebreak rules were initiated and
              standardized in the final set for all four majors, where if a
              match reaches six-all in the final set (the third for women and
              fifth for men), an extended tiebreaker (first to ten points, win
              by two) is played.
            </p>

            <button className="text-white font-[500] w-[100%] lg:w-[210px] h-[40px] lg:h-[45px] text-[14px] lg:text-[16px] px-[16px] py-[10px] lg:px-[20px] lg:py-[12px] rounded-[8px] bg-primaryColor flex items-center justify-center whitespace-nowrap">
              Register to Play Brackets
            </button>
          </div>
        </div>
      </div>
      <CTA/>
      <Footer/>
    </>
  );
};

export default About;
