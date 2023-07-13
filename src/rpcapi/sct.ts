import helper from '../utils/helper';
import { RpcMethod, RpcPayload } from '../types/types';
import { SctAccount, SctContract, SctItem } from '../types';

const payload = (method: string, params?: any[]): RpcPayload => {
	let output: RpcPayload = { method };
	if (params) output.params = params;
	return output;
};

const SctApi = (rpc: RpcMethod) => {
	return {
		getContract: (
			contract: string,
			blockNumber: string = helper.DEFAULT_BLOCK
		) => rpc<SctContract>(payload('sct_getContract', [contract, blockNumber])),

		getContractAccount: (
			contract: string,
			symId: string,
			blockNumber: string = helper.DEFAULT_BLOCK
		) => rpc<SctAccount>(payload('sct_getContractAccount', [contract, symId, blockNumber])),

		getContractItem: (
			contract: string,
			number: number,
			blockNumber: string = helper.DEFAULT_BLOCK
		) => rpc<SctItem>(payload('sct_getContractItem', [contract, number, blockNumber])),

		getContractItemsByCategory: (
			contract: string,
			category: string,
			blockNumber: string = helper.DEFAULT_BLOCK
		) => rpc<SctItem[]>(payload('sct_getContractItemsByCategory', [contract, category, blockNumber])),

		getAllowance: (
			contract: string,
			owner: string,
			spender: string,
			blockNumber: string = helper.DEFAULT_BLOCK
		) => rpc(payload('sct_getAllowance', [contract, owner, spender, blockNumber])),
	};
};

export default SctApi;
