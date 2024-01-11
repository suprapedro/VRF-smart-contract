import ethers from 'ethers';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { Web3Provider } from './Web3Provider.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const depositContractAbi = JSON.parse(readFileSync(`${__dirname}/resources/vrf-deposit-contract.json`));
const generatorContractAbi = JSON.parse(readFileSync(`${__dirname}/resources/vrf-generator-contract.json`));

export default class EVM {
    constructor({ privateKey, networkName, networkType, contracts }) {
      if (!privateKey) {
          throw new Error(`Private key is not found`);
      }
      
      if (!networkName) {
          throw new Error(`Network name is not found`);
      }
  
      if (!networkType) {
          throw new Error(`Network type is not found`);
      }

      if (!contracts) {
        throw new Error(`Contracts are not found`);
      }

      this._init = false;
      this._networkName = networkName;
      this._privateKey = privateKey;
      this._web3Provider = new Web3Provider(networkName, networkType);
      this._provider = this._web3Provider.init();
      this._signer = new ethers.Wallet(privateKey, this._provider);
      this.network_type = networkType;
      this._networksContractAddresses = contracts;
    }
  
    async getCurrentBlockNumber() {
      const blockNumber = await this._provider.getBlockNumber();
      return blockNumber;
    }
  
    async getSubscribers() {
      const contractAddress = this._networksContractAddresses.deposit;
      const smartContract  = new ethers.Contract(contractAddress, depositContractAbi.abi, this._signer);
      const clients = await smartContract.listAllWhitelistedClient();
      return clients;
    }
  
    async getRequests(startingBlock, endBlock) {
      const contractAddress = this._networksContractAddresses.generator;
      const smartContract = new ethers.Contract(contractAddress, generatorContractAbi.abi, this._signer);
      const requestGeneratedEvent = await smartContract.queryFilter('RequestGenerated', startingBlock, endBlock);
      
      
      return requestGeneratedEvent;
    }
}