
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC20USDT {
    function allowance(address owner, address spender) external returns (uint);
    function transferFrom(address from, address to, uint value) external;
    function approve(address spender, uint value) external;
    function totalSupply() external  returns (uint);
    function balanceOf(address who) external  returns (uint);
    function transfer(address to, uint value) external;
}


error youDontHaveEnoughBalance();
error transferFaild();
error roundSupplyLimitExceed();
error waitForStartingSaleRoud();
error contractDontHaveUSDT();
error youHavePurchasedToken();
error mintingIsNotAllowed();
error pleaseSendTokenPrice();

contract AIMToken is ERC20,Ownable {

    uint256 public round;
    

    uint256 public constant roundLimit = 100_000_000 ether;

    uint256 public liquidityTokens =    100_000_000 ether;
    uint256 public stakeholdersTokens = 200_000_000 ether;
    uint256 public exchangeTokens =     200_000_000 ether;

    uint256 public remainingSupply;  

    uint256 conversionRate = 10**12;

    uint256 public round1Price = 0.005 *10**6;
    uint256 public round2Price = 0.01  *10**6;
    uint256 public round3Price = 0.02  *10**6;
    uint256 public round4Price = 0.04  *10**6;
    uint256 public round5Price = 0.08  *10**6;

    address public liquidityTokensWallet;
    address public stakeholdersTokensWallet;
    address public exchangeTokensWallet;    

    mapping(address => uint256) public soldTokens;
  


    struct Rounds{
        uint256 usersInRound;
        uint256 tokensSold;
        uint256 ethRaised;
        uint256 usdtRaised;
    }

    event RoundData(uint256 _round,address _user, uint256 _soldToken,uint256 _BuywithEth,uint256 _BuywithUSDT);
    
    modifier isListed() {
        if (soldTokens[msg.sender] <= 0) {
            revert youHavePurchasedToken();
        }
        _;
    }


    IERC20USDT USDTtoken;
    constructor(address _token) ERC20("AIMToken","AIM") {
        stakeholdersTokensWallet = address(this);
        liquidityTokensWallet = address(this);
        exchangeTokensWallet = address(this);

        _mint(stakeholdersTokensWallet,stakeholdersTokens);
        _mint(liquidityTokensWallet,liquidityTokens);
        _mint(exchangeTokensWallet,exchangeTokens);

        USDTtoken = IERC20USDT(_token);  
    }

    function totalSupply() public override pure returns(uint256){
        return 1000_000_000 ether; 
    }

    function startTheSale() public onlyOwner { 
        require(round < 6 , "All rounds are finished");
            round+=1;
            remainingSupply += roundLimit;      
    }

    // minting tokens function
    function mintByUSDT(uint256 _amount) external {
    if(round == 0){
         revert waitForStartingSaleRoud();
    }
    
    if((remainingSupply - _amount) <= 0){
         revert roundSupplyLimitExceed();
     }

    //////// stage one ////////////    
    if(round == 1){
    
    uint256 payAmountInUDST = sellTokenInUDSTPrice(_amount, round1Price);
    if(USDTtoken.balanceOf(msg.sender) < 30*10**6 || USDTtoken.balanceOf(msg.sender) < payAmountInUDST) {  //price*token/ether
         revert youDontHaveEnoughBalance();   
     }
     
     USDTtoken.transferFrom(msg.sender,address(this),payAmountInUDST);
        remainingSupply -= _amount;
        soldTokens[msg.sender]+=_amount;
        emit RoundData(round,msg.sender,_amount,0,payAmountInUDST);
    }

    //////// stage Two ////////////   
    else if(round == 2){
    uint256 payAmountInUDST = sellTokenInUDSTPrice(_amount, round2Price);
    if(USDTtoken.balanceOf(msg.sender)<30*10**6 || USDTtoken.balanceOf(msg.sender) < payAmountInUDST) {  //price*token/ether
            revert youDontHaveEnoughBalance();   
        }
     USDTtoken.transferFrom(msg.sender,address(this),payAmountInUDST);
       remainingSupply -= _amount;
        soldTokens[msg.sender]+=_amount;
        emit RoundData(round,msg.sender,_amount,0,payAmountInUDST);
    }

    //////// stage Three ////////////  
    else if(round == 3){
 uint256 payAmountInUDST = sellTokenInUDSTPrice(_amount, round3Price);
  if(USDTtoken.balanceOf(msg.sender)<30*10**6 || USDTtoken.balanceOf(msg.sender) < payAmountInUDST) {  //price*token/ether
            revert youDontHaveEnoughBalance();   
        }
     USDTtoken.transferFrom(msg.sender,address(this),payAmountInUDST);
      remainingSupply -= _amount;
        soldTokens[msg.sender]+=_amount;
        emit RoundData(round,msg.sender,_amount,0,payAmountInUDST);

    }

    //////// stage four ////////////  
    else if(round == 4){
    uint256 payAmountInUDST = sellTokenInUDSTPrice(_amount, round4Price);
    if(USDTtoken.balanceOf(msg.sender)<30*10**6 || USDTtoken.balanceOf(msg.sender) < payAmountInUDST) {  //price*token/ether
            revert youDontHaveEnoughBalance();   
        }
     USDTtoken.transferFrom(msg.sender,address(this),payAmountInUDST);
       remainingSupply -= _amount;
        soldTokens[msg.sender]+=_amount;
    emit RoundData(round,msg.sender,_amount,0,payAmountInUDST);
    }

    //////// stage five ////////////  
    else if(round == 5){
   uint256 payAmountInUDST = sellTokenInUDSTPrice(_amount,round5Price);
    if(USDTtoken.balanceOf(msg.sender)<30*10**6 || USDTtoken.balanceOf(msg.sender) < payAmountInUDST) {  //price*token/ether
            revert youDontHaveEnoughBalance();   
    }
     USDTtoken.transferFrom(msg.sender,address(this),payAmountInUDST);
       remainingSupply -= _amount;
        soldTokens[msg.sender]+=_amount;
        emit RoundData(round,msg.sender,_amount,0,payAmountInUDST);
   
    }
    else{
        revert mintingIsNotAllowed();
    }
   
  }


    //minting functiion in payable 
    function mintByEth(uint256 _amount) external payable {
    if(round == 0){
         revert waitForStartingSaleRoud();
    }
    
    if((remainingSupply - _amount) <= 0){
             revert roundSupplyLimitExceed();
    }
    
    if(USDTtoken.balanceOf(msg.sender) < 30*10**6) {  //price*token/ether
       revert youDontHaveEnoughBalance();   
    }

    //////// stage one ////////////    
    if(round == 1){
      uint256 payAmount = sellTokenInETHPrice(_amount,round1Price);
    if(msg.value < payAmount) {  //price*token/ether
            revert pleaseSendTokenPrice();   
        } 
        remainingSupply -= _amount;
        soldTokens[msg.sender]+=_amount;
            emit RoundData(round,msg.sender,_amount,msg.value,0);
    }

    //////// stage Two ////////////   
    else if(round == 2){
    uint256 payAmount = sellTokenInETHPrice(_amount,round2Price);
    if(msg.value < payAmount) {  //price*token/ether
            revert pleaseSendTokenPrice();   
        } 
       remainingSupply -= _amount;
        soldTokens[msg.sender]+=_amount;
        emit RoundData(round,msg.sender,_amount,msg.value,0);
    }

    //////// stage Three ////////////  
    else if(round == 3){
    uint256 payAmount = sellTokenInETHPrice(_amount,round3Price);

    if(msg.value < payAmount ) {  //price*token/ether
            revert pleaseSendTokenPrice();   
        } 
        remainingSupply -= _amount;
        soldTokens[msg.sender]+=_amount;
    emit RoundData(round,msg.sender,_amount,msg.value,0);
    }

    //////// stage four ////////////  
    else if(round == 4){
    uint256 payAmount = sellTokenInETHPrice(_amount,round4Price);

    if(msg.value < payAmount) {  //price*token/ether
            revert pleaseSendTokenPrice();   
        } 
        remainingSupply -= _amount;
        soldTokens[msg.sender]+=_amount;
    emit RoundData(round,msg.sender,_amount,msg.value,0);
    }

    //////// stage five ////////////  
    else if(round == 5){
    uint256 payAmount = sellTokenInETHPrice(_amount,round5Price);

    if(msg.value < payAmount ) {  //price*token/ether
            revert pleaseSendTokenPrice();   
        } 
       remainingSupply -= _amount;
       soldTokens[msg.sender]+=_amount;

    emit RoundData(round,msg.sender,_amount,msg.value,0);
    }

    else{
        revert mintingIsNotAllowed();
    }
    }


    function getLatestUSDTPrice() public view returns (uint256) {
    //0xEe9F2375b4bdF6387aa8265dD4FB8F16512A1d46 USDt/ETH Ethereum mainnet
        AggregatorV3Interface USDTPriceFeed = AggregatorV3Interface(0xEe9F2375b4bdF6387aa8265dD4FB8F16512A1d46); // Mainnet contract address for USDT price feed
        (, int256 price, , ,) = USDTPriceFeed.latestRoundData(); // Get the latest USDT price data from Chainlink
        require(price > 0, "Invalid USDT price"); // Ensure that the price is valid
        return uint256(price);
    }
  
    //This is withdraw Function, OnlyOwner Can call this Function
    function withdraw()public onlyOwner{
        (bool success,) = msg.sender.call{value:address(this).balance}("");
        if(!success){
        revert transferFaild();
        } 
    }
    


    //withdraw USDT tokens
    function withdrawUSDT()public onlyOwner{
     if(USDTtoken.balanceOf(msg.sender) < 0) {  //price*token/ether
         revert contractDontHaveUSDT();   
       }
       USDTtoken.transfer(owner(),USDTtoken.balanceOf(address(this)));
    }

    //claiming Tokens
    function claimAIMToken() public isListed {
    require(round == 6,"please wait for preSale end");
        uint256 amount = soldTokens[msg.sender];
        delete soldTokens[msg.sender];
        _mint(msg.sender,amount);
    }   

    
    //this function sell token in USDT 6 decimal
    function sellTokenInUDSTPrice(uint256 _amount, uint256 _roundPrice) public view returns(uint256){
    uint256 conversion = _roundPrice*conversionRate;
    uint256 tokensAmountPrice =((conversion *_amount)/10**18)/10**12;
    return tokensAmountPrice;
    }
    
      //this function sell token in Ether 18 decimal
    function sellTokenInETHPrice(uint256 _amount, uint256 _roundPrice) public view returns(uint256){
    uint256 conversion = _roundPrice*conversionRate;
    uint256 tokensAmountPrice =((conversion *_amount)/10**18)/10**12;
    uint256 amountinEthers = tokensAmountPrice*conversionRate;
    //if you want to change hardcode the getLatestUSDTPrice()
    uint256 amountInEth =( getLatestUSDTPrice() * amountinEthers)/10**18;
    return amountInEth;
    }

}
