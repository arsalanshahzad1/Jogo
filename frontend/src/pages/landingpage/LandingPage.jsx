import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Snack from "../../components/shared/Snack";
import Team from "../Team";
import TokenEconomics from "../TokenEconomics";
import FundAllocation from "../FundAllocation";
import Wallet from "../../components/svg/Wallet";
import Presale from "../../components/svg/Presale";
import Doc from "../../components/svg/Doc";
import Twiitter from "../../components/svg/Twiitter";
import MobileLayout from "../MobileLayout";
import Telegram from "../../components/svg/Telegram";
import Video from "../../components/shared/Video";
import { useLocation, useParams } from "react-router-dom";
import Web3Modal from "web3modal";
import { BigNumber, Contract, providers, utils } from "ethers";
import About from './About'
import AIMTOKEN_CONTRACT_ABI from '../../contractsData/AIMToken.json'
import AIMTOKEN_CONTRACT_ADDRESS from '../../contractsData/AIMToken-address.json'
import PreSales from "../PreSales";
import BillGates from "./BillGates";
import FAQ from "./FAQ";
import BuyNow from "../../components/svg/BuyNow";
import LinkedIn from "../../components/svg/LinkedIn";
import { Loader } from "../../assets/Loader/Loader";
import WhitePaper from "../../components/svg/WhitePaper";

import metamask from '../../../public/assets/images/metamask.png'
import trustwallet from '../../../public/assets/images/trustwallet.png'



const getAIMTokenContrat = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  // const provider = new ethers.providers.JsonRpcProvider(
  //   "https://polygon-mainnet.g.alchemy.com/v2/8JkHo3qUxg6xK4OpBBG7XrfND3pZL0ig"
  // );
  const signer = provider.getSigner();
  const AIMContract = new ethers.Contract(AIMTOKEN_CONTRACT_ADDRESS.address, AIMTOKEN_CONTRACT_ABI.abi, signer);
  return AIMContract;
}


