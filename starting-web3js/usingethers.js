const { ethers } = require("ethers");
const ABI = require("./ABI.json");  
const contractAddress = "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b";

const getBlockNumber = async () => {
  const provider = new ethers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/52591f6051994d468264ccf916b0aad8"
  );

  const blockNumber = await provider.getBlockNumber();
  console.log("blockNumber", blockNumber);

  const contract = new ethers.Contract(contractAddress, ABI, provider);
  const tokenName = await contract.name();
  console.log("tokenName", tokenName);
  const tokenSymbol = await contract.symbol();
  console.log("tokenSymbol", tokenSymbol);

  const tokenDecimals = await contract.decimals();
  console.log("tokenDecimals", tokenDecimals);

  const totalSupply = await contract.totalSupply();
  console.log("totalSupply", totalSupply);
};

getBlockNumber();
