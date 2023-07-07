import SymNetwork from './network';
import helper from './utils/helper';
import signer from './signer';
import sct from './rpcapi/sct';

const SymJs = function() {
	return {
		param: sct,
		signer,
		utils: helper,
		network: SymNetwork
	}
};

SymJs.utils = helper;
SymJs.param = sct;

export default SymJs;
