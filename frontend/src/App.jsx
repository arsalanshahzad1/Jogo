import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/landingpage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import PreSales from './pages/PreSales';
import Main from './components/Dashboard/Screens/Main';
import Dashboard from './components/Dashboard/Screens/Dashboard';

const { ethereum } = window;
function App() {
  const [state, setState] = useState("home")
  const [index, setIndex] = useState(0)
  const [activeSection, setActiveSection] = useState(null);
  const [loader, setloader] = useState(false)


  const [account, setAccount] = useState(null)

  // ethereum.on("accountsChanged", async (account) => {
  //   setAccount(account[0]);
  //   window.location.reload()
  // })

  const changeNetwork = async () => {
    try {
      if (!ethereum) throw new Error("No crypto wallet found");
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{
          // chainId: "0x7A69"
          chainId: "0x5"
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
        // Use the selected account to fetch the account name
    } catch (err) {
      throw new Error("No ethereum Object");
    }
  }

  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    // Get provider from Metamask
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
        />} />
        {/* <Route path='/pre-sale' element={<PreSales />} /> */}
        <Route path='/' exact
          element={<LandingPage
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
