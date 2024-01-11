import ethers, { BigNumber } from 'ethers';
import 'dotenv/config'
import contractAbi from '../GeneratorContract.json' assert {
  type: 'json',
  integrity: 'sha384-ABC123'
};
import { testnetsContractAddress } from '../utils/testnet-contract-mapping.js';
import { PROVIDER_NAME_ARBITRUM, PROVIDER_NAME_BNB, PROVIDERS_MAP, PROVIDER_NAME_DFK, PROVIDER_NAME_DOGE, PROVIDER_NAME_ETH, PROVIDER_NAME_KLAYTN, PROVIDER_NAME_MANTLE, PROVIDER_NAME_OPTIMISM, PROVIDER_NAME_POLYGON, PROVIDER_NAME_SYSCOIN, PROVIDER_NAME_AURORA, PROVIDER_NAME_FUNCTIONX, PROVIDER_NAME_ASTAR, PROVIDER_NAME_BOBA, PROVIDER_NAME_METIS, PROVIDER_NAME_TELOS, PROVIDER_NAME_TOMOCHAIN, PROVIDER_NAME_KCC, PROVIDER_NAME_EVMOS } from '../utils/providers-mapping.js'

const privateKey = process.env.PRIVATE_KEY;

const networkName = PROVIDER_NAME_ARBITRUM;

async function main() {
  const contractAddress = testnetsContractAddress[networkName].generator;

  const provider = new ethers.providers.JsonRpcProvider(PROVIDERS_MAP[networkName].url);
  const currentBlockNumber = await provider.getBlockNumber();
  console.log(currentBlockNumber)
  const signer = new ethers.Wallet(privateKey, provider);

  // const contractInterface = new ethers.utils(contractAddress, contractAbi.abi, signer);
  // const contractInterface = new ethers.utils.Interface(contractAbi.abi);
  // const requestGeneratedEvent = contractInterface.encodeEventLog('RequestGenerated', [null, null, contractAddress, null, null, null, null, null]);

  const contract = new ethers.Contract(contractAddress, contractAbi.abi, signer);
  // const requestGeneratedEvent = await contract.queryFilter('RequestGenerated', currentBlockNumber - 1000000);
  const requestGeneratedEvent = await contract.queryFilter('RequestGenerated', 152583506);
  
  // const requestGeneratedEvent = await contract.queryFilter('RequestGenerated', 19599376 - 1000);
  console.log(requestGeneratedEvent)

  //Nonce
  console.log(BigNumber.from(requestGeneratedEvent[0].args['nonce']).toNumber())
  
  //RNG_count
  console.log(requestGeneratedEvent[0].args['rngCount'])
  
  //Num of confirmations
  console.log(BigNumber.from(requestGeneratedEvent[0].args['numConfirmations']).toNumber())
  
  //Caller address
  console.log(requestGeneratedEvent[0].args['clientWalletAddress'])

  //status 
  console.log(requestGeneratedEvent[0].removed)
  console.log(requestGeneratedEvent[0].transactionHash)
  console.log(requestGeneratedEvent[0].blockNumber)

  console.log(BigNumber.from((await requestGeneratedEvent[1].getTransactionReceipt()).gasUsed).toNumber())

  console.log(await requestGeneratedEvent[1].getBlock())
  console.log(await requestGeneratedEvent[1].getTransaction())
  console.log(await requestGeneratedEvent[1].getTransactionReceipt())
} 

main()