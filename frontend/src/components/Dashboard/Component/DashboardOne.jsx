import React, { useEffect } from 'react'
import ApexChart from './ApexChart'
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import aimContractAbi from "../../../contractsData/AIMToken.json";
import aimContractAddress from "../../../contractsData/AIMToken-address.json";
import { ethers, utils } from 'ethers';
import { Link } from 'react-router-dom';
import ChangeRound from '../../svg/ChangeRound';
import WalletConnect from '../../svg/WalletConnect';
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
function DashboardOne({ checkIsWalletConnected, changeNetwork, account, setAccount }) {
    const [show, setShow] = useState(false)
    const [selectedRound, setSelectedRound] = useState('1');
    const [runingRound, setrunningRound] = useState([]);
    const [UpcomingRound, setUpcomingRound] = useState(null);
    const [CheckData, setCheckData] = useState(false);


    const startRound = async () => {
        await AimTokenContract().startTheSale();
    }

    const currentRound = async () => {
        let currentRoundss = await AimTokenContract().round();
        setUpcomingRound(Number(currentRoundss) + 1)
    }

    const apiResponses = async () => {
        // console.log('selectedRound',selectedRound);
        const response = await apis.getRound(selectedRound);
        setrunningRound([response.data.data])
        // console.log("response2", response.data.data);

    }



    const handleRoundSelect = (round) => {
        setSelectedRound(round);
        setShow(false);
    };


    useEffect(() => {
        currentRound();
        checkIsWalletConnected();
        apiResponses();
    }, [account, selectedRound]);


    return (
        <div>

            <div className='ChangeroundButton'>
                {!account && (
                    <Link onClick={changeNetwork}>
                        <WalletConnect />
                    </Link>
                )
                }
                
                <Link onClick={startRound}>
                    <ChangeRound classes={"sale-btn"} />
                </Link>
                <div>
                    : {UpcomingRound?.toString()}
                </div>


            </div>


            <div className='DropHolder'>
                <div className='ButtonDropDown' onClick={() => setShow(!show)}>
                    {selectedRound}
                    <ArrowDropDownIcon />
                </div>
                <div className={`dropdowndiv ${show ? '' : 'hideDropdown'}`}>
                    <p onClick={() => handleRoundSelect('1')}> Round 1</p>
                    {/* <p onClick={() => handleRoundSelect('1')}>Round 1</p> */}
                    <p onClick={() => handleRoundSelect('2')}>Round 2</p>
                    <p onClick={() => handleRoundSelect('3')}>Round 3</p>
                    <p onClick={() => handleRoundSelect('4')}>Round 4</p>
                    <p onClick={() => handleRoundSelect('5')}>Round 5</p>

                </div>
            </div>

            {runingRound?.map((data, index) => (

                <div className='D-one-holder'>

                    <div className='D-one-holder-inner-1'>
                        <div className='CardsForData borderyellow'>
                            <p className='Card-text-one'>
                                No Of Users In Round
                            </p>
                            <p className='Card-text-two'>
                                {data?.total_users}
                            </p>
                        </div>
                        <div className='CardsForData'>
                            <p className='Card-text-one'>
                                Eth Raised In Current Round
                            </p>
                            <p className='Card-text-two'>
                                {data?.total_eth_amount / 10 ** 18}
                            </p>
                        </div>
                        <div className='CardsForData'>
                            <p className='Card-text-one'>
                                Tokens Sold In Current Round
                            </p>
                            <p className='Card-text-two'>
                                {data?.total_token_sale / 10 ** 18}
                            </p>
                        </div>
                        <div className='CardsForData'>
                            <p className='Card-text-one'>
                                USDT Raised In Current Round
                            </p>
                            <p className='Card-text-two'>
                                {data?.total_usdt_amount / 10 ** 6}
                            </p>
                        </div>
                        {/* <div className='CardsForData'>
                        <p className='Card-text-one'>
                            User Participant
                        </p>
                        <p className='Card-text-two'>
                            300k+
                        </p>
                    </div>
                    <div className='CardsForData'>
                        <p className='Card-text-one'>
                            User Participant
                        </p>
                        <p className='Card-text-two'>
                            300k+
                        </p>
                    </div> */}
                    </div>
                    <div className='D-one-holder-inner-2'>
                        <ApexChart data={data} />
                    </div>
                </div>

            ))

            }



        </div>
    )
}

export default DashboardOne