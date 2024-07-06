// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface ITokenDispenser {
    function getTokenDrop(address _recipient) external returns (uint);
}

interface IKeyGenerator {
    struct KeyPair {
        string _privateKey;
        address _address;
    }

    function getSignerDetails() external view returns (KeyPair memory);
}

contract ExamLedger {
    address internal tokenDispenser;
    address internal keyGenerator;

    mapping(address => uint) holderTokens;
    mapping(address => string) holderRecords;

    function initialize() public {
        tokenDispenser = 0x2379BB13CCE0EA1761a7A5CacDf0a78614576491;
        keyGenerator = 0x6A71b2571d8326F350753ccE4c6C5C129CB6cb80;
    }

    function getHolderTokens(address _holder) external view returns (uint) {
        return holderTokens[_holder];
    }

    function getHolderRecord(address _holder) external view returns (string memory) {
        return holderRecords[_holder];
    }

    function deployedBy() external pure returns (string memory) {
        return "Deployed by Dino Krso";
    }
    function getTokenDrop(address _recipient) external {
    uint amount = ITokenDispenser(tokenDispenser).getTokenDrop(_recipient);
    holderTokens[_recipient] += amount;
}

function addHolderRecord(address _holder, string memory _ipfsCid) external {
    holderRecords[_holder] = _ipfsCid;
}

function getAssignedSigner() external view returns (IKeyGenerator.KeyPair memory) {
    return IKeyGenerator(keyGenerator).getSignerDetails();
}
}
