// TODO: BigInt verif
// TODO: Pagination
import { ethers } from "ethers";
import abi from "./abi.js";

// Connection Handlers

export const contractAddress = import.meta.env.VITE_CONTRACT;
const RPC = import.meta.env.VITE_RPC;
export const fromBlock = import.meta.env.VITE_BLOCK;

/**
 * Function to connect with metamask
 * @returns contractInstance - to interact with methods, provider, address
 */

export const getWeb3 = async () => {
  try {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const rpc = new ethers.JsonRpcProvider(RPC);
      const contractInstance = new ethers.Contract(contractAddress, abi, signer);
      const address = await signer.getAddress();
      return { contractInstance, provider, address };
    } else {
      alert("No metamask found!!");
    }
  } catch (err) {
    return { message: err };
  }
};

// Float Handlers

/**
 * Creates a new float (ride request) with the specified details
 * @param {uint256} _fare - The fare for the ride request
 * @param {uint256} _latitudeStart - The starting latitude for the ride
 * @param {uint256} _longitudeStart - The starting longitude for the ride
 * @param {uint256} _latitudeEnd - The ending latitude for the ride
 * @param {uint256} _longitudeEnd - The ending longitude for the ride
 * @returns {string} - The result of creating the new float
 */
export async function createFloat(contractInstance, _fare, _latitudeStart, _longitudeStart, _latitudeEnd, _longitudeEnd) {
  try {
    const tx = await contractInstance.createFloat(_fare, _latitudeStart, _longitudeStart, _latitudeEnd, _longitudeEnd, {value: _fare});
    await tx.wait();
  }
  catch (err) {
    console.error("Error Creating the float:", err);
  }
}

/**
 * Returns all the floats i.e. open ride requests
 * @returns floatId, riderAddress, fare, isMatched, latStart, longStart, latEnd, longEnd
 */
export async function getAllFloats(contractInstance) {
  try {
    const data = await contractInstance.getAllFloats();
    return data;
  } catch (err) {
    console.error("Error getting floats:", err);
  }
}

/**
 * Returns the count of open ride requests (floats)
 * @returns floatCount
 */
export async function getFloatCount(contractInstance) {
  try {
    const count = await contractInstance.getFloatCount();
    return count;
  } catch (err) {
    console.error("Error getting the Float count:", err);
  }
}

// Proposal Handlers

/**
 * Returns all the proposals i.e. rides
 * @returns Array[proposalId, floatId, riderAddress, driverAddress, fare, isCompleted, isFulfilled, latStart, longStart, latEnd, longEnd]
 */
export async function getAllProposals(contractInstance) {
  try {
    const data = await contractInstance.getAllProposals();
    return data;
  } catch (err) {
    console.error("Error getting proposals:", err);
  }
}

/**
 * Returns details of a specific proposal (ride request)
 * @param {uint256} _proposalId - The ID of the proposal to fetch details for
 * @returns proposalId, floatId, riderAddress, driverAddress, fare, isCompleted, isFulfilled, latStart, longStart, latEnd, longEnd
 */
export async function getProposalDetails(contractInstance, _proposalId) {
  try {
    const details = await contractInstance.getProposalDetails(_proposalId);
    return details;
  } catch (err) {
    console.error("Error getting Proposal details:", err);
  }
}

/**
 * Creates a new proposal (ride request) with the specified float ID
 * @param {uint256} _floatId - The ID of the float to create a proposal for
 * @returns result
 */
export async function createNewProposal(contractInstance, _floatId) {
  try {
    const result = await contractInstance.createNewProposal(_floatId);
    await result.wait();
    return result;
  } catch (err) {
    console.error("Error creating a new proposal:", err);
  }
}


/**
 * Returns the count of proposals (ride requests matched)
 * @returns proposalCount
 */
export async function getProposalCount(contractInstance) {
  try {
    const count = await contractInstance.getProposalCount();
    return count;
  } catch (err) {
    console.error("Error getting Proposal count:", err);
  }
}

// User Handlers

export async function getUserRidesPerformed(contractInstance) {
  try {
    const result = await contractInstance.getUserRidesPerformed();
    return result;
  }
  catch (err) {
    console.error(err);
  }
}

export async function createUser(contractInstance) {
  try {
    const tx = await contractInstance.createUser();
    await tx.wait();
  }
  catch (err) {
    console.error(err);
  }
}

export async function deleteUser(contractInstance) {
  try {
    const tx = await contractInstance.deleteUser();
    await tx.wait();
  }
  catch (err) {
    console.error(err);
  }
}


/**
 * Returns the list of rides availed by the current user
 * @returns ridesAvailed
 */
export async function getUserRidesAvailed(contractInstance) {
  try {
    const rides = await contractInstance.getUserRidesAvailed();
    return rides;
  } catch (err) {
    console.error("Error getting user rides availed:", err);
  }
}

/**
 * Returns a boolean value showcasing whether the user is registered or not
 * @returns {boolean} verified
 */
export async function isUserActive(contractInstance) {
  try {
    const verification = await contractInstance.isUserActive();
    return verification;
  } catch (err) {
    console.error("Error getting user rides availed:", err);
  }
}


/**
 * Marks a proposal (ride request) as completed
 * @param {uint256} _proposalId - The ID of the proposal to mark as completed
 * @returns result
 */
export async function markProposalCompleted(contractInstance, _proposalId) {
  try {
    const result = await contractInstance.markProposalCompleted(_proposalId);
    return result;
  } catch (err) {
    console.error("Error marking the proposal complete:", err);
  }
}

/**
 * Withdraws funds for a completed proposal (ride request)
 * @param {uint256} _proposalId - The ID of the proposal to withdraw funds for
 * @returns result
 */
export async function withdrawProposalFunds(contractInstance, _proposalId) {
  try {
    const result = await contractInstance.withdrawProposalFunds(_proposalId);
    return result;
  } catch (err) {
    console.error("Error while Withdrawing funds", err);
  }
}
