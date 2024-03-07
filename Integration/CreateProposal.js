import ethers from "ethers"
import "dotenv/config"

const provider = new ethers.JsonRpcProvider(process.env.RPC)
const wallet = new ethers.Wallet(process.env.privateKey, provider)

const contractInstance = new ethers.Contract(process.env.contractAddress, [
    "function createProposal(address _driver, uint _fare) external payable",
], wallet)

