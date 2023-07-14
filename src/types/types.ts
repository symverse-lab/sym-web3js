
export type TxParams = {
	from: string,
	nonce: number,
	gasPrice?: number | string,
	gasLimit: number | string,
	to: string,
	value: number | string,
	workNodes: string[]
	chainId?: number
	v?: string
	r?: string
	s?: string
}

export interface RpcResult {
	jsonrpc: string
	id: number
	result?: string
	error?: {
		code: number
		message: string
	}
}

export type RpcRun<I, O> = (input: I) => Promise<O>

export interface RpcMethod{
	<T = any> (payload: RpcPayload, callback?: any): Promise<T>;
}

export interface Provider {
	sendAsync: (payload: any, cb: (err: any, response: any) => void) => void;
}

export interface Options {
	jsonSpace?: number;
	max?: number;
}

export interface RpcPayload {
	id?: number;
	method?: string;
	jsonrpc?: string;
	params?: any[];
}

export interface ISymRPC {
	options: Options;
	idCounter: number;
	currentProvider: Provider;
	setProvider: (provider: Provider) => void;
	sendAsync: (payload: RpcPayload, callback?: (err: any, response: any) => void) => Promise<any>;
}
