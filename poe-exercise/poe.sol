// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Poe {
    bytes32[] private proofs;

    // Calculate document proof.
    function calculateProof(
        string memory document
    ) private pure returns (bytes32) {
        return sha256(abi.encodePacked(document));
    }

    // Store proof.
    function storeDocument(string memory document) public {
        proofs.push(calculateProof(document));
    }

    // Check if a document has proof
    function checkDocument(string memory document) public view returns (bool) {
        return hasProof(calculateProof(document));
    }

    // Returns `true` if proof is stored.
    function hasProof(bytes32 proof) private view returns (bool) {
        for (uint256 i = 0; i < proofs.length; i++) {
            if (proofs[i] == proof) {
                return true;
            }
        }
        return false;
    }
}
