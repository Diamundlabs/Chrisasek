const { ethers } = require("ethers");

// mainnet
const APIKEY = "";
const provider = new ethers.JsonRpcProvider(
  "https://eth-mainnet.g.alchemy.com/v2/" + APIKEY
);

const main = async () => {
  const block = await provider.getBlockNumber();

  console.log(`\nBlock Number: ${block}\n`);

  const blockInfo = await provider.getBlock(block);

  console.log(blockInfo);

  const { transactions } = await provider.getBlockWithTransactions(block);

  console.log(`\nLogging first transaction in block:\n`);
  console.log(transactions[0]);
};

main();
