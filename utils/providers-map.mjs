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
        // url: 'http://34.162.48.4:8547',
        url: 'https://public.stackup.sh/api/v1/node/arbitrum-sepolia',
        chainId: 421614,
        gasLimit: 9500000,
      },
      base_goerli: {
        // url: 'https://goerli.base.org', //not working
        // url: 'https://endpoints.omniatech.io/v1/base/goerli/public', //not working
        // url: 'https://base-goerli-rpc.publicnode.com',
        url: 'https://base-goerli.diamondswap.org/rpc',
        // url: 'https://1rpc.io/base-goerli', //not working
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
        // url: 'http://35.203.21.63:9650',
        url: 'https://subnets.avax.network/defi-kingdoms/dfk-chain-testnet/rpc',
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
        chainId: 11155111,
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
        url: 'http://34.106.19.21:8545',
        chainId: 5001,
        gasLimit: 9500000,
      },
      optimism_goerli: {
        url: 'https://gateway.tenderly.co/public/optimism-goerli',
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
        url: 'https://syscoin-tanenbaum-evm.publicnode.com',
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
        // url: 'http://13.124.224.132:8545', //not working
        url: 'https://testnet-fx-json-web3.functionx.io:8545',
        chainId: 90001,
        gasLimit: 9500000,
      },
      astar: {
        // url: 'http://34.162.173.188:9944', //not working
        url: 'https://rpc.startale.com/zkyoto',
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
        // url: 'http://43.202.58.246:8545', //not working
        url: 'https://1rpc.io/gnosis',
        chainId: 10200,
        gasLimit: 9500000,
      },
      harmony: {
        url: 'https://nd-347-555-081.p2pify.com/59f2b9d4f1e43e316b0ea5623b100a09',
        chainId: 1666700000,
        gasLimit: 9500000
      },
      manta: {
        url: 'https://manta-pacific-testnet.drpc.org',
        chainId: 3441005,
        gasLimit: 9500000,
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
      avax_subnet: {
        url: 'https://testnet-tiltyard-e8a98.avax-test.network/ext/bc/CaUaVakrcP3ApdaRz2bpfyz4vDJkGSnitPjC1SJFAjMdPtp2M/rpc?token=f8aa04ea0b00e8bed576babd13f7fe88c64615fa38b2cd070b8ffe00b4dd7bc7',
        chainId: 1127469,
        gasLimit: 9500000,
      },
      fuse: {
        // url: 'http:// 34.163.168.223:8545', //not working
        url: 'https://rpc.fusespark.io',
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
      taiko_katla: {
        url: 'https://taiko-katla.blockpi.network/v1/rpc/public',
        chainId: 167008,
        gasLimit: 9500000,
      },
      kronos: {
        url: 'https://nd-651-355-271.p2pify.com/39f43f858e3d9750d6b9265a2ad813d4'
      },
      ronin: {
        url: 'https://saigon-archive.roninchain.com/rpc',
        chainId: 2021,
        gasLimit: 9500000,
      },
      gold_fever: {
        url: 'https://subnets.avax.network/goldfever/testnet/rpc',
        chainId: 20948,
      },
      xai: {
        url: 'https://xai-sepolia.nirvanalabs.xyz/xai-sepolia-h4vvt?apikey=1f89f7e7c68db44930cabc49830902e95622',
        chainId: 37714555429,
        gasLimit: 9500000,
      },
      xdc: {
        url: 'https://erpc.apothem.network/',
        chainId: 51,
        gasLimit: 9500000,
      },
      apechain: {
        url: 'https://jenkins.rpc.caldera.xyz/http',
        chainId: 43113,
        gasLimit: 9500000,
      },
      x_layer: {
        // url: 'https://xlayertestrpc.okx.com/',
        // url: 'https://testrpc.xlayer.tech',
        // url: 'https://xlayertestrpc.okx.com',
        url: 'https://endpoints.omniatech.io/v1/xlayer/testnet/public',
        chainId: 195,
        gasLimit: 9500000,
      },
      taiko_hekla: {
          // url: 'https://rpc.hekla.taiko.xyz',
          // url: 'https://rpc.ankr.com/taiko_hekla',
          // url: 'https://hekla.taiko.tools',
          url: 'https://taiko-hekla.blockpi.network/v1/rpc/public',
        chainId: 167009,
        gasLimit: 9500000,
      },
      berachain: {
        url: 'https://artio.rpc.berachain.com/',
        // url: 'https://rpc.ankr.com/berachain_testnet',
        chainId: 80085,
        gasLimit: 9500000,
      },
      mintchain_sepolia: {
        url: 'https://sepolia-testnet-rpc.mintchain.io',
        chainId: 1687,
        gasLimit: 9500000,
      },
      bsquared: {
        url: 'https://b2-testnet.alt.technology/',
        chainId: 1123,
        gasLimit: 9500000,
      }  
    },
    mainnet: {
      ethereum: {
        // url: 'http://34.134.147.123:8545',
        // url: 'https://eth.llamarpc.com',
        // url: 'https://rpc.ankr.com/eth',
        // url: 'https://go.getblock.io/d9fde9abc97545f4887f56ae54f3c2c0',
        // url: 'https://ethereum-rpc.publicnode.com',
        // url: 'https://1rpc.io/eth',
        // url: 'https://rpc.builder0x69.io',
        // url: 'https://rpc.mevblocker.io',
        // url: 'https://rpc.flashbots.net',
        // url: 'https://cloudflare-eth.com',
        // url: 'https://api.securerpc.com/v1',
        // url: 'https://openapi.bitstack.com/v1/wNFxbiJyQsSeLrX8RRCHi7NpRxrlErZk/DjShIqLishPCTB9HiMkPHXjUM9CNM9Na/ETH/mainnet',
        // url: 'https://eth-pokt.nodies.app',
        // url: 'https://ethereum.blockpi.network/v1/rpc/public',
        // url: 'https://rpc.payload.de',
        // url: 'https://eth-mainnet.g.alchemy.com/v2/demo',
        // url: 'https://core.gashawk.io/rpc',
        // url: 'https://rpc.eth.gateway.fm',
        // url: 'https://eth.meowrpc.com',
        // url: 'https://eth.drpc.org',
        // url: 'https://mainnet.gateway.tenderly.co',
        // url: 'https://gateway.tenderly.co/public/mainnet',
        // url: 'https://eth.merkle.io',
        // url: 'https://eth.nodeconnect.org',
        // url: 'https://public.stackup.sh/api/v1/node/ethereum-mainnet',
        // url: 'https://api.tatum.io/v3/blockchain/node/ethereum-mainnet',
        // url: 'https://gateway.subquery.network/rpc/eth',
        // url: 'https://ethereum.rpc.subquery.network/public',
        // url: 'https://rpc.flashbots.net/fast',
        // url: 'https://rpc.mevblocker.io/fast',
        // url: 'https://rpc.mevblocker.io/noreverts',
        url: 'https://rpc.mevblocker.io/fullprivacy',
        chainId: 1,
        gasLimit: 9500000,
      },
      arbitrum: {
        // url: 'https://arbitrum.llamarpc.com',
        // url: 'https://arb1.arbitrum.io/rpc',
        // url: 'https://rpc.ankr.com/arbitrum',
        // url: 'https://1rpc.io/arb',
        // url: 'https://arb-pokt.nodies.app',
        // url: 'https://arbitrum.blockpi.network/v1/rpc/public',
        // url: 'https://arb-mainnet-public.unifra.io/',
        // url: 'https://arbitrum-one-rpc.publicnode.com/',
        // url: 'https://arbitrum.meowrpc.com/',
        // url: 'https://api.zan.top/node/v1/arb/one/public',
        // url: 'https://public.stackup.sh/api/v1/node/arbitrum-one',
        // url: 'https://arbitrum.rpc.subquery.network/public',
        url: 'https://arbitrum-one.publicnode.com/',
        // url: 'http://35.226.159.192:8547',
        chainId: 42161,
        gasLimit: 9500000,
      },
      doge: {
        // url: 'http://34.130.212.80:8545',
        url: 'https://rpc.dogechain.dog',
        chainId: 2000,
        gasLimit: 9500000,
      },
      dfk: {
        // url: 'http://35.220.146.42:9650/ext/bc/q2aTwKuyzgs8pynF7UXBZCU7DejbZbZ6EUyHr3JQzYgwNPUPi/rpc',
        url: 'https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc',
        chainId: 53935,
        gasLimit: 9500000,
      },
      klaytn: {
        // url: 'http://34.171.204.141:8551',
        // url: 'https://api.tatum.io/v3/blockchain/node/klaytn-cypress',
        // url: 'https://klaytn.blockpi.network/v1/rpc/public',
        // url: 'https://klaytn-mainnet-rpc.allthatnode.com:8551',
        // url: 'https://klaytn-pokt.nodies.app',
        // url: 'https://public-en-cypress.klaytn.net',
        // url: 'https://1rpc.io/klay',
        // url: 'https://rpc.ankr.com/klaytn',
        url: 'https://klaytn.api.onfinality.io/public',
        chainId: 1001,
        gasLimit: 9500000,
      },
      polygon: {
        url: 'http://34.17.38.136:8545',
        // url: 'https://rpc-mainnet.maticvigil.com',
        // url: 'https://endpoints.omniatech.io/v1/matic/mainnet/public',
        // url: 'https://polygon-rpc.com',
        // url: 'https://rpc-mainnet.matic.quiknode.pro',
        // url: 'https://polygon-pokt.nodies.app',
        // url: 'https://rpc.ankr.com/polygon',
        // url: 'https://1rpc.io/matic',
        // url: 'https://polygon-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf',
        // url: 'https://polygon-mainnet-public.unifra.io',
        // url: 'https://polygon.blockpi.network/v1/rpc/public',
        // url: 'https://polygon.api.onfinality.io/public',
        // url: 'https://polygon.rpc.blxrbdn.com',
        // url: 'https://polygon.gateway.tenderly.co',
        // url: 'https://gateway.tenderly.co/public/polygon',
        // url: 'https://polygon.meowrpc.com',
        // url: 'https://public.stackup.sh/api/v1/node/polygon-mainnet',
        // url: 'https://api.tatum.io/v3/blockchain/node/polygon-mainnet',
        // url: 'https://polygon.rpc.subquery.network/public',
        chainId: 137,
        gasLimit: 9500000,
      },
      avax: {
        url: 'http://35.236.6.127:9650/ext/bc/C/rpc',
        // url: 'https://api.avax.network/ext/bc/C/rpc',
        // url: 'https://1rpc.io/avax/c',
        // url: 'https://avalanche.blockpi.network/v1/rpc/public',
        // url: 'https://avalanche.api.onfinality.io/public/ext/bc/C/rpc',
        // url: 'https://avax.meowrpc.com',
        // url: 'https://avalanche.drpc.org',
        // url: 'https://api.tatum.io/v3/blockchain/node/avax-mainnet',
        chainId: 43114,
        gasLimit: 9500000,
      },
      bnb: {
        // url: 'http://34.93.39.149:8545', //not working
        // url: 'https://binance.llamarpc.com',
        // url: 'https://bsc-dataseed.bnbchain.org',
        // url: 'https://bsc-dataseed1.defibit.io',
        // url: 'https://bsc-dataseed1.ninicoin.io',
        // url: 'https://bsc-dataseed2.defibit.io',
        // url: 'https://bsc-dataseed3.defibit.io',
        // url: 'https://bsc-dataseed4.defibit.io',
        // url: 'https://bsc-dataseed2.ninicoin.io',
        // url: 'https://bsc-dataseed3.ninicoin.io',
        // url: 'https://bsc-dataseed4.ninicoin.io',
        // url: 'https://bsc-dataseed1.bnbchain.org',
        // url: 'https://bsc-dataseed2.bnbchain.org',
        // url: 'https://bsc-dataseed3.bnbchain.org',
        // url: 'https://bsc-dataseed4.bnbchain.org',
        // url: 'https://bsc-pokt.nodies.app',
        // url: 'https://bsc-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3',
        // url: 'https://rpc.ankr.com/bsc',
        // url: 'https://go.getblock.io/cc778cdbdf5c4b028ec9456e0e6c0cf3',
        // url: 'https://bscrpc.com',
        // url: 'https://binance.nodereal.io',
        // url: 'https://1rpc.io/bnb',
        // url: 'https://bnb.api.onfinality.io/public',
        // url: 'https://public.stackup.sh/api/v1/node/bsc-mainnet',
        url: 'https://api.tatum.io/v3/blockchain/node/bsc-mainnet',
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
        // url: 'https://base.llamarpc.com',
        // url: 'https://base.rpc.subquery.network/public',
        // url: 'https://base.gateway.tenderly.co',
        // url: 'https://gateway.tenderly.co/public/base',
        // url: 'https://base-pokt.nodies.app',
        // url: 'https://base.drpc.org',
        // url: 'https://api.tatum.io/v3/blockchain/node/base-mainnet',
        // url: 'https://base.blockpi.network/v1/rpc/public',
        // url: 'https://base.meowrpc.com',
        // url: 'https://public.stackup.sh/api/v1/node/base-mainnet',
        // url: 'https://developer-access-mainnet.base.org',
        // url: 'https://mainnet.base.org',
        // url: 'https://base-rpc.publicnode.com',
        // url: 'https://gateway.subquery.network/rpc/base',
        // url: 'https://1rpc.io/base',
        // url: 'https://base.api.onfinality.io/public',
        // url: 'https://base-mainnet.diamondswap.org/rpc',
        chainId: 8453,
        gasLimit: 9500000,
      },
      mantle: {
        url: 'http://34.116.172.78:8545',
        // url: 'https://rpc.ankr.com/mantle',
        // url: 'https://mantle.drpc.org',
        // url: 'https://1rpc.io/mantle',
        // url: 'https://rpc.mantle.xyz',
        // url: 'https://mantle-rpc.publicnode.com',
        chainId: 5000,
        gasLimit: 9500000,
      },
      optimism: {
        url: 'http://34.100.200.152:8545',
        // url: 'http://34.116.73.128:8545/',
        // url: 'https://optimism.llamarpc.com',
        // url: 'https://op-pokt.nodies.app',
        // url: 'https://optimism.meowrpc.com',
        // url: 'https://optimism.blockpi.network/v1/rpc/public',
        // url: 'https://optimism-rpc.publicnode.com',
        // url: 'https://optimism.drpc.org',
        // url: 'https://public.stackup.sh/api/v1/node/optimism-mainnet',
        // url: 'https://api.tatum.io/v3/blockchain/node/optimism-mainnet',
        // url: 'https://opt-mainnet.g.alchemy.com/v2/demo',
        // url: 'https://1rpc.io/op',
        // url: 'https://rpc.ankr.com/optimism',
        // url: 'https://optimism.api.onfinality.io/public',
        // url: 'https://gateway.tenderly.co/public/optimism',
        // url: 'https://optimism.gateway.tenderly.co',
        chainId: 10,
        gasLimit: 9500000,
      },
      linea: {
        // url: 'http://34.125.81.34:8545',
        // url: 'https://linea.decubate.com',
        // url: 'https://linea.drpc.org',
        // url: 'https://rpc.linea.build',
        // url: 'https://linea.blockpi.network/v1/rpc/public',
        url: 'https://1rpc.io/linea',
        chainId: 59144,
        gasLimit: 9500000,
      },
      aptos: {
        url: 'http://34.78.78.36:8080/v1',
        chainId: 1,
        gasLimit: 9500000,
      },
      cronos: {
        // url: 'http://34.32.12.11:8545',
        url: 'https://cronos.blockpi.network/v1/rpc/public',
        // url: 'https://rpc.vvs.finance',
        // url: 'https://evm.cronos.org',
        // url: 'https://cronos.drpc.org',
        // url: 'https://1rpc.io/cro',
        chainId: 25,
        gasLimit: 9500000,
      },
      syscoin_rollux: {
        url: 'http://35.221.173.160:9545',
        // url: 'https://rpc.ankr.com/syscoin',
        chainId: 570,
        gasLimit: 9500000,
      },
      arbitrum_nova: {
        // url: 'http://13.127.254.152:8547', //not working
        // url: 'https://arbitrum-nova-rpc.publicnode.com',
        // url: 'https://api.tatum.io/v3/blockchain/node/arb-nova-mainnet',
        // url: 'https://arbitrum-nova.blockpi.network/v1/rpc/public',
        // url: 'https://nova.arbitrum.io/rpc',
        url: 'https://arbitrum-nova.publicnode.com',
        chainId: 42170,
        gasLimit: 9500000,
      },
      fuse: {
        url: 'https://fuse-pokt.nodies.app',
        // url: 'https://rpc.fuse.io',
        // url: 'https://fuse-mainnet.chainstacklabs.com',
        // url: 'https://fuse.api.onfinality.io/public',
        // url: 'https://fuse.liquify.com',
        // url: 'https://fuse.drpc.org',
        // url: 'http://34.65.140.86:8545',
        chainId: 122,
        gasLimit: 9500000,
      },
      kroma: {
        // url: 'http://34.92.233.196:8545',
        // url: 'https://api.kroma.network',
        url: 'https://1rpc.io/kroma',
        chainId: 255,
        gasLimit: 9500000,
      },
      blast: {
        // url: 'http://34.81.197.102:9545',
        url: 'https://rpc.blast.io',
        chainId: 238,
        gasLimit: 9500000,
      },
      xdc: {
        // url: 'http://35.229.179.73:8989',
        // url: 'https://rpc.xinfin.network',
        // url: 'https://rpc.ankr.com/xdc',
        // url: 'https://rpc1.xinfin.network',
        // url: 'https://api.tatum.io/v3/blockchain/node/xdc-mainnet',
        // url: 'https://erpc.xinfin.network',
        // url: 'https://rpc-xdc.icecreamswap.com',
        url: '',
        chainId: 50,
        gasLimit: 9500000,
      },
      avalanche_tiltyard: {
        url: 'https://subnets.avax.network/tiltyard/mainnet/rpc',
        chainId: 710420,
        gasLimit: 9500000,
      },
      xai: {
        url: 'https://xai-chain.net/rpc',
        chainId: 660279,
        gasLimit: 9500000,
      },
      gold_fever: {
        url: 'https://subnets.avax.network/highoctane/mainnet/rpc',
        chainId: 20948,
        gasLimit: 9500000,
      },
    }
  }