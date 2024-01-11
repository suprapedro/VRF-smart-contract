import ethers from 'ethers';

import contractAbi from '../DepositContract.json' assert {
  type: 'json',
  integrity: 'sha384-ABC123'
};
import { testnetsContractAddress } from '../utils/testnet-contract-mapping.js';
import { PROVIDER_NAME_ARBITRUM, PROVIDER_NAME_OPTIMISM, PROVIDER_NAME_POLYGON, PROVIDER_NAME_AVAX, PROVIDER_NAME_KLAYTN, PROVIDER_NAME_MANTLE, PROVIDER_NAME_BNB, PROVIDER_NAME_BASE, PROVIDER_NAME_ETH, PROVIDERS_MAP } from '../utils/providers-mapping.js'
import 'dotenv/config'

const privateKey = process.env.PRIVATE_KEY;
const INFURA_API_KEY = process.env.API_KEY;

export const networks = [PROVIDER_NAME_ARBITRUM, PROVIDER_NAME_OPTIMISM, PROVIDER_NAME_POLYGON, PROVIDER_NAME_AVAX, PROVIDER_NAME_KLAYTN, PROVIDER_NAME_MANTLE, PROVIDER_NAME_BNB, PROVIDER_NAME_BASE, PROVIDER_NAME_ETH];
// const networks = [
  // PROVIDER_NAME_APTOS,
  // PROVIDER_NAME_IOTEX,
  // PROVIDER_NAME_DOGE,
  // PROVIDER_NAME_TELOS,
  // PROVIDER_NAME_KCC,
  // PROVIDER_NAME_METIS,
  // PROVIDER_NAME_SUI,
  // PROVIDER_NAME_FANTOM,
  // PROVIDER_NAME_ASTAR,
  // PROVIDER_NAME_CRONOS,
  // PROVIDER_NAME_CELO,
  // PROVIDER_NAME_FUNCTIONX,
  // PROVIDER_NAME_GNOSIS,
  // PROVIDER_NAME_AURORA,
  // PROVIDER_NAME_WATR,
  // PROVIDER_NAME_TOMOCHAIN,
  // PROVIDER_NAME_EVMOS,
  // PROVIDER_NAME_BOBA,
  // PROVIDER_NAME_DFK,
  // PROVIDER_NAME_SYSCOIN,
  // PROVIDER_NAME_OKX,
  // PROVIDER_NAME_HARMONY,
// ]
// const networks = [PROVIDER_NAME_ETH]

console.log(networks)
for (const network of networks) {
  // Network
  console.log(network)
  const networkName = network

  // Provider
  const provider = new ethers.providers.JsonRpcProvider(PROVIDERS_MAP[networkName].url);

  // Signer
  const signer = new ethers.Wallet(privateKey, provider);

  // Contract
  const contractAddress = testnetsContractAddress[networkName].deposit ?? testnetsContractAddress[networkName].router;
  const smartContract  = new ethers.Contract(contractAddress, contractAbi.abi, signer);

  async function main() {
    const clients = await smartContract.listAllWhitelistedClient()
    console.log(`${networkName}: `, clients)
  }

  main();
}