async function main() {
    const SimpleBank = await ethers.getContractFactory("ElectiveCoursesIBUV2");
    console.log("Upgrading  ElectiveCourse...");
    const PROXY_ADDRESS = '0xFD2b19d447a4DA21e2a962EC9FB53F1A28d2F24c';
    const bank = await upgrades.upgradeProxy(PROXY_ADDRESS, SimpleBank);
    await bank.waitForDeployment();


    console.log(
        "ElectiveCoursesIBU (logic contract): ",
        await upgrades.erc1967.getImplementationAddress(PROXY_ADDRESS)
    );
}


main().then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
