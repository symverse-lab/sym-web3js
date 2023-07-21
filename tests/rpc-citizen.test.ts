import SymJs from '../src';
import { expect, assert }  from 'chai';
import { fromNetwork } from '../src/node/public-node';
import { DEFAULT_BLOCK, PENDING_BLOCK } from '../src/utils/helper';

const testnet = fromNetwork('TESTNET')
const testSymId = "0x00024f48413a322b0002"

describe("Test Citizen RPC API By Testnet", function () {
    const symjs = SymJs();
    symjs.network.connect(testnet.url)

    it('getCitizenBySymID', async () => {
        let result = await symjs.network.call.citizen.getCitizenBySymID('0x00024f48413a322b0002')
        console.log(result)
        assert.isOk(result)
    });

    it('getRawCitizenByHash', async () => {
        let result = await symjs.network.call.citizen.getRawCitizenByHash("0xba11c611298986222e434bca2c8b3a2f9dca538f9500b8075a78e1a6da3faffe")
        console.log(result)
        assert.isOk(result)
    });

    it('getCitizenByHash', async () => {
        let result = await symjs.network.call.citizen.getCitizenByHash("0xba11c611298986222e434bca2c8b3a2f9dca538f9500b8075a78e1a6da3faffe")
        console.log(result)
        assert.isOk(result)
    });

    it('getRawCitizenBySymID', async () => {
        let result = await symjs.network.call.citizen.getRawCitizenBySymID(testSymId)
        console.log(result)
        assert.isOk(result)
    });

    it('getCitizensByBlockNumber', async () => {
        let result = await symjs.network.call.citizen.getCitizensByBlockNumber()
        console.log(result)
        assert.isOk(result)
    });

    it('getCitizenCount', async () => {
        let result = await symjs.network.call.citizen.getCitizenCount()
        console.log(symjs.utils.hexToNumber(result))
        assert.isOk(result)
    });

    it('getBlockByHash', async () => {
        let result = await symjs.network.call.citizen.getBlockByHash('0xa8080f60a3369487f155fc940371fc6619b6144b980d7d3b9b6fbd33a8df9cab')
        console.log(result)
        assert.isOk(result)
    });

    it('getBlockByNumber', async () => {
        let result = await symjs.network.call.citizen.getBlockByNumber()
        console.log(result)
        assert.isOk(result)
    });

    it('getBlockCitizenCountByHash', async () => {
        let result = await symjs.network.call.citizen.getBlockCitizenCountByHash('0xa8080f60a3369487f155fc940371fc6619b6144b980d7d3b9b6fbd33a8df9cab')
        console.log(result)
        assert.isOk(result)
    });

    it('getBlockCitizenCountByNumber', async () => {
        let result = await symjs.network.call.citizen.getBlockCitizenCountByNumber()
        console.log(result)
        assert.isOk(result)
    });

    it('pendingCitizens', async () => {
        let result = await symjs.network.call.citizen.pendingCitizens()
        console.log(result)
        assert.isOk(result)
    });

    it('blockNumber', async () => {
        let result = await symjs.network.call.citizen.blockNumber()
        console.log(symjs.utils.hexToNumber(result))
        assert.isOk(result)
    });
});
