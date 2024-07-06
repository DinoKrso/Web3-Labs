async function main() {
    const SimpleBank = await ethers.getContractFactory("ExamLedgerV2");
    console.log("Deploying ExamLedger...");
    const bank = await upgrades.deployProxy(SimpleBank, [], {
        initializer: 'initialize',
    });
    await bank.waitForDeployment();


    console.log("ExamLedge (proxy contract): ", bank.target);
    console.log(
        "ExamLedge(logic contract): ",
        await upgrades.erc1967.getImplementationAddress(bank.target)
    );
}


main().then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exitCode = 1;
});