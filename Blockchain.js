const block = require('./block');

class Blockchain{
    constructor(){
        this.chain = [block.genesis()];
    }

    addBlock({data}){
        const newBlock = block.mineBlock(
            {
                lastBlock:this.chain[this.chain.length-1],
                data
            }
        );
        this.chain.push(newBlock);
    }
}

module.exports = Blockchain;
