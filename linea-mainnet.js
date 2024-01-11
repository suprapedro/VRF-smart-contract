import ethers, { BigNumber } from 'ethers';
import 'dotenv/config';
import { PROVIDER_NAME_ETH, PROVIDERS_MAP } from './utils/providers-mapping.js'
import EVM from './libs/evm/index.mjs';
import { formatISO } from 'date-fns';

const privateKey = process.env.PRIVATE_KEY;

async function main() {
    const contracts  = {
        deposit: '0x2d0f9cf77951dfc50d091c0cce0fb634149e1fb9',
        generator: '0x2ab6a7f55cffcca8251f36b8173b0c4efcffceeb',
        router: '0x678cf2ce5beab9884d8cc49dc022f1ccd997474c',
        rng: '0xE5bEC4636fb4f432795d1c792D81a2E5167CCbd6'
    }
    const providerClient = await new EVM({ privateKey, networkName: 'linea', networkType: 'mainnet', contracts });
    const currentBlockNumber = await providerClient.getCurrentBlockNumber();
    console.log(currentBlockNumber)
    if(!currentBlockNumber) {
        throw new Error(`Current block number is not found`);
    }
    let startingBlock = 0;
    const blocksInterval = 100000;
    let endBlock = -1;
    // const requests = [];
    while(endBlock < currentBlockNumber) {
        endBlock = startingBlock + blocksInterval < currentBlockNumber ? startingBlock == 0 ? startingBlock + blocksInterval:startingBlock - 1 + blocksInterval : currentBlockNumber;
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
        startingBlock += startingBlock == 0 ? blocksInterval + 1 : blocksInterval;
    }
    // console.log(requests.length, requests)
    // console.log(requests[0][0].args)
    // console.log(BigNumber.from(requests[0][requests[0].length - 1].args['nonce']).toNumber())
}

main()