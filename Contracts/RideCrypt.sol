// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract RideProposal {
    using SafeMath for uint256;

    address public owner;

    struct Proposal {
        address user;
        address driver;
        uint256 fare; // Store the fare in milliether
        bool isFulfilled;
    }

    mapping(uint256 => Proposal) public proposals;
    uint256 public proposalCount;

    event ProposalCreated(uint256 proposalId, address indexed user, address indexed driver, uint256 fare);
    event ProposalFulfilled(uint256 proposalId, address indexed user, address indexed driver, uint256 fare);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function createProposal(address _driver, uint256 _fare) external payable {
        proposalCount++;
        proposals[proposalCount] = Proposal(msg.sender, _driver, _fare, false);
        emit ProposalCreated(proposalCount, msg.sender, _driver, _fare);
    }

    function fulfillProposal(uint256 _proposalId) external onlyOwner {
        require(_proposalId > 0 && _proposalId <= proposalCount, "Invalid proposal ID");
        require(!proposals[_proposalId].isFulfilled, "Proposal is already fulfilled");

        // Transfer fare from contract to the driver
        require(
            payable(proposals[_proposalId].driver).send(proposals[_proposalId].fare.mul(1e15)),
            "Failed to transfer fare to the driver"
        );

        proposals[_proposalId].isFulfilled = true;

        emit ProposalFulfilled(
            _proposalId,
            proposals[_proposalId].user,
            proposals[_proposalId].driver,
            proposals[_proposalId].fare
        );
    }

    // Function to get the contract balance
    function getContractBalance() external view onlyOwner returns (uint256) {
        return address(this).balance;
    }
}
