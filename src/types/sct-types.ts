

export interface SctContract {
	creator: string
	name: string
	owner: string
	state: string
	stateCode: "0x0" | "0x1"
	symbol: string
	total: string
	type: string
	lock?: string
}

export interface SctAccount {
	balance?: string
	lockBalance?: string
	state?: string
	stateCode?: "0x0" | "0x1"
	index?: string[]
}

export interface SctItem {
	category: string
	description: string
	index: string
	name: string
	owner: string
	property: string
	state: "0x0" | "0x1"
	type: string
	value: string
}


