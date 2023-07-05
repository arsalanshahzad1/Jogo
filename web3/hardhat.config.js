require("@nomiclabs/hardhat-waffle");
require("hardhat-abi-exporter");
require("dotenv").config({ path: __dirname + "/.env" });
require("@nomiclabs/hardhat-etherscan");
require("hardhat-contract-sizer");
require("hardhat-gas-reporter");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// console.log(process.env.ALCHEMY_API)
// console.log(process.env.privateKey)

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// const ALCHEMY_API_KEY = `

// const privateKey = `669a00a5dcee6b12e70ec23b4a793b14bcb38a0f657ce29ada80b578e14743a7`

module.exports = {
  // solidity: {
  //   compilers: [
  //   {
  //   version: "0.8.19",
  //   settings: {
  //     optimizer: {
  //       enabled: true,
  //       runs: 2000,
  //     },
  //   },
  //   version: "0.6.12",
  //   settings: {
  //     optimizer: {
  //       enabled: true,
  //       runs: 2000,
  //     },
  //   },
  //   version: "0.4.18",
  //   settings: {
  //     optimizer: {
  //       enabled: true,
  //       runs: 2000,
  //     },
  //   },
  // }]
  // },

  solidity: {
    compilers: [
      {
        version: "0.8.9",
      },
      {
        version: "0.4.17",
      },
      {
        version: "0.8.19",
      },
    ],
  },

  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      gasPrice: "auto",

      // gas: 2100000,
      // gasPrice: 8000000000,
      forking: {
        // url: `https://polygon-mainnet.g.alchemy.com/v2/8JkHo3qUxg6xK4OpBBG7XrfND3pZL0ig`,
        url: "https://eth-mainnet.g.alchemy.com/v2/ZNNDDz0q4xxwLvO9wQw-dPsHQ0urQ_J8",
        //   url: `https://bsc-dataseed1.binance.org/`,
        // url : "https://wiser-wider-valley.bsc.discover.quiknode.pro/050ea5d25ccade9d764fac15bd4709b810d543a1/"
      },
    },
    goerli: {
      url:`https://eth-goerli.g.alchemy.com/v2/j0MMbBOrmZmaqGwY81ztrumG-SERiDm7`,
      accounts: ['b72bbcdcffada988ab054276130abbd132e12aa652ac70973fff075acf753aa6'],
    },
    // testnet: {
    //   url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    //   chainId: 97,
    //   gasPrice: 21000000000,
    //   accounts: [`0x${process.env.privateKey}`],
    // },
    // mainnet: {
    //   url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API}`,
    //   accounts: [`0x${process.env.privateKey}`],
    // },
  },

  // contractSizer: {
  //   alphaSort: true,
  //   disambiguatePaths: false,
  //   runOnCompile: true,
  //   strict: true,
  //   only: [':Staking$',':HESTOKEN$'],
  // },

  // abiExporter: {
  //   path: '../frontend/src/contract',
  //   runOnCompile: true,
  //   clear: true,
  //   only: [':Staking$',':HESTOKEN$',':IERC20Metadata$',':IUniswapV2Router02$'],
  //   flat: true,
  //   spacing: 2,
  //   pretty: true,
  // },

  // deployed contracts
  // 0x963af78444548Ed7cb4F3479268719C05FaD3695 contract BTFP
  // 0x3d1de993dfb747178c8ad3b9dff4f9751865d5f3 weth
  // 0xF93b3Bc07A3B3e29e2A80aC7B75F279e750C2b4A pair
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "GC3A7BY9VEP5R54SDEGT3EQVE9G4AC13PV",
  },
  mocha: {
    timeout: 1000000,
  },
  gasReporter: {
    currency: "USD",
    gasPrice: "auto",
  },
};
// npx hardhat verify --constructor-args ./arguments.js --network rinkeby 0x8Eb6B4D40D35243352aBAD59BFDB27a161F3Bdc1
//npx hardhat verify --network rinkeby 0x8Eb6B4D40D35243352aBAD59BFDB27a161F3Bdc1 "0x3B2FA3fB4c7eD3bC495F276DC60782b635bB04d9" "0x3B2FA3fB4c7eD3bC495F276DC60782b635bB04d9"
