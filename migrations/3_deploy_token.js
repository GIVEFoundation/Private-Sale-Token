const Token = artifacts.require("./Token.sol")

module.exports = function(deployer) {
  const saleAddress = '0xe41120b4b28b8658c400c69feb8336e2944e50f8';
	deployer.deploy(Token,saleAddress);
};
