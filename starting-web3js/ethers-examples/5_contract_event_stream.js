const { ethers } = require("ethers");

// mainnet
const APIKEY = "";
const provider = new ethers.JsonRpcProvider(
  "https://eth-mainnet.g.alchemy.com/v2/" + APIKEY
);

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const contractAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
const contract = new ethers.Contract(contractAddress, ERC20_ABI, provider)

const main = async () => {
    const latestBlockNumber = await provider.getBlockNumber()

    const transferEvents = await contract.queryFilter('Transfer', latestBlockNumber - 1, latestBlockNumber)
    console.log(transferEvents)
}

main()