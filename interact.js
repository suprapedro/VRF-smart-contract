import * as ethers from 'ethers';

import contractAbi from './DepositContract.json' assert {
  type: 'json',
  integrity: 'sha384-ABC123'
};

import 'dotenv/config'

const privateKey = process.env.PRIVATE_KEY;
const INFURA_API_KEY = process.env.API_KEY;

const PROVIDER_NAME_APTOS = 'aptos';
const PROVIDER_NAME_OPTIMISM = 'optimism';
const PROVIDER_NAME_IOTEX = 'iotex';
const PROVIDER_NAME_DOGE = 'doge';
const PROVIDER_NAME_TELOS = 'telos';
const PROVIDER_NAME_KCC = 'kcc';
const PROVIDER_NAME_METIS = 'metis';
const PROVIDER_NAME_SUI = 'sui';
const PROVIDER_NAME_ETH = 'eth';
const PROVIDER_NAME_ARBITRUM = 'arbitrum';
const PROVIDER_NAME_POLYGON = 'polygon';
const PROVIDER_NAME_AVAX = 'avax';
const PROVIDER_NAME_FANTOM = 'fantom';
const PROVIDER_NAME_ASTAR = 'astar';
const PROVIDER_NAME_CRONOS = 'cronos';
const PROVIDER_NAME_CELO = 'celo';
const PROVIDER_NAME_KLAYTN = 'klaytn';
const PROVIDER_NAME_FUNCTIONX = 'functionx';
const PROVIDER_NAME_GNOSIS = 'gnosis';
const PROVIDER_NAME_AURORA = 'aurora';
const PROVIDER_NAME_WATR = 'watr';
const PROVIDER_NAME_TOMOCHAIN = 'tomochain';
const PROVIDER_NAME_EVMOS = 'evmos';
const PROVIDER_NAME_BOBA = 'boba';
const PROVIDER_NAME_DFK = 'dfk';
const PROVIDER_NAME_SYSCOIN = 'syscoin';
const PROVIDER_NAME_MANTLE = 'mantle';
const PROVIDER_NAME_BNB = 'bnb';
const PROVIDER_NAME_BASE = 'base';
const PROVIDER_NAME_OKX = 'okx';
const PROVIDER_NAME_HARMONY = 'harmony';

const networks = [PROVIDER_NAME_ARBITRUM, PROVIDER_NAME_OPTIMISM, PROVIDER_NAME_POLYGON, PROVIDER_NAME_AVAX, PROVIDER_NAME_KLAYTN, PROVIDER_NAME_MANTLE, PROVIDER_NAME_BNB, PROVIDER_NAME_BASE, PROVIDER_NAME_ETH];
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

