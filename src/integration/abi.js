const abi = [
  // Events
  "event FloatCreated(uint256 indexed floatId, uint256 indexed fare)",
  "event ProposalCreated(uint256 indexed proposalId, uint256 indexed floatId, address indexed driver)",
  "event ProposalFulfilled(uint256 indexed proposalId, address indexed rider, address indexed driver, uint256 fare)",
  "event UserCreated(address indexed userAddr)",
  
  // Proposal Functions
  "function getProposalDetails(uint256 _proposalId) external view returns (uint256, uint256, address, address, uint256, bool, bool, uint256, uint256, uint256, uint256)",
  "function createNewProposal(uint256 _floatId) external payable",
  "function getProposalCount() public view returns (uint256)",
  "function getAllProposals() external view returns (tuple(uint256,uint256,address,address,uint256,bool,bool,uint256,uint256,uint256,uint256)[])",
  
  // Float Functions
  "function createFloat(uint256 _fare, uint256 _latitudeStart, uint256 _longitudeStart, uint256 _latitudeEnd, uint256 _longitudeEnd) external payable",
  "function getFloatCount() public view returns (uint256)",
  "function getAllFloats() external view returns (tuple(uint256,address,uint256,bool,uint256,uint256,uint256,uint256)[])",


  // User Functions
  "function createUser() public",
  "function deleteUser() public",
  "function getUserRidesAvailed() public view returns (uint256[] memory)",
  "function getUserRidesPerformed() public view returns (uint256[] memory)",
  "function isUserActive() public view returns (bool)",

  // Authorization Functions
  "function markProposalCompleted(uint256 _proposalId) external",
  "function withdrawProposalFunds(uint256 _proposalId) external",

  // Contract Balance Functions
  "function getContractBalance() public view returns (uint256)",
  "function returnContractBalance() external"
];

export default abi;
