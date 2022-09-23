const {Genesis_Data, genesis_info} = require('./genesis.js');

const cryptoHash = require('./crypto_hash')

class Block {
    constructor({timestamp,previousHash,currentHash,data})
        {
            this.timestamp = timestamp;     
            this.previousHash = previousHash;
            this.currentHash = currentHash;
            this.data = data;
        }

    static genesis(){
        return new this(genesis_info);
    }

    static mineBlock ({lastBlock,data}){
        const timestamp = new Date();
        const previousHash =lastBlock.currentHash;
        return new this(
            {
                timestamp,
                previousHash,
                data,
                currentHash: cryptoHash(timestamp,previousHash,data)
            }
        );
    }
}

module.exports = Block;
