import React, { useEffect } from 'react'
import BarChart from './BarChart'
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import aimContractAbi from "../../../contractsData/AIMToken.json";
import aimContractAddress from "../../../contractsData/AIMToken-address.json";
import { ethers } from 'ethers';
import DashboardChart from './DashboardChart';
import apis from '../../../Services';



const AimTokenContract = () => {
    //Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Set signer
    const signer = provider.getSigner()
    const contract = new ethers.Contract(aimContractAddress.address, aimContractAbi.abi, signer)
    return contract
}




const { ethereum } = window;

function DashboardTwo({ account, setAccount }) {
    const [show, setShow] = useState(false)
    const [selectedRound, setSelectedRound] = useState('month');
    const [runingRound, setrunningRound] = useState([]);


    // const getRound = async () => {
    //     //check Round Data
    //     let RoundData = [];
        
    //     let noOfUsersInRound = 0;
    //     let tokensSoldInCurrentRound = 0;
    //     let ethRaisedInCurrentRound = 0;
    //     let usdtRaisedInCurrentRound = 0;

    //     let currentRoundss = await AimTokenContract().round();
        
    //     if(currentRoundss > 0){
    //         for (let i = 1; i < currentRoundss; i++) {
    //             let runingRounds = await AimTokenContract().roundsData(i);
    //             console.log("runingRounds",Number(runingRounds[3]))
    
    //                noOfUsersInRound+=Number(runingRounds[0]);
    //                 tokensSoldInCurrentRound+=Number(runingRounds[1]);
    //                 ethRaisedInCurrentRound+=Number(runingRounds[2]);
    //                 usdtRaisedInCurrentRound+=Number(runingRounds[3]);
    
    //         }
    //     }
   
    //     RoundData.push({
    //         noOfUsersInRound: noOfUsersInRound, tokensSoldInCurrentRound: tokensSoldInCurrentRound, ethRaisedInCurrentRound: ethRaisedInCurrentRound,
    //         usdtRaisedInCurrentRound: usdtRaisedInCurrentRound
    //     });
    //     setrunningRound(RoundData);
    //     }

    const handleRoundSelect = (round) => {
        setSelectedRound(round);
        setShow(false);
    };
    
    const apiResponses = async()=>{
        console.log('selectedRound',selectedRound);
        const response = await apis.getdata(selectedRound);
        setrunningRound([response.data.data])
        console.log("response2", response);
        
    }

    useEffect(() => {
        apiResponses();
    }, [account, selectedRound]);

    console.log("ss",runingRound );


    




    return (
        <div>
            {
            runingRound.map((data, index) => (
                <div>
                    <div className='D-one-holder-inner-1'>
                        <div className='CardsForData borderyellow width225'>
                            <p className='Card-text-one'>
                                Total Users
                            </p>
                            <p className='Card-text-two'>
                                {data?.total_users}
                            </p>
                        </div>
                        <div className='CardsForData width225'>
                            <p className='Card-text-one'>
                                Total ETH
                            </p>
                            <p className='Card-text-two'>
                                {Number(data?.total_eth_amount/10**18).toFixed(6)}
                            </p>
                        </div>
                        <div className='CardsForData width225'>
                            <p className='Card-text-one'>
                                Total USDT
                            </p>
                            <p className='Card-text-two'>
                                {Number(data?.total_usdt_amount/10**6).toFixed(6)}
                            </p>
                        </div>

                    </div>
                    <div className='divForChart2'>
                        <div className='Chart2-title-row'>
                            <div className='Font-24'>
                                Total Earnings
                            </div>
                            <div>
                                <div className='DropHolder'>
                                    <div className='ButtonDropDown' onClick={() => setShow(!show)}>
                                        Monthly
                                        <ArrowDropDownIcon />
                                    </div>
                                    <div className={`dropdowndiv ${show ? '' : 'hideDropdown'}`}>
                                        <p onClick={() => handleRoundSelect('weekly')}>Weekly</p>
                                        <p onClick={() => handleRoundSelect('daily')}>Daily</p>
                                        <p onClick={() => handleRoundSelect('yearly')}>Yearly</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <BarChart data={data} /> */}
                        <DashboardChart data={data} />


                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default DashboardTwo