import ethers, { BigNumber } from 'ethers';
import 'dotenv/config'
import contractAbi from './GeneratorContract.json' assert {
  type: 'json',
  integrity: 'sha384-ABC123'
};
import { testnetsContractAddress } from './utils/testnet-contract-mapping.js';
import { PROVIDER_NAME_ARBITRUM, PROVIDERS_MAP } from './utils/providers-mapping.js'

const privateKey = process.env.PRIVATE_KEY;

const networkName = PROVIDER_NAME_ARBITRUM;

async function main() {
  const contractAddress = testnetsContractAddress[networkName].generator;

  const provider = new ethers.providers.JsonRpcProvider(PROVIDERS_MAP[networkName].url);
  const signer = new ethers.Wallet(privateKey, provider);

  // const contractInterface = new ethers.utils(contractAddress, contractAbi.abi, signer);
  // const contractInterface = new ethers.utils.Interface(contractAbi.abi);
  // const requestGeneratedEvent = contractInterface.encodeEventLog('RequestGenerated', [null, null, contractAddress, null, null, null, null, null]);

  const contract = new ethers.Contract(contractAddress, contractAbi.abi, signer);
  const requestGeneratedEvent = await contract.queryFilter('RequestGenerated', 49343694, 999999999);

  console.log(requestGeneratedEvent)
} 

main()