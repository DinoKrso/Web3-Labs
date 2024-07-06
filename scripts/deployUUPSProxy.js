async function main() {
    const SimpleBank = await ethers.getContractFactory("ElectiveCoursesIBU");
    console.log("Deploying ElectiveCoursesIBU...");
    const bank = await upgrades.deployProxy(SimpleBank, [], {
        initializer: 'initialize',
    });
    await bank.waitForDeployment();


    console.log("ElectiveCourse (proxy contract): ", bank.target);
    console.log(
        "ElectiveCourse(logic contract): ",
        await upgrades.erc1967.getImplementationAddress(bank.target)
    );
}


main().then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exitCode = 1;
});