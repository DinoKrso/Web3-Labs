// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract DinoCoin is ERC20, Ownable(msg.sender) {
   constructor() ERC20("W3BAM", "DinoKrsoMidterm2Coin"){
       _mint(msg.sender, 100000 * 10 ** 18);
   }


   function mint(uint256 amount, address receiver) public onlyOwner {
       _mint(receiver, amount * 10 ** 18);
   }
}
