const { ethers } = require("hardhat");
const LZ_ENDPOINTS = require("../constants/layerzeroEndpoints.json")
const OFT_CONFIG = require("../constants/oftConfig.json")
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");
async function main() {
// Verify the contract after deploying

const endpointAddr = LZ_ENDPOINTS['avalanche']

await hre.run("verify:verify", {
address: "0xB7A8FBD203beB733F3Cf500f7e9e654dA0f1f4Ee",
contract: "contracts/examples/Xyn2.sol:TestToken2",
constructorArguments: [endpointAddr],
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