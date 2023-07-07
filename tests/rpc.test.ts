import SymJs from '../src';
import { expect, assert }  from 'chai';
import { PUBLIC_MAINNET_WORKNODES } from '../src/node/public-symverse';


const devnet = PUBLIC_MAINNET_WORKNODES[0][0]

describe("RPC API Call", function () {
    const symjs = SymJs();
    symjs.network.connect(devnet)

    it('clientVersion', async () => {
        let result = await symjs.network.call.clientVersion()
        console.log(result)
        
    });

    it('getBalance', async () => {
        let result = await symjs.network.call.getBalance("0x00021000000000010002")
        console.log(symjs.utils.toHug(result), result)
        
    });

    it('accounts', async () => {
        let result = await symjs.network.call.accounts()
        console.log(result)
        
    });

    it('getTransactionCount', async () => {
        let result = await symjs.network.call.getTransactionCount("0x00021000000000010002", "padding")
        console.log(result)
        
    });

    it('getBlockTransactionCountByHash', async () => {
        let result = await symjs.network.call.getBlockTransactionCountByHash("0x42f6b128a527177f5afe2f93a33d531fe3b495f78241f2ac24050429507adc0e")
        console.log(result)
        
    });

    it('getBlockByHash', async () => {
        let result = await symjs.network.call.getBlockByHash("0x42f6b128a527177f5afe2f93a33d531fe3b495f78241f2ac24050429507adc0e", true)
        console.log(result)
        
    });
});
