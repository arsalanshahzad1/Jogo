import React, { useEffect, useState, useRef } from "react";
import Header from "../pages/landingpage/Header";
import Snack from "../components/shared/Snack";
import Buy from "../components/svg/Buy";
import { AiOutlineClose } from "react-icons/ai";
import BuyWithUsdt from "../components/svg/BuyWithUsdt";
import Disconnect from "../components/svg/Disconnect";
import { Link } from "react-router-dom";
import BackButton from "../components/svg/BackButton";
import Wallet from "../components/svg/Wallet";
import Web3Modal from "web3modal";
import { BigNumber, Contract, ethers, providers, utils } from "ethers";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Web3 from "web3";
import usdtabi from "../contractsData/TetherToken.json";
import usdtAddress from "../contractsData/TetherToken-address.json";
import AIMTOKEN_CONTRACT_ABI from '../contractsData/AIMToken.json'
import AIMTOKEN_CONTRACT_ADDRESS from '../contractsData/AIMToken-address.json'
import TETHER_TOKEN_CONTRACT_ABI from '../contractsData/TetherToken.json'
import TETHER_TOKEN_CONTRACT_ADDRESS from '../contractsData/TetherToken-address.json'

// import {
//   AIMTOKEN_CONTRACT_ABI,
//   AIMTOKEN_CONTRACT_ADDRESS,
//   TETHER_TOKEN_CONTRACT_ABI,
//   TETHER_TOKEN_CONTRACT_ADDRESS,
// } from "./../.././constants/constants";

import Claim from "../components/svg/Claim";

