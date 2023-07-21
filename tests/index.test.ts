import SymJs from '../src';
import { expect, assert }  from 'chai';
import { fromNetwork } from '../src/node/public-node';

export const testnet = fromNetwork('TESTNET');

describe("SymJs", function () {
    it('Object Type', async () => {
        const symjs = SymJs()
        assert(symjs)
    });
});
