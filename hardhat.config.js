require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  networks : {
    mumbai:{
      url: process.env.REACT_APP_NODE_URL,
      accounts: [process.env.REACT_APP_PRIV_KEY],
    }
  },
  etherscan : {
    apiKey :  process.env.REACT_APP_POLYGON_API_KEY,
  }
}

