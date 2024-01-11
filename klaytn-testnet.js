import ethers, { BigNumber } from 'ethers';
import 'dotenv/config';
import { PROVIDER_NAME_ETH, PROVIDERS_MAP } from './utils/providers-mapping.js'
import EVM from './libs/evm/index.mjs';
import { formatISO } from 'date-fns';

const privateKey = process.env.PRIVATE_KEY;

async function main() {
    const contracts  = {
        deposit: '0xbB17a358767B066238f5bf3fe6842e94C81bDE13',
        generator: '0xBB3d0118DCC85813D1D927d0e693D00c898CC460',
        router: '0xe01754DEB54c4915D65331Fa31ebf9111CacF9C2',
        rng: ''
    }
    const providerClient = await new EVM({ privateKey, networkName: 'klaytn', networkType: 'testnet', contracts });
    const currentBlockNumber = await providerClient.getCurrentBlockNumber();
    console.log(currentBlockNumber)
    if(!currentBlockNumber) {
        throw new Error(`Current block number is not found`);
    }
    let startingBlock = 0;
    const blocksInterval = 1000000;
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