import { ethers, providers } from "ethers";
import { useState, useEffect, createContext } from "react";
import AIMTOKEN_CONTRACT_ADDRESS from "../contractsData/AIMToken-address.json"
import AIMTOKEN_CONTRACT_ABI from "../contractsData/AIMToken.json"





export const Store = createContext();


const getProviderAIMTokenContrat = () => {
    //  const provider = new ethers.providers.Web3Provider(ethereum);

    // const provider = new ethers.providers.JsonRpcProvider(
    //     "http://localhost:8545"
    // );

    const provider = new ethers.providers.JsonRpcProvider(
      "https://eth-goerli.g.alchemy.com/v2/o-AGgcLzt-RSOtHljyWZuYXKTphehHzB"
    );

    // const provider = new ethers.providers.JsonRpcProvider(
    //   "https://eth-mainnet.g.alchemy.com/v2/ZNNDDz0q4xxwLvO9wQw-dPsHQ0urQ_J8"
    // );

    const signer = provider.getSigner();
    const AIMContract = new ethers.Contract(AIMTOKEN_CONTRACT_ADDRESS.address, AIMTOKEN_CONTRACT_ABI.abi, provider);
    return AIMContract;
}

export const StoreProvider = ({ children }) => {
    
    const [activeRound, setActiveRound] = useState(0);
    const [CurrentRoundPrice, setCurentRoundPrice] = useState(0)
    const [coinsPerDollar, setCoinPerDollaer] = useState(0)
    const [totalRaisedAmount, setTotalRaisedAmount] = useState(0)
    const [raisedAmount, setRaisedAmount] = useState(0);
    const [roundStatus, setRoundStatus] = useState(false);
    const [claimStatus, setClaimStatus] = useState(false);

    const getActiveRound = async () => {
        // console.log("call getActiveRound");
        try {
            const round = await getProviderAIMTokenContrat().round();
            // console.log("round", round);
            setActiveRound(round.toString());

            // here we check round which is started 

            if (round.toString() > 0 || round.toString() > 6) {
                setRoundStatus(true);
                if (round.toString() > 5) {
                    setClaimStatus(true)
                }
            } else {
                setRoundStatus(false);
            }

            let _roundPrice;

            if (round.toString() == 1) {
                _roundPrice = 0.005;
            } else if (round.toString() == 2) {
                _roundPrice = 0.01;
            } else if (round.toString() == 3) {
                _roundPrice = 0.02;
            } else if (round.toString() == 4) {
                _roundPrice = 0.04;
            } else if (round.toString() == 5) {
                _roundPrice = 0.08;
            } else {
                _roundPrice = 0;
            }
            setCurentRoundPrice(_roundPrice.toString())

            if (_roundPrice.toString() > 0) {

                const coins = 1 / _roundPrice.toString();

                setCoinPerDollaer(coins);
            }
            //change here code 
            let roudTotalAmount = (_roundPrice.toString()* 10 ** 6) * (100000000 * 10**18) / 10 ** 18
            setTotalRaisedAmount(roudTotalAmount.toString()/10**6);
            // setTotalRaisedAmount(5000);
        } catch (error) {
            // Handle any errors
            console.error('Error:', error);
        }
    };

    const RaisedAmount = async () => {
        // console.log("call RaisedAmount");
        const CureentroundNumber = await getProviderAIMTokenContrat().raisedAmount();
        // console.log("CureentroundNumber", CureentroundNumber.toString());
        setRaisedAmount(CureentroundNumber.toString()/10**6);
        // setRaisedAmount(2500);

    }

    useEffect(() => {
        getActiveRound();
        RaisedAmount();
    }, [])


    return (
        <Store.Provider
            value={{
                activeRound,
                CurrentRoundPrice,
                coinsPerDollar,
                totalRaisedAmount,
                raisedAmount,
                roundStatus,
                claimStatus
            }}
        >
            {children}
        </Store.Provider>
    );
}