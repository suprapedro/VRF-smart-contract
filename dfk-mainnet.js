import ethers, { BigNumber } from 'ethers';
import 'dotenv/config';
import { PROVIDER_NAME_ETH, PROVIDERS_MAP } from './utils/providers-mapping.js'
import EVM from './libs/evm/index.mjs';
import { formatISO } from 'date-fns';

const privateKey = process.env.PRIVATE_KEY;

async function main() {
    const contracts  = {
        deposit: '0x862A4819BD933D09c13094878f397e4685D9eEd4',
        generator: '0x90151Dce9Ad66D6220Ba641A5cA68F74C5cd29d6',
        router: '0xe609E583A43330eA1dc831329266AA57acaCA549',
        rng: ''
    }
    const providerClient = await new EVM({ privateKey, networkName: 'dfk', networkType: 'mainnet', contracts });
    const currentBlockNumber = await providerClient.getCurrentBlockNumber();
    console.log(currentBlockNumber)
    if(!currentBlockNumber) {
        throw new Error(`Current block number is not found`);
    }
    let startingBlock = 18000000;
    const blocksInterval = 100000;
    let endBlock = startingBlock + 1 + blocksInterval;
    // const requests = [];
    while(endBlock < currentBlockNumber) {
        endBlock = startingBlock + blocksInterval < currentBlockNumber ? startingBlock + blocksInterval : currentBlockNumber;
        console.log(startingBlock, endBlock)
        const newRequests = await providerClient.getRequests(startingBlock, endBlock);

        if (newRequests && newRequests.length > 0) {
            const [request] = newRequests;
            // const transactionReceipt = await request.getTransactionReceipt();
            const transactionBlock = await request.getBlock()
            console.log(formatISO(transactionBlock.timestamp * 1000))
            // requests.push(newRequests);
            console.log(newRequests.length)
        }
        startingBlock += blocksInterval;
    }
    console.log(requests.length, requests)
    console.log(requests[0][0].args)
    console.log(BigNumber.from(requests[0][requests[0].length - 1].args['nonce']).toNumber())
}

main()