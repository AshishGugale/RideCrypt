import { JsonRpcProvider, Wallet, Contract } from "ethers";
import "dotenv/config";

const provider = new JsonRpcProvider(process.env.RPC);
const wallet = new Wallet(process.env.privateKey, provider);

const contractInstance = new Contract(
  process.env.contractAddress,
  ["function returnBalance() external"],
  wallet
);

async function returnBalance() {
  try {
    const transaction = await contractInstance.returnBalance();
    console.log("Transferred!!");
  } catch (err) {
    console.log("Error transferring funds to owner ", err.message);
  }
}
returnBalance();