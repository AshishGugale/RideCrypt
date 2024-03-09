import {JsonRpcProvider, Wallet, Contract} from "ethers"
import "dotenv/config"

const provider = new JsonRpcProvider(process.env.RPC)
const wallet = new Wallet(process.env.privateKey, provider)

const contractInstance = new Contract(process.env.contractAddress, [
    "function getContractBalance() public view returns (uint256)",
], wallet)

async function getContractBalance() {
    try {
        const transaction = await contractInstance.getContractBalance();
        console.log("Current contract balance:", transaction)
    }
    catch (err) {
        console.log("Error getting contract balance: ", err.message)
    }
}

getContractBalance();