import ethers from 'ethers';
import { PROVIDERS_MAP } from '../../utils/providers-map.mjs';

export class Web3Provider {
    constructor(networkName, networkType) {
        this._providerDetails = PROVIDERS_MAP[networkType][networkName];
        if (!this._providerDetails) {
            throw new Error(`Provider ${networkName} is not found`);
        }
        this.rpcUrl = this._providerDetails.url;
        this._gasLimit = this._providerDetails.gasLimit;

        this._provider = new ethers.providers.JsonRpcProvider(this.rpcUrl);    
        
    }

    init() {
        return this._provider;
    }

    getGasLimit() {
        return this._gasLimit;
    }

    getRPCUrl() {
        return this.rpcUrl
    }
}
