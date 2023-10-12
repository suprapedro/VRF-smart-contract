import * as ethers from 'ethers';

import contractAbi from './DepositContract.json' assert {
  type: 'json',
  integrity: 'sha384-ABC123'
};

import 'dotenv/config'

const privateKey = process.env.PRIVATE_KEY;
const INFURA_API_KEY = process.env.API_KEY;

export const PROVIDER_NAME_APTOS = 'aptos';
export const PROVIDER_NAME_BSC = 'bsc';
export const PROVIDER_NAME_OPTIMISM = 'optimism';
export const PROVIDER_NAME_IOTEX = 'iotex';
export const PROVIDER_NAME_DOGE = 'doge';
export const PROVIDER_NAME_TELOS = 'telos';
export const PROVIDER_NAME_OKEX = 'okex';
export const PROVIDER_NAME_KCC = 'kcc';
export const PROVIDER_NAME_METIS = 'metis';
export const PROVIDER_NAME_OASIS = 'oasis';
export const PROVIDER_NAME_SHARDEUM2 = 'shardeum2';
export const PROVIDER_NAME_SHARDEUM1 = 'shardeum1';
export const PROVIDER_NAME_SUI = 'sui';
export const PROVIDER_NAME_ETH = 'eth';
export const PROVIDER_NAME_ARBITRUM = 'arbitrum';
export const PROVIDER_NAME_POLYGON = 'polygon';
export const PROVIDER_NAME_AVAX = 'avax';
export const PROVIDER_NAME_FUSE = 'fuse';
export const PROVIDER_NAME_FANTOM = 'fantom';
export const PROVIDER_NAME_MOONBEAM = 'moonbeam';
export const PROVIDER_NAME_ASTAR = 'astar';
export const PROVIDER_NAME_CRONOS = 'cronos';
export const PROVIDER_NAME_CELO = 'celo';
export const PROVIDER_NAME_KLAYTN = 'klaytn';
export const PROVIDER_NAME_FUNCTIONX = 'functionx';
export const PROVIDER_NAME_GNOSIS = 'gnosis';
export const PROVIDER_NAME_KARDIA = 'kardia';
export const PROVIDER_NAME_AURORA = 'aurora';
export const PROVIDER_NAME_WATR = 'watr';
export const PROVIDER_NAME_FILECOIN = 'filecoin';
export const PROVIDER_NAME_TOMOCHAIN = 'tomochain';
export const PROVIDER_NAME_ZKSYNC = 'zksync';
export const PROVIDER_NAME_EVMOS = 'evmos';
export const PROVIDER_NAME_BOBA = 'boba';
export const PROVIDER_NAME_DFK = 'dfk';
export const PROVIDER_NAME_KAVA = 'kava';
export const PROVIDER_NAME_ALGO_MILKOMEDA = 'algomilkomeda';
export const PROVIDER_NAME_ROLLUX = 'rollux';
export const PROVIDER_NAME_SYSCOIN = 'syscoin';
export const PROVIDER_NAME_MANTLE = 'mantle';
export const PROVIDER_NAME_CANTO = 'canto';
export const PROVIDER_NAME_MILKOMEDAC1 = 'milkomedac1';
export const PROVIDER_NAME_SHARDEUM_SPHINX = 'shardeumsphinx';
export const PROVIDER_NAME_DOJIMA = 'dojima';

export const DORA_PROVIDER_NAME_ARBITRUM = 'dora_arbitrum';
export const DORA_PROVIDER_NAME_AVAX = 'dora_avax';
export const DORA_PROVIDER_NAME_BSC = 'dora_bsc';
export const DORA_PROVIDER_NAME_CELO = 'dora_celo';
export const DORA_PROVIDER_NAME_DFK = 'dora_dfk';
export const DORA_PROVIDER_NAME_ETH = 'dora_eth';
export const DORA_PROVIDER_NAME_FANTOM = 'dora_fantom';
export const DORA_PROVIDER_NAME_FUSE = 'dora_fuse';
export const DORA_PROVIDER_NAME_FX = 'dora_fx';
export const DORA_PROVIDER_NAME_KAVA = 'dora_kava';
export const DORA_PROVIDER_NAME_KLAYTN = 'dora_klaytn';
export const DORA_PROVIDER_NAME_MATIC = 'dora_matic';
export const DORA_PROVIDER_NAME_SUI = 'dora_sui';
export const DORA_PROVIDER_NAME_SYSCOIN_ROLLUX = 'dora_syscoin_rollux';
export const DORA_PROVIDER_NAME_TELOS = 'dora_telos';

