import SymJs from '../src';
import { expect, assert }  from 'chai';

describe("SymJs", function () {
    it('Object Type', async () => {
        const symjs = SymJs()
        assert(symjs)
    });
});
