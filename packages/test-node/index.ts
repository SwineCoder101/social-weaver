import ethers from 'ethers';
import dotenv from 'dotenv';

dotenv.config();

const {PRIVATE_KEY,CHAINID,CELOSCAN_API_KEY,ETHERSCAN_API_KEY,RPC_URL} = process.env;
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const abi = [
  "function get() view returns (uint256)",
  "function set(uint256 _value) returns (uint256)"
];

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

// Replace with the actual ABI and bytecode
const bytecode = "/* ... Counter contract bytecode ... */";

async function main() {
  // Set up a wallet - replace with your wallet details
  const wallet = new ethers.Wallet(PRIVATE_KEY || '');
  
  // Connect to a provider - use a testnet or local network
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  const walletConnected = wallet.connect(provider);

  // Deploy the contract
  const factory = new ethers.ContractFactory(abi, bytecode, walletConnected);
  const contract = await factory.deploy();

  console.log(`Contract deployed at address: ${contract.address}`);

  // Interact with the contract
  const setTx = await contract.setNumber(42);
  await setTx.wait();

  const incrementTx = await contract.increment();
  await incrementTx.wait();

  const number = await contract.number();
  console.log(`Counter number: ${number}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});