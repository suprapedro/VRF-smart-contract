import ethers, { BigNumber } from 'ethers';
import 'dotenv/config';
import { PROVIDER_NAME_ETH, PROVIDERS_MAP } from './utils/providers-mapping.js'
import EVM from './libs/evm2/index.mjs';
import { formatISO } from 'date-fns';

const privateKey = process.env.PRIVATE_KEY;
const contracts  = {
    deposit: '0xfC38F31a750c934f5cfF615030309B0Bc989791A',
    generator: '0xC8d7B9D008364adDaFe9128E0617F844CA19D8F6',
    router: '0x82A515c2BEC5C4be8aBBbF0D2F59C19A4547709c',
    rng: '0xcfc7B53633D875A4ADCDb444Fdaf5575191a132B'
}

async function main() {
    const providerClient = await new EVM({ privateKey, networkName: 'blast', networkType: 'mainnet', contracts });

    const currentBlockNumber = await providerClient.getCurrentBlockNumber();
    console.log(currentBlockNumber)
    if(!currentBlockNumber) {
        throw new Error(`Current block number is not found`);
    }
    let startingBlock = 1;
    const blocksInterval = 10000;
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

// main()

const providerClient = await new EVM({ privateKey: null, networkName: 'blast', networkType: 'mainnet', contracts, walletAddress: '0xD6306434D345A7AfB1B64512F193103e5A23D222' });

const subscribers = await providerClient.getSubscribers();
console.log(subscribers)

async function getSubscriptionManagerInfo(clientAddress) {
    await providerClient.getClientBalance(clientAddress);
    await providerClient.minBalance(clientAddress);
    await providerClient.getSubscriptionInfoByClient(clientAddress);
    await providerClient.listAllWhitelistedContractByClient(clientAddress);
}

await getSubscriptionManagerInfo(subscribers[0])