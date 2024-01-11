import ethers, { BigNumber } from 'ethers';
import 'dotenv/config';
import { PROVIDER_NAME_ETH, PROVIDERS_MAP } from './utils/providers-mapping.js'
import EVM from './libs/evm/index.mjs';
import { formatISO } from 'date-fns';

const privateKey = process.env.PRIVATE_KEY;

async function main() {
    const contracts  = {
        deposit: '0xd44b6c04d0e13f80a124827882df05617fc1c0eb',
        generator: '0xf6c3309007570c5c8a9dea081e3b9fcc47bf7de4',
        router: '0x7d86fbfc0701d0bf273fd550eb65be1002ed304e',
        rng: '0x2a77571669C4B5505cC62c45907428D078618EC5'
    }
    const providerClient = await new EVM({ privateKey, networkName: 'arbitrum', networkType: 'mainnet', contracts });
    const currentBlockNumber = await providerClient.getCurrentBlockNumber();
    console.log(currentBlockNumber)
    if(!currentBlockNumber) {
        throw new Error(`Current block number is not found`);
    }
    // let startingBlock = 136000000;
    let startingBlock = 148100001;
    const blocksInterval = 100000;
    let endBlock = startingBlock + 1 + blocksInterval;
    // const requests = [];
    while(endBlock < currentBlockNumber) {
        endBlock = startingBlock + blocksInterval < currentBlockNumber ? startingBlock + blocksInterval : currentBlockNumber;
        console.log(startingBlock, endBlock)
        const newRequests = await providerClient.getRequests(startingBlock, endBlock);

        if (newRequests && newRequests.length > 0) {
            // const [request] = newRequests;
            // console.log(request)
            // // const transactionReceipt = await request.getTransactionReceipt();
            // const transactionBlock = await request.getBlock()
            // console.log(formatISO(transactionBlock.timestamp * 1000))
            // // requests.push(newRequests);
            // console.log(newRequests.length)
            for await (const request of newRequests) {
                console.log(request.args)
                const transactionBlock = await request.getBlock()
                console.log(formatISO(transactionBlock.timestamp * 1000))
            }
        }
        startingBlock += blocksInterval;
    }
    console.log(requests.length, requests)
    console.log(requests[0][0].args)
    console.log(BigNumber.from(requests[0][requests[0].length - 1].args['nonce']).toNumber())
}

main()