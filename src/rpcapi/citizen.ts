import tx from '../signer';
import helper from '../utils/helper';
import { RpcMethod, RpcPayload } from '../types/types';
import { Citizen, CitizenBlock, CitizenTransaction } from '../types/rpc-types';
import { payload } from '../utils/rpc';

const CitizenApi = (rpc: RpcMethod) => {
	return {
		//TODO: 시티즌 서명은 ID NODE에서 처리
		// sendCitizen: (datas, pt) => {
		//     return rpc(payload(
		//         'citizen_sendRawCitizen', [tx.citizenSign(datas, pt)]
		//     ));
		// },
		getCitizenByHash: (tx) => {
			return rpc<CitizenTransaction>(payload(
				'citizen_getCitizenByHash', [tx],
			));
		},
		getRawCitizenByHash: (tx) => {
			return rpc(payload(
				'citizen_getRawCitizenByHash', [tx],
			));
		},
		getCitizenBySymID: (symId, blockNumber = helper.DEFAULT_BLOCK) => {
			return rpc<Citizen>(payload(
				'citizen_getCitizenBySymID', [symId, blockNumber],
			));
		},
		getRawCitizenBySymID: (symId, blockNumber = helper.DEFAULT_BLOCK) => {
			return rpc(payload(
				'citizen_getRawCitizenBySymID', [symId, blockNumber],
			));
		},
		getCitizensByBlockNumber: (blockNumber = helper.DEFAULT_BLOCK) => {
			return rpc<CitizenTransaction[]>(payload(
				'citizen_getCitizensByBlockNumber', [blockNumber],
			));
		},
		getCitizenCount: (blockNumber = helper.DEFAULT_BLOCK) => {
			return rpc<string>(payload(
				'citizen_getCitizenCount', [blockNumber],
			));
		},
		getBlockByHash: (blockHash, isFull = false) => {
			return rpc<CitizenBlock>(payload(
				'citizen_getBlockByHash', [blockHash, isFull],
			));
		},
		getBlockByNumber: (blockNumber = helper.DEFAULT_BLOCK, isFull = false) => {
			return rpc<CitizenBlock>(payload(
				'citizen_getBlockByNumber', [blockNumber, isFull],
			));
		},
		getBlockCitizenCountByHash: (blockHash) => {
			return rpc(payload(
				'citizen_getBlockCitizenCountByHash', [blockHash],
			));
		},
		getBlockCitizenCountByNumber: (blockNumber = helper.DEFAULT_BLOCK) => {
			return rpc(payload(
				'citizen_getBlockCitizenCountByNumber', [blockNumber],
			));
		},
		pendingCitizens: () => {
			return rpc<CitizenTransaction[]>(payload(
				'citizen_pendingCitizens', [],
			));
		},
		blockNumber: () => {
			return rpc(payload(
				'citizen_blockNumber', [],
			));
		},
	};
};

export default CitizenApi;
