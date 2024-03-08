import {JsonRpcProvider, Wallet, Contract} from "ethers"
import "dotenv/config"

const provider = new JsonRpcProvider(process.env.RPC)
const wallet = new Wallet(process.env.privateKey, provider)

const contractInstance = new Contract(process.env.contractAddress, [
    "function fulfillProposal(uint256 _proposalId) external",
], wallet)

async function fulfillProposal(proposalId) {
    try {
        const transaction = await contractInstance.fulfillProposal(proposalId);
        const receipt = await transaction.wait();
        console.log("Fulfilled!!!")
    }
    catch (err) {
        console.log("Error fulfulling proposal: ", err.message)
    }
}

export default fulfillProposal;