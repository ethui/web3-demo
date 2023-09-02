// SPDX-License-Identifier: MIT

// This example was adapted from the work of Emily Lin at https://trufflesuite.com/guides/nft-marketplace/

pragma solidity ^0.8.13;

contract Immutable {
    uint256 constant foo2 = 100;
    uint256 immutable foo;

    constructor(uint256 _foo) {
        foo = _foo;
    }

    function get() external view returns (uint256) {
        return foo;
    }
}
