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
import apis from "../Services";
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

const PreSales = ({loader,setloader}) => {
  const zero = BigNumber.from(0);
  // console.log("loding",loader);
  // console.log("setloding",setloader);

  const [walletConnected, setWalletConnected] = useState(false);

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
  const [price, setPrice] = useState(null)

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
    const _round = Number(roundNumber);

    if (_round > 0 || _round > 6) {
      setRoundStatus(true);
    } else {
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
      const _roundNumber = await tokenContract.round();

      setRoundNumber(_roundNumber.toString());

      // return _roundNumber.toString();
    } catch (err) {
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

 

  const getCoinsPerDollar = async () => {
    if (roundPrice > 0) {
      const coins = 1 / roundPrice;
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



  const getCurrentUser = async () => {
    const web3 = new Web3(window.ethereum);

    // Request access to the user's accounts
    await window.ethereum.enable();

    // Get the user's addresses from Metamask
    const accounts = await web3.eth.getAccounts();

    // Retrieve the user's address
    const userAddress = setUserAddress(accounts[0]);
  };

 
  const sendUSDT = async () => {
    try {
     
      setloader(true);
      
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
      
      const _amount = Number(price);
      // console.log(_amount,"_amount2");
      // const _amount = Number(document.getElementById("usdtInput").value);
      const tokensPurchase = ethers.utils.parseEther(_amount.toString());
  
      const amountUSDT = await tokenContract.sellTokenInUDSTPrice(
        tokensPurchase.toString(),
        roundPrice * 10 ** 6
      );
   
      if(amountUSDT.toString() < 30000000){
        alert("please Purchase more than 30 doller Token");
        window.location.reload();
      }

      console.log("amountUSDT",amountUSDT.toString());
      const appprove = await usdtContract.approve(
        AIMTOKEN_CONTRACT_ADDRESS.address,
        amountUSDT
      );
  
      appprove.wait();
  
      let tx = await tokenContract.mintByUSDT(tokensPurchase.toString());
  
      await tx.wait();
      let reposnse = await tokenContract.on("RoundData",handleEvent);
      setPrice('');   
    } catch (error) {
      setloader(false)
      console.log(error);
    }


    
  };

  const sendETH = async () => {
 
       try {
      setloader(true);
      const signer = await getProviderOrSigner(true);

      const tokenContract = new Contract(
        AIMTOKEN_CONTRACT_ADDRESS.address,
        AIMTOKEN_CONTRACT_ABI.abi,
        signer
      );
      
      const _amount = Number(price);
      
      let tokenEth = ethers.utils.parseEther(_amount.toString())

  
      // const _amount = Number(document.getElementById("ethInput").value);

      const amountUSDT = await tokenContract.sellTokenInUDSTPrice(
        tokenEth?.toString(),
        roundPrice * 10 ** 6
      );
   
      if(amountUSDT?.toString() < 30000000){
        alert("please Purchase more than 30 doller Token");
        window.location.reload();
      }
      
      

      const amountValue = await tokenContract.sellTokenInETHPrice(tokenEth?.toString(), roundPrice * 10 ** 6);

      const tx = await tokenContract.mintByEth(tokenEth.toString(), {
        // value signifies the cost of one crypto dev token which is "0.001" eth.
        // We are parsing `0.001` string to ether using the utils library from ethers.js
        value: amountValue.toString(),
      });

      // wait for the transaction to get mined
      await tx.wait();

      let success = await tokenContract.on("RoundData",handleEvent);
      setPrice('');
      // console.log("success",success);
    
    
    } catch (err) {
      setloader(false);
      console.log(err);
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
      // Get the number of round
      const tokensOfUser = await tokenContract.soldTokens(userAddress);

      // setRoundNumber(tokensOfUser.toString());



      // // Load the USDT contract
      // const usdtContract = new Contract(
      //   TETHER_TOKEN_CONTRACT_ADDRESS.address,
      //   TETHER_TOKEN_CONTRACT_ABI.abi,
      //   provider
      // );

      // const USDTOfUser = await tokenContract.soldTokens(userAddress);





      // return _roundNumber.toString();
    } catch (err) {
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
    }
  };

  const disConnectWallet = async () => {
    try {

      web3ModalRef.current.clearCachedProvider();
      window.localStorage.clear();
      setWalletConnected(false);
    } catch (err) {
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
      setTotalSupply(_totalSupply.toString());

      // return totalSupply.toString();
    } catch (err) {
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
      // console.log("priceUSDT", typeof priceUSDT);

      // Add both the amounts of USDT

      // console.log("Add both the amounts of USDT");

      const totalUSDT = Number(balanceOfUSDT + ethToUSDT) / 10 ** 6;
      // console.log("balanceOfUSDT", typeof balanceOfUSDT);
      // console.log("balanceOfUSDT", balanceOfUSDT.toString());


      // console.log("totalUSDT.toFixed", parseFloat(totalUSDT.toFixed(2)));
      // console.log("typeof totalUSDT", typeof totalUSDT);

      setRaisedAmount(totalUSDT);
    } catch (err) {
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


  const handleEvent = async (_round, _user, _soldToken, _BuywithEth, _BuywithUSDT) => {
    // console.log("call");
    // console.log('data', {
    //   round: _round.toString(),
    //   user: _user.toString(),
    //   soldToken: _soldToken.toString(),
    //   eth_amount: _BuywithEth.toString(),
    //   buyWithUSDT: _BuywithUSDT.toString()
    // })



    const data = {
      round: _round.toString(),
      user_address: _user.toString(),
      token_sale: _soldToken.toString(),
      eth_amount: _BuywithEth.toString(),
      usdt_amount: _BuywithUSDT.toString()
    }

    const response = await apis.addUser(data);
    // console.log('response',response.data.status);
    if(response.data.status){
      sendUSDTBox(false)
      window.alert("Successfully minted Crypto Dev Tokens");
      setloader(false);
      window.location.reload();
    }
    else{
      sendUSDTBox(false);
      setloader(false);
      window.location.reload();
    }
  
 }




















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
      <section className="sale-section" id="presale-section">
        <div className="wrap" >
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
                    <span> = </span>
                    <span>{coinsPerDollar.toString()} AIM</span>
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
                        You have {usersTokens.toString()} AIM
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
                  <span>USDT Raised: </span>
                  <br />
                  <span>
                    {(raisedAmount.toFixed(2))} /{" "}
                    {totalSupply.toString()}
                  </span>
                </p>
                <h2>Amount raised</h2>
                <p>
                  <span>Token Address:</span>
                  <br/>
                  <span>0x23250A16AFDd06c9e2c44E3F7A6CcE5A23B2107d</span>
                </p>
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
              // id="usdtInput"
              onChange={(e) => setPrice(e.target.value)}
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
              // id="ethInput"
              onChange={(e) => setPrice(e.target.value)}
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
