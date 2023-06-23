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


const LandingPage = ({ state, setState, index, setIndex , }) => {
  const zero = BigNumber.from(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const [roundNumber, setRoundNumber] = useState(zero);
  const web3ModalRef = useRef();
  const [close, setClose] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [activeSection, setActiveSection] = useState("home");



  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Sepolia network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 31337) {
      // window.alert("Change the network to Sepolia");
      // throw new Error("Change network to Sepolia");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }

    return web3Provider;
  };

  /*
  connectWallet: Connects the MetaMask wallet
  */

  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      console.log("Connecte Wallet");
      setWalletConnected(true);
      console.log("setWalletConnected ", walletConnected);
    } catch (err) {
      console.error(err);
    }
  };

  const getNumberOfRound = async () => {
    try {
      const provider = await getProviderOrSigner();

      const tokenContract = new Contract(
        AIMTOKEN_CONTRACT_ADDRESS.address,
        AIMTOKEN_CONTRACT_ABI.abi,
        provider
      );
      // Get the number of round
      const _roundNumber = await tokenContract.round();
      // const usdPrice = await tokenContract.getLatestUSDTPrice();
      // console.log("usdPrice",usdPrice);
      setRoundNumber(_roundNumber.toString());
      console.log("roundNumber", _roundNumber.toString());
    } catch (err) {
      console.error(err);
    }
  };

  const getUSDTPrice = async () => {
    try {
      const provider = await getProviderOrSigner();

      const tokenContract = new Contract(
        AIMTOKEN_CONTRACT_ADDRESS.address,
        AIMTOKEN_CONTRACT_ABI.abi,
        provider
      );
      // Get the number of round
      // const _roundNumber = await tokenContract.round();
      const usdPrice = await tokenContract.getLatestUSDTPrice();
      console.log("usdPrice", usdPrice.toString());
      // setRoundNumber(_roundNumber.toString());
      // console.log("roundNumber", _roundNumber.toString());
    } catch (err) {
      console.error(err);
    }
  };



  const openPdfInNewTab = () => {
    window.open("/assets/docs/Jogo-Media-whitepaper.pdf", "_blank");
  };

  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
        network: "hardhat",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
      getNumberOfRound();
      getUSDTPrice();
    }
  }, [walletConnected]);

  

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
          console.log(activeSection);
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

  return (
    <>
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
                        <span onClick={connectWallet}>
                          <Wallet classes={"wallet-btn"} />
                        </span>
                      </div>
                      <div className="right">
                        <Link >
                          <span onClick={() =>setState('presale-section')}>
                            <BuyNow activeSection={activeSection} />
                          </span>
                        </Link>
                        <ul className="social-icons">
                          <li>
                            <Link onClick={openPdfInNewTab}>{" "}<Doc />
                            </Link>
                          </li>
                          <li>
                            <a href="https://twitter.com/JogoAimeme" target="_blank"><Twiitter/></a>
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
                                    {/* It blends the power of AI with the humor of
                                    memes, providing a new and innovative way
                                    for users to interact with this exciting
                                    technology. AIM is poised to become a leader
                                    in this space. Don't miss out on the
                                    opportunity to be a part of this
                                    game-changing platform! */}
                                    Welcome to AIM - the future of AI personal agents! Infusing cutting-edge AI with the humor of memes, we're pioneering an engaging digital experience. Join us, invest in innovation, and be part of this game-changing platform poised for industry leadership.
                                  </p>
                                  {/* <p>Create Browse. Vote. <br /> The Future of meme sharing is here.</p> */}
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
                            {/* <BillGates /> */}
                          </div>
                        </section>
                        <BillGates />
                        <Video />
                        <PreSales />
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
                          {/* <PreSales /> */}
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
    </>
  );
};

export default LandingPage;
