const Sale = artifacts.require("./Sale.sol")

module.exports = function(deployer) {
  const userAddress = '0xb579533d259af20f5568832b94e040d07e0fba4a';
	deployer.deploy(Sale,userAddress);
};
