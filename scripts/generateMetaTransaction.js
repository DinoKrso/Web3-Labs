const { ethers } = require("hardhat")


// student address
let studentAddress = "0xa64E3108B02dbf0F087ce33d0416B5F00ac84882"
// Course list
let courses = [3,5] 


// Define the contract ABI interface
const abi = [
    "function unregisterCourses(address,uint256[])"
]
const interface = new ethers.Interface(abi)


// Get the function signature by hashing it and retrieving the first 4 bytes
let fnSignature = interface.getFunction("unregisterCourses").selector
console.log("Function signature:", fnSignature);


// Encode the function parameters and generate the calldata
let fnParams = interface.encodeFunctionData("unregisterCourses", [studentAddress, courses])
console.log("Calldata:", fnParams);