import SymJs from '../src';
import { expect, assert }  from 'chai';
import { fromNetwork } from '../src/node/public-node';
import { DEFAULT_BLOCK, PENDING_BLOCK } from '../src/utils/helper';

const testnet = fromNetwork('TESTNET')
const testContract = "0xff99634a959fa3347f22"

describe("RPC API Call  By Testnet", function () {
    const symjs = SymJs();
    symjs.network.connect(testnet.url)

    it('getContract20', async () => {
        let result = await symjs.network.call.sct.getContract('0xffa5f6161966dde56342')
        console.log(result)
        assert.isOk(result)
    });

    it('getContract20Account', async () => {
        let result = await symjs.network.call.sct.getContractAccount('0xffa5f6161966dde56342', '0x0002aea7a09991500002')
        console.log(result.balance)
        assert.isOk(result.balance)
    });

    it('getContract30', async () => {
        let result = await symjs.network.call.sct.getContract(testContract)
        console.log(result)
        assert.isOk(result)
    });

    it('getContract30Account', async () => {
        let result = await symjs.network.call.sct.getContractAccount(testContract, '0x0002d8aef146424b0002')
        console.log(result.index)
        assert.isOk(result.index)
    });

    it('getContractItemsByCategory', async () => {
        let result = await symjs.network.call.sct.getContractItemsByCategory(testContract, 'PHOTOGRAPHY')
        console.log(result)
        assert.isOk(result)
    });

    it('getAllowance', async () => {
        let result = await symjs.network.call.sct.getAllowance(testContract, '0x0002d8aef146424b0002', '0x00024f48413a322b0002')
        console.log(result)
        assert.isOk(result)
    });
});
