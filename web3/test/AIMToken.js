const { expect } = require("chai");
const { ethers } = require("hardhat");
const { Provider } = require("web3modal");



// async function mineNBlocks(n) {
//   for (let index = 0; index < n; index++) {
//     await ethers.provider.send('evm_mine');
//   }
// }

describe("This Is AIM", function () {


  let TetherToken
  let Tether
  let AIMToken
  let AIM
  let usdtToken

  let USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

  before(async () => {
    [per1, per2, per3] = await ethers.getSigners()

    AIMToken = await ethers.getContractFactory("AIMToken")
    AIM = await AIMToken.deploy();
    console.log("AIM contract address", AIM.address);

    usdtToken = await ethers.getContractAt("TetherToken", USDT);

  });


  it("this is get Round", async function () {
    await AIM.startTheSale();
    let round = await AIM.round();
    console.log("this is Round", round);
  })
  it("this is get Round", async function () {
    await AIM.startTheSale();
    let round = await AIM.round();
    console.log("this is Round", round);
  })
  it("this is get Round", async function () {
    await AIM.startTheSale();
    let round = await AIM.round();
    console.log("this is Round", round);
  })
  it("this is get Round", async function () {
    await AIM.startTheSale();
    let round = await AIM.round();
    console.log("this is Round", round);
  })
  it("this is get Round", async function () {
    await AIM.startTheSale();
    let round = await AIM.round();
    console.log("this is Round", round);
  })




  it("this is impersonate account ", async function () {
    /// trying to take token from mainnet 
    const imperUSDC = "0xA7A93fd0a276fc1C0197a5B5623eD117786eeD06";

    await network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [imperUSDC],
    });

    const signer = await ethers.getSigner(imperUSDC);

    console.log(
      "Vitalik account before transaction",
      ethers.utils.formatEther(await signer.getBalance())
    );

    let USDTtoken = await usdtToken.connect(signer).balanceOf(signer.getAddress());
    console.log("ImpersonateAccount Balance", USDTtoken)

    await usdtToken.connect(signer).transfer(per1.getAddress(), USDTtoken);
    let balance = await usdtToken.balanceOf(per1.getAddress());

    console.log("usdToken balance ", balance)

  })

  it("Get latus price ", async function () {
    let price = await AIM.getLatestUSDTPrice();
    console.log("lets Price", price);
  })


  it("lets swap by ETH ", async function () {


    const balance = await ethers.provider.getBalance(AIM.address);
    // Convert the balance to ether
    const balanceInEther = ethers.utils.formatEther(balance);
    console.log(balanceInEther);

    let token = ethers.utils.parseEther("370");
    // let getPrice = await AIM.sellTokenInETHPrice(token,"80000");
    // await AIM.mintByEth(token, { value: getPrice })


    let getPrice2 = await AIM.sellTokenInUDSTPrice(token,"80000");
    await usdtToken.approve(AIM.address,getPrice2);
    await AIM.mintByUSDT(token)

    const afterbalance = await ethers.provider.getBalance(AIM.address);
    // Convert the balance to ether
    const afterbalances = ethers.utils.formatEther(afterbalance);
    console.log("afterbalance", Number(afterbalances).toFixed(6));
    console.log("afterbalance without fix", afterbalance.toString());

    //   let balance = await usdtToken.balanceOf(account2);
    //   console.log("usdToken balance ", balance)

  });

  it("this is error check of round before  ", async function(){
    await AIM.claimAIMToken();
  })

  it("this is get Round", async function () {
    await AIM.startTheSale();
    let round = await AIM.round();
    console.log("this is Round", round);
  })

  it("this is error check of round ", async function(){
    await AIM.claimAIMToken();
  })

  it("this is get Round", async function () {
    await AIM.startTheSale();
    let round = await AIM.round();
    console.log("this is Round", round);
  })

  it("this is checking balance after calm token", async function (){
    
    let balance = await AIM.balanceOf(per1.getAddress());
    console.log("usdToken balance ", balance)
  })

});
