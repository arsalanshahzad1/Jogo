import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DashboardTwo from '../Component/DashboardTwo';
import DashboardOne from '../Component/DashboardOne';
import Presale from '../../svg/Presale';
import WalletConnect from '../../svg/WalletConnect';

function Dashboard({ changeNetwork, account, setAccount }) {

    const checkIsWalletConnected = async () => {
        try {
            if (!ethereum) return alert("please install MetaMask");
            const accounts = await ethereum.request({ method: "eth_accounts" });
            if (accounts.length) {
                setAccount(accounts[0]);
                // Get provider from Metamask
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                // Set signer
                const signer = provider.getSigner()
                // loadContracts(signer)
                const accountss = await signer.getAddress();
                // Use the selected account to fetch the account name
            } else {
                console.log("No account Found");
            }
        } catch (err) {
            throw new Error("No ethereum Object");
        }
    }

    useEffect(() => {
        checkIsWalletConnected();
    }, [account])
    // console.log("aa", account)


    return (
        //0xB08F5f1D719cE9e6cb320253589483CE47fF0072 change wallet address
        account?.toLowerCase().toString() === "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266".toLowerCase().toString()
            ?
            <div className='DashboardMain dashboardResponsive'>
                <div className='DashboardInner'>
                    <div className='DashboardMainHeading'>

                        <Routes>
                            <Route path='/' element={<div >Dashboard </div>} />
                            <Route path='/overview' element={<div >Overview </div>} />
                        </Routes>
                    </div>
                    <div className='DashboardContentHolder'>
                        <div className='ComponentHolder'>
                            <Routes>
                                <Route path='/' element={<DashboardOne checkIsWalletConnected={checkIsWalletConnected} changeNetwork={changeNetwork} account={account} setAccount={setAccount} />} />
                                <Route path='/overview' element={<DashboardTwo account={account} setAccount={setAccount} />} />
                            </Routes>
                        </div>
                    </div>
                </div>

            </div >
            :

            <div className='DashboardMain dashboardResponsive2'>
                <div className='DashboardMainHeading2'>
                    You Are Not Authorised To View This Page
                    <br />
                    {account ?
                        ""
                        :
                        <Link onClick={changeNetwork}>
                            <WalletConnect />
                        </Link>
                    }
                </div>

            </div>





    )
}

export default Dashboard