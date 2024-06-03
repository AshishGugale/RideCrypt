import React, { createContext, useEffect, useState } from "react";
import { getWeb3 } from "../integration/scripts.js";
import MetamaskConnect from "../pages/MetamaskConnect.jsx";

// Create a context to hold web3 related data
export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [contractInstance, setContractInstance] = useState(null);
  const [address, setAddress] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const initializeWeb3 = async () => {
    try {
      // Get web3 instance
      const web3Instance = await getWeb3();
      setWeb3(web3Instance);

      // Set contractInstance and address based on web3Instance
      const contract = web3Instance.contractInstance;
      setContractInstance(contract);

      const accounts = web3Instance.address;
      setAddress(accounts);
    } catch (error) {
      console.error("Error initializing web3:", error);
    }
  };

  const getUserVerification = async () => {
    try {
      if (!contractInstance) return;
      const verification = await contractInstance.isUserActive();
      setIsVerified(verification);
    } catch (err) {
      console.error("Error getting user verification:", err);
    }
  };

  // useEffect to initialize web3 when component mounts
  useEffect(() => {
    if (!web3) {
      initializeWeb3();
    }
  }, [web3]);

  useEffect(() => {
    if (!web3) return;
    getUserVerification();
  }, [web3, address]);

  return (
    <Web3Context.Provider value={{ web3, contractInstance, address, isVerified, setIsVerified }}>
      {address.length === 0 ? <MetamaskConnect /> : children}
    </Web3Context.Provider>
  );
};
