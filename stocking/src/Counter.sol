// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Counter {
    uint256 public number;
    string me;

    function setNumber(uint256 newNumber,string calldata _me) public {
        number = newNumber;
        me= _me;

    }

    function increment() public {
        number++;
    }
}