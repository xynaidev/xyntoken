const LZ_ENDPOINTS = require("../constants/layerzeroEndpoints.json")
const OFT_CONFIG = require("../constants/oftConfig.json")
const { ethers } = require("hardhat")



module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()

    console.log(`>>> your address: ${deployer}`)

    console.log("network: ",hre.network.name)

    // get the Endpoint address
    const endpointAddr = LZ_ENDPOINTS[hre.network.name]
    const globalSupply = ethers.utils.parseUnits(OFT_CONFIG.globalSupply, 18)

    const FACTORY = '0xca143ce32fe78f1f7019d7d551a6402fc5350c73'
    const WETH = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    const ROUTER = '0x10ED43C718714eb63d5aA57B78B54704E256024E'
    
    console.log(`[${hre.network.name}] LayerZero Endpoint address: ${endpointAddr}`)

    await deploy("TestToken", {
        from: deployer,
        args: [endpointAddr, globalSupply, FACTORY, WETH, ROUTER],
        log: true,
        waitConfirmations: 1,
    })
}

module.exports.tags = ["Xyn1"]