const PROVIDERS_MAP = {
  [PROVIDER_NAME_ETH]: { url: `http://3.111.23.132:8545`, chainId: 5, gasLimit: 9500000 },
  [PROVIDER_NAME_OPTIMISM]: {
      url: 'http://34.23.216.45:9993',
      chainId: 420,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_ARBITRUM]: {
      url: 'http://34.131.238.44:8547',
      chainId: 421613,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_POLYGON]: {
      url: 'http://34.29.204.22:8545/',
      chainId: 80001,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_AVAX]: {
      url: `http://34.130.236.14:9650/ext/bc/C/rpc`,
      chainId: 43113,
      gasLimit: 8000000,
  },
  [PROVIDER_NAME_FANTOM]: { url: 'http://34.173.151.216:18545', chainId: 4002, gasLimit: 9500000 },
  [PROVIDER_NAME_ASTAR]: { url: 'http://34.162.184.137:9944/', chainId: 81, gasLimit: 9500000 },
  [PROVIDER_NAME_CRONOS]: {
      url: 'http://35.196.227.113:8545',
      chainId: 338,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_TELOS]: { url: 'https://testnet.telos.net/evm', chainId: 41, gasLimit: 9500000 },
  [PROVIDER_NAME_CELO]: { url: 'http://34.135.151.138:8545', chainId: 44787, gasLimit: 9500000 },
  [PROVIDER_NAME_KLAYTN]: { url: 'http://34.142.245.178:8551', chainId: 1001, gasLimit: 9500000 },
  [PROVIDER_NAME_DOGE]: { url: 'http://34.16.141.237:8545', chainId: 568, gasLimit: 9500000 },
  [PROVIDER_NAME_IOTEX]: { url: 'http://35.194.26.171:8080', chainId: 4690, gasLimit: 9500000 },
  [PROVIDER_NAME_FUNCTIONX]: {
      url: 'http://34.131.154.60:1317',
      chainId: 90001,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_METIS]: { url: 'https://goerli.gateway.metisdevops.link', chainId: 599, gasLimit: 8000000 },
  [PROVIDER_NAME_KCC]: { url: 'https://rpc-testnet.kcc.network', chainId: 322, gasLimit: 9500000 },
  [PROVIDER_NAME_GNOSIS]: { url: 'http://35.222.246.84:8545', chainId: 10200, gasLimit: 9500000 },
  [PROVIDER_NAME_AURORA]: { url: 'http://34.106.75.231', chainId: 1313161555, gasLimit: 10500000 },
  [PROVIDER_NAME_WATR]: { url: 'https://rpc.dev.watr.org', chainId: 688, gasLimit: 9500000 },
  [PROVIDER_NAME_TOMOCHAIN]: { url: 'http://34.64.186.90:8545', chainId: 89, gasLimit: 9500000 },
  [PROVIDER_NAME_EVMOS]: { url: 'http://52.78.115.239:8545', chainId: 9000, gasLimit: 9500000 },
  [PROVIDER_NAME_BOBA]: { url: 'https://testnet.bnb.boba.network', chainId: 9728, gasLimit: 9500000 },
  [PROVIDER_NAME_DFK]: {
      url: 'http://35.203.21.63:9650',
      chainId: 335,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_SYSCOIN]: {
      url: 'https://rpc.tanenbaum.io',
      chainId: 5700,
      gasLimit: 8000000,
  },
  [PROVIDER_NAME_MANTLE]: {
      url: 'https://rpc.testnet.mantle.xyz',
      chainId: 5001,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_BNB]: {
    url: 'http://34.78.232.98:8575',
    chainId: 56,
    gasLimit: 9500000
  },
  [PROVIDER_NAME_SUI]: {
    chainId: 101,
    gasLimit: 9500000
  },
  [PROVIDER_NAME_BASE]: {
    url: 'http://13.232.103.61:8545',
    chainId: 8453,
    gasLimit: 9500000
  },
  [PROVIDER_NAME_APTOS]: {
    url: 'http://13.54.252.189:8080/v1',
    chainId: 1,
    gasLimit: 9500000
  },
  [PROVIDER_NAME_HARMONY]: {
    url: 'https://api.s0.b.hmny.io',
    chainId: 1666700000,
    gasLimit: 9500000
  },
  [PROVIDER_NAME_OKX]: {
    url: 'https://exchaintestrpc.okex.org',
    chainId: 65,
    gasLimit: 9500000
  }
};

