import helper from '../utils/helper'
const tx = require('../signer');
const SctParams = require('./sct');
import CitizenMethod from './citizen'; // Assuming 'citizen' exports a type or interface named 'CitizenMethod'
import WarrantMethod from './warrant'; // Assuming 'warrant' exports a type or interface named 'WarrantMethod'
import OracleMethod from './oracle'; // Assuming 'oracle' exports a type or interface named 'OracleMethod'


interface RpcMethod {
    (payload: any, helperFunc?: (response: any) => any): any;
}

interface RpcPayload {
    method: string;
    params?: any[];
}

interface Methods {
    [methodName: string]: any;
    rpc: RpcMethod;
}

const Methods = function (rpc) {
    this.rpc = {};
    const _this = this;
    const initRpc = function (arg) {
        if (!arg) {
            throw new Error('network error arg 0 ');
        }
        _this.rpc = arg;
    };

    const payload = (method, params?) => {
        let output: any = { method };
        if (params) output.params = params;

        return output;
    };
    // ============== web3 ============== //
    this.clientVersion = () => {
        return _this.rpc(payload(
            'web3_clientVersion'
        ));
    };

    this.sha3 = (params) => {
        return _this.rpc(payload(
            'web3_sha3', [params]
        ));
    };

    // ============== sym ============== //
    this.netVersion = () => {
        return _this.rpc(payload(
            'net_version'
        ));
    };

    this.netListening = () => {
        return _this.rpc(payload(
            'net_listening'
        ));
    };

    this.netPeerCount = () => {
        return _this.rpc(payload(
            'net_peerCount'
        ));
    };

    this.protocolVersion = () => {
        return _this.rpc(payload(
            'sym_protocolVersion'
        ));
    };

    this.syncing = () => {
        return _this.rpc(payload(
            'sym_syncing'
        ));
    };

    this.symbase = () => {
        return _this.rpc(payload(
            'sym_symbase'
        ));
    };
    this.getBalance = (address) => {
        return _this.rpc(payload(
            'sym_getBalance', [address, helper.DEFAULT_BLOCK]
        ), helper.hexToNumberString);
    };
    this.accounts = () => {
        return _this.rpc(payload(
            'sym_accounts'
        ));
    };
    this.blockNumber = () => {
        return _this.rpc(payload(
            'sym_blockNumber', []
        ));
    };
    this.getBlockByHash = (blockHash, isFull) => {
        isFull = isFull || false;
        return _this.rpc(payload(
            'sym_getBlockByHash', [blockHash, isFull]
        ));
    };
    this.getBlockByNumber = (blockNumber, isFull) => {
        blockNumber = blockNumber || helper.DEFAULT_BLOCK;
        isFull = isFull || false;
        return _this.rpc(payload(
            'sym_getBlockByNumber', [blockNumber, isFull]
        ));
    };
    this.getBlockTransactionCountByHash = (blockHash) => {
        return _this.rpc(payload(
            'sym_getBlockTransactionCountByHash', [blockHash]
        ), helper.hexToNumberString);
    };
    this.getBlockTransactionCountByNumber = (blockNumber) => {
        blockNumber = blockNumber || helper.DEFAULT_BLOCK;
        return _this.rpc(payload(
            'sym_getBlockTransactionCountByNumber', [blockNumber]
        ), helper.hexToNumberString);
    };
    this.sign = (address, msg) => {
        return _this.rpc(payload(
            'sym_sign', [address, msg]
        ));
    };
    this.getTransactionCount = (address, blockNumber) => {
        blockNumber = blockNumber || helper.DEFAULT_BLOCK;
        return _this.rpc(payload(
            'sym_getTransactionCount', [address, blockNumber]
        ), helper.hexToNumberString);
    };
    this.getTransactionByHash = (hash) => {
        return _this.rpc(payload(
            'sym_getTransactionByHash', [hash]
        ));
    };
    this.getTransactionByBlockHashAndIndex = (hash, index) => {
        return _this.rpc(payload(
            'sym_getTransactionByBlockHashAndIndex', [hash, index]
        ));
    };
    this.getTransactionByBlockNumberAndIndex = (blockNumber, index) => {
        blockNumber = blockNumber || helper.DEFAULT_BLOCK;
        return _this.rpc(payload(
            'sym_getTransactionByBlockNumberAndIndex', [blockNumber, index]
        ));
    };
    this.getTransactionReceipt = (hash) => {
        return _this.rpc(payload(
            'sym_getTransactionReceipt', [hash]
        ));
    };
    this.sendTransaction = (txRaw, pk) => {
        return _this.rpc(payload(
            'sym_sendRawTransaction', [tx.sign(txRaw, pk)]
        ));
    };
    this.getDeposit = (address) => {
        return _this.rpc(payload(
            'sym_getDeposit', [address]
        ));
    };

    this.setDeposit = (address, deposit) => {
        return _this.rpc(payload(
            'sym_setDeposit', [address, deposit]
        ));
    };

    this.restoreDeposit = (address) => {
        return _this.rpc(payload(
            'sym_restoreDeposit', [address]
        ));
    };

    this.citizen = CitizenMethod(this.rpc, payload);
    this.warrant = WarrantMethod(this.rpc, payload);
    this.oracle = OracleMethod(this.rpc, payload);

    this.sct = {
        params: SctParams,
        getContract: (contract, blockNumber) => {
            blockNumber = blockNumber || helper.DEFAULT_BLOCK;
            return _this.rpc(payload(
                'sct_getContract', [contract, blockNumber]
            ));
        },
        getContractAccount: (contract, symId, blockNumber) => {
            blockNumber = blockNumber || helper.DEFAULT_BLOCK;
            return _this.rpc(payload(
                'sct_getContractAccount', [contract, symId, blockNumber]
            ));
        },
        getContractItem: (contract, number, blockNumber) => {
            blockNumber = blockNumber || helper.DEFAULT_BLOCK;
            return _this.rpc(payload(
                'sct_getContractItem', [contract, number, blockNumber]
            ));
        },
        getContractItemsByCategory: (contract, groupNumber, blockNumber) => {
            blockNumber = blockNumber || helper.DEFAULT_BLOCK;
            return _this.rpc(payload(
                'sct_getContractItemsByCategory', [contract, groupNumber, blockNumber]
            ));
        },
        getAllowance: (contract, owner, spender, blockNumber) => {
            blockNumber = blockNumber || helper.DEFAULT_BLOCK;
            return _this.rpc(payload(
                'sct_getAllowance', [contract, owner, spender, blockNumber]
            ));
        }
    };
    initRpc(rpc);
};

export default Methods;
