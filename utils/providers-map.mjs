export const PROVIDERS_MAP = {
    testnet: {
      aptos: {
        url: 'http://34.175.232.30:8080/v1',
      },
      arbitrum_goerli: {
        url: 'https://goerli-rollup.arbitrum.io/rpc',
        chainId: 421613,
        gasLimit: 9500000,
      },
      arbitrum_sepolia: {
        url: 'http://34.162.48.4:8547',
        chainId: 421614,
        gasLimit: 9500000,
      },
      base_goerli: {
        url: 'https://1rpc.io/base-goerli', //not working
        chainId: 84531,
        gasLimit: 9500000,
      },
      base_sepolia: {
        url: 'http://35.194.144.102:8545',
        chainId: 84532,
        gasLimit: 9500000,
      },
      bnb: {
        url: 'http://34.78.232.98:8575',
        chainId: 56, //97
        gasLimit: 9500000,
      },
      cronos: {
        url: 'http://35.196.227.113:8545',
        chainId: 338,
        gasLimit: 9500000,
      },
      dfk: {
        url: 'http://35.234.249.221:9650',
        chainId: 335,
        gasLimit: 9500000,
      },
      doge: {
        url: 'http://34.125.218.73:8545',
        chainId: 568,
        gasLimit: 9500000,
      },
      ethereum_sepolia: {
        url: 'http://104.199.175.30:8545',
        chainId: 5,
        gasLimit: 9500000,
      },
      klaytn: {
        url: 'http://34.142.245.178:8551',
        chainId: 1001,
        gasLimit: 9500000,
      },
      linea: {
        url: 'http://34.125.227.246:8545',
        chainId: 0,
        gasLimit: 9500000,
      },
      mantle: {
        url: 'http://34.106.100.245:8545',
        chainId: 5001,
        gasLimit: 9500000,
      },
      optimism_goerli: {
        url: 'http://34.23.216.45:9993',
        chainId: 420,
        gasLimit: 9500000,
      },
      optimism_sepolia: {
        url: 'http://104.199.165.210:8545',
        chainId: 0,
        gasLimit: 9500000,
      },
      matic: {
        url: 'http://34.29.204.22:8545',
        chainId: 80001,
        gasLimit: 9500000,
      },
      syscoin_rollux: {
        url: 'https://rpc.tanenbaum.io',
        chainId: 5700,
        gasLimit: 8000000,
      },
      aurora: {
        url: 'http://34.106.75.231:20080',
        chainId: 1313161555,
        gasLimit: 10500000,
      },
      celo: {
        url: 'http://34.135.151.138:8545',
        chainId: 44787,
        gasLimit: 9500000,
      },
      fantom: {
        url: 'http://34.173.151.216:18545',
        chainId: 4002,
        gasLimit: 9500000,
      },
      fx: {
        url: 'http://13.124.224.132:8545',
        chainId: 90001,
        gasLimit: 9500000,
      },
      astar: {
        url: 'http://34.162.173.188:9944',
        chainId: 81,
        gasLimit: 9500000,
      },
      evmos: {
        url: 'http://34.106.11.186:8545',
        chainId: 9000,
        gasLimit: 9500000,
      },
      boba: {
        url: 'https://testnet.bnb.boba.network',
        chainId: 9728,
        gasLimit: 9500000,
      },
      gnosis: {
        url: 'http://43.202.58.246:8545',
        chainId: 10200,
        gasLimit: 9500000,
      },
      harmony: {
        url: 'https://api.s1.b.hmny.io',
        chainId: 1666700000,
        gasLimit: 9500000
      },
      metis: {
        url: 'https://goerli.gateway.metisdevops.link',
        chainId: 599,
        gasLimit: 8000000,
      },
      okex: {
        url: 'https://exchaintestrpc.okex.org',
        chainId: 65,
        gasLimit: 9500000
      },
      telos: {
        url: 'https://testnet.telos.net/evm',
        chainId: 41,
        gasLimit: 9500000,
      },
      tomochain: {
        url: 'https://rpc.testnet.tomochain.com', // not working
        chainId: 89,
        gasLimit: 9500000,
      },
      iotex: {
        url: 'http://35.194.26.171:15014',
        chainId: 4690,
        gasLimit: 9500000,
      },
      watr: {
        url: 'https://rpc.dev.watr.org',
        chainId: 688,
        gasLimit: 9500000,
      },
      kcc: {
        url: 'https://rpc-testnet.kcc.network',
        chainId: 322,
        gasLimit: 9500000,
      },
      avax: {
        url: 'http://34.130.236.14:9650/ext/bc/C/rpc',
        chainId: 43113,
        gasLimit: 8000000,
      },
      polygon: {
        url: 'http://34.29.204.22:8545',
        chainId: 80001,
        gasLimit: 9500000,
      },
      fx: {
        url: 'http://13.124.224.132:8545',
        chainId: 900001,
        gasLimit: 9500000,
      },
      avax_subnet: {
        url: 'https://testnet-tiltyard-e8a98.avax-test.network/ext/bc/CaUaVakrcP3ApdaRz2bpfyz4vDJkGSnitPjC1SJFAjMdPtp2M/rpc?token=f8aa04ea0b00e8bed576babd13f7fe88c64615fa38b2cd070b8ffe00b4dd7bc7',
        chainId: 1127469,
        gasLimit: 9500000,
      },
      fuse: {
        url: 'http:// 34.163.168.223:8545',
        chainId: 123,
        gasLimit: 9500000,
      },
      holesky: {
        url: 'https://ethereum-holesky.publicnode.com	',
        chainId: 17000,
        gasLimit: 9500000,
      },
      immutable_zk_evm: {
        url: 'https://rpc.testnet.immutable.com',
        chainId: 13473,
        gasLimit: 9500000,
      },
      blast_sepolia: {
        url: 'https://sepolia.blast.io',
        chainId: 168587773,
        gasLimit: 9500000,
      },
      kroma: {
        url: 'https://api.sepolia.kroma.network',
        chainId: 2358,
        gasLimit: 9500000,
      },
    },
    mainnet: {
      ethereum: {
        url: 'http://34.134.147.123:8545',
        chainId: 1,
        gasLimit: 9500000,
      },
      arbitrum: {
        url: 'http://35.221.132.189:8547',
        chainId: 42161,
        gasLimit: 9500000,
      },
      doge: {
        url: 'http://34.130.212.80:8545',
        chainId: 2000,
        gasLimit: 9500000,
      },
      dfk: {
        url: 'http://35.220.146.42:9650/ext/bc/q2aTwKuyzgs8pynF7UXBZCU7DejbZbZ6EUyHr3JQzYgwNPUPi/rpc',
        chainId: 53935,
        gasLimit: 9500000,
      },
      klaytn: {
        url: 'http://34.171.204.141:8551',
        chainId: 1001,
        gasLimit: 9500000,
      },
      polygon: {
        url: 'http://34.17.38.136:8545',
        chainId: 137,
        gasLimit: 9500000,
      },
      avax: {
        url: 'http://35.236.6.127:9650/ext/bc/C/rpc',
        chainId: 43114,
        gasLimit: 9500000,
      },
      bnb: {
        url: 'http://34.93.39.149:8545',
        chainId: 56,
        gasLimit: 9500000,
      },
      sui: {
        url: 'http://34.131.64.195:9000',
        chainId: 101,
        gasLimit: 9500000,
      },
      base: {
        url: 'http://34.154.107.231:8545',
        chainId: 8453,
        gasLimit: 9500000,
      },
      mantle: {
        url: 'http://34.116.172.78:8545',
        chainId: 5000,
        gasLimit: 9500000,
      },
      optimism: {
        url: 'http://34.100.200.152:8545',
        chainId: 10,
        gasLimit: 9500000,
      },
      linea: {
        url: 'http://34.125.81.34:8545',
        chainId: 59144,
        gasLimit: 9500000,
      },
      aptos: {
        url: 'http://34.78.78.36:8080/v1',
        chainId: 1,
        gasLimit: 9500000,
      },
      cronos: {
        url: 'http://34.32.12.11:8545',
        chainId: 25,
        gasLimit: 9500000,
      },
      syscoin_rollux: {
        url: 'http://35.221.173.160:9545',
        chainId: 570,
        gasLimit: 9500000,
      },
      arbitrum_nova: {
        url: 'http://13.127.254.152:8547',
        chainId: 42170,
        gasLimit: 9500000,
      },
      fuse: {
        url: 'http://34.65.140.86:8545',
        chainId: 122,
        gasLimit: 9500000,
      },
      kroma: {
        url: 'http://34.92.233.196:8545',
        chainId: 255,
        gasLimit: 9500000,
      },
      blast: {
        url: 'http://34.81.197.102:9545',
        chainId: 238,
        gasLimit: 9500000,
      },
      xdc: {
        url: 'http://35.229.179.73:8989',
        chainId: 50,
        gasLimit: 9500000,
      }
    }
  }