// Testnets
const testnetsContractAddress = {
  [PROVIDER_NAME_ARBITRUM]: {
    router: '0xe0c0c4b7fe7d07fcde1a4f0959006a71c0ebe787',
    deposit: '0xd5fd8f137d718a1eb386e8c854c27612690548bb'
  },
  [PROVIDER_NAME_APTOS]: {
    router: '0x36b67d62112127f2125f2f2820ccaed685242ea3f7f50bc12ab66c980da69288',
  },
  [PROVIDER_NAME_ASTAR]: {
    router: '0xfF9706f3a9683beDE0A7f5FeED67984b91ea0819',
  },
  [PROVIDER_NAME_AURORA]: {
    router: '0xb2667190b753720188a4039dd2b6014f01e07fea'
  },
  [PROVIDER_NAME_AVAX]: {
    router: '0x430d3842aB7a10E7004bf1079c0749EBE0BF1793',
    deposit: '0x625A41C06dB498808fC957447dccDdf2cDE9112C'
  },
  [PROVIDER_NAME_BASE]: {
    router: '0xe01754DEB54c4915D65331Fa31ebf9111CacF9C2',
    deposit: '0x51a34E727001b97c26e70Bd677fc799490e781d7'
  },
  [PROVIDER_NAME_BNB]: {
    router: '0xF65754b4988aD9ff25E0f2980f645A02eEB73A5D',
    deposit: '0x45dD6AB76De3c326d8296299C849791897FCffc2'
  },
  [PROVIDER_NAME_BOBA]: {
    router: '0xb2667190b753720188a4039dd2b6014f01e07fea',
  },
  [PROVIDER_NAME_CELO]: {
    router: '0xb2667190b753720188a4039dd2b6014f01e07fea',
  },
  [PROVIDER_NAME_CRONOS]: {
    router: '0x45dD6AB76De3c326d8296299C849791897FCffc2',
    deposit: '0xDa70d9B653f38E6265C28449a09db5D432174aEE',
  },
  [PROVIDER_NAME_DFK]: {
    router: '0x2519D5ecE31f02995DF883CE35faDc05D9f12803',
    deposit: '0xA2179d80952A3C3bFB0BdfEdD521e2BF82212860',
  },
  [PROVIDER_NAME_DOGE]: {
    router: '0x430d3842aB7a10E7004bf1079c0749EBE0BF1793',
    deposit: '0x625A41C06dB498808fC957447dccDdf2cDE9112C',
  },
  [PROVIDER_NAME_ETH]: {
    router: '0x7e0EA6e335EDA42f4c256246f62c6c3DCf4d4908',
    deposit: '0x2519D5ecE31f02995DF883CE35faDc05D9f12803',
  },
  [PROVIDER_NAME_EVMOS]: {
    router: '0xb2667190b753720188a4039dd2b6014f01e07fea',
  },
  [PROVIDER_NAME_FANTOM]: {
    router: '0xb2667190b753720188a4039dd2b6014f01e07fea',
  },
  [PROVIDER_NAME_FUNCTIONX]: {
    router: '0xa16077b19B8dF24adE59C78ef57335b99cba0423',
  },
  [PROVIDER_NAME_GNOSIS]: {
    router: '0xb2667190b753720188a4039dd2b6014f01e07fea',
  },
  [PROVIDER_NAME_HARMONY]: {
    router: '0xb2667190b753720188a4039dd2b6014f01e07fea',
  },
  [PROVIDER_NAME_IOTEX]: {
    router: '0xB2667190B753720188A4039dd2b6014f01E07feA',
  },
  [PROVIDER_NAME_KCC]: {
    router: '0xb2667190b753720188a4039dd2b6014f01e07fea',
  },
  [PROVIDER_NAME_KLAYTN]: {
    router: '0xe01754DEB54c4915D65331Fa31ebf9111CacF9C2',
    deposit: '0xbB17a358767B066238f5bf3fe6842e94C81bDE13'
  },
  [PROVIDER_NAME_MANTLE]: {
    router: '0xF8B0eF4e20feD60eB3485a2Dc95C3BBdAa1D24df',
    deposit: '0xcF99ab8c2AABC04349139484BAFC26f480Ef4cE4'
  },
  [PROVIDER_NAME_METIS]: {
    router: '0xb2667190b753720188a4039dd2b6014f01e07fea',
  },
  [PROVIDER_NAME_OPTIMISM]: {
    router: '0x6D46C098996AD584c9C40D6b4771680f54cE3726',
    deposit: '0x1697F96d52DFB51CcC96856680DA885c8AdAe429'
  },
  [PROVIDER_NAME_OKX]: {
    router: '0xfb11EA36e4Bdc4a00A778BC889e33cba5DaA4bb8',
  },
  [PROVIDER_NAME_POLYGON]: {
    router: '0x7D63aa8468e8c4c60395AD423271f45Bb34dF0fd',
    deposit: '0x66192437066e2AEb5Eba58c865e6D85729f48Ab6'
  },
  [PROVIDER_NAME_SUI]: {
    router: '0xe51f3a1a07c81e15a9d6ce9b871d24df7690765c',
  },
  [PROVIDER_NAME_SYSCOIN]: {
    router: '0xA983910583AB6b9C54e88D32512FF8aE0A56A025',
  },
  [PROVIDER_NAME_TELOS]: {
    router: '0xb2667190b753720188a4039dd2b6014f01e07fea',
  },
  [PROVIDER_NAME_TOMOCHAIN]: {
    router: '0xb2667190b753720188a4039dd2b6014f01e07fea',
  },
  [PROVIDER_NAME_WATR]: {
    router: '0xb2667190b753720188a4039dd2b6014f01e07fea',
  }
}

console.log(networks)
for (const network of networks) {
  // Network
  console.log(network)
  const networkName = network

  // Provider
  const provider = new ethers.JsonRpcProvider(PROVIDERS_MAP[networkName].url);

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
