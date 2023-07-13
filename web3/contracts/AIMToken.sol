// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC20USDT {
    function allowance(address owner, address spender) external returns (uint);

    function transferFrom(address from, address to, uint value) external;

    function approve(address spender, uint value) external;

    function totalSupply() external returns (uint);

    function balanceOf(address who) external returns (uint);

    function transfer(address to, uint value) external;
}

error youDontHaveEnoughUsdtORplasePurchaseMorethan30UsdtToken();
error transferFaild();
error roundSupplyLimitExceed();
error waitForStartingSaleRoud();
error contractDontHaveUSDT();
error youDontHaveEnoughTokens();
error mintingIsNotAllowed();
error pleaseSendTokenPrice();
error allRoundsAreFinished();
error invalidUSDTPrice();
error pleaseWaitForPreSaleEnd();
error pleasePurchaseMorethan30Doller();

contract AIMToken is ERC20, Ownable {
    uint256 public round;
    uint256 public raisedAmount;

    uint256 public constant roundLimit = 100_000_000 ether;

    uint256 public liquidityTokens = 100_000_000 ether;
    uint256 public stakeholdersTokens = 200_000_000 ether;
    uint256 public exchangeTokens = 200_000_000 ether;

    uint256 public remainingSupply;

    uint256 conversionRate = 10 ** 12;

    uint256 public round1Price = 0.005 * 10 ** 6;
    uint256 public round2Price = 0.01 * 10 ** 6;
    uint256 public round3Price = 0.02 * 10 ** 6;
    uint256 public round4Price = 0.04 * 10 ** 6;
    uint256 public round5Price = 0.08 * 10 ** 6;

    address public liquidityTokensWallet;
    address public stakeholdersTokensWallet;
    address public exchangeTokensWallet;

    mapping(address => uint256) public soldTokens;

    event RoundData(
        uint256 _round,
        address _user,
        uint256 _soldToken,
        uint256 _BuywithEth,
        uint256 _BuywithUSDT
    );

    modifier isListed() {
        if (soldTokens[msg.sender] <= 0) {
            revert youDontHaveEnoughTokens();
        }
        _;
    }

    IERC20USDT USDTtoken;

    constructor() ERC20("AIMToken", "AIM") {
        stakeholdersTokensWallet = 0x1ed5c3cC9A3379B757D9056De8f75BDF9b1cA17a; //Change Adresses here
        liquidityTokensWallet = 0x1ed5c3cC9A3379B757D9056De8f75BDF9b1cA17a; //Change Adresses here
        exchangeTokensWallet = 0x1ed5c3cC9A3379B757D9056De8f75BDF9b1cA17a; //Change Adresses here

        _mint(stakeholdersTokensWallet, stakeholdersTokens);
        _mint(liquidityTokensWallet, liquidityTokens);
        _mint(exchangeTokensWallet, exchangeTokens);

        USDTtoken = IERC20USDT(0x14EdAd7784360B622e9F284fFB314216De14cB0a); //0xdAC17F958D2ee523a2206206994597C13D831ec7
    }

    function totalSupply() public pure override returns (uint256) {
        return 1000_000_000 ether;
    }

    function startTheSale() public onlyOwner {
        if (round > 5) {
            revert allRoundsAreFinished();
        }
        round += 1;
        if(round < 6) {
        remainingSupply += roundLimit;
        raisedAmount = 0;
        }
    }

    // minting tokens function
    function mintByUSDT(uint256 _amount) external {
        if (round == 0) {
            revert waitForStartingSaleRoud();
        }

        if ((remainingSupply - _amount) < 0) {
            revert roundSupplyLimitExceed();
        }

        //////// stage one ////////////
        if (round == 1) {
            uint256 payAmountInUDST = sellTokenInUDSTPrice(
                _amount,
                round1Price
            );
            if (
                payAmountInUDST < 30*10**6 ||
                USDTtoken.balanceOf(msg.sender) < payAmountInUDST
            ) {
            
                revert youDontHaveEnoughUsdtORplasePurchaseMorethan30UsdtToken();
            }

            USDTtoken.transferFrom(msg.sender, address(this), payAmountInUDST);
            remainingSupply -= _amount;
            soldTokens[msg.sender] += _amount;
            raisedAmount += payAmountInUDST;
            emit RoundData(round, msg.sender, _amount, 0, payAmountInUDST);
        }
        //////// stage Two ////////////
        else if (round == 2) {
            uint256 payAmountInUDST = sellTokenInUDSTPrice(
                _amount,
                round2Price
            );
            if (
                 payAmountInUDST < 30*10**6 ||
                USDTtoken.balanceOf(msg.sender) < payAmountInUDST
            ) {
            
                revert youDontHaveEnoughUsdtORplasePurchaseMorethan30UsdtToken();
            }
            USDTtoken.transferFrom(msg.sender, address(this), payAmountInUDST);
            remainingSupply -= _amount;
            soldTokens[msg.sender] += _amount;
            raisedAmount += payAmountInUDST;
            emit RoundData(round, msg.sender, _amount, 0, payAmountInUDST);
        }
        //////// stage Three ////////////
        else if (round == 3) {
            uint256 payAmountInUDST = sellTokenInUDSTPrice(
                _amount,
                round3Price
            );
            if (
                 payAmountInUDST < 30*10**6 ||
                USDTtoken.balanceOf(msg.sender) < payAmountInUDST
            ) {
            
                revert youDontHaveEnoughUsdtORplasePurchaseMorethan30UsdtToken();
            }
            USDTtoken.transferFrom(msg.sender, address(this), payAmountInUDST);
            remainingSupply -= _amount;
            soldTokens[msg.sender] += _amount;
            raisedAmount += payAmountInUDST;
            emit RoundData(round, msg.sender, _amount, 0, payAmountInUDST);
        }
        //////// stage four ////////////
        else if (round == 4) {
            uint256 payAmountInUDST = sellTokenInUDSTPrice(
                _amount,
                round4Price
            );
            if (
                 payAmountInUDST < 30*10**6  ||
                USDTtoken.balanceOf(msg.sender) < payAmountInUDST
            ) {
            
                revert youDontHaveEnoughUsdtORplasePurchaseMorethan30UsdtToken();
            }
            USDTtoken.transferFrom(msg.sender, address(this), payAmountInUDST);
            remainingSupply -= _amount;
            soldTokens[msg.sender] += _amount;
            raisedAmount += payAmountInUDST;
            emit RoundData(round, msg.sender, _amount, 0, payAmountInUDST);
        }
        //////// stage five ////////////
        else if (round == 5) {
            uint256 payAmountInUDST = sellTokenInUDSTPrice(
                _amount,
                round5Price
            );
            if (
                 payAmountInUDST < 30*10**6 ||
                USDTtoken.balanceOf(msg.sender) < payAmountInUDST
            ) {
            
                revert youDontHaveEnoughUsdtORplasePurchaseMorethan30UsdtToken();
            }
            USDTtoken.transferFrom(msg.sender, address(this), payAmountInUDST);
            remainingSupply -= _amount;
            soldTokens[msg.sender] += _amount;
            raisedAmount += payAmountInUDST;
            emit RoundData(round, msg.sender, _amount, 0, payAmountInUDST);
        } else {
            revert mintingIsNotAllowed();
        }
    }

    //minting functiion in payable
    function mintByEth(uint256 _amount) external payable {
        if (round == 0) {
            revert waitForStartingSaleRoud();
        }

        if ((remainingSupply - _amount) < 0) {
            revert roundSupplyLimitExceed();
        }

        //////// stage one ////////////
        if (round == 1) {
            uint256 payAmountInUDST = sellTokenInUDSTPrice(_amount,round1Price);
            if (payAmountInUDST < 30*10**6) {
            
                revert pleasePurchaseMorethan30Doller();
            }

            uint256 payAmount = sellTokenInETHPrice(_amount, round1Price);
            if (msg.value < payAmount) {
            
                revert pleaseSendTokenPrice();
            }
            remainingSupply -= _amount;
            soldTokens[msg.sender] += _amount;
            raisedAmount += payAmountInUDST;
            emit RoundData(round, msg.sender, _amount, msg.value, payAmountInUDST);
        }
        //////// stage Two ////////////
        else if (round == 2) {
            uint256 payAmountInUDST = sellTokenInUDSTPrice(_amount,round2Price);
            if (payAmountInUDST < 30*10**6) {
            
                revert pleasePurchaseMorethan30Doller();
            }

            uint256 payAmount = sellTokenInETHPrice(_amount, round2Price);
            if (msg.value < payAmount) {
            
                revert pleaseSendTokenPrice();
            }
            remainingSupply -= _amount;
            soldTokens[msg.sender] += _amount;
            raisedAmount += payAmountInUDST;
            emit RoundData(round, msg.sender, _amount, msg.value, payAmountInUDST);
        }
        //////// stage Three ////////////
        else if (round == 3) {
            uint256 payAmountInUDST = sellTokenInUDSTPrice(_amount,round3Price);
            if (payAmountInUDST < 30*10**6) {
            
                revert pleasePurchaseMorethan30Doller();
            }

            uint256 payAmount = sellTokenInETHPrice(_amount, round3Price);
            if (msg.value < payAmount) {
            
                revert pleaseSendTokenPrice();
            }
            remainingSupply -= _amount;
            soldTokens[msg.sender] += _amount;
            raisedAmount += payAmountInUDST;
            emit RoundData(round, msg.sender, _amount, msg.value, payAmountInUDST);
        }
        //////// stage four ////////////
        else if (round == 4) {
            uint256 payAmountInUDST = sellTokenInUDSTPrice(_amount,round4Price);
            if (payAmountInUDST < 30*10**6) {
            
                revert pleasePurchaseMorethan30Doller();
            }

            uint256 payAmount = sellTokenInETHPrice(_amount, round4Price);

            if (msg.value < payAmount) {
            
                revert pleaseSendTokenPrice();
            }
            remainingSupply -= _amount;
            soldTokens[msg.sender] += _amount;
            raisedAmount += payAmountInUDST;
            emit RoundData(round, msg.sender, _amount, msg.value, payAmountInUDST);
        }
        //////// stage five ////////////
        else if (round == 5) {

            uint256 payAmountInUDST = sellTokenInUDSTPrice(_amount,round5Price);
            if (payAmountInUDST < 30*10**6) {
            
                revert pleasePurchaseMorethan30Doller();
            }


            uint256 payAmount = sellTokenInETHPrice(_amount, round5Price);

            if (msg.value < payAmount) {
            
                revert pleaseSendTokenPrice();
            }
            remainingSupply -= _amount;
            soldTokens[msg.sender] += _amount;
            raisedAmount += payAmountInUDST;
            emit RoundData(round, msg.sender, _amount, msg.value, payAmountInUDST);
        } else {
            revert mintingIsNotAllowed();
        }
    }

    function getLatestUSDTPrice() public view returns (uint256) {
        //0xEe9F2375b4bdF6387aa8265dD4FB8F16512A1d46 USDt/ETH Ethereum mainnet
        AggregatorV3Interface USDTPriceFeed = AggregatorV3Interface(
            0xEe9F2375b4bdF6387aa8265dD4FB8F16512A1d46
        ); // Mainnet contract address for USDT price feed
        (, int256 price, , , ) = USDTPriceFeed.latestRoundData(); // Get the latest USDT price data from Chainlink

        if (price <= 0) {
            // Ensure that the price is valid
            revert invalidUSDTPrice();
        }
        return uint256(price);
    }

    //This is withdraw Function, OnlyOwner Can call this Function
    function withdraw() public onlyOwner {
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        if (!success) {
            revert transferFaild();
        }
    }

    //withdraw USDT tokens
    function withdrawUSDT(uint256 _amount) public onlyOwner {
        if (USDTtoken.balanceOf(address(this)) < _amount*10**6) {
            revert contractDontHaveUSDT();
        }
        USDTtoken.transfer(owner(), _amount*10**6);
    }

    //claiming Tokens
    function claimAIMToken() public isListed {
        if (round < 6) {
            revert pleaseWaitForPreSaleEnd();
        }

        uint256 amount = soldTokens[msg.sender];
        delete soldTokens[msg.sender];
        _mint(msg.sender, amount);
    }

    // //this function sell token in USDT 6 decimal
    // function sellTokenInUDSTPrice(
    //     uint256 _amount,
    //     uint256 _roundPrice
    // ) public view returns (uint256) {
    //     uint256 conversion = _roundPrice * conversionRate;
    //     uint256 tokensAmountPrice = ((conversion * _amount) / 10 ** 18) / 10 ** 12;
    //     return tokensAmountPrice;
    // }

    // //this function sell token in Ether 18 decimal
    // function sellTokenInETHPrice(
    //     uint256 _amount,
    //     uint256 _roundPrice
    // ) public view returns (uint256) {
    //     uint256 conversion = _roundPrice * conversionRate;
    //     uint256 tokensAmountPrice = ((conversion * _amount) / 10 ** 18) / 10 ** 12;
    //     uint256 amountinEthers = tokensAmountPrice * conversionRate;
    //     //if you want to change hardcode the getLatestUSDTPrice()
    //     uint256 amountInEth = (getLatestUSDTPrice() * amountinEthers) / 10 ** 18;
    //     return amountInEth;
    // }


    // This function sells tokens in USDT with 6 decimal places
    function sellTokenInUDSTPrice(uint256 _amount,uint256 _roundPrice) public view returns (uint256) {
        uint256 tokensAmountPrice = calculateTokensAmountPrice(_amount,_roundPrice);
        return tokensAmountPrice;
    }

    // This function sells tokens in Ether with 18 decimal places
    function sellTokenInETHPrice(uint256 _amount, uint256 _roundPrice) public view returns (uint256) {
        uint256 tokensAmountPrice = calculateTokensAmountPrice(_amount, _roundPrice);
        uint256 amountInEth = calculateAmountInEther(tokensAmountPrice);
        return amountInEth;
    }

    function calculateTokensAmountPrice(uint256 _amount,uint256 _roundPrice) internal view returns (uint256) {
        uint256 conversion = _roundPrice * conversionRate;
        uint256 tokensAmountPrice = (conversion * _amount) / (10 ** 18 * 10 ** 12);
        return tokensAmountPrice;
    }

    function calculateAmountInEther(uint256 _tokensAmountPrice) internal view returns (uint256) {
        uint256 amountinEthers = (_tokensAmountPrice * conversionRate) / 10 ** 18;
        uint256 amountInEth = getLatestUSDTPrice() * amountinEthers;
        return amountInEth;
    }
    
}
