import React from 'react'
import Sidebar from '../Component/Sidebar.jsx'
import Dashboard from './Dashboard'

function Main({changeNetwork, account, setAccount}) {
    console.log("account",account);
    return (
       
        <div className='MainApp'>
        <Sidebar changeNetwork={changeNetwork} account={account} setAccount={setAccount} />
        
        <Dashboard changeNetwork={changeNetwork} account={account}setAccount={setAccount}/>
    </div>
   
    )
}

export default Main