const PreSales = () => {
  const zero = BigNumber.from(0);

  const [walletConnected, setWalletConnected] = useState(false);

  const [loading, setLoading] = useState(false);

  const web3ModalRef = useRef();

  const [connect, sendUSDTBox] = useState(false);

  const [connector, sendETHBox] = useState(false);

  const [roundNumber, setRoundNumber] = useState(zero);

  const [roundStatus, setRoundStatus] = useState(false);

  const [roundPrice, setRoundPrice] = useState(zero);

  const [coinsPerDollar, setCoinsPerDollar] = useState(zero);

  const [userAddress, setUserAddress] = useState("");

  const [totalSupply, setTotalSupply] = useState(0);

  const [raisedAmount, setRaisedAmount] = useState(0);

  const [onBars, setOnBars] = useState(0);

  const [offBars, setOffBars] = useState(0);

  const [usersTokens, setUsersTokens] = useState(0);

  const onBarsList = [];

  const offBarsList = [];

  for (let i = 0; i < offBars; i++) {
    offBarsList.push(
      <div
        className="loader-bar-black"
        style={{ display: "block" }}
        key={i}
      ></div>
    );
  }

  for (let i = 0; i < onBars; i++) {
    onBarsList.push(
      <div className="loader-bar" style={{ display: "block" }} key={i}></div>
    );
  }



  const getProviderOrSigner = async (needSigner = false) => {
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
      // console.log("signer", signer);

      return signer;
    }
    return web3Provider;
  };


  const checkActiveRound = async () => {
    console.log("checkActiveRound HEREEEEEEEEE");
    const _round = Number(roundNumber);
    console.log("roundNumber", roundNumber);

    if (_round > 0 || _round > 6) {
      console.log("Round Status", _round);
      setRoundStatus(true);
    } else {
      console.log("Round Status", _round);
      setRoundStatus(false);
    }
  };
  // useEffect(()=>{

  //   getNumberOfRound();
  // })
  const getNumberOfRound = async () => {
    try {
      const provider = await getProviderOrSigner();
      const tokenContract = new Contract(
        AIMTOKEN_CONTRACT_ADDRESS.address,
        AIMTOKEN_CONTRACT_ABI.abi,
        provider
      );
      // Get the number of round
      console.log(tokenContract, "tokenCOntract")
      const _roundNumber = await tokenContract.round();

      setRoundNumber(_roundNumber.toString());
      console.log("roundNumber", _roundNumber.toString());

      // return _roundNumber.toString();
    } catch (err) {
      console.error(err);
    }
  };

  const claimTokens = async () => {
    try {
      const signer = await getProviderOrSigner(true);

      const tokenContract = new Contract(
        AIMTOKEN_CONTRACT_ADDRESS.address,
        AIMTOKEN_CONTRACT_ABI.abi,
        signer
      );

      //with the help of this you can change the Round  

      // ye line sale start kr rhi h aur dubara click krney pey next round jayegi
      await tokenContract.startTheSale();

      //////////////////////////  
      // jb rounds khtm hjaye to tokens claim krney k liye isko uncomment krden aur opar wali ko comment krden
      // await tokenContract.claimAIMToken();

      window.alert("Tokens claimed");
    } catch (err) {
      console.error(err);
    }
  };

  // const numberOFICOTokens = async () => {
  //   try {
  //     const provider = await getProviderOrSigner();

  //     const tokenContract = new Contract(
  //       AIMTOKEN_CONTRACT_ADDRESS.address,
  //       AIMTOKEN_CONTRACT_ABI.abi,
  //       provider
  //     );
  //     // Get the number of round
  //     const numberOfTokens = await tokenContract.soldTokens(userAddress);

  //     setUsersTokens(numberOfTokens.toString());
  //     // console.log("roundNumber", _roundNumber.toString());

  //     // return _roundNumber.toString();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const getCoinsPerDollar = async () => {
    if (roundPrice > 0) {
      const coins = 1 / roundPrice;
      // console.log("roundPrice", roundPrice);
      // console.log("1 / roundPrice", 1 / roundPrice);
      console.log("coins", coins);
      setCoinsPerDollar(coins);
    }
  };

  setInterval(async () => {

    await getNumberOfRound()
    await getRaisedAmount();
  }, 10000);


  const getRoundPrice = async () => {
    const round = roundNumber;
    let _roundPrice;

    // const usdtPrice = Number(getUSDTPrice());
    if (round == 1) {
      _roundPrice = 0.005;
    } else if (round == 2) {
      _roundPrice = 0.01;
    } else if (round == 3) {
      _roundPrice = 0.02;
    } else if (round == 4) {
      _roundPrice = 0.04;
    } else if (round == 5) {
      _roundPrice = 0.08;
    } else {
      _roundPrice = 0;
    }

    setRoundPrice(_roundPrice.toString());
  };

  // const getPayableAmountInUSDT = async () => {
  //   const _amount = Number(document.getElementById("usdtInput").value);

  //   return _amount * roundPrice * 10 * 10 ** 6;
  // };

  const getCurrentUser = async () => {
    const web3 = new Web3(window.ethereum);

    // Request access to the user's accounts
    await window.ethereum.enable();

    // Get the user's addresses from Metamask
    const accounts = await web3.eth.getAccounts();

    // Retrieve the user's address
    const userAddress = setUserAddress(accounts[0]);
    // console.log("userAddress", accounts[0]);
  };

  // const sendUSDT = async () => {
  //   const signer = await getProviderOrSigner(true);

  //   // Load the USDT contract
  //   const usdtContract = new Contract(
  //     TETHER_TOKEN_CONTRACT_ADDRESS,
  //     TETHER_TOKEN_CONTRACT_ABI,
  //     signer
  //   );

  //   const tokenContract = new Contract(
  //     AIMTOKEN_CONTRACT_ADDRESS,
  //     AIMTOKEN_CONTRACT_ABI,
  //     signer
  //   );

  //   // Prompt the user for the token amount using MetaMask
  //   const _amount = Number(
  //     await window.ethereum.request({
  //       method: "eth_sendTransaction",
  //       params: [
  //         {
  //           from: userAddress,
  //           to: TETHER_TOKEN_CONTRACT_ADDRESS,
  //           // data: "0x", // Optional contract data if needed
  //         },
  //       ],
  //     })
  //   );

  //   console.log("_amount", _amount);

  //   console.log("tokenContract", tokenContract.address);
  //   console.log("usdtContract", usdtContract.address);

  //   const approveTokens = 10 * 10 ** 6;
  //   const approval = await usdtContract.approve(
  //     AIMTOKEN_CONTRACT_ADDRESS,
  //     approveTokens
  //   );

  //   await approval.wait();

  //   const tokensPurchase = ethers.utils.parseEther(_amount.toString());
  //   console.log("tokensPurchase", tokensPurchase.toString());
  //   await tokenContract.mintByUSDT(tokensPurchase.toString());
  // };

  const sendUSDT = async () => {
    const signer = await getProviderOrSigner(true);

    // Load the USDT contract
    const usdtContract = new Contract(
      TETHER_TOKEN_CONTRACT_ADDRESS.address,
      TETHER_TOKEN_CONTRACT_ABI.abi,
      signer
    );

    const tokenContract = new Contract(
      AIMTOKEN_CONTRACT_ADDRESS.address,
      AIMTOKEN_CONTRACT_ABI.abi,
      signer
    );

    const _amount = Number(document.getElementById("usdtInput").value);
    const tokensPurchase = ethers.utils.parseEther(_amount.toString());

    console.log("tokensPurchase", tokensPurchase.toString(), roundPrice);

    const amountUSDT = await tokenContract.sellTokenInUDSTPrice(
      tokensPurchase.toString(),
      roundPrice * 10 ** 6
    );

    console.log("amountUSDT", amountUSDT.toString());

    // await tokenContract.startTheSale();

    const appprove = await usdtContract.approve(
      AIMTOKEN_CONTRACT_ADDRESS.address,
      amountUSDT
    );

    appprove.wait();

    console.log("tokensPurchase", tokensPurchase.toString());
    await tokenContract.mintByUSDT(tokensPurchase.toString());

    //
    //
    //
    //
    //
    //
    //

    // let amountToSend = await getPayableAmountInUSDT();
    // console.log("CHECK1");
    // console.log("TETHER_TOKEN_CONTRACT_ABI", TETHER_TOKEN_CONTRACT_ABI);
    // console.log("TETHER_TOKEN_CONTRACT_ADDRESS", TETHER_TOKEN_CONTRACT_ADDRESS);
    // console.log("signer", usdtabi.abi, usdtAddress.address);

    // console.log("tokenContractusdt", usdtContract.address);
    // await tokenContract.startTheSale();

    // console.log("CHECK2");

    // // Approve the contract to spend the USDT tokens on behalf of the user
    // await usdtContract
    //   .approve(AIMTOKEN_CONTRACT_ADDRESS, amountToSend)
    //   .send({ from: userAddress });
    // console.log("CHECK3");

    // // Call the mintByUSDT function in your contract
    // await AIMTOKEN_CONTRACT_ADDRESS.methods
    //   .mintByUSDT(amountToSend)
    //   .send({ from: userAddress });
    // console.log("CHECK4");

    /*
      This is throwing an error
      */

    // console.log("USDT tokens sent successfully!");

    // try {
    //   const signer = await getProviderOrSigner(true);

    //   const tokenContract = new Contract(
    //     AIMTOKEN_CONTRACT_ADDRESS,
    //     AIMTOKEN_CONTRACT_ABI,
    //     signer
    //   );

    //   // let value = roundPrice * usdtPrice * amount;
    //   let payment = utils.parseEther("0.1");
    //   // console.log("round", round);
    //   console.log("roundPrice", roundPrice);
    //   // console.log("amount", amount);
    //   // console.log("value", value);

    //   const tx = await tokenContract.mint(payment, {
    //     value: utils.parseEther(payment),
    //   });

    //   setLoading(true);
    //   // wait for the transaction to get mined
    //   await tx.wait();
    //   setLoading(false);
    //   window.alert("Successfully minted the Tokens");
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const sendETH = async () => {
    try {
      const signer = await getProviderOrSigner(true);

      // console.log("signer", signer.address);

      const tokenContract = new Contract(
        AIMTOKEN_CONTRACT_ADDRESS.address,
        AIMTOKEN_CONTRACT_ABI.abi,
        signer
      );

      const _amount = Number(document.getElementById("ethInput").value);

      let tokenEth = ethers.utils.parseEther(_amount.toString())

      console.log("Tokensssssssss", tokenEth?.toString(), roundPrice?.toString() * 10 ** 6)



      const amountValue = await tokenContract.sellTokenInETHPrice(tokenEth?.toString(), roundPrice * 10 ** 6);
      console.log("Tokensssssssss1", amountValue.toString())

      const tx = await tokenContract.mintByEth(tokenEth.toString(), {
        // value signifies the cost of one crypto dev token which is "0.001" eth.
        // We are parsing `0.001` string to ether using the utils library from ethers.js
        value: amountValue.toString(),
      });

      setLoading(true);
      // wait for the transaction to get mined
      await tx.wait();
      setLoading(false);
      window.alert("Successfully minted Crypto Dev Tokens");
    } catch (err) {
      console.error(err);
    }
  };





  const getNumberOfTokensOwned = async () => {
    try {
      const provider = await getProviderOrSigner();

      const tokenContract = new Contract(
        AIMTOKEN_CONTRACT_ADDRESS.address,
        AIMTOKEN_CONTRACT_ABI.abi,
        provider
      );

      console.log("tokensOfUser1", userAddress);
      // Get the number of round
      const tokensOfUser = await tokenContract.soldTokens(userAddress);

      // setRoundNumber(tokensOfUser.toString());
      console.log("tokensOfUser", tokensOfUser.toString());



      // // Load the USDT contract
      // const usdtContract = new Contract(
      //   TETHER_TOKEN_CONTRACT_ADDRESS.address,
      //   TETHER_TOKEN_CONTRACT_ABI.abi,
      //   provider
      // );

      // const USDTOfUser = await tokenContract.soldTokens(userAddress);





      // return _roundNumber.toString();
    } catch (err) {
      console.error(err);
    }
  };






  /*
          connectWallet: Connects the MetaMask wallet
        */
  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  const disConnectWallet = async () => {
    try {
      console.log("DISCONNECT IN TRY");

      web3ModalRef.current.clearCachedProvider();
      window.localStorage.clear();
      setWalletConnected(false);
      console.log("walletConnected after button pressed ", walletConnected);
    } catch (err) {
      console.log("DISCONNECT IN CATCH");
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
      // console.log("usdPrice", usdPrice.toString());
      // setRoundNumber(_roundNumber.toString());
      // console.log("roundNumber", _roundNumber.toString());

      return usdPrice.toString();
    } catch (err) {
      console.error(err);
    }
  };

  const getTotalAmountToRaise = async () => {
    try {
      const provider = await getProviderOrSigner();

      const tokenContract = new Contract(
        AIMTOKEN_CONTRACT_ADDRESS.address,
        AIMTOKEN_CONTRACT_ABI.abi,
        provider
      );
      // Get the number of round
      // const _roundNumber = await tokenContract.round();
      const _totalSupply = (await tokenContract.totalSupply()) / 10 ** 18;
      // console.log("totalSupply", _totalSupply.toString());
      setTotalSupply(_totalSupply.toString());
      // console.log("roundNumber", _roundNumber.toString());

      // return totalSupply.toString();
    } catch (err) {
      console.error(err);
    }
  };

  const getRaisedAmount = async () => {
    try {
      const provider = await getProviderOrSigner();


      const usdtContract = new Contract(
        TETHER_TOKEN_CONTRACT_ADDRESS.address,
        TETHER_TOKEN_CONTRACT_ABI.abi,
        provider
      );

      // const tokenContract = new Contract(
      //   AIMTOKEN_CONTRACT_ADDRESS.address,
      //   AIMTOKEN_CONTRACT_ABI.abi,
      //   provider
      // );

      // USDT in contract
      // console.log("USDT in contract");

      const balanceOfUSDT = Number(
        await usdtContract.balanceOf(AIMTOKEN_CONTRACT_ADDRESS.address)
      );
      // console.log("BalanceInUSDT", typeof balanceOfUSDT);
      // console.log("BalanceInUSDT", balanceOfUSDT.toString());

      // ETH in contract
      // console.log("ETH in contract");

      const web3 = new Web3(window.ethereum);

      const balanceOfETH = Number(
        await web3.eth.getBalance(AIMTOKEN_CONTRACT_ADDRESS.address)
      );
      // console.log("balanceOfETH", balanceOfETH);

      // Convert ETH in USDT

      // console.log("ETH in USDT");

      const priceUSDT = Number(await getUSDTPrice());

      const ethToUSDT = (balanceOfETH / priceUSDT);

      // const ethToUSDT = balanceOfETH/1*10**18 * priceUSDT/1*10**18;
      console.log("ethToUSDT", ethToUSDT);
      console.log("balanceOfETH", balanceOfETH);
      console.log("priceUSDT", priceUSDT);
      // console.log("priceUSDT", typeof priceUSDT);

      // Add both the amounts of USDT

      // console.log("Add both the amounts of USDT");

      const totalUSDT = Number(balanceOfUSDT + ethToUSDT) / 10 ** 6;
      // console.log("balanceOfUSDT", typeof balanceOfUSDT);
      // console.log("balanceOfUSDT", balanceOfUSDT.toString());

      console.log("totalUSDT", totalUSDT);

      // console.log("totalUSDT.toFixed", parseFloat(totalUSDT.toFixed(2)));
      // console.log("typeof totalUSDT", typeof totalUSDT);

      setRaisedAmount(totalUSDT);
    } catch (err) {
      console.error(err);
    }
  };

  const getNumberOfBars = async () => {
    const totalBars = 20;
    const amountPerBar = Number(totalSupply) / totalBars;

    // console.log("amountPerBar", amountPerBar);
    // console.log("raisedAmount", raisedAmount);

    const _onBars = Math.round(Number(raisedAmount) / amountPerBar);

    // console.log("onBars here", _onBars);
    setOnBars(_onBars);

    const _offBars = Math.round(totalBars - _onBars - 1);
    // console.log("_offBars here", _offBars);
    setOffBars(_offBars);
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
      getUSDTPrice();
      // numberOFICOTokens();
    }
  }, [walletConnected]);

  useEffect(() => {
    console.log('CALLL')

  }, [roundNumber]);

  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    // if (!walletConnected) {
    // Assign the Web3Modal class to the reference object by setting it's `current` value
    // The `current` value is persisted throughout as long as this page is open
    web3ModalRef.current = new Web3Modal({
      network: "hardhat",
      providerOptions: {},
      disableInjectedProvider: false,
    });
    getRaisedAmount();
    getNumberOfTokensOwned();
    getNumberOfBars();
    getTotalAmountToRaise();
    getUSDTPrice();
    getNumberOfRound();
    getCoinsPerDollar();
    getRoundPrice();
    getCurrentUser();
    checkActiveRound();
    getRaisedAmount();
    //   connectWallet();
    // }
  }, [totalSupply, roundPrice]);

  return (
    <>
      <section className="sale-section">
        <div className="wrap" id="presale-section">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="left-wrap">
                <div className="detail-wrap">
                  <h2>
                    {/* Round{" "} */}
                    {roundStatus
                      ? "Round:" + roundNumber + " has started!"
                      : "No round is live at the moment"}
                  </h2>
                  {/* <h3>has started!</h3> */}
                  <p>
                    <span>1 USDT</span>
                    <span> =</span>
                    <span>{coinsPerDollar.toString()} ICO</span>
                  </p>
                </div>
                <div className="image-wrap">
                  <div className="wrap">
                    <img
                      src="/assets/images/bg-frame.png"
                      alt=""
                      width={"100%"}
                    />
                    <div className="detail">
                      <h2>
                        You have {usersTokens.toString()} ICO
                        Tokens
                      </h2>
                      {/* <h3>View your potential returns</h3> */}
                      <p className="p1">Connected Wallet</p>
                      <p className="p2">{userAddress}</p>
                      {roundStatus && (
                        <div className="btn-line-one">
                          <span
                            onClick={() => sendUSDTBox(true)}
                          >
                            {/* <Claim  classes={"buy-with-usdt"}/> */}
                            <BuyWithUsdt
                              classes={"buy-with-usdt"}
                            />
                          </span>

                          <span
                            onClick={() => sendETHBox(true)}
                          >
                            <Buy classes={"buy-with-eth"} />
                          </span>
                        </div>
                      )}

                      <div className="btn-line-two">
                        <span onClick={claimTokens}>
                          {/* <Disconnect classes={"disconnect"} /> */}
                          <Claim classes={"buy-with-usdt"} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="right-wrap">
                <img
                  src="/assets/images/nft.png"
                  alt=""
                  width={"60%"}
                />
                <p>
                  <span>USDT Raised </span>
                  <br />
                  <span>
                    {(raisedAmount.toFixed(2))} /{" "}
                    {totalSupply.toString()}
                  </span>
                </p>
                <h2>Amount raised</h2>
                <div className="loader-root">
                  <div
                    className="loader-inner"
                    style={{
                      width:
                        "max(min(25.5rem, 100% - 0.75rem), 3.375rem)",
                    }}
                  >
                    <div className="loader-bar-container">
                      {/* FILLED BLOCK */}

                      {onBarsList}

                      {/* <div
                                        className="loader-bar"
                                        style={{ display: "block" }}
                                      ></div>

                                      <div
                                        className="loader-bar"
                                        style={{ display: "block" }}
                                      ></div>
                                      <div
                                        className="loader-bar"
                                        style={{ display: "block" }}
                                      ></div>
                                      <div
                                        className="loader-bar"
                                        style={{ display: "block" }}
                                      ></div>
                                      <div
                                        className="loader-bar"
                                        style={{ display: "block" }}
                                      ></div>
                                      <div
                                        className="loader-bar"
                                        style={{ display: "block" }}
                                      ></div>
                                      <div
                                        className="loader-bar"
                                        style={{ display: "block" }}
                                      ></div>
                                      <div
                                        className="loader-bar"
                                        style={{ display: "block" }}
                                      ></div>
                                      <div
                                        className="loader-bar"
                                        style={{ display: "block" }}
                                      ></div>
                                      <div
                                        className="loader-bar"
                                        style={{ display: "block" }}
                                      ></div>
                                      <div
                                        className="loader-bar"
                                        style={{ display: "block" }}
                                      ></div>
                                      <div
                                        className="loader-bar"
                                        style={{ display: "block" }}
                                      ></div> */}

                      {/* BLINKING BLOCK */}
                      <div
                        className="loader-bar last"
                        style={{ display: "block" }}
                      ></div>

                      {/* BLACK BLOCKS */}

                      {offBarsList}

                      {/* <div
                                        className="loader-bar-black"
                                        style={{ display: "block" }}
                                      ></div>
                                      <div
                                        className="loader-bar-black"
                                        style={{ display: "block" }}
                                      ></div>
                                      <div
                                        className="loader-bar-black"
                                        style={{ display: "block" }}
                                      ></div>
                                      <div
                                        className="loader-bar-black"
                                        style={{ display: "block" }}
                                      ></div>
                                      <div
                                        className="loader-bar-black"
                                        style={{ display: "block" }}
                                      ></div>
                                      <div
                                        className="loader-bar-black"
                                        style={{ display: "block" }}
                                      ></div>
                                      <div
                                        className="loader-bar-black"
                                        style={{ display: "block" }}
                                      ></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            className="image-one"
            src="/assets/images/section-one/sec-1.png"
            alt=""
          />
        </div>
      </section>

      <Modal
        show={connect}
        onHide={() => sendUSDTBox(false)}
        centered
        size="lg"
        className="connect-modal-wrap"
        backdrop="static"
        keyboard={false}
      >
        <div className="modal-body">
          <div className="connect-close">
            <AiOutlineClose onClick={() => sendUSDTBox(false)} />
          </div>
          <div className="connect-data">
            <h2>Buy with USDT</h2>
            <br />

            <input
              placeholder="Enter number of tokens"
              type="number"
              id="usdtInput"
            ></input>
            <div className="button">
              <br />
              <span onClick={sendUSDT}><BuyWithUsdt /></span>
              {/* <button onClick={sendUSDT}>Buy</button> */}
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal for ETH */}
      <Modal
        show={connector}
        onHide={() => sendETHBox(false)}
        centered
        size="lg"
        className="connect-modal-wrap"
        backdrop="static"
        keyboard={false}
      >
        <div className="modal-body">
          <div className="connect-close">
            <AiOutlineClose onClick={() => sendETHBox(false)} />
          </div>
          <div className="connect-data">
            <h2>Buy with Eth</h2>
            <br />

            <input
              placeholder="Enter number of tokens"
              type="number"
              id="ethInput"
            ></input>
            <div className="button">
              <br />
              <span onClick={sendETH}><Buy /></span>
              {/* <button onClick={sendETH}>Buy</button> */}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PreSales;