const PROVIDERS_MAP = {
  [PROVIDER_NAME_ETH]: { url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`, chainId: 5, gasLimit: 9500000 },
  [PROVIDER_NAME_OPTIMISM]: {
      url: 'https://autumn-attentive-rain.optimism-goerli.quiknode.pro/89410afeb921c90c8088f41f32899760ee3f09ea',
      chainId: 420,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_ARBITRUM]: {
      url: 'https://polished-holy-wish.arbitrum-goerli.quiknode.pro/3bf88ad47e9d0bf507d4144addd522078f769499',
      chainId: 421613,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_BSC]: {
      url: 'https://responsive-magical-asphalt.bsc-testnet.quiknode.pro/f66349676188c26d92c798daf50c236e427e4e04',
      chainId: 97,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_POLYGON]: {
      url: 'https://floral-fragrant-slug.matic-testnet.quiknode.pro/4e07e8df825da581c1454d8c3939054dcf76567c',
      chainId: 80001,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_AVAX]: {
      url: `https://nd-881-419-782.p2pify.com/37c6dee25842810777dadd62f8fa6b64/ext/bc/C/rpc`,
      chainId: 43113,
      gasLimit: 8000000,
  },
  [PROVIDER_NAME_OKEX]: { url: 'https://exchaintestrpc.okex.org', chainId: 65, gasLimit: 9500000 },
  [PROVIDER_NAME_FUSE]: { url: 'https://rpc.fusespark.io', chainId: 123, gasLimit: 9500000 },
  [PROVIDER_NAME_FANTOM]: { url: 'https://rpc.testnet.fantom.network', chainId: 4002, gasLimit: 9500000 },
  [PROVIDER_NAME_MOONBEAM]: { url: 'https://rpc.api.moonbase.moonbeam.network', chainId: 1287, gasLimit: 9500000 },
  [PROVIDER_NAME_ASTAR]: { url: 'https://evm.shibuya.astar.network/', chainId: 81, gasLimit: 9500000 },
  [PROVIDER_NAME_CRONOS]: {
      url: 'https://nd-569-217-137.p2pify.com/dced385e9c1df478c78d379eda247532',
      chainId: 338,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_TELOS]: { url: 'https://testnet.telos.net/evm', chainId: 41, gasLimit: 9500000 },
  [PROVIDER_NAME_CELO]: { url: 'https://alfajores-forno.celo-testnet.org', chainId: 44787, gasLimit: 9500000 },
  [PROVIDER_NAME_KLAYTN]: { url: 'https://api.baobab.klaytn.net:8651', chainId: 1001, gasLimit: 9500000 },
  [PROVIDER_NAME_DOGE]: { url: 'https://rpc-testnet.dogechain.dog', chainId: 568, gasLimit: 9500000 },
  [PROVIDER_NAME_IOTEX]: { url: 'https://babel-api.testnet.iotex.io', chainId: 4690, gasLimit: 9500000 },
  [PROVIDER_NAME_FUNCTIONX]: {
      url: 'https://testnet-fx-json-web3.functionx.io:8545',
      chainId: 90001,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_METIS]: { url: 'https://goerli.gateway.metisdevops.link', chainId: 599, gasLimit: 8000000 },
  [PROVIDER_NAME_KCC]: { url: 'https://rpc-testnet.kcc.network', chainId: 322, gasLimit: 9500000 },
  [PROVIDER_NAME_OASIS]: { url: 'https://testnet.emerald.oasis.dev', chainId: 42261, gasLimit: 9500000 },
  [PROVIDER_NAME_SHARDEUM2]: { url: 'https://liberty20.shardeum.org', chainId: 8081, gasLimit: 9500000 },
  [PROVIDER_NAME_SHARDEUM1]: { url: 'https://liberty10.shardeum.org', chainId: 8080, gasLimit: 9500000 },
  [PROVIDER_NAME_GNOSIS]: { url: 'https://rpc.chiadochain.net', chainId: 10200, gasLimit: 9500000 },
  [PROVIDER_NAME_KARDIA]: { url: 'https://dev.kardiachain.io', chainId: 242, gasLimit: 9500000 },
  [PROVIDER_NAME_AURORA]: { url: 'https://testnet.aurora.dev', chainId: 1313161555, gasLimit: 10500000 },
  [PROVIDER_NAME_WATR]: { url: 'https://rpc.dev.watr.org', chainId: 688, gasLimit: 9500000 },
  [PROVIDER_NAME_FILECOIN]: { url: 'https://wallaby.node.glif.io/rpc/v0', chainId: 31415, gasLimit: 9500000 },
  [PROVIDER_NAME_TOMOCHAIN]: { url: 'https://rpc.testnet.tomochain.com', chainId: 89, gasLimit: 9500000 },
  [PROVIDER_NAME_ZKSYNC]: { url: 'https://zksync2-testnet.zksync.dev', chainId: 280, gasLimit: 9500000 },
  [PROVIDER_NAME_EVMOS]: { url: 'https://eth.bd.evmos.dev:8545', chainId: 9000, gasLimit: 9500000 },
  [PROVIDER_NAME_BOBA]: { url: 'https://testnet.bnb.boba.network', chainId: 9728, gasLimit: 9500000 },
  [PROVIDER_NAME_DFK]: {
      url: 'https://subnets.avax.network/defi-kingdoms/dfk-chain-testnet/rpc',
      chainId: 335,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_KAVA]: {
      url: 'https://evm.testnet.kava.io',
      chainId: 2221,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_ALGO_MILKOMEDA]: {
      url: 'https://rpc-devnet-algorand-rollup.a1.milkomeda.com',
      chainId: 200202,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_ROLLUX]: {
      url: 'https://rpc-tanenbaum.rollux.com/',
      chainId: 57000,
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
  [PROVIDER_NAME_CANTO]: {
      url: 'https://eth.plexnode.wtf',
      chainId: 740,
      gasLimit: 9500000,
  },
  [PROVIDER_NAME_MILKOMEDAC1]: {
      url: 'https://rpc-devnet-cardano-evm.c1.milkomeda.com',
      chainId: 200101,
      gasLimit: 9500000
  },
  [PROVIDER_NAME_SHARDEUM_SPHINX]: {
      url: 'https://sphinx.shardeum.org',
      chainId: 8082,
      gasLimit: 9500000
  },
  [PROVIDER_NAME_DOJIMA]: {
      url: 'https://api-test.d11k.dojima.network:8545',
      chainId: 1001,
      gasLimit: 9500000
  },
  [DORA_PROVIDER_NAME_ARBITRUM]: {
      url: 'http://34.131.238.44:8547',
      chainId: '',
      gasLimit: 9500000
  },
  [DORA_PROVIDER_NAME_AVAX]: {
      url: 'http://34.162.14.237:9650/ext/bc/C/rpc',
      chainId: 0,
      gasLimit: 9500000
  },
  [DORA_PROVIDER_NAME_BSC]: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      chainId: 0,
      gasLimit: 9500000
  },
  [DORA_PROVIDER_NAME_CELO]: {
      url: 'https://alfajores-forno.celo-testnet.org',
      chainId: 0,
      gasLimit: 9500000
  },
  [DORA_PROVIDER_NAME_DFK]: {
      url: 'http://35.234.249.221:9650/ext/bc/32sexHqc3tBQsik8h7WP5F2ruL5svqhX5opeTgXCRVX8HpbKF/rpc',
      chainId: 0,
      gasLimit: 9500000
  },
  [DORA_PROVIDER_NAME_ETH]: {
      url: 'https://radial-methodical-owl.ethereum-goerli.quiknode.pro/cab0a92718b25ab1098cd0801b52471476571a90/',
      chainId: 0,
      gasLimit: 9500000
  },
  [DORA_PROVIDER_NAME_FANTOM]: {
      url: 'http://34.173.151.216:18545',
      chainId: 0,
      gasLimit: 9500000
  },
  [DORA_PROVIDER_NAME_FUSE]: {
      url: 'https://rpc.fusespark.io',
      chainId: 0,
      gasLimit: 9500000
  },
  [DORA_PROVIDER_NAME_FX]: {
      url: 'https://testnet-fx-json-web3.functionx.io:8545',
      chainId: 0,
      gasLimit: 9500000
  },
  [DORA_PROVIDER_NAME_KAVA]: {
      url: 'https://evm.data-testnet.kava.io',
      chainId: 0,
      gasLimit: 9500000
  },
  [DORA_PROVIDER_NAME_KLAYTN]: {
      url: 'https://public-node-api.klaytnapi.com/v1/baobab',
      chainId: 0,
      gasLimit: 9500000
  },
  [DORA_PROVIDER_NAME_MATIC]: {
      url: 'https://shy-multi-arrow.matic-testnet.quiknode.pro/34c7a808dadfb9290ad16440fea1301f3e525c48/',
      chainId: 0,
      gasLimit: 9500000
  },
  [DORA_PROVIDER_NAME_SUI]: {
      url: 'https://fullnode.testnet.sui.io:443',
      chainId: 0,
      gasLimit: 9500000
  },
  [DORA_PROVIDER_NAME_SYSCOIN_ROLLUX]: {
      url: 'https://rpc-tanenbaum.rollux.com',
      chainId: 0,
      gasLimit: 9500000
  },
  [DORA_PROVIDER_NAME_TELOS]: {
      url: 'https://testnet.telos.net/evm',
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
  // [PROVIDER_NAME_BASE]: {
  //   router: '0xe01754DEB54c4915D65331Fa31ebf9111CacF9C2',
  //   deposit: '0x51a34E727001b97c26e70Bd677fc799490e781d7'
  // },
  // [PROVIDER_NAME_BNB]: {
  //   router: '0xF65754b4988aD9ff25E0f2980f645A02eEB73A5D',
  //   deposit: '0x45dD6AB76De3c326d8296299C849791897FCffc2'
  // },
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
  // [PROVIDER_NAME_HARMONY]: {
  //   router: '0xb2667190b753720188a4039dd2b6014f01e07fea',
  // },
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
  // [PROVIDER_NAME_OKX]: {
  //   router: '0xfb11EA36e4Bdc4a00A778BC889e33cba5DaA4bb8',
  // },
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

// Network
const networkName = PROVIDER_NAME_ARBITRUM

// Provider
const provider = new ethers.JsonRpcProvider(PROVIDERS_MAP[networkName].url);

// Signer
const signer = new ethers.Wallet(privateKey, provider);

// Contract
const smartContract  = new ethers.Contract(testnetsContractAddress[networkName].router, contractAbi.abi, signer);

async function main() {
  const clients = await smartContract.listAllWhitelistedClient()
  console.log(clients)
}

main();