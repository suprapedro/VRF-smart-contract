import ethers, { BigNumber } from 'ethers';
import 'dotenv/config';
import { PROVIDER_NAME_ETH, PROVIDERS_MAP } from './utils/providers-mapping.js'
import EVM from './libs/evm/index.mjs';
import { formatISO } from 'date-fns';

const privateKey = process.env.PRIVATE_KEY;

async function main() {
    const contracts  = {
        deposit: '0x95fAea535A032278972aD702941F6D58a374c386',
        generator: '0xFF8Cbbb674070Fa7bDFcF734d9Fa0973861EeD4C',
        router: '0x630ECe5B97C12B9786A75EC37E8F542e303d2f95',
        rng: '0x419a5871185C86183fA24914DDE4A1712e5bEafa'
    }
    const providerClient = await new EVM({ privateKey, networkName: 'gold_fever', networkType: 'mainnet', contracts });
    const usersList = await providerClient.getSubscribers();
    console.log(usersList)
    // const currentBlockNumber = await providerClient.getCurrentBlockNumber();
    // console.log(currentBlockNumber)
    // if(!currentBlockNumber) {
    //     throw new Error(`Current block number is not found`);
    // }
    // let startingBlock = 0;
    // const blocksInterval = 2000;
    // let endBlock = -1;
    // // const requests = [];
    // while(endBlock < currentBlockNumber) {
    //     endBlock = startingBlock + blocksInterval < currentBlockNumber ? startingBlock == 0 ? startingBlock + blocksInterval:startingBlock - 1 + blocksInterval : currentBlockNumber;
    //     console.log(startingBlock, endBlock)
    //     const newRequests = await providerClient.getRequests(startingBlock, endBlock);

    //     if (newRequests && newRequests.length > 0) {
    //         const [request] = newRequests;
    //         // const transactionReceipt = await request.getTransactionReceipt();
    //         const transactionBlock = await request.getBlock()
    //         console.log(formatISO(transactionBlock.timestamp * 1000))
    //         // requests.push(newRequests);
    //         console.log(newRequests.length)
    //     }
    //     startingBlock += startingBlock == 0 ? blocksInterval + 1 : blocksInterval;
    // }
    // console.log(requests.length, requests)
    // console.log(requests[0][0].args)
    // console.log(BigNumber.from(requests[0][requests[0].length - 1].args['nonce']).toNumber())
}

main()