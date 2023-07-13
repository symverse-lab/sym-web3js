
export interface Transaction {
	blockHash: string
	blockNumber: string
	from: string
	gas: string
	gasPrice: string
	hash: string
	input: string
	nonce: string
	to: string
	transactionIndex: string
	type: string
	workNodes: string[]
	value: string
	extraData: string
	v: string
	r: string
	s: string
}

export interface TransactionReceipt {
	blockHash: string
	blockNumber: string
	contractAddress?: string
	cumulativeGasUsed: string
	from: string
	gasUsed: string
	logs: string[]
	logsBloom: string
	status: string
	to: string
	transactionHash: string
	transactionIndex: string
}

export interface Block {
	activeCbNum: string
	activeObNum: string
	activeWbNum: string
	cbHash: string
	cbNum: string
	extraData: string
	gasLimit: string
	gasUsed: string
	hash: string
	logsBloom: string
	number: string
	obHash: string
	obNum: string
	parentHash: string
	primary: string
	receiptsRoot: string
	rewardRoot: string
	rewards: any[]
	sctRoot: string
	signInfo: SignInfo
	size: string
	stateRoot: string
	tickStamp: string
	timeStamp: string
	transactions: any[]
	transactionsRoot: string
	validatorInfos: string[]
	wbHash: string
	wbNum: string
}

export interface SignInfo {
	mbNum: string
	sign: string
	extraData: string
}

/* ================== */

export interface CitizenBlock {
	citizens: string[]
	citizensRoot: string
	hash: string
	number: string
	parentHash: string
	relatedMbNum: string
	size: string
	stateRoot: string
}


export interface Citizen {
	ca: string
	aKeyPubH: string
	nonce: string
	vFlag: string
	country: string
	status: string
	credit: string
	role: string
	refCode: string
	writeTime: string
}

export interface CitizenTransaction {
	blockHash: string
	blockNumber: string
	citizenIndex: string
	from: string
	to: string
	nonce: string
	symId: string
	aKeyPubH: string
	vFlag: string
	country: string
	status: string
	credit: string
	role: string
	refCode: string
	writeTime: string
	hash: string
	v: string
	r: string
	s: string
}
