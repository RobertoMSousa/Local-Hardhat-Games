// add the game address here and update the contract name if necessary
const gameAddr = "0x9A676e781A523b5d0C0e43731313A708CB607508";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    

    const txAllowence = await game.giveMeAllowance(10000);
    await txAllowence.wait();
    const txMint = await game.mint(10000);
    await txMint.wait();
    
    const tx = await game.win();

    
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
