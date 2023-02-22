const { ethers } = require("hardhat");
const LZ_ENDPOINTS = require("../constants/layerzeroEndpoints.json")
const OFT_CONFIG = require("../constants/oftConfig.json")
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");
async function main() {
// Verify the contract after deploying

const endpointAddr = LZ_ENDPOINTS['bsc']
const globalSupply = ethers.utils.parseUnits(OFT_CONFIG.globalSupply, 18)
const FACTORY = '0xca143ce32fe78f1f7019d7d551a6402fc5350c73'
const WETH = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
const ROUTER = '0x10ED43C718714eb63d5aA57B78B54704E256024E'


await hre.run("verify:verify", {
address: "0x53De095578cfadea2459bdeC8641ffC0Eeb935a3",
contract: "contracts/examples/Xyn1.sol:TestToken1",
constructorArguments: [endpointAddr, globalSupply, FACTORY, WETH, ROUTER],
// for example, if your constructor argument took an address, do something like constructorArguments: ["0xABCDEF..."],
});
}
// Call the main function and catch if there is any error
main()
.then(() => process.exit(0))
.catch((error) => {
console.error(error);
process.exit(1);
});