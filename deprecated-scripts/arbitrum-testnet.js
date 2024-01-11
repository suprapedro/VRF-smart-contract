import ethers, { BigNumber } from 'ethers';
import 'dotenv/config';
import { PROVIDER_NAME_ETH, PROVIDERS_MAP } from '../utils/providers-mapping.js'
import EVM from '../libs/evm/index.mjs';

const privateKey = process.env.PRIVATE_KEY;

const networkName = PROVIDER_NAME_ETH;

async function main() {
    const contracts  = {
        deposit: '0xd5fd8f137d718a1eb386e8c854c27612690548bb',
        generator: '0x8FF3D10C8Afca755110960798bA7ed80461395C3',
        router: '0xe0c0c4b7fe7d07fcde1a4f0959006a71c0ebe787'
    }
    const providerClient = await new EVM({ privateKey, networkName: 'arbitrum', networkType: 'testnet', contracts });
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