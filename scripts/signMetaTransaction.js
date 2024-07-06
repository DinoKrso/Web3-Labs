// Raw meta transaction data
const { ethers } = require("hardhat");


// (supply your own calldata)
const CALLDATA = '0x124e6462000000000000000000000000a64e3108b02dbf0f087ce33d0416b5f00ac848820000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000005';


// Address of the elective course contract (or any other contract that we want to execute operations on)
const CONTRACT_ADDRESS = '0xFD2b19d447a4DA21e2a962EC9FB53F1A28d2F24c';


// Nonce (prevents transaction replays)
// Will need to +1 for every next transaction by this user
const NONCE = 0;


// Encode the relay transaction
const abiCoder = new ethers.AbiCoder();
let rawData = abiCoder.encode(
   ["address", "bytes", "uint256"],
   [CONTRACT_ADDRESS, CALLDATA, NONCE]
)
console.log("Relay data:", rawData);


// Hash the data
let hash = ethers.solidityPackedKeccak256(["bytes"], [rawData])
console.log("Data hash:", hash)


// Sign the message
async function sign() {
   const provider = new ethers.AlchemyProvider(network = "sepolia", process.env.ALCHEMY_API_KEY);
   const signer = new ethers.Wallet(process.env.SEPOLIA_PRIVATE_KEY2, provider);
 
   let signature = await signer.signMessage(ethers.getBytes(hash))
   console.log("Signature:", signature)
}
sign();