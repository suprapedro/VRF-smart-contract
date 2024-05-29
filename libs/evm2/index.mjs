import ethers, { BigNumber } from 'ethers';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { Web3Provider } from './Web3Provider.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const depositContractAbi = JSON.parse(readFileSync(`${__dirname}/resources/vrf-deposit-contract.json`));
const generatorContractAbi = JSON.parse(readFileSync(`${__dirname}/resources/vrf-generator-contract.json`));

export default class EVM {
    constructor({ privateKey, networkName, networkType, contracts, walletAddress }) {
      // if (!privateKey) {
      //     throw new Error(`Private key is not found`);
      // }
      
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
      // this._signer = new ethers.Wallet(privateKey, this._provider);
      this._walletAddress = walletAddress ?? null;
      this.network_type = networkType;
      this._networksContractAddresses = contracts;
    }
  
    async getCurrentBlockNumber() {
      const blockNumber = await this._provider.getBlockNumber();
      return blockNumber;
    }
  
    async getSubscribers() {
      const contractAddress = this._networksContractAddresses.deposit;
      const smartContract  = new ethers.Contract(contractAddress, depositContractAbi.abi, this._provider);
      const clients = await smartContract.listAllWhitelistedClient({ from: this._walletAddress });
      return clients;
    }
  
    async getRequests(startingBlock, endBlock) {
      const contractAddress = this._networksContractAddresses.generator;
      const smartContract = new ethers.Contract(contractAddress, generatorContractAbi.abi, this._signer);
      const requestGeneratedEvent = await smartContract.queryFilter('RequestGenerated', startingBlock, endBlock);
      
      
      return requestGeneratedEvent;
    }

    async getClientBalance(clientAddress) {
      const contractAddress = this._networksContractAddresses.deposit;
      const smartContract = new ethers.Contract(contractAddress, depositContractAbi.abi, this._provider);
      const clientFund = await smartContract.checkClientFund(clientAddress, { from: this._walletAddress });
      console.log(BigNumber.from(clientFund).toString());
      const effectiveBalance = await smartContract.checkEffectiveBalance(clientAddress, { from: this._walletAddress });
      console.log(BigNumber.from(effectiveBalance).toString());

      return clientFund;
    }

    async minBalance(clientAddress) {
      const contractAddress = this._networksContractAddresses.deposit;
      const smartContract = new ethers.Contract(contractAddress, depositContractAbi.abi, this._provider);
      const minBalanceSupra = await smartContract.checkMinBalanceSupra()
      console.log(BigNumber.from(minBalanceSupra).toString());
      const minBalance = await smartContract.checkMinBalance(clientAddress);
      console.log(BigNumber.from(minBalance).toString());
      return minBalance;
    }

    async getSubscriptionInfoByClient(clientAddress) {
      const contractAddress = this._networksContractAddresses.deposit;
      const smartContract = new ethers.Contract(contractAddress, depositContractAbi.abi, this._provider);
      const subscriptionInfo = await smartContract.getSubscriptionInfoByClient(clientAddress, { from: this._walletAddress });
      console.log(BigNumber.from(subscriptionInfo[0]).toString(),BigNumber.from(subscriptionInfo[1]).toString(), subscriptionInfo[2])
      return subscriptionInfo;
    }

    async listAllWhitelistedContractByClient(clientAddress) {
      const contractAddress = this._networksContractAddresses.deposit;
      const smartContract = new ethers.Contract(contractAddress, depositContractAbi.abi, this._provider);
      const whitelistedContract = await smartContract.listAllWhitelistedContractByClient(clientAddress, { from: this._walletAddress });
      console.log(whitelistedContract);
      return whitelistedContract;
    }
}