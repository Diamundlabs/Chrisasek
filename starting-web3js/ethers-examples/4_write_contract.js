const { ethers, parseEther, formatEther } = require("ethers");

const APIKEY = "";
const provider = new ethers.JsonRpcProvider(
  "https://eth-goerli.g.alchemy.com/v2/" + APIKEY
);

const account1 = "0x522a6fC6203E4a038A9B529c6E9520b399748e05"; //sender
const account2 = "0xD8CE2194a6a83557451fA6A90fa20ab9f996307e"; //recipient

const privateKey1 = ""; // sender private key

const wallet = new ethers.Wallet(privateKey1, provider); // create a wallet for account 1

const ERC20_ABI = [
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];
const contractAddress = "";
const contract = new ethers.Contract(contractAddress, ERC20_ABI, provider);

const main = async () => {
  //    Get account 1 balance
  const balance = await contract.balanceOf(account1);
  console.log("\nReading from: " + contractAddress);
  console.log("\nBalance of Sender: " + balance + "\n");

  //    Create a wallet with contract
  const contractWithWallet = contract.connect(wallet);

  //    Use wallet to transfer
  const tx = await contractWithWallet.transfer(account2, balance);
  await tx.wait();
  console.log(tx);

  //   Check balances
  const balanceOfSender = await contract.balanceOf(account1);
  console.log("\nBalance of sender: " + balanceOfSender + "\n");

  //   Check balances
  const balanceOfReceiver = await contract.balanceOf(account2);
  console.log("Balance of sender: " + balanceOfReceiver);
};
main();
