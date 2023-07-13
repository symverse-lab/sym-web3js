import SymNetwork from './network';
import helper from './utils/helper';
import signer from './signer';
import sct from './rpcapi/sct';
import { fromNetwork, publicMainNetWorkNodes, publicTestNetWorkNodes } from './node/public-node';

const SymWeb3 = () => {
	return {
		param: sct,
		signer,
		utils: {
			...helper,
			fromNetwork,
			publicTestNetWorkNodes,
			publicMainNetWorkNodes,
		},
		network: SymNetwork,
	};
};

SymWeb3.utils = {
	...helper,
	fromNetwork,
	publicTestNetWorkNodes,
	publicMainNetWorkNodes,
};

export default SymWeb3;
