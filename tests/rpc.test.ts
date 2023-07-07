import SymJs from '../src';
import { expect, assert }  from 'chai';
import { fromNetwork } from '../src/node/public-node';
import { DEFAULT_BLOCK, PENDING_BLOCK } from '../src/utils/helper';

const testnet = fromNetwork('TESTNET')
const testSymId = "0x00024f48413a322b0002"

describe("Symverse RPC API Call", function () {
    const symjs = SymJs();
    symjs.network.connect(testnet.url)

    it('clientVersion', async () => {
        let result = await symjs.network.call.clientVersion()
        assert.isOk(result)
    });

    it('getBalance', async () => {
        let result = await symjs.network.call.getBalance(testSymId)
        console.log(SymJs.utils.toSym(result))
        assert.isOk(SymJs.utils.toSym(result))
    });

    it('accounts', async () => {
        let result = await symjs.network.call.accounts()
        console.log(result)
        assert.isArray(result)
    });

    it('getTransactionCount', async () => {
        let result = await symjs.network.call.getTransactionCount(testSymId, PENDING_BLOCK)
        console.log(result)
        assert.isOk(SymJs.utils.toSym(result))
    });

    it('getBlockTransactionCountByHash', async () => {
        let result = await symjs.network.call.getBlockTransactionCountByHash("0x5223c591adad8b8f9c674e4c5ee03bb2a7584ec048180bef902901d338510660")
        assert.isOk(result)
    });

    it('getBlockByHash', async () => {
        let result = await symjs.network.call.getBlockByHash("0x5223c591adad8b8f9c674e4c5ee03bb2a7584ec048180bef902901d338510660", true)
        assert.isOk(result)
    });
});
