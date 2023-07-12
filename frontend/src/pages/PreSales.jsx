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
import Modal from "react-bootstrap/Modal";
import Web3 from "web3";
import AIMTOKEN_CONTRACT_ABI from '../contractsData/AIMToken.json'
import AIMTOKEN_CONTRACT_ADDRESS from '../contractsData/AIMToken-address.json'
import TETHER_TOKEN_CONTRACT_ABI from '../contractsData/TetherToken.json'
import TETHER_TOKEN_CONTRACT_ADDRESS from '../contractsData/TetherToken-address.json'
import Claim from "../components/svg/Claim";


const getAIMTokenContrat = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  // const provider = new ethers.providers.JsonRpcProvider(
  //   "https://polygon-mainnet.g.alchemy.com/v2/8JkHo3qUxg6xK4OpBBG7XrfND3pZL0ig"
  // );
  const signer = provider.getSigner();
  const AIMContract = new ethers.Contract(AIMTOKEN_CONTRACT_ADDRESS.address, AIMTOKEN_CONTRACT_ABI.abi, signer);
  return AIMContract;
}


const getUSDTTokenContrat = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  // const provider = new ethers.providers.JsonRpcProvider(
  //   "https://polygon-mainnet.g.alchemy.com/v2/8JkHo3qUxg6xK4OpBBG7XrfND3pZL0ig"
  // );
  const signer = provider.getSigner();
  const USDTContract = new ethers.Contract(TETHER_TOKEN_CONTRACT_ADDRESS.address, TETHER_TOKEN_CONTRACT_ABI.abi, signer);
  return USDTContract;
}

const getProviderAIMTokenContrat = () => {
  // const provider = new ethers.providers.Web3Provider(ethereum);
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );

  // const provider = new ethers.providers.JsonRpcProvider(
  //   "https://eth-mainnet.g.alchemy.com/v2/ZNNDDz0q4xxwLvO9wQw-dPsHQ0urQ_J8"
  // );

  // const signer = provider.getSigner();
  const AIMContract = new ethers.Contract(AIMTOKEN_CONTRACT_ADDRESS.address, AIMTOKEN_CONTRACT_ABI.abi, provider);
  return AIMContract;
}

