import helper from './utils/helper';
import CitizenTx from './tx-citizen';
import SymverseTx from './tx-transaction';
import { TxParams } from './types';

function sign(params: TxParams, pk: string) {
	let copyParams = helper.paramsToHex(helper.cloneDeep(params)) as TxParams;
	const tx = new SymverseTx(copyParams);
	tx.sign(Buffer.from(pk, 'hex'));
	return `0x${tx.serialize().toString('hex')}`;
}

function txHash(params: TxParams, includeSignature = false) {
	params = helper.paramsToHex(helper.cloneDeep(params)) as TxParams;
	const tx = new SymverseTx(params);
	return `0x${tx.hash(includeSignature)}`;
}


function citizenSign(params, pk) {
	params = helper.paramsToHex(params);
	const ctx = new CitizenTx(params);
	ctx.sign(Buffer.from(pk, 'hex'));
	return '0x' + ctx.serialize().toString('hex');
}

export default {
	sign,
	txHash,
};
