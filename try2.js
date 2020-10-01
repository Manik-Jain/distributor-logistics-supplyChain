const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const url = 'https://ropsten.infura.io/v3/1124db5b660d4ee69af5ef1b9871e890';
const baseWeb3 = new Web3(url);

const keys = [];
let addressKeyValuePair = [];
for(let i=0; i< 2; i++) {
    const { address, privateKey } = baseWeb3.eth.accounts.create();
    var obj = {
            address:  address,
            key : privateKey
        }
        addressKeyValuePair.push(obj);
    keys.push(privateKey);
}

console.log(addressKeyValuePair);
const provider = new HDWalletProvider(keys, url);
const web3 = new Web3(provider);
const accounts = [];
const acc = web3.eth.getAccounts();

console.log(acc);

 //let acc0 = '0x2a47E55968a7C5b493a6Bd5d59eb412c2cDe35D2';
 //let acc1 = '0xdD00dbF6F2318215C2b535AD447057dfF786BA3a';
// let acc2 = '0xB7b8945AB49AcA4B45E614625FFE2A2EB51D367f';

// const newContract = new web3.eth.Contract([
//     {
//         "inputs": [],
//         "stateMutability": "nonpayable",
//         "type": "constructor"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "logisticCmpny",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "amount",
//                 "type": "uint256"
//             }
//         ],
//         "name": "Deposited",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": true,
//                 "internalType": "address",
//                 "name": "logisticCmpny",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "amount",
//                 "type": "uint256"
//             }
//         ],
//         "name": "Withdrawn",
//         "type": "event"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "logisticCmpny",
//                 "type": "address"
//             }
//         ],
//         "name": "deposit",
//         "outputs": [],
//         "stateMutability": "payable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "address",
//                 "name": "logisticCmpny",
//                 "type": "address"
//             }
//         ],
//         "name": "getDeposits",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "address payable",
//                 "name": "logisticCmpny",
//                 "type": "address"
//             }
//         ],
//         "name": "withdraw",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }
// ], { from: acc0 }
// );

// // const escrow = newContract.deploy({
// //     data: '608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610756806100606000396000f3fe608060405260043610610051576000357c01000000000000000000000000000000000000000000000000000000009004806351cff8d91461005657806394f649dd146100a7578063f340fa011461010c575b600080fd5b34801561006257600080fd5b506100a56004803603602081101561007957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610150565b005b3480156100b357600080fd5b506100f6600480360360208110156100ca57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061043e565b6040518082815260200191505060405180910390f35b61014e6004803603602081101561012257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610487565b005b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146101f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806106c46023913960400191505060405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163110156102e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a20696e73756666696369656e742062616c616e636500000081525060200191505060405180910390fd5b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008273ffffffffffffffffffffffffffffffffffffffff168260405180600001905060006040518083038185875af1925050503d806000811461038c576040519150601f19603f3d011682016040523d82523d6000602084013e610391565b606091505b50509050806103eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a8152602001806106e7603a913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5836040518082815260200191505060405180910390a2505050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461052c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806106c46023913960400191505060405180910390fd5b6000349050600081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054019050600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481101561062c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f4164646974696f6e206f766572666c6f7700000000000000000000000000000081525060200191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4836040518082815260200191505060405180910390a250505056fe43616c6c6572206973206e6f7420746865206f776e6572206f6620636f6e7472616374416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d61792068617665207265766572746564a264697066735822122046b37a2d6e5e2aa051e4d0d44eee2a6e0f0b97921836bdaa1f6610340af411d164736f6c63430006060033',
// //     arguments : []
// // }).send({
// //     from : acc0,
// //     gas : 4700000
// // }).then(function(newContractInstance) {
    
// //     console.log('contract delpoyed', newContractInstance.options.address);
// // }) ;

// // web3.eth.defaultAccount = acc0;
// // console.log(web3.eth.defaultAccount);

// newContract.options.address = acc1;

// // console.log(newContract.options.address);
// console.log(newContract.methods);

// //deposit
// newContract.methods.deposit(acc1).send({from : acc0, value : 960306400000000000}).then(
//     console.log
// )

// newContract.methods.getDeposits(acc1).send({from : acc0}).then(
//     console.log
// )

