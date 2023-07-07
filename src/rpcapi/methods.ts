import helper from '../utils/helper';
import tx from '../signer';
import SctParams from './sct';
import citizenMethod from './citizen';
import warrantMethod from './warrant';
import oracleMethod from './oracle';
import { Payload } from './symrpc';

export interface RpcMethod {
	(payload: Payload, callback?: any): any;
}

const payload = (method: string, params?: any[]): Payload => {
	let output: Payload = { method };
	if (params) output.params = params;
	return output;
};

const rpcMethod = (rpc: RpcMethod) => {
	if (!rpc) {
		throw new Error('network error');
	}

	return {
		rpc,
		clientVersion: () => rpc(payload('web3_clientVersion')),
		sha3: (params: any) => rpc(payload('web3_sha3', [params])),
		netVersion: () => rpc(payload('net_version')),
		netListening: () => rpc(payload('net_listening')),
		netPeerCount: () => rpc(payload('net_peerCount')),
		protocolVersion: () => rpc(payload('sym_protocolVersion')),
		syncing: () => rpc(payload('sym_syncing')),
		symbase: () => rpc(payload('sym_symbase')),
		getBalance: (address: string) => rpc(payload('sym_getBalance', [address, helper.DEFAULT_BLOCK]), helper.hexToNumberString),
		accounts: () => rpc(payload('sym_accounts')),
		blockNumber: () => rpc(payload('sym_blockNumber', [])),
		getBlockByHash: (blockHash: string, isFull: boolean = false) => rpc(payload('sym_getBlockByHash', [blockHash, isFull])),
		getBlockByNumber: (blockNumber: string = helper.DEFAULT_BLOCK, isFull: boolean = false) => rpc(payload('sym_getBlockByNumber', [blockNumber, isFull])),
		getBlockTransactionCountByHash: (blockHash: string) => rpc(payload('sym_getBlockTransactionCountByHash', [blockHash]), helper.hexToNumberString),
		getBlockTransactionCountByNumber: (blockNumber: string = helper.DEFAULT_BLOCK) => rpc(payload('sym_getBlockTransactionCountByNumber', [blockNumber]), helper.hexToNumberString),
		sign: (address: string, msg: string) => rpc(payload('sym_sign', [address, msg])),
		getTransactionCount: (address: string, blockNumber: string = helper.DEFAULT_BLOCK) => rpc(payload('sym_getTransactionCount', [address, blockNumber]), helper.hexToNumberString),
		getTransactionByHash: (hash: string) => rpc(payload('sym_getTransactionByHash', [hash])),
		getTransactionByBlockHashAndIndex: (hash: string, index: number) => rpc(payload('sym_getTransactionByBlockHashAndIndex', [hash, index])),
		getTransactionByBlockNumberAndIndex: (blockNumber: string = helper.DEFAULT_BLOCK, index: number) => rpc(payload('sym_getTransactionByBlockNumberAndIndex', [blockNumber, index])),
		getTransactionReceipt: (hash: string) => rpc(payload('sym_getTransactionReceipt', [hash])),
		sendTransaction: (txRaw: any, pk: any) => rpc(payload('sym_sendRawTransaction', [tx.sign(txRaw, pk)])),
		getDeposit: (address: string) => rpc(payload('sym_getDeposit', [address])),
		setDeposit: (address: string, deposit: number) => rpc(payload('sym_setDeposit', [address, deposit])),
		restoreDeposit: (address: string) => rpc(payload('sym_restoreDeposit', [address])),
		citizen: citizenMethod(rpcMethod, payload),
		warrant: warrantMethod(rpcMethod, payload),
		oracle: oracleMethod(rpcMethod, payload),
		sct: {
			params: SctParams,
			getContract: (contract: string, blockNumber: string = helper.DEFAULT_BLOCK) => rpc(payload('sct_getContract', [contract, blockNumber])),
			getContractAccount: (contract: string, symId: string, blockNumber: string = helper.DEFAULT_BLOCK) => rpc(payload('sct_getContractAccount', [contract, symId, blockNumber])),
			getContractItem: (contract: string, number: number, blockNumber: string = helper.DEFAULT_BLOCK) => rpc(payload('sct_getContractItem', [contract, number, blockNumber])),
			getContractItemsByCategory: (contract: string, groupNumber: number, blockNumber: string = helper.DEFAULT_BLOCK) => rpc(payload('sct_getContractItemsByCategory', [contract, groupNumber, blockNumber])),
			getAllowance: (contract: string, owner: string, spender: string, blockNumber: string = helper.DEFAULT_BLOCK) => rpc(payload('sct_getAllowance', [contract, owner, spender, blockNumber])),
		},
	};
};

export default rpcMethod;