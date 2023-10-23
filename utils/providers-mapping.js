export const PROVIDER_NAME_APTOS = 'aptos';
export const PROVIDER_NAME_OPTIMISM = 'optimism';
export const PROVIDER_NAME_IOTEX = 'iotex';
export const PROVIDER_NAME_DOGE = 'doge';
export const PROVIDER_NAME_TELOS = 'telos';
export const PROVIDER_NAME_KCC = 'kcc';
export const PROVIDER_NAME_METIS = 'metis';
export const PROVIDER_NAME_SUI = 'sui';
export const PROVIDER_NAME_ETH = 'eth';
export const PROVIDER_NAME_ARBITRUM = 'arbitrum';
export const PROVIDER_NAME_POLYGON = 'polygon';
export const PROVIDER_NAME_AVAX = 'avax';
export const PROVIDER_NAME_FANTOM = 'fantom';
export const PROVIDER_NAME_ASTAR = 'astar';
export const PROVIDER_NAME_CRONOS = 'cronos';
export const PROVIDER_NAME_CELO = 'celo';
export const PROVIDER_NAME_KLAYTN = 'klaytn';
export const PROVIDER_NAME_FUNCTIONX = 'functionx';
export const PROVIDER_NAME_GNOSIS = 'gnosis';
export const PROVIDER_NAME_AURORA = 'aurora';
export const PROVIDER_NAME_WATR = 'watr';
export const PROVIDER_NAME_TOMOCHAIN = 'tomochain';
export const PROVIDER_NAME_EVMOS = 'evmos';
export const PROVIDER_NAME_BOBA = 'boba';
export const PROVIDER_NAME_DFK = 'dfk';
export const PROVIDER_NAME_SYSCOIN = 'syscoin';
export const PROVIDER_NAME_MANTLE = 'mantle';
export const PROVIDER_NAME_BNB = 'bnb';
export const PROVIDER_NAME_BASE = 'base';
export const PROVIDER_NAME_OKX = 'okx';
export const PROVIDER_NAME_HARMONY = 'harmony';

export const PROVIDERS_MAP = {
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
