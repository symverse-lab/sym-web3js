import SymJs from '../src';
import { fromNetwork } from '../src/node/public-node';
import { watch } from '../src/event/event';
import { TransactionReceipt } from '../src/types';
import { assert } from 'chai';

const testnet = fromNetwork('TESTNET');

describe('Rpc Watch Event Test Cases', function() {
	this.timeout(12000);

	const symjs = SymJs();
	const pk = '9b6d88e6df95345d4b16472952c6c4ab482645629d1140251ea21e7a30120021';
	symjs.network.connect(testnet.url);

	it('transaction -> receipt event', async () => {
		const count = await symjs.network.call.getTransactionCount('0x0002afc5b2b55a270002');
		//tx 데이터 작성
		let params = {
			from: '0x0002afc5b2b55a270002',
			to: '0x00020000000000010002',
			nonce: Number(count),
			gasPrice: 100000000000,
			gasLimit: 49000,
			value: 5,
			workNodes: [testnet.symbase],
			chainId: 2,
		};

		// send Transaction
		const result = await symjs.network.call.sendRawTransaction(symjs.signer.sign(params, pk))
		// watch TransactionReceipt
		const receipt = await watch<string, TransactionReceipt>(result)
			.next((input) => symjs.network.call.getTransactionReceipt(input));
		console.log(receipt);
		assert.isOk(result)
		assert.isOk(receipt)
		assert.equal(result, receipt.transactionHash)
	});
});