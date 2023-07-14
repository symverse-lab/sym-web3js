import helper from '../utils/helper';
import tx from '../signer';
import { Block, RpcMethod, Transaction, TransactionReceipt, TxParams } from '../types';
import { payload } from '../utils/rpc';

const SymApi = (rpc: RpcMethod) => {
	return {

		clientVersion: () => rpc<string>(payload('web3_clientVersion')),

		sha3: (params: any) =>
			rpc<string>(payload('web3_sha3', [params])),

		netVersion: () => rpc<string>(payload('net_version')),

		netListening: () => rpc<string>(payload('net_listening')),

		netPeerCount: () => rpc<string>(payload('net_peerCount')),

		protocolVersion: () => rpc<string>(payload('sym_protocolVersion')),

		syncing: () => rpc(payload('sym_syncing')),

		symbase: () => rpc<string>(payload('sym_symbase')),

		getBalance: (address: string) =>
			rpc<string>(payload('sym_getBalance', [address, helper.DEFAULT_BLOCK]), helper.hexToNumberString),

		accounts: () => rpc<string[]>(payload('sym_accounts')),

		blockNumber: () => rpc(payload('sym_blockNumber', [])),

		getBlockByHash: (blockHash: string, isFull: boolean = false) =>
			rpc<Block>(payload('sym_getBlockByHash', [blockHash, isFull])),

		getBlockByNumber: (blockNumber: string = helper.DEFAULT_BLOCK, isFull: boolean = false) =>
			rpc<Block>(payload('sym_getBlockByNumber', [blockNumber, isFull])),

		getBlockTransactionCountByHash: (blockHash: string) =>
			rpc(payload('sym_getBlockTransactionCountByHash', [blockHash]), helper.hexToNumberString),

		getBlockTransactionCountByNumber: (blockNumber: string = helper.DEFAULT_BLOCK) =>
			rpc(payload('sym_getBlockTransactionCountByNumber', [blockNumber]), helper.hexToNumberString),

		sign: (address: string, msg: string) =>
			rpc<string>(payload('sym_sign', [address, msg])),

		getTransactionCount: (address: string, blockNumber: string = helper.DEFAULT_BLOCK) =>
			rpc<string>(payload('sym_getTransactionCount', [address, blockNumber]), helper.hexToNumberString),

		getTransactionByHash: (hash: string) =>
			rpc<Transaction>(payload('sym_getTransactionByHash', [hash])),

		getTransactionByBlockHashAndIndex: (hash: string, index: number) =>
			rpc(payload('sym_getTransactionByBlockHashAndIndex', [hash, index])),

		getTransactionByBlockNumberAndIndex: (blockNumber: string = helper.DEFAULT_BLOCK, index: number) =>
			rpc(payload('sym_getTransactionByBlockNumberAndIndex', [blockNumber, index])),

		getTransactionReceipt: (hash: string) =>
			rpc<TransactionReceipt>(payload('sym_getTransactionReceipt', [hash])),

		getDeposit: (address: string) =>
			rpc(payload('sym_getDeposit', [address])),

		sendTransaction: (txParams: TxParams, pk: string) =>
			rpc<string>(payload('sym_sendRawTransaction', [tx.sign(txParams, pk)])),

		sendRawTransaction: (txRaw: string) =>
			rpc<string>(payload('sym_sendRawTransaction', [txRaw])),
	};
};

export default SymApi;