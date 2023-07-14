# Symverse Web3 JavaScript SDK
###### It provides json rpc communication interface and development library with symverse blockchain, rpc api.
###### npm: https://www.npmjs.com/package/sym-web3js

## Installation
#### Node.js
```
npm i sym-web3js
```

#### Yarn
```
yarn add sym-web3js

...

import SymWeb3 from "sym-web3js"
```

A minified, browserified file `dist/sym-web3` is included for use in the browser. Including this file simply attaches the `symjs` object to window:
```$xslt
<script src='sym-web3.js'></script>
```

## Usage
Use the symjs object directly from the global namespace:
```javascript
console.log(SymWeb3)  // { utils: ...} 

const symjs = SymWeb3();
console.log(symjs); // {network: ..., utils: ..., signer: ...} 
````
### Network connect
```javascript
const symjs = SymWeb3();
symjs.network.connect("http://localhost:8001").then(connectedMessage => {
    console.log(connectedMessage, 'connect success...')
}).catch(e => {
    // connected fail...
})
```

There you go, now you can use it:
```javascript
// Return Promise Object By Json RPC   
symjs.network.call.getBalance(address); 
symjs.network.call.clientVersion();
```

-  Send Raw Transaction example:

```javascript
let privateKey = "1a43aa399cb2efe186317e0b09f4a7ef88b83cff05089b145709881bf4db3a20"
let params = {
    from:"0x00021000000000010002",
    nonce: 210,
    gasLimit: 41000,
    to: "0x00021000000000020002",
    value: 5,
    workNodes: ["0x00021000000000010002"],
    chainId: 7777 //require
};
// Return Promise Object By Json RPC   
symjs.network.call.sendTransaction(params, privateKey);
```


-  Citizen api call example: 

```javascript
// Return Promise Object By Json RPC   
let citizenInfo = await symjs.network.call.citizen.getCitizenBySymID("0x00021000000000010002")
let count = await symjs.network.call.citizen.getCitizenCount()
```

-  Warrant api call example: 

```javascript
// Return Promise Object By Json RPC   
let blockNumber = await symjs.network.call.warrant.blockNumber()
```

-  Sct api call example: 

```javascript
// Return Promise Object By Json RPC   
let constract = await symjs.network.call.sct.getContract("0x4523ad7875a9c41e9629")
let account = await symjs.network.call.sct.getContractAccount("0x4523ad7875a9c41e9629", "0x00021000000000010002")
```

### Send Transaction Receipt confirmation

```javascript

//send Transaction
const hash = await symjs.network.call.sendRawTransaction(symjs.signer.sign(params, pk))

// watch Transaction Receipt
const receipt = await watch(hash).next(symjs.network.call.getTransactionReceipt);

console.log(receipt)
/*
* {
  blockHash: '0xc8580648b270bf690ca5b151f0d76c1d2b864af7f3ba7003f4ab031b3aa0505c',
  blockNumber: '0x18eee87',
  contractAddress: null,
  cumulativeGasUsed: '0xbf68',
  from: '0x0002afc5b2b55a270002',
  gasUsed: '0xbf68',
  logs: [],
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: '0x1',
  to: '0x00020000000000010002',
  transactionHash: '0x318e722534f9acc60fc45fcca7f54058e0fecb34e175e619033c5982a9ff099a',
  transactionIndex: '0x0'
}
* */
```

## Contact
<https://www.symverse.com/><br> Please contact us on this page.