const LandingPage = ({ ShowPopup,
  setShowPopup,walletConnected, changeNetwork, account, setAccount, state, setState, index, setIndex, loader, setloader }) => {
  const zero = BigNumber.from(0);
  const [roundNumber, setRoundNumber] = useState(zero);
  const web3ModalRef = useRef();
  const [close, setClose] = useState("");
  const location = useLocation();
  // const [loder, setloder] = useState(false)

  const searchParams = new URLSearchParams(location.search);

  const [activeSection, setActiveSection] = useState("home");


  const getNumberOfRound = async () => {
    try {
      // const provider = await getProviderOrSigner();

      // const tokenContract = new Contract(
      //   AIMTOKEN_CONTRACT_ADDRESS.address,
      //   AIMTOKEN_CONTRACT_ABI.abi,
      //   provider
      // );
      // Get the number of round
      const _roundNumber = await getAIMTokenContrat().round();
      // const usdPrice = await tokenContract.getLatestUSDTPrice();
      // console.log("usdPrice",usdPrice);
      setRoundNumber(_roundNumber.toString());
      // console.log("roundNumber", _roundNumber.toString());
    } catch (err) {
      console.error(err);
    }
  };

  const getUSDTPrice = async () => {
    try {
      // const provider = await getProviderOrSigner();

      // const tokenContract = new Contract(
      //   AIMTOKEN_CONTRACT_ADDRESS.address,
      //   AIMTOKEN_CONTRACT_ABI.abi,
      //   provider
      // );
      // Get the number of round
      // const _roundNumber = await tokenContract.round();
      const usdPrice = await getAIMTokenContrat().getLatestUSDTPrice();
      // console.log("usdPrice", usdPrice.toString());
      // setRoundNumber(_roundNumber.toString());
      // console.log("roundNumber", _roundNumber.toString());
    } catch (err) {
      console.error(err);
    }
  };



  const openPdfInNewTab = () => {
    window.open("/assets/docs/Jogo-Media-whitepaper.pdf", "_blank");
  };

  // useEffect(() => {
  //   // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
  //   if (!walletConnected) {
  //     // Assign the Web3Modal class to the reference object by setting it's `current` value
  //     // The `current` value is persisted throughout as long as this page is open
  //     web3ModalRef.current = new Web3Modal({
  //       network: "hardhat",
  //       providerOptions: {},
  //       disableInjectedProvider: false,
  //     });
  //     getNumberOfRound();
  //     getUSDTPrice();
  //   }
  // }, [walletConnected]);

  useEffect(() => {

    window.scrollTo({ top: 0 });
    document
      .getElementById(state)
      ?.scrollIntoView?.({ block: "start", behavior: "smooth" });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.getAttribute("id");
        if (sectionId && entry.isIntersecting) {
          setActiveSection(sectionId);
          // setState(sectionId)
          // console.log(activeSection);
        }
      });
    });
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [state]);


  // const scrollToPresale = () => {
  //   document
  //     .getElementById('presale-section')
  //     ?.scrollIntoView?.({ block: "start", behavior: "smooth" });

  // }


  console.log("hi",ShowPopup);
  // const [ShowPopup, setShowPopup] = useState(false)
  return (
    <>
      {
        loader ? <Loader /> :

          <div className="home_wrap">
            <div className="container-fluid">
              <div className="row">
                <div className="sec-wrap">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="top-bar">
                        <div className="sec-left-wrap "></div>

                        <div className="sec-right-wrap hide-on-mobile">
                          <div className="left hide">
                            <span onClick={changeNetwork}>
                              <Wallet classes={"wallet-btn"} />
                            </span>
                          </div>
                          <div className="right">
                            <Link >
                              <span onClick={() => setState('presale-section')}>
                                <BuyNow activeSection={activeSection} />
                              </span>
                            </Link>
                            <ul className="social-icons" onClick={() => {setShowPopup(!ShowPopup)}}>
                              <li>
                                <Link onClick={() => {setShowPopup(true)}}>
                                  <Wallet />
                                </Link>
                              </li>
                              {ShowPopup &&
                                <div className="connect-wallet-popup">
                                  <div className="connect-wallet-inner">
                                    <div onClick={() => setShowPopup(false)} className="close-btn">
                                      X
                                    </div>
                                    <div className="images-holder">
                                      <div className="images-inner ">
                                        <img onClick={changeNetwork} src={metamask} alt="" className="img-70" />
                                      </div>
                                      <div className="images-inner">
                                        <img onClick={changeNetwork} src={trustwallet} className=" img-100" alt="" />
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              }
                              <li>
                                <a href="https://twitter.com/JogoAimeme" target="_blank"><Twiitter /></a>
                              </li>
                              <li>
                                <a href="https://t.me/JogoAimeme" target="_blank"><Telegram /></a>{" "}
                              </li>
                              <li>
                                <a href="https://www.linkedin.com/in/jogo-media-2541501b5/" target="_blank"><LinkedIn /></a>{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="sec-right-wrap mobile-icon-links">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div className="left hide">
                              {" "}
                              <Link to={"/pre-sale"}><Presale classes={"sale-btn"} /></Link>
                            </div>
                            <div className="right"></div>
                            <ul
                              className="social-icons"
                              style={{
                                display: "flex",
                                listStyle: "none",
                                gap: "15px",
                              }}
                            >
                              <li>
                                <Link onClick={openPdfInNewTab}>
                                  {" "}
                                  <Doc />
                                </Link>
                              </li>
                              <li>
                                <a
                                  href="https://twitter.com/JogoAimeme"
                                  target="_blank"
                                >
                                  <Twiitter />
                                </a>
                              </li>
                              <li>
                                <a href="https://t.me/JogoAimeme" target="_blank">
                                  <Telegram />
                                </a>{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 hide-on-mobile">
                      <div className="bottom-wrap">
                        <div className="left-side">
                          <Header
                            state={state}
                            setState={setState}
                            activeSection={activeSection}
                            setActiveSection={setActiveSection}
                          />
                        </div>
                        <div className="right-side">
                          <div className="main-screen">
                            <section className="home-section-one" id="home">
                              <div className="home-wrap">
                                <div className="row">
                                  <div className="col-lg-6">
                                    <h2 className="first-sec-title">
                                      Join the AI meme revolution
                                      <br />
                                      with AIM!{" "}
                                    </h2>
                                    <div className="detail">
                                      <p>
                                        Welcome to AIM - the future of AI personal agents! Infusing cutting-edge AI with the humor of memes, we're pioneering an engaging digital experience. Join us, invest in innovation, and be part of this game-changing platform poised for industry leadership.
                                      </p>
                                    </div>
                                    <div className={ShowPopup ? 'white-paper-true' : "white-paper"}>
                                      <Link onClick={openPdfInNewTab}>
                                        <WhitePaper />
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="col-lg-6"></div>
                                </div>
                                <img
                                  className="image-one"
                                  src="/assets/images/section-one/sec-1.png"
                                  alt=""
                                />
                                <img
                                  className="image-two"
                                  src="/assets/images/section-one/sec-2.png"
                                  alt=""
                                />
                                <img
                                  className="image-three"
                                  src="/assets/images/section-one/sec-3.png"
                                  alt=""
                                />
                                <img
                                  className="image-four"
                                  src="/assets/images/section-one/sec-4.png"
                                  alt=""
                                />
                                <img
                                  className="image-five"
                                  src="/assets/images/section-one/sec-5.png"
                                  alt=""
                                />
                                <img
                                  className="image-six"
                                  src="/assets/images/section-one/sec-6.png"
                                  alt=""
                                />
                              </div>
                            </section>
                            <BillGates />
                            <Video />
                            <PreSales changeNetwork={changeNetwork} account={account} setAccount={setAccount} loader={loader} setloader={setloader} />
                            <div className="sticky-background">
                              <div
                                className="bg-fixed-img"
                                onClick={() => setClose("")}
                              >
                                <img
                                  src="assets/images/sticky.png"
                                  alt=""
                                  width={"100%"}
                                  height={"100%"}
                                />
                              </div>
                              <div className="sec-absolute">
                                <TokenEconomics
                                  index={index}
                                  setIndex={setIndex}
                                  id="token"
                                  activeRound={roundNumber}
                                />

                                <FundAllocation index={index} setIndex={setIndex} />

                                <Snack close={close} />

                                <Team />

                                <About />
                                <FAQ />
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
      }
    </>
  );
};

export default LandingPage;
