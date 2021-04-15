var GCoinContract = artifacts.require("../contracts/Gcoin.sol");
module.exports = function(deployer) {
    deployer.deploy(GCoinContract, 10);
};