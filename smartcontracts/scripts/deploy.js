// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const dogeFactory = await hre.ethers.getContractFactory('DogeCoin')
  const dogeContract = await dogeFactory.deploy()
  await dogeContract.deployed()
  console.log('Dogecoin deployed to:: ', dogeContract.address)

  const linkFactory = await hre.ethers.getContractFactory('Link')
  const linkContract = await linkFactory.deploy()
  await linkContract.deployed()
  console.log('LinkToken deployed to:: ', linkContract.address)

  const daiFactory = await hre.ethers.getContractFactory('Dai')
  const daiContract = await daiFactory.deploy()
  await daiContract.deployed()
  console.log('DaiToken deployed to:: ', daiContract.address)

  const usdcFactory = await hre.ethers.getContractFactory('Usdc')
  const usdcContract = await usdcFactory.deploy()
  await usdcContract.deployed()
  console.log('UsdcToken deployed to:: ', usdcContract.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
