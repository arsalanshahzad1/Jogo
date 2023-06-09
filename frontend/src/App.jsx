import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingpage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Main from './components/Dashboard/Screens/Main';
import { ethers } from "ethers";

const { ethereum } = window;
function App() {
  const [state, setState] = useState("home")
  const [index, setIndex] = useState(0)
  const [activeSection, setActiveSection] = useState(null);
  const [loader, setloader] = useState(false)
  const [account, setAccount] = useState(null)
  const [walletConnected, setWalletConnected] = useState(false);
  const [ShowPopup, setShowPopup] = useState(false)

  const changeNetwork = async () => {
    try {
      if (!ethereum) throw new Error("No crypto wallet found");
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{
          // chainId: "0x7A69" //localHost
          chainId: "0x5" //goerli
          // chainId: "0x1" //mainNet
          //  chainId: "0xaa36a7" //sepolia 
        }]
      });
      await web3Handler();
    } catch (err) {
      console.log(err.message);
    }
  };
  window.ethereum && ethereum.on("chainChanged", async () => {
    window.location.reload();
  });

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

  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    // Get provider from Metamask
    setShowPopup(false)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Set signer
    const signer = provider.getSigner()
    const accountss = await signer.getAddress();
    // Use the selected account to fetch the account name
    const UserAccount = await provider.lookupAddress(accountss);
    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    })

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0])
      await web3Handler()
    })
    // loadContracts(signer)
  }


  // /////////// wallet Connect ///////////////////////
  // const connect = async () => {
  //   try {
  //     setError("");

  //     const accounts = await injectedProvider.request({
  //       method: "eth_requestAccounts",
  //     });

  //     const chainId = await injectedProvider.request({ method: "eth_chainId" });

  //     setSelectedAccount(accounts[0]);
  //     setChainId(chainId);
  //     setConnected(true);

  //     injectedProvider.addListener("chainChanged", setChainId);

  //     injectedProvider.addListener("accountsChanged", (accounts) => {
  //       if (accounts.length === 0) {
  //         setConnected(false);
  //         setSelectedAccount("");
  //         setChainId("");
  //       } else {
  //         const connectedAccount = accounts[0];
  //         setSelectedAccount(connectedAccount);
  //       }
  //     });
  //   } catch (e) {
  //     console.error(e);
  //     if (e.code === 4001) {
  //       setError("User denied connection.");
  //     }
  //   }
  // };

  // const switchChain = async () => {
  //   try {
  //     await injectedProvider.request({
  //       method: "wallet_switchEthereumChain",
  //       params: [{ chainId: "0x1" }],
  //     });
  //     connect();
  //   } catch (e) {
  //     console.error(e);
  //     if (e.code === 4001) {
  //       setError("User rejected switching chains.");
  //     }
  //   }
  // };



  const changeScrollPosition = (event) => {
    setState(event)
    // console.log('working');
    if (state === 'home') {
      document
        .getElementById(state)
        ?.scrollIntoView?.({ block: "start", behavior: "smooth" });
    }
    if (state === 'tokenEnd') {
      document
        .getElementById(state)
        ?.scrollIntoView?.({ block: "start", behavior: "smooth" });
    }
    if (state === 'fund') {
      document
        .getElementById(state)
        ?.scrollIntoView?.({ block: "start", behavior: "smooth" });
    }
    if (state === 'roadmap') {
      document
        .getElementById(state)
        ?.scrollIntoView?.({ block: "start", behavior: "smooth" });
    }
    if (state === 'team') {
      document
        .getElementById(state)
        ?.scrollIntoView?.({ block: "start", behavior: "smooth" });
    }
    if (state === 'About-us') {
      document
        .getElementById(state)
        ?.scrollIntoView?.({ block: "start", behavior: "smooth" });
    }
    if (state === 'faqs') {
      document
        .getElementById(state)
        ?.scrollIntoView?.({ block: "start", behavior: "smooth" });
    }
  }


  useEffect(() => {
    checkIsWalletConnected();
  }, [account, state])

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to={'/pre-sale'} replace />} /> */}
        <Route path="/dashboard/*" element={<Main changeNetwork={changeNetwork} account={account} setAccount={setAccount} />} />
        <Route path="*" element={<LandingPage
          state={state}
          setState={changeScrollPosition}
          index={index}
          setIndex={setIndex}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          loader={loader}
          setloader={setloader}
          changeNetwork={changeNetwork} account={account} setAccount={setAccount} walletConnected={walletConnected}
          ShowPopup={ShowPopup}
          setShowPopup={setShowPopup}
        />} />
        {/* <Route path='/pre-sale' element={<PreSales />} /> */}
        <Route path='/' exact
          element={<LandingPage
            changeNetwork={changeNetwork} account={account} setAccount={setAccount} walletConnected={walletConnected}
            ShowPopup={ShowPopup}
            setShowPopup={setShowPopup}
            state={state}
            setState={changeScrollPosition}
            index={index}
            setIndex={setIndex}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            loader={loader}
            setloader={setloader}
          />
          } />

        {/* <Route path='*' element={<LandingPage/>} /> */}
      </Routes>
    </Router>

  )
}

export default App
