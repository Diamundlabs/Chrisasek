// Get the ABI of the Contract
const ABI = require("./ABI.json");
const Web3 = require("web3");
// Connect to provider
const web3 = new Web3(
  "https://mainnet.infura.io/v3/52591f6051994d468264ccf916b0aad8"
);
// const web3 = new Web3(
//   "https://eth-goerli.g.alchemy.com/v2/jBYeTekuSstRmS9OYUVbCPfSaqczxQ68"
// );

// Get the contract Address
const contractAddress = "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b";
// Define contract
const contract = new web3.eth.Contract(ABI, contractAddress);

const getContractDetails = async () => {
  try {
    const currentBlockNumber = await web3.eth.getBlockNumber();
    console.log("Current block number:", currentBlockNumber);

    // const currentBalance = web3.eth.getBalance(contractAddress, (err, wei) => {
    //   balance = web3.utils.fromWei(wei, "ether");
    //   console.log("Current Balance:", currentBalance);
    // });

    const contractName = await contract.methods.name().call();
    console.log("Contract Name:", contractName);

    const totalSupply = await contract.methods.totalSupply().call();
    console.log("Total Supply:", totalSupply);

    const balanceof = await contract.methods
      .balanceOf("0xeba8d3a502955c29790f53238ca5ed44a3fee2b3")
      .call();
    console.log("Balance Of:", balanceof);
  } catch (error) {
    console.log(error);
  }
};

getContractDetails();
