import {JsonRpcProvider, parseUnits, Wallet, Contract} from "ethers"
import "dotenv/config"

const provider = new JsonRpcProvider(process.env.RPC)
const wallet = new Wallet(process.env.privateKey, provider)

const contractInstance = new Contract(process.env.contractAddress, [
    "function createProposal(address _driver, uint _fare) external payable",
], wallet)

async function createProposal(driverAddress, fare) {
    try {
        fare = fare * 1000
        const fareAmountInWei = parseUnits(fare.toString(), 'gwei');
        const transaction = await contractInstance.createProposal(driverAddress, fareAmountInWei, { value: fareAmountInWei});
        console.log("Created!!")
    }
    catch (err) {
        console.log("Error creating proposal: ", err.message)
    }
}

export default createProposal;