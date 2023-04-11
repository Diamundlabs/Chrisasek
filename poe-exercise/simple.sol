// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract SimplePOE {
    bytes32 private proof;

    // constructor(string memory document) {
    //     proof = store(document);
    // }

    // Calculate and store document
    function storeDocument(string memory document) public {
        proof = calculateProof(document);
    }

    // Get a document sha
    function calculateProof(
        string memory document
    ) private pure returns (bytes32) {
        return sha256(abi.encodePacked(document));
    }

    // Get proof
    function checkDocument(string memory document) public view returns (bool) {
        if (calculateProof(document) == proof) return true;
        return false;
    }
}
