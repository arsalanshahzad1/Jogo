import React, { useEffect, useState, useRef, useContext } from "react";
import Buy from "../components/svg/Buy";
import { AiOutlineClose } from "react-icons/ai";
import BuyWithUsdt from "../components/svg/BuyWithUsdt";
import apis from "../Services";
import { ethers } from "ethers";
import Modal from "react-bootstrap/Modal";
import Claim from "../components/svg/Claim";
import { Store } from "../context/Store";
import AIMTOKEN_CONTRACT_ADDRESS from "../contractsData/AIMToken-address.json"
import AIMTOKEN_CONTRACT_ABI from "../contractsData/AIMToken.json"
import TETHER_TOKEN_CONTRACT_ADDRESS from "../contractsData/TetherToken-address.json"
import TETHER_TOKEN_CONTRACT_ABI from "../contractsData/TetherToken.json"



const getAIMTokenContrat = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const AIMContract = new ethers.Contract(AIMTOKEN_CONTRACT_ADDRESS.address, AIMTOKEN_CONTRACT_ABI.abi, signer);
  return AIMContract;
}


const getUSDTTokenContrat = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const USDTContract = new ethers.Contract(TETHER_TOKEN_CONTRACT_ADDRESS.address, TETHER_TOKEN_CONTRACT_ABI.abi, signer);
  return USDTContract;
}


const PreSales = ({ changeNetwork, account, setAccount, loader, setloader }) => {

  const { activeRound, CurrentRoundPrice, coinsPerDollar, totalRaisedAmount, raisedAmount, roundStatus,
    claimStatus } = useContext(Store)


  // 6 0 0 0 15500000 true true

  // let activeRound = 6;
  // let CurrentRoundPrice = 0;
  // let coinsPerDollar = 0;
  // let totalRaisedAmount = 0;
  // let raisedAmount = 15500000;
  // let roundStatus= true ;
  // let claimStatus= true ;

  // const activeRound = 0;
  // const CurrentRoundPrice = 0;
  // const coinsPerDollar = 0;
  // const totalRaisedAmount = 0;
  // const raisedAmount = 0;
  // const roundStatus= false ;
  // const claimStatus= false ;

  // console.log(activeRound, CurrentRoundPrice, coinsPerDollar, totalRaisedAmount, raisedAmount, roundStatus,
  //   claimStatus);

  const [connect, sendUSDTBox] = useState(false);
  const [connector, sendETHBox] = useState(false);
  const [onBars, setOnBars] = useState(0);
  const [offBars, setOffBars] = useState(0);
  const [usersTokens, setUsersTokens] = useState(0);
  const [price, setPrice] = useState(null)
  const [walletConnected, setWalletConnected] = useState(false);
  const [Bar, setBar]=useState([]);

  // var Bar = [];

  const offBarsList = [];

  // for (let i = 0; i < offBars; i++) {
  //   offBarsList.push(
  //     <div
  //       className="loader-bar-black"
  //       style={{ display: "block" }}
  //       key={i}
  //     ></div>
  //   );
  // }

  // for (let i = 0; i < onBars; i++) {
  //   onBarsList.push(
  //     <div className="loader-bar" style={{ display: "block" }} key={i}></div>
  //   );
  // }


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



  const sendUSDT = async () => {
    try {
      if (!walletConnected) {
        changeNetwork();
        return;
      }

      setloader(true);

      const _amount = Number(price);
      const tokensPurchase = ethers.utils.parseEther(_amount.toString());



      const remaningToken = await getAIMTokenContrat().remainingSupply()

      if (Number(remaningToken) - Number(_amount) < 0) {
        alert(`Round Limit Exceed : you can buy ${remaningToken / 10 ** 18}`);
        window.location.reload();
        return;
      }

      const amountUSDT = await getAIMTokenContrat().sellTokenInUDSTPrice(
        tokensPurchase.toString(),
        CurrentRoundPrice * 10 ** 6
      );

      if (amountUSDT?.toString() < 30000000) {
        alert("Please purchase tokens of more than 30 dollar");
        window.location.reload();
        return;
      }

      // console.log("amountUSDT", amountUSDT.toString());
      const appprove = await getUSDTTokenContrat().approve(
        AIMTOKEN_CONTRACT_ADDRESS.address,
        amountUSDT
      );

      await appprove.wait()

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

      const remaningToken = await getAIMTokenContrat().remainingSupply()

      if (Number(remaningToken) - Number(_amount) < 0) {
        alert(`Round Limit Exceed : you can buy ${remaningToken / 10 ** 18}`);
        window.location.reload();
        return;
      }

      const amountUSDT = await getAIMTokenContrat().sellTokenInUDSTPrice(
        tokenEth?.toString(),
        CurrentRoundPrice * 10 ** 6
      );

      if (amountUSDT?.toString() < 30000000) {
        alert("Please purchase tokens of more than 30 dollar");
       window.location.reload();
      return;
      }

      const amountValue = await getAIMTokenContrat().sellTokenInETHPrice(tokenEth?.toString(), CurrentRoundPrice * 10 ** 6);

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
      setUsersTokens(tokensOfUser.toString() / 10 ** 18)
    } catch (err) {
    }
  };



  //// add common to totalRaised ////
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");
    return x;
  }


  const getNumberOfBars = async () => {
   

    let calPercentange = raisedAmount * 100 / totalRaisedAmount;
   let percentage;
    if(Math.ceil(+calPercentange) > 9){
      percentage = Math.ceil(Math.ceil(+calPercentange)/10);
    }
    else{
      percentage = Math.ceil(+calPercentange)
    }

    let percentages = Math.ceil(+percentage);
  console.log("percentages",percentages);
    let bar=[]
    for (let index = 0; index < 10; index++) {
      if (index < percentages -1) {
        bar.push(1)
      } 
      else if(index == percentages -1){
        bar.push(2)
      }
      else {
        bar.push(0)
      }
    }
    setBar(bar);
  };

  // console.log("bar",Bar);


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
  }, [raisedAmount])


  useEffect(() => {
    checkIsWalletConnected();
    getNumberOfTokensOwned();
  }, [account])


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
                      ? "Round:" + activeRound + " has started!"
                      : "No round is live at the moment"}
                  </h2>
                  {/* <h3>has started!</h3> */}
                  <p>
                    <span>1 USDT</span>
                    <span> = </span>
                    <span>{coinsPerDollar?.toString()} AIM</span>
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
                        You have {Number(usersTokens).toFixed(2)} AIM
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
                    {(raisedAmount?.toFixed(2))} /{" "}
                    {numberWithCommas(totalRaisedAmount?.toString())}
                  </span>
                </p>
                <h2>Amount raised</h2>
                <p>
                  <span>Token Address:</span>
                  <br />
                  <span>0x23250A16AFDd06c9e2c44E3F7A6CcE5A23B2107d</span>
                </p>
                {/* cutfrom here */}
                <div className="loader-root">
                  <div className="loader-inner"
                    style={{ width: "max(min(25.5rem, 100% - 0.75rem), 3.375rem)", }}>
                    <div className="loader-bar-container">
                      {Bar.map((x) => {
                        return (
                          <>
                          {x == 1
                            &&
                            <div className="loader-bar" style={{ display: "block" }}></div>
                          }
                          {x == 2 &&
                          <div className="loader-bar last" style={{ display: "block" }}></div>
                          }
                          {x == 0 &&
                          <div className="loader-bar-black" style={{ display: "block" }}></div>
                          }       
                          {/* BLINKING BLOCK */ }
                          {/* <div className="loader-bar last" style={{ display: "block" }}></div> */ }
                      </>
                      )
                      })}

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
