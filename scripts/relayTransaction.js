async function main() {
    console.log("Accessing the relay...");


    // Your relay address
    const RELAY_ADDRESS = '0xa2541Bd645619777c85E79878882499d1c53A72f'


    // Raw meta transaction data
    // (supply your own calldata)
    const CALLDATA = '0x6838841b000000000000000000000000a64e3108b02dbf0f087ce33d0416b5f00ac8488200000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000005';


    // Address of the elective course contract (or any other contract that we want to execute operations on)
    const CONTRACT_ADDRESS = '0xFD2b19d447a4DA21e2a962EC9FB53F1A28d2F24c';


    // Nonce (prevents transaction replays)
    // Will need to +1 for every next transaction by this user
    const NONCE = 0;


    // Meta transaction signature (supply the signature)
    const SIGNATURE = '0x4b0fffe3cab32590bef14d3d058a352df6394f7383f2598d2ed804f28687f56c09fe8e054294632ede5ad497b75b23e76fa4bfd1eeb91300fd099b7b9722c8d41c'


    const relay = await ethers.getContractAt("Relay", RELAY_ADDRESS);


    const relayTx = await relay.forward(CONTRACT_ADDRESS, CALLDATA, NONCE, SIGNATURE)
    await relayTx.wait()


    console.log("Transaction successfully relayed.");
    console.log(relayTx)
}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
