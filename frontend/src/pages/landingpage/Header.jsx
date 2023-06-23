import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeBtn from "../../components/svg/HomeBtn";
import TokenEconomicBtn from "../../components/svg/TokenEconomicBtn";
import FundBtn from "../../components/svg/FundBtn";
import RoadmapBrn from "../../components/svg/RoadmapBrn";
import TeamBtn from "../../components/svg/TeamBtn";
import AboutUsBtn from "../../components/svg/AboutUsBtn";
import FaqsBtn from "../../components/svg/FaqsBtn";
// import { Link } from 'react-scroll';

const Header = ({ state , setState , activeSection}) => {


  return (
    <>
      <Link className={`home-icon-button ${activeSection === 'home' ? 'active' : '' }`} onClick={()=>setState("home")}>
        <HomeBtn/>
        <span>HOME</span>
      </Link>

      <Link className={`token-icon-button ${activeSection === 'tokenEco' ? 'active' : '' } ${activeSection === 'tokenEnd'  ? 'active' : '' }`} onClick={()=>setState("tokenEco")}>
       <TokenEconomicBtn/>
        <span>Token Economics</span>
      </Link>

      <Link className={`fund-icon-button ${activeSection === 'fund' ? 'active' : '' }`}  onClick={()=>setState("fund")}>
        <FundBtn/>
        <span>Fund Allocation</span>
      </Link>

      <Link className={`roadmap-icon-button ${activeSection === 'roadmap' ? 'active' : '' }`}  onClick={()=>setState("roadmap")}>
        <RoadmapBrn/>
        <span>Roadmap</span>
      </Link>

      <Link className={`team-icon-button ${activeSection === 'team' ? 'active' : '' }`} onClick={() =>{setState('team')}}>
        <TeamBtn/>
        <span>TEAM</span>
      </Link>
      <Link className={`team-icon-button ${activeSection === 'aboutus' ? 'active' : '' }`} onClick={() =>{setState('aboutus')}}>
        <AboutUsBtn/>
        <span>ABOUT US</span>
      </Link>
      <Link className={`team-icon-button-faqs ${activeSection === 'faqs' ? 'active' : '' }`} onClick={() =>{setState('faqs')}}>
        <FaqsBtn/>
        <span>FAQs</span>
      </Link>

    </>
  );
};

export default Header;
