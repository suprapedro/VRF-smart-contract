import ethers, { BigNumber } from 'ethers';
import 'dotenv/config';
import { PROVIDER_NAME_ETH, PROVIDERS_MAP } from './utils/providers-mapping.js'
import EVM from './libs/evm/index.mjs';
import { formatISO } from 'date-fns';

const privateKey = process.env.PRIVATE_KEY;

async function main() {
    const contracts  = {
        deposit: '0xD8a459e3B7dB86Dc210031F38BaBc730b72BAbcD',
        generator: '0x7990372804524F7D600229d9b2B249197f2e2b3B',
        router: '0xc489aE6CEeBF5e17676a3B2A8A81e45B4Ba01a78',
        rng: '0x5D90dE282B340dB4F7886F1a07DC8F8e9c39a44F'
    }
    const providerClient = await new EVM({ privateKey, networkName: 'syscoin_rollux', networkType: 'mainnet', contracts });
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