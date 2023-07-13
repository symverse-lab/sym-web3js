import { RpcPayload } from '../types/types';

export const payload = (method: string, params?: any[]): RpcPayload => {
	let output: RpcPayload = { method };
	if (params) output.params = params;
	return output;
};
