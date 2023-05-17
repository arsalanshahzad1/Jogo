import React, { useEffect, useState, useRef } from "react";
import Header from './Header'
import { Link } from "react-router-dom";
import Snack from "../../components/shared/Snack";
import Team from "../Team";
import TokenEconomics from "../TokenEconomics";
import FundAllocation from "../FundAllocation";
import Wallet from "../../components/svg/Wallet";
import Presale from "../../components/svg/Presale";
import Doc from "../../components/svg/Doc";
import Discord from "../../components/svg/Discord";
import Twiitter from "../../components/svg/Twiitter";
import Circles from "../../components/svg/Circles";
import MobileLayout from "../MobileLayout";
import Telegram from "../../components/svg/Telegram";
import Video from "../../components/shared/Video";

const LandingPage = ({ state, setState, index, setIndex }) => {

  const [close, setClose] = useState('')


  const openPdfInNewTab = () => {
    window.open('/assets/docs/Jogo-Media-whitepaper.pdf', '_blank');
  }

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0 });
    document
      .getElementById(state)
      ?.scrollIntoView?.({ block: "start", behavior: "smooth" });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.getAttribute('id');
        if (sectionId && entry.isIntersecting) {
          setActiveSection(sectionId);
          // setState(sectionId)
          // console.log(activeSection);
        }
      });
    });

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [state]);

  return (
    <>
      <div className="home_wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="sec-wrap">
              <div className="row">
                <div className="col-lg-12">
                  <div className="top-bar">
                    <div className="sec-left-wrap"></div>
                    <div className="sec-right-wrap">
                      <div className="left"><Wallet classes={"wallet-btn"} /></div>
                      <div className="right">
                        <Link to={'/pre-sale'}><Presale classes={"sale-btn"} /></Link>
                        <ul className="social-icons">
                          <li><Link onClick={openPdfInNewTab}> <Doc /></Link></li>
                          <li><a href="https://twitter.com/JogoAimeme" target="_blank" ><Twiitter /></a></li>
                          <li><a href="https://t.me/JogoAimeme" target="_blank" ><Telegram /></a> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 hide-on-mobile">
                  <div className="bottom-wrap">
                    <div className="left-side">
                      <Header state={state} setState={setState} activeSection={activeSection} setActiveSection={setActiveSection} />
                    </div>
                    <div className="right-side">
                      <div className="main-screen">
                        <section className="home-section-one" id="home">
                          <div className="home-wrap">
                            <div className="row">
                              <div className="col-lg-6">
                                <h2 className="first-sec-title">Join the AI meme revolution<br />with AIM! </h2>
                                <div className="detail">
                                  <p>It blends the power of AI with the humor of memes, providing a new and innovative way for users to interact with this exciting technology. AIM is poised to become a leader in this space. Don't miss out on the opportunity to be a part of this game-changing platform!</p>
                                  {/* <p>Create Browse. Vote. <br /> The Future of meme sharing is here.</p> */}
                                </div>
                              </div>
                              <div className="col-lg-6"></div>
                            </div>
                            <img className="image-one" src="/assets/images/section-one/sec-1.png" alt="" />
                            <img className="image-two" src="/assets/images/section-one/sec-2.png" alt="" />
                            <img className="image-three" src="/assets/images/section-one/sec-3.png" alt="" />
                            <img className="image-four" src="/assets/images/section-one/sec-4.png" alt="" />
                            <img className="image-five" src="/assets/images/section-one/sec-5.png" alt="" />
                            <img className="image-six" src="/assets/images/section-one/sec-6.png" alt="" />
                          </div>
                        </section>
                       <Video/>
                        <div className="sticky-background">
                          <div className="bg-fixed-img" onClick={() => setClose('')}>
                            <img src="assets/images/sticky.png" alt="" width={'100%'} height={'100%'} />
                          </div>
                          <div className="sec-absolute">

                            <TokenEconomics index={index} setIndex={setIndex} id='token' />

                            <FundAllocation index={index} setIndex={setIndex} />

                            <Snack close={close} />

                            <Team />

                          </div>

                        </div>

                      </div>
                    </div>
                  </div>

                </div>
                <MobileLayout />
              </div>


            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default LandingPage;
