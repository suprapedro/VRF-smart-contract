import ethers, { BigNumber } from 'ethers';
import 'dotenv/config';
import { PROVIDER_NAME_ETH, PROVIDERS_MAP } from './utils/providers-mapping.js'
import EVM from './libs/evm/index.mjs';
import { formatISO } from 'date-fns';

const privateKey = process.env.PRIVATE_KEY;

async function main() {
    const contracts  = {
        deposit: '0x26e99E88D20BfB38f6cF3785b0cAf68A9F19292f',
        generator: '0x8647657D919947cdC2E9D72E1557643A3Cb67475',
        router: '0x7A0b1031c8e9b37704d0591b46740e10d70c6Ebc',
        rng: ''
    }
    const providerClient = await new EVM({ privateKey, networkName: 'doge', networkType: 'mainnet', contracts });
    const currentBlockNumber = await providerClient.getCurrentBlockNumber();
    console.log(currentBlockNumber)
    if(!currentBlockNumber) {
        throw new Error(`Current block number is not found`);
    }
    let startingBlock = 0;
    const blocksInterval = 1000000;
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