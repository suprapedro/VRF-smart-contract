import ethers, { BigNumber } from 'ethers';
import 'dotenv/config';
import { PROVIDER_NAME_ETH, PROVIDERS_MAP } from './utils/providers-mapping.js'
import EVM from './libs/evm/index.mjs';

const privateKey = process.env.PRIVATE_KEY;

const networkName = PROVIDER_NAME_ETH;

async function main() {
    const contracts  = {
        deposit: '0x2519D5ecE31f02995DF883CE35faDc05D9f12803',
        generator: '0x6d797d38D81fC5434a08e347FeF3B3df0e259eB4',
        router: '0x7e0EA6e335EDA42f4c256246f62c6c3DCf4d4908'
    }
    const providerClient = await new EVM({ privateKey, networkName: 'ethereum', networkType: 'testnet', contracts });
    const currentBlockNumber = await providerClient.getCurrentBlockNumber();
    console.log(currentBlockNumber)
    if(!currentBlockNumber) {
        throw new Error(`Current block number is not found`);
    }
    let startingBlock = 0, endBlock = 0;
    const blocksInterval = 100000;
    const intervals = [];
    const requests = [];
    while(endBlock < currentBlockNumber) {
        endBlock = startingBlock + blocksInterval < currentBlockNumber ? startingBlock + blocksInterval : currentBlockNumber;
        console.log(startingBlock, endBlock)
        const newRequests = await providerClient.getRequests(startingBlock, endBlock);
        if (newRequests && newRequests.length > 0) {
            requests.push(newRequests);
            console.log(newRequests.length)
        }
        startingBlock += blocksInterval;
    }
    console.log(requests.length)
}

main()