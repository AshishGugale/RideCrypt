// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract RideProposal {
    using SafeMath for uint256;

    address public owner;
    uint256 public proposalCount;
    uint256 public floatCount;

    struct Proposal {
        uint256 proposalId;
        uint256 floatId;
        address user;
        address driver;
        uint256 fare; // Store the fare in milliether
        bool isCompleted;
        bool isFulfilled;
        uint256 latitudeStart;
        uint256 longitudeStart;
        uint256 latitudeEnd;
        uint256 longitudeEnd;
    }

    struct Float {
        uint256 floatId;
        address user;
        uint256 fare; // Store the fare in milliether
        bool isMatched;
        uint256 latitudeStart;
        uint256 longitudeStart;
        uint256 latitudeEnd;
        uint256 longitudeEnd;
    }

    struct User {
        address userAddress;
        uint256[] ridesAvailed;
        uint256[] ridesPerformed;
        bool isActive;
        bool isRiding;
    }

    mapping(uint256 => Float) public floats;
    mapping(uint256 => Proposal) public proposals;
    mapping(address => User) public userMapping;

    function getAllProposals() external view returns (Proposal[] memory) {
        Proposal[] memory allProposals = new Proposal[](proposalCount);
        for (uint256 i = 1; i <= proposalCount; i++) {
            allProposals[i - 1] = proposals[i];
        }
        return allProposals;
    }

    function getAllFloats() external view returns (Float[] memory) {
        Float[] memory allFloats = new Float[](floatCount);
        for (uint256 i = 1; i <= floatCount; i++) {
            allFloats[i - 1] = floats[i];
        }
        return allFloats;
    }

    event FloatCreated(uint256 indexed floatId, uint256 indexed fare);
    event ProposalCreated(
        uint256 indexed proposalId,
        uint256 indexed floatId,
        address indexed driver
    );
    event ProposalFulfilled(
        uint256 indexed proposalId,
        address indexed rider,
        address indexed driver,
        uint256 fare
    );
    event UserCreated(address indexed userAddr);

    constructor() {
        owner = msg.sender;
        proposalCount = 0;
        floatCount = 0;
    }

    function getProposalCount() public view returns (uint256) {
        return proposalCount;
    }

    function getFloatCount() public view returns (uint256) {
        return floatCount;
    }

    function createNewProposal(uint256 _floatId) external payable {
        require(userMapping[msg.sender].isActive, "User is not registered!!");
        require(_floatId > 0 && _floatId <= floatCount, "Invalid float ID!!");

        proposalCount++;

        proposals[proposalCount] = Proposal(
            proposalCount,
            _floatId,
            floats[_floatId].user,
            msg.sender,
            floats[_floatId].fare,
            false,
            false,
            floats[_floatId].latitudeStart,
            floats[_floatId].longitudeStart,
            floats[_floatId].latitudeEnd,
            floats[_floatId].longitudeEnd
        );

        userMapping[msg.sender].ridesAvailed.push(proposalCount);
        userMapping[msg.sender].isRiding = false;
        floats[_floatId].isMatched = true;

        emit ProposalCreated(proposalCount, _floatId, msg.sender);
    }

    function createFloat(
        uint256 _fare,
        uint256 _latitudeStart,
        uint256 _longitudeStart,
        uint256 _latitudeEnd,
        uint256 _longitudeEnd
    ) external payable {
        require(userMapping[msg.sender].isActive, "User is not registered!!");
        require(
            !userMapping[msg.sender].isRiding,
            "User already has an open float!!"
        );

        floatCount++;

        floats[floatCount] = Float(
            floatCount,
            msg.sender,
            _fare,
            false,
            _latitudeStart,
            _longitudeStart,
            _latitudeEnd,
            _longitudeEnd
        );

        emit FloatCreated(floatCount, _fare);
    }

    function getProposalDetails(uint256 _proposalId)
        external
        view
        returns (
            uint256,
            uint256,
            address,
            address,
            uint256,
            bool,
            bool,
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        require(
            _proposalId > 0 && _proposalId <= proposalCount,
            "Invalid proposal ID!!"
        );

        Proposal storage proposal = proposals[_proposalId];

        return (
            proposal.proposalId,
            proposal.floatId,
            proposal.user,
            proposal.driver,
            proposal.fare,
            proposal.isCompleted,
            proposal.isFulfilled,
            proposal.latitudeStart,
            proposal.longitudeStart,
            proposal.latitudeEnd,
            proposal.longitudeEnd
        );
    }

    function getProposalUser(uint256 _proposalId)
        public
        view
        returns (address)
    {
        return proposals[_proposalId].user;
    }

    function getProposalDriver(uint256 _proposalId)
        public
        view
        returns (address)
    {
        return proposals[_proposalId].driver;
    }

    function getProposalFare(uint256 _proposalId)
        public
        view
        returns (uint256)
    {
        return proposals[_proposalId].fare;
    }

    function isProposalFulfilled(uint256 _proposalId)
        public
        view
        returns (bool)
    {
        return proposals[_proposalId].isFulfilled;
    }

    function withdrawProposalFunds(uint256 _proposalId) external {
        require(
            _proposalId > 0 && _proposalId <= proposalCount,
            "Invalid proposal ID"
        );
        require(
            proposals[_proposalId].isCompleted,
            "The ride has not ended yet!!"
        );
        require(
            !proposals[_proposalId].isFulfilled,
            "Proposal is already fulfilled"
        );
        require(
            getContractBalance() >= proposals[_proposalId].fare,
            "Not enough balance!!"
        );

        require(
            payable(proposals[_proposalId].driver).send(
                proposals[_proposalId].fare
            ),
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

    function markProposalCompleted(uint256 _proposalId) external {
        userMapping[proposals[_proposalId].driver].ridesPerformed.push(
            proposalCount
        );
        proposals[_proposalId].isCompleted = true;
    }

    function getContractBalance() public view returns (uint256) {
        require(
            msg.sender == owner,
            "Only the owner can perform this action!!"
        );
        return address(this).balance;
    }

    function returnContractBalance() external {
        require(msg.sender == owner, "Only the owner can perform this!!");
        uint256 currBal = getContractBalance();
        require(
            payable(owner).send(currBal),
            "Failed to transfer current balance"
        );
    }

    function createUser() public {
        require(!userMapping[msg.sender].isActive, "The user already exists!!");

        userMapping[msg.sender] = User(
            msg.sender,
            new uint256[](0),
            new uint256[](0),
            true,
            false
        );

        emit UserCreated(msg.sender);
    }

    function deleteUser() public {
        require(userMapping[msg.sender].isActive, "The user doesn't exist!!");
        userMapping[msg.sender].isActive = false;
    }

    function getUserRidesAvailed() public view returns (uint256[] memory) {
        return userMapping[msg.sender].ridesAvailed;
    }

    function getUserRidesPerformed() public view returns (uint256[] memory) {
        return userMapping[msg.sender].ridesPerformed;
    }

    function isUserActive() public view returns (bool) {
        return userMapping[msg.sender].isActive;
    }
}