const PreSales = ({ changeNetwork, account, setAccount, loader, setloader }) => {
  const zero = BigNumber.from(0);
  // console.log("loding",loader);
  // console.log("setloding",setloader);


  const web3ModalRef = useRef();

  const [connect, sendUSDTBox] = useState(false);

  const [connector, sendETHBox] = useState(false);

  const [roundNumber, setRoundNumber] = useState(zero);

  const [roundStatus, setRoundStatus] = useState(false);

  const [claimStatus, setClaimStatus] = useState(false);

  const [roundPrice, setRoundPrice] = useState(zero);

  const [coinsPerDollar, setCoinsPerDollar] = useState(zero);

  const [userAddress, setUserAddress] = useState("");

  const [totalSupply, setTotalSupply] = useState(0);

  const [raisedAmount, setRaisedAmount] = useState(0);

  const [onBars, setOnBars] = useState(0);

  const [offBars, setOffBars] = useState(0);

  const [usersTokens, setUsersTokens] = useState(0);

  const [price, setPrice] = useState(null)

  const [walletConnected, setWalletConnected] = useState(false);

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


  const checkIsWalletConnected = async () => {
    try {
      if (!ethereum) return alert("please install MetaMask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      setAccount(accounts[0]);
      // console.log("accounts",accounts);
      // Get provider from Metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      // Set signer
      const signer = provider.getSigner()
      // loadContracts(signer)
      const accountss = await signer.getAddress();
      setWalletConnected(true);
      // Use the selected account to fetch the account name
    } catch (err) {
      setWalletConnected(false);
      throw new Error("No ethereum Object");
    }
  }


  const checkActiveRound = async () => {
    const _round = Number(roundNumber);

    if (_round > 0 || _round > 6) {
      setRoundStatus(true);
      if (_round > 5) {
        setClaimStatus(true)
      }
    } else {
      setRoundStatus(false);
    }
  };

  const getNumberOfRound = async () => {
    try {
      const _roundNumber = await getProviderAIMTokenContrat().round();
      setRoundNumber(_roundNumber.toString());
    } catch (err) {
      console.log(err);
    }
  };

  const claimTokens = async () => {
    try {
      if (!walletConnected) {
        changeNetwork();
        return;
      }
      await getAIMTokenContrat().claimAIMToken();
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


  // setInterval(async () => {
  //   await getNumberOfRound()
  //   await getRaisedAmount();
  // }, 10000);


  const getRoundPrice = async () => {
    const round = roundNumber;
    let _roundPrice;

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



  // const getCurrentUser = async () => {
  //   const web3 = new Web3(window.ethereum);

  //   // Request access to the user's accounts
  //   await window.ethereum.enable();

  //   // Get the user's addresses from Metamask
  //   const accounts = await web3.eth.getAccounts();

  //   // Retrieve the user's address
  //   const userAddress = setUserAddress(accounts[0]);
  // };


  const sendUSDT = async () => {
    try {
     
      if (!walletConnected) {
        changeNetwork();
        return;
      }

      setloader(true);

      const _amount = Number(price);
      const tokensPurchase = ethers.utils.parseEther(_amount.toString());

      const amountUSDT = await getAIMTokenContrat().sellTokenInUDSTPrice(
        tokensPurchase.toString(),
        roundPrice * 10 ** 6
      );

      if (amountUSDT?.toString() < 30000000) {
        alert("Please purchase tokens of more than 30 dollar");
        window.location.reload();
      }

      // console.log("amountUSDT", amountUSDT.toString());
      const appprove = await getUSDTTokenContrat().approve(
        AIMTOKEN_CONTRACT_ADDRESS.address,
        amountUSDT
      );

      appprove.wait();

      let tx = await getAIMTokenContrat().mintByUSDT(tokensPurchase.toString());

      await tx.wait();
      let reposnse = await getAIMTokenContrat().on("RoundData", handleEvent);
      setPrice('');
    } catch (error) {
      setloader(false)
      console.log(error);
    }



  };

  const sendETH = async () => {

    try {


      if (!walletConnected) {
        changeNetwork();
        return;
      }

      setloader(true);
      const _amount = Number(price);

      let tokenEth = ethers.utils.parseEther(_amount.toString())


      // const _amount = Number(document.getElementById("ethInput").value);

      const amountUSDT = await getAIMTokenContrat().sellTokenInUDSTPrice(
        tokenEth?.toString(),
        roundPrice * 10 ** 6
      );

      if (amountUSDT?.toString() < 30000000) {
        alert("Please purchase tokens of more than 30 dollar");
        window.location.reload();
      }


      const amountValue = await getAIMTokenContrat().sellTokenInETHPrice(tokenEth?.toString(), roundPrice * 10 ** 6);

      const tx = await getAIMTokenContrat().mintByEth(tokenEth.toString(), {
        value: amountValue.toString(),
      });

      await tx.wait();

      let success = await getAIMTokenContrat().on("RoundData", handleEvent);
      setPrice('');
    } catch (err) {
      setloader(false);
      console.log(err);
    }
  };





  const getNumberOfTokensOwned = async () => {
    try {
      const tokensOfUser = await getAIMTokenContrat().soldTokens(account);
      setUsersTokens(tokensOfUser.toString()/10 ** 18)
    } catch (err) {
      console.log(err);
    }
  };






  // /*
  //         connectWallet: Connects the MetaMask wallet
  //       */
  // const connectWallet = async () => {
  //   try {
  //     // Get the provider from web3Modal, which in our case is MetaMask
  //     // When used for the first time, it prompts the user to connect their wallet
  //     await getProviderOrSigner();
  //     setWalletConnected(true);
  //   } catch (err) {
  //   }
  // };

  // const disConnectWallet = async () => {
  //   try {

  //     web3ModalRef.current.clearCachedProvider();
  //     window.localStorage.clear();
  //     setWalletConnected(false);
  //   } catch (err) {
  //   }
  // };



  // const getUSDTPrice = async () => {
  //   try {
  //     // const provider = await getProviderOrSigner();

  //     // const tokenContract = new Contract(
  //     //   AIMTOKEN_CONTRACT_ADDRESS.address,
  //     //   AIMTOKEN_CONTRACT_ABI.abi,
  //     //   provider
  //     // );
  //     // Get the number of round
  //     // const _roundNumber = await tokenContract.round();
  //     const usdPrice = await getProviderAIMTokenContrat().getLatestUSDTPrice();
  //     // console.log("usdPrice", usdPrice.toString());
  //     // setRoundNumber(_roundNumber.toString());
  //     // console.log("roundNumber", _roundNumber.toString());

  //     return usdPrice.toString();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const getTotalAmountToRaise = async () => {
    try {
      let roudTotalAmount = (roundPrice * 10 ** 6) * (100_000_000 * 10 ** 18) / 10 ** 18
      setTotalSupply(roudTotalAmount.toString());
    } catch (err) {
      console.log(err);
    }
  };

  const getRaisedAmount = async () => {
    try {

      const CureentroundNumber = await getProviderAIMTokenContrat().round();
      const response = await apis.getRound(CureentroundNumber?.toString());

      // console.log("response", CureentroundNumber.toString(), response.data.data);


      const balanceOfUSDT = Number(response.data.data.total_usdt_amount);

    
      // const balanceOfUSDT = Number(
      //   await getUSDTTokenContrat().balanceOf(AIMTOKEN_CONTRACT_ADDRESS.address)
      // );


      //const provider = new Web3.providers.HttpProvider('https://eth-mainnet.g.alchemy.com/v2/ZNNDDz0q4xxwLvO9wQw-dPsHQ0urQ_J8');
      // const provider = new Web3.providers.HttpProvider('http://localhost:8545');

      // const web3 = new Web3(window.ethereum);

      // const balanceOfETH = Number(
      //   await web3.eth.getBalance(AIMTOKEN_CONTRACT_ADDRESS.address)
      // );

       const balanceOfETH = Number(response.data.data.total_eth_amount)
      
      const usdPrice = await getProviderAIMTokenContrat().getLatestUSDTPrice();
   

      const priceUSDT = Number(usdPrice);

      const ethToUSDT = (balanceOfETH / priceUSDT);

      const temp = balanceOfUSDT/10**6;

      const totalUSDT = Number(temp + ethToUSDT);
      
     
      setRaisedAmount(totalUSDT);
    } catch (err) {
    }
  };



  const getNumberOfBars = async () => {
    const totalBars = 20;
    const amountPerBar = Number(totalSupply) / totalBars;


    const _onBars = Math.round(Number(raisedAmount) / amountPerBar);


    setOnBars(_onBars);

    const _offBars = Math.round(totalBars - _onBars - 1);

    setOffBars(_offBars);
  };


  const handleEvent = async (_round, _user, _soldToken, _BuywithEth, _BuywithUSDT) => {
    const data = {
      round: _round.toString(),
      user_address: _user.toString(),
      token_sale: _soldToken.toString(),
      eth_amount: _BuywithEth.toString(),
      usdt_amount: _BuywithUSDT.toString()
    }
    const response = await apis.addUser(data);

    if (response.data.status) {
      sendUSDTBox(false)
      window.alert("Successfully minted Crypto Dev Tokens");
      setloader(false);
      window.location.reload();
    }
    else {
      sendUSDTBox(false);
      setloader(false);
      window.location.reload();
    }

  }





  useEffect(() => {
    
    getNumberOfBars();
    
    getTotalAmountToRaise();
    getCoinsPerDollar();
    checkActiveRound();

    getRaisedAmount();

    getNumberOfRound();
    getRoundPrice();
  }, [totalSupply, roundPrice, roundNumber]);


  useEffect(() => {
    checkIsWalletConnected();
    getNumberOfTokensOwned();
  },[account])


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
                      <p className="p1">Wallet Address</p>
                      <p className="p2">{account}</p>
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
                      {/* style={{pointerEvents :  claimStatus ? '' : 'none'}} */}
                      {claimStatus ?
                        <div className="btn-line-two" >
                          <span onClick={claimTokens}>
                            {/* <Disconnect classes={"disconnect"} /> */}
                            <Claim classes={"buy-with-usdt"} />
                          </span>
                        </div>
                        :
                        ''
                      }

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
                  <br />
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
