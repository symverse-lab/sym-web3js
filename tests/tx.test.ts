import SymJs from '../src';
import { fromNetwork } from '../src/node/public-node';
import { PENDING_BLOCK } from '../src/utils/helper';

const testnet =  fromNetwork('TESTNET')

describe('Send Transaction Test Cases', function() {
	const symjs = SymJs();
	const pk = '9b6d88e6df95345d4b16472952c6c4ab482645629d1140251ea21e7a30120021';
	symjs.network.connect(testnet.url)

	it('sendTransaction', async () => {
		const count = await symjs.network.call.getTransactionCount('0x0002afc5b2b55a270002', PENDING_BLOCK)
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
		const result = await symjs.network.call.sendTransaction(params, pk)
		console.log(result)
	});

	it('sendRawTransaction', async () => {
		const count = await symjs.network.call.getTransactionCount('0x0002afc5b2b55a270002', PENDING_BLOCK)
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
		const result = await symjs.network.call.sendRawTransaction(symjs.signer.sign(params, pk))
		console.log(result)
	});
});