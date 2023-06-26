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





    // const getRound = async () => {
    //     //check Round Data
    //     let RoundData = [];
    //     if (selectedRound == "Round 1") {
    //         console.log("selectedRound", selectedRound)
    //         let RoundRuning = await AimTokenContract().round();
    //         if(RoundRuning.toString() == "2"){
    //             let runingRounds = await AimTokenContract().roundsData("1");
    //             console.log("this is Data", runingRounds);
    //             RoundData.push({
    //                 noOfUsersInRound: runingRounds[0], tokensSoldInCurrentRound: runingRounds[1], ethRaisedInCurrentRound: runingRounds[2],
    //                 usdtRaisedInCurrentRound: runingRounds[3]
    //             });
    //         }
    //         else{
    //             RoundData.push({
    //                 noOfUsersInRound: 0, tokensSoldInCurrentRound: 0, ethRaisedInCurrentRound:0,
    //                 usdtRaisedInCurrentRound: 0
    //             });

    //         }
          
    //     }
    //     else if (selectedRound == "Round 2") {
    //         console.log("selectedRound", selectedRound)
    //         let RoundRuning = await AimTokenContract().round();
    //         if(RoundRuning.toString() == "3"){
    //             let runingRounds = await AimTokenContract().roundsData("2");
    //             console.log("this is Data", runingRounds);
    //             RoundData.push({
    //                 noOfUsersInRound: runingRounds[0], tokensSoldInCurrentRound: runingRounds[1], ethRaisedInCurrentRound: runingRounds[2],
    //                 usdtRaisedInCurrentRound: runingRounds[3]
    //             });
    //         }
    //         else{
    //             RoundData.push({
    //                 noOfUsersInRound: 0, tokensSoldInCurrentRound: 0, ethRaisedInCurrentRound:0,
    //                 usdtRaisedInCurrentRound: 0
    //             });

    //         }
    //     }
    //     else if (selectedRound == "Round 3") {
    //         console.log("selectedRound", selectedRound)
    //         let RoundRuning = await AimTokenContract().round();
    //         if(RoundRuning.toString() == "4"){
    //             let runingRounds = await AimTokenContract().roundsData("3");
    //             console.log("this is Data", runingRounds);
    //             RoundData.push({
    //                 noOfUsersInRound: runingRounds[0], tokensSoldInCurrentRound: runingRounds[1], ethRaisedInCurrentRound: runingRounds[2],
    //                 usdtRaisedInCurrentRound: runingRounds[3]
    //             });
    //         }
    //         else{
    //             RoundData.push({
    //                 noOfUsersInRound: 0, tokensSoldInCurrentRound: 0, ethRaisedInCurrentRound:0,
    //                 usdtRaisedInCurrentRound: 0
    //             });

    //         }
    //     }
    //     else if (selectedRound == "Round 4") {
    //         console.log("selectedRound", selectedRound)
    //         let RoundRuning = await AimTokenContract().round();
    //         if(RoundRuning.toString() == "5"){
    //             let runingRounds = await AimTokenContract().roundsData("4");
    //             console.log("this is Data", runingRounds);
    //             RoundData.push({
    //                 noOfUsersInRound: runingRounds[0], tokensSoldInCurrentRound: runingRounds[1], ethRaisedInCurrentRound: runingRounds[2],
    //                 usdtRaisedInCurrentRound: runingRounds[3]
    //             });
    //         }
    //         else{
    //             RoundData.push({
    //                 noOfUsersInRound: 0, tokensSoldInCurrentRound: 0, ethRaisedInCurrentRound:0,
    //                 usdtRaisedInCurrentRound: 0
    //             });

    //         }
    //     }
    //     else if (selectedRound == "Round 5") {
    //         console.log("selectedRound", selectedRound)
    //         let RoundRuning = await AimTokenContract().round();
    //         if(RoundRuning.toString() == "6"){
    //             let runingRounds = await AimTokenContract().roundsData("5");
    //             console.log("this is Data", runingRounds);
    //             RoundData.push({
    //                 noOfUsersInRound: runingRounds[0], tokensSoldInCurrentRound: runingRounds[1], ethRaisedInCurrentRound: runingRounds[2],
    //                 usdtRaisedInCurrentRound: runingRounds[3]
    //             });
    //         }
    //         else{
    //             RoundData.push({
    //                 noOfUsersInRound: 0, tokensSoldInCurrentRound: 0, ethRaisedInCurrentRound:0,
    //                 usdtRaisedInCurrentRound: 0
    //             });

    //         }
    //     }
    //     else {

    //         let noOfUsersInRound = await AimTokenContract().noOfUsersInRound()
    //         let tokensSoldInCurrentRound = await AimTokenContract().tokensSoldInCurrentRound()
    //         let ethRaisedInCurrentRound = await AimTokenContract().ethRaisedInCurrentRound()
    //         let usdtRaisedInCurrentRound = await AimTokenContract().usdtRaisedInCurrentRound()
    //         let currentRound = await AimTokenContract().round();

    //         console.log("!!!!!!!!!!!!!!",noOfUsersInRound.toString(),
    //         tokensSoldInCurrentRound.toString(),
    //         ethRaisedInCurrentRound.toString(),
    //         usdtRaisedInCurrentRound.toString())
    //         RoundData.push({
    //             noOfUsersInRound, tokensSoldInCurrentRound, ethRaisedInCurrentRound,
    //             usdtRaisedInCurrentRound,
    //         })
    //     }

    //     setrunningRound(RoundData);
    // }


    const startRound = async () => {
        await AimTokenContract().startTheSale();
    }

    const currentRound = async () => {
        let currentRoundss = await AimTokenContract().round();

        console.log("currentRoundsssssssssssssssssssssss", Number(currentRoundss) + 1)
        setUpcomingRound(Number(currentRoundss) + 1)
    }

    const apiResponses = async()=>{
        console.log('selectedRound',selectedRound);
        const response = await apis.getRound(selectedRound);
        setrunningRound([response.data.data])
        console.log("response2", response.data.data);
        
    }

    

    // useEffect(async()=>{
    
    //     const response = await apis.getToday();
    //     console.log("response2", response);
    // },[])


    const handleRoundSelect = (round) => {
        setSelectedRound(round);
        setShow(false);
    };


    useEffect(() => {
        currentRound();
        checkIsWalletConnected();
        apiResponses();
    }, [account, selectedRound]);

console.log('runingRound',runingRound);
    
    return (
        <div>
            
            <div className='ChangeroundButton'>
                <Link onClick={changeNetwork}>
                    <WalletConnect />
                </Link>

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
                                noOfUsersInRound
                            </p>
                            <p className='Card-text-two'>
                                {data?.total_users}
                            </p>
                        </div>
                        <div className='CardsForData'>
                            <p className='Card-text-one'>
                                ethRaisedInCurrentRound
                            </p>
                            <p className='Card-text-two'>
                                {data?.total_eth_amount/ 10 ** 18}
                            </p>
                        </div>
                        <div className='CardsForData'>
                            <p className='Card-text-one'>
                                tokensSoldInCurrentRound
                            </p>
                            <p className='Card-text-two'>
                                {data?.total_token_sale/10**18}
                            </p>
                        </div>
                        <div className='CardsForData'>
                            <p className='Card-text-one'>
                                usdtRaisedInCurrentRound
                            </p>
                            <p className='Card-text-two'>
                                {data?.total_usdt_amount/ 10 ** 6}
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