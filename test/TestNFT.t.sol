// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import {NFT} from "contracts/NFT.sol";

contract BaseSetup is Test {
    NFT internal nft;
    address ownerAdd = makeAddr("Ownder");
    address userAdd = makeAddr("User");

    function setUp() public {
        nft = new NFT("http://test.com/");
    }

    function testMint() public {
        vm.deal(userAdd, 10 ether);
        nft.mint(userAdd);
        assertEq(nft.balanceOf(userAdd), 1);
        uint256 tokenId1 = nft.currentId();
        assertEq(tokenId1, 1);

        nft.mint(userAdd);
        assertEq(nft.balanceOf(userAdd), 2);
        uint256 tokenId2 = nft.currentId();
        assertEq(tokenId2, 2);

        nft.mint(userAdd);
        assertEq(nft.balanceOf(userAdd), 3);
        uint256 tokenId3 = nft.currentId();
        assertEq(tokenId3, 3);
    }
}
