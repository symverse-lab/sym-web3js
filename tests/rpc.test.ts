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
        console.log(result)
        assert.isOk(result)
    });

    it('protocolVersion', async () => {
        let result = await symjs.network.call.protocolVersion()
        console.log(result)
        assert.isOk(result)
    });

    it('netVersion', async () => {
        let result = await symjs.network.call.netVersion()
        console.log(result)
        assert.isOk(result)
    });

    it('getBalance', async () => {
        let result = await symjs.network.call.getBalance(testSymId)
        console.log(SymJs.utils.toSym(result))
        assert.isOk(SymJs.utils.toSym(result))
    });

    it('accounts', async () => {
        let result = await symjs.network.call.accounts()
        console.log(result[0])
        assert.isArray(result)
    });

    it('getTransactionCount', async () => {
        let result = await symjs.network.call.getTransactionCount(testSymId, PENDING_BLOCK)
        console.log(result, typeof result)
        assert.isOk(result)
    });

    it('getBlockTransactionCountByHash', async () => {
        let result = await symjs.network.call.getBlockTransactionCountByHash("0x5223c591adad8b8f9c674e4c5ee03bb2a7584ec048180bef902901d338510660")
        console.log(result)
        assert.isOk(result)
    });

    it('getTransactionByHash', async () => {
        let result = await symjs.network.call.getTransactionByHash("0x10e29156518e5015867f85a44ef528b222dcab812d439c77858f5f04dd81e6eb")
        console.log(result)
        assert.isOk(result)
    });

    it('getTransactionReceipt', async () => {
        let result = await symjs.network.call.getTransactionReceipt("0x10e29156518e5015867f85a44ef528b222dcab812d439c77858f5f04dd81e6eb")
        assert.isOk(result)
        console.log(result)
    });

    it('getBlockByHash', async () => {
        let result = await symjs.network.call.getBlockByHash("0x5223c591adad8b8f9c674e4c5ee03bb2a7584ec048180bef902901d338510660", true)
        assert.isOk(result)
        console.log(result)
    });
});
