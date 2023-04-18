const { ethers, formatEther } = require("ethers");

const APIKEY = "";
const provider = new ethers.JsonRpcProvider(
  "https://eth-mainnet.g.alchemy.com/v2/" + APIKEY
);

const address = "";

const main = async () => {
  const blockNumber = await provider.getBlockNumber();
  console.log(blockNumber);

  const balance = await provider.getBalance("ethers.eth");
  console.log(formatEther(balance));

  const transactionCount = await provider.getTransactionCount("ethers.eth");
  console.log(transactionCount);
};

main();
