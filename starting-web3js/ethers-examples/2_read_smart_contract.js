const { ethers, formatEther } = require("ethers");

// mainnet
const APIKEY = "";
const provider = new ethers.JsonRpcProvider(
  "https://eth-mainnet.g.alchemy.com/v2/" + APIKEY
);

const contractAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DIA contract
const DIA = require("./DAI.json");
const contract = new ethers.Contract(contractAddress, DIA, provider);

const main = async () => {
  const name = await contract.name();
  console.log("Name: " + name);

  const symbol = await contract.symbol();
  console.log("Symbol: " + symbol);

  const totalSupply = await contract.totalSupply();
  console.log("Total Supply: " + formatEther(totalSupply));

  const balanceOf = await contract.balanceOf(
    "0x6c6Bc977E13Df9b0de53b251522280BB72383700"
  );
  console.log("Balance: " + formatEther(balanceOf));
};

main();
