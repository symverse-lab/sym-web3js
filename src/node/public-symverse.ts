type GsymNode = [string, string];
type Network = string;

export const PUBLIC_MAINNET_WORKNODES: GsymNode[] = [
	["http://58.227.193.177:8545", "0x000294158de00c6f0002"],
	["http://1.234.16.208:8545", "0x0002537dc9a64d350002"],
	["http://58.227.193.176:8545", "0x000219d9056be8690002"],
	["http://1.234.16.207:8545", "0x0002b103ddaae9780002"],
	["http://58.227.193.175:8545", "0x0002db0859e72aad0002"],
	["http://1.234.16.206:8545", "0x00021be440a505f80002"],
	["http://58.227.193.174:8545", "0x0002072f7e8bdb9c0002"],
	["http://1.234.16.205:8545", "0x000213c83c0f6dfd0002"],
	["http://58.227.193.173:8545", "0x0002d1cb9324a4870002"],
	["http://1.234.16.204:8545", "0x00022f5e13d35a4f0002"],
	["http://58.227.193.172:8545", "0x00022f5e13d35a4f0002"],
];

export const PUBLIC_TESTNET_WORKNODES: GsymNode[] = [
	["http://110.10.76.180:8545", "0x00024f48413a322b0002"],
	["http://1.234.16.211:8545", "0x0002241d160e075a0002"],
	["http://58.227.193.179:8545", "0x0002f9f1eae3dcd40002"],
	["http://58.229.132.83:8545", "0x0002cdc6bfb7b0a90002"],
	["http://110.10.76.179:8545", "0x0002a29a938c857d0002"],
	["http://1.234.16.210:8545", "0x0002766f686059520002"],
	["http://58.227.193.178:8545", "0x00024b433c352e260002"],
	["http://58.229.132.82:8545", "0x00021f18110a02fb0002"],
	["http://110.10.76.178:8545", "0x0002f4ede5ded7d00002"],
];

export const fromNetwork = (network: Network): GsymNode => {
	const nodes = (network === 'TEST_NET')
		? PUBLIC_TESTNET_WORKNODES
		: PUBLIC_MAINNET_WORKNODES;

	const randomIndex = Math.floor(Math.random() * nodes.length);
	return nodes[randomIndex];
};