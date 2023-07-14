import SctParams from './sctparam';
import citizenMethod from './citizen';
import warrantMethod from './warrant';
import oracleMethod from './oracle';
import sctMethod from './sct';
import { RpcMethod } from '../types';
import symMethod from './sym';


const rpcMethod = (rpc: RpcMethod) => {
	if (!rpc) {
		throw new Error('network error');
	}

	return {
		...symMethod(rpc),
		citizen: citizenMethod(rpc),
		warrant: warrantMethod(rpc),
		oracle: oracleMethod(rpc),
		sct: {
			params: SctParams,
			...sctMethod(rpc),
		},
	};
};

export default rpcMethod;