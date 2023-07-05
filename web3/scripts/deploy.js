const { ethers } = require("hardhat");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */
  let USDT = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
  const TetherTokenContract = await ethers.getContractFactory("TetherToken");

  // here we deploy the contract
  const deployedTetherTokenContract = await TetherTokenContract.deploy("1000000", "Mohsin", "MRS", "6");
  // 10 is the Maximum number of whitelisted addresses allowed

  // Wait for it to finish deploying
  await deployedTetherTokenContract.deployed();

  // print the address of the deployed contract
  console.log(
    "TetherToken Contract Address:",
    deployedTetherTokenContract.address
  );



  const AIMTokenContract = await ethers.getContractFactory("AIMToken");

  // here we deploy the contract
  const deployedAIMTokenContract = await AIMTokenContract.deploy();
  // 10 is the Maximum number of whitelisted addresses allowed

  // Wait for it to finish deploying
  await deployedAIMTokenContract.deployed();

  // print the address of the deployed contract
  console.log("AIMToken Contract Address:", deployedAIMTokenContract.address);



let usdtToken = await ethers.getContractAt("TetherToken", USDT);
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

    await usdtToken.connect(signer).transfer("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", USDTtoken);
    let balance = await usdtToken.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

    console.log("usdToken balance ", balance)
  saveFrontendFiles(deployedAIMTokenContract, "AIMToken");

}

// Call the main function and catch if there is any error
function saveFrontendFiles(contract, name) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../../frontend/src/contractsData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);
  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// deployed AIMToken Contract Address: 0x9d136eEa063eDE5418A6BC7bEafF009bBb6CFa70
// deployed USDT contract address: 0x59C4e2c6a6dC27c259D6d067a039c831e1ff4947
