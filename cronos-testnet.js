import ethers, { BigNumber } from 'ethers';
import 'dotenv/config';
import { PROVIDER_NAME_ETH, PROVIDERS_MAP } from './utils/providers-mapping.js'
import EVM from './libs/evm/index.mjs';
import { formatISO } from 'date-fns';

const privateKey = process.env.PRIVATE_KEY;

async function main() {
    const contracts  = {
        deposit: '0xDa70d9B653f38E6265C28449a09db5D432174aEE',
        generator: '0xBa6F79833FFEd6C1Df30271050f9F9f8435f2A4b',
        router: '0x45dD6AB76De3c326d8296299C849791897FCffc2',
        rng: ''
    }
    const providerClient = await new EVM({ privateKey, networkName: 'cronos', networkType: 'testnet', contracts });
    const currentBlockNumber = await providerClient.getCurrentBlockNumber();
    console.log(currentBlockNumber)
    if(!currentBlockNumber) {
        throw new Error(`Current block number is not found`);
    }
    let startingBlock = 15940001;
    const blocksInterval = 10000;
    let endBlock = -1;
    const requests = [];
    while(endBlock < currentBlockNumber) {
        endBlock = startingBlock + blocksInterval < currentBlockNumber ? startingBlock == 0 ? startingBlock + blocksInterval:startingBlock - 1 + blocksInterval : currentBlockNumber;
        console.log(startingBlock, endBlock)
        const newRequests = await providerClient.getRequests(startingBlock, endBlock);

        if (newRequests && newRequests.length > 0) {
            const [request] = newRequests;
            const transactionReceipt = await request.getTransactionReceipt();
            console.log(transactionReceipt)
            const transactionBlock = await request.getBlock()
            console.log(formatISO(transactionBlock.timestamp * 1000))
            requests.push(newRequests);
            console.log(newRequests.length)
        }
        startingBlock += startingBlock == 0 ? blocksInterval + 1 : blocksInterval;
    }
    console.log(requests.length, requests)
    console.log(requests[0])
    // console.log(BigNumber.from(requests[e][requests[0].length - 1].args['nonce']).toNumber())
}

main()