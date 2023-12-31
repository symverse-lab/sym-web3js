import { payload } from '../utils/rpc';

const helper = require('../utils/helper');

const WarrantApi = (rpc) => {
    return {
        blockNumber: () => {
            return rpc(payload(
                'warrant_blockNumber', []
            ));
        },

        getWarrantsByBlockHash: (blockHash) => {
            return rpc(payload(
                'warrant_getWarrantsByBlockHash', [blockHash]
            ));
        },

        getWarrantsByBlockNumber: (blockHash, isFull) => {
            isFull = isFull || false;
            return rpc(payload(
                'warrant_getWarrantsByBlockNumber', [blockHash, isFull]
            ));
        },

        getBlockByNumber: (blockNumber, isFull) => {
            blockNumber = blockNumber || helper.DEFAULT_BLOCK;
            isFull = isFull || false;
            return rpc(payload(
                'warrant_getBlockByNumber', [blockNumber, isFull]
            ));
        }
    };
};

export default WarrantApi;
