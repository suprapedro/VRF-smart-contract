import ethers, { BigNumber } from 'ethers';
import 'dotenv/config';
import { PROVIDER_NAME_ETH, PROVIDERS_MAP } from './utils/providers-mapping.js'
import EVM from './libs/evm/index.mjs';
import { formatISO } from 'date-fns';

const privateKey = process.env.PRIVATE_KEY;

async function main() {
    const contracts  = {
        deposit: '0xFf4A488b0564281ADfa12b1A81168a6588D577c0',
        generator: '0x7949238CA39e723f3b90e4B6Fa03908507C42602',
        router: '0x76606cD35d3De51d2c2e44D6eb7AF593D8dfD983',
        rng: '0x01CAB29d0B79e80D02E44F3462BCD0EaC84443Ac'
    }
    const providerClient = await new EVM({ privateKey, networkName: 'polygon', networkType: 'mainnet', contracts });
    const currentBlockNumber = await providerClient.getCurrentBlockNumber();
    console.log(currentBlockNumber)
    if(!currentBlockNumber) {
        throw new Error(`Current block number is not found`);
    }
    let startingBlock = 46000000;
    const blocksInterval = 10000;
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