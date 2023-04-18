const { ethers, parseEther, formatEther } = require("ethers");

const APIKEY = "";
const provider = new ethers.JsonRpcProvider(
  "https://eth-goerli.g.alchemy.com/v2/" + APIKEY
);

const account1 = "0x522a6fC6203E4a038A9B529c6E9520b399748e05"; //sender
const account2 = "0xD8CE2194a6a83557451fA6A90fa20ab9f996307e"; //recipient

const privateKey1 = ""; // sender private key

const wallet = new ethers.Wallet(privateKey1, provider); // create a wallet for account 1

const main = async () => {
  // Show account 1 balance before transfer
  const senderBalance = await provider.getBalance(account1);
  console.log("Sender Balance: " + formatEther(senderBalance));
  // Show account 2 balance before transfer
  const receiverBalance = await provider.getBalance(account2);
  console.log("Receiver Balance: " + formatEther(receiverBalance));

  // Send Ether
  const tx = await wallet.sendTransaction({
    to: account2,
    value: parseEther("0.017"),
  });

  // Wait for transaction to be mined: Fetch Transaction
  await tx.wait();
  console.log(tx);

  // Show account 1 balance before transfer
  const senderBalanceAfter = await provider.getBalance(account1);
  console.log("Sender Balance: " + formatEther(senderBalanceAfter));
  // Show account 2 balance before transfer
  const receiverBalanceAfter = await provider.getBalance(account2);
  console.log("Receiver Balance: " + formatEther(receiverBalanceAfter));
};
main();
