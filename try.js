const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');



// //var privateKeys = [];
// const createAccounts = async (num) => {
//     var keys = [];
//     var addresses = [];
//     for(let i = 0; i < 2; i++) {
//         const { address, privateKey } = await web3.eth.accounts.create();
//         keys.push(privateKey);
//         //privateKeys.push(privateKey);
//         addresses.push(address);

//         console.log(`[${i}] { address: ${address}, privateKey: ${privateKey} } `);
//     }

//     console.log(keys);

//     const deployableWeb3 = new HDWalletProvider(keys, url);
//     console.log(deployableWeb3);

//     const escrowABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "payee", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "weiAmount", "type": "uint256" }], "name": "Deposited", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "payee", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "weiAmount", "type": "uint256" }], "name": "Withdrawn", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "payee", "type": "address" }], "name": "deposit", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "payee", "type": "address" }], "name": "depositsOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "payee", "type": "address" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
//     const escrowBytecode = '60806040523480156100115760006000fd5b505b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b61005a565b6107a6806100696000396000f3fe6080604052600436106100385760003560e01c806351cff8d91461003e578063e3a9db1a14610091578063f340fa01146100f857610038565b60006000fd5b34801561004b5760006000fd5b5061008f600480360360208110156100635760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061013d565b005b34801561009e5760006000fd5b506100e2600480360360208110156100b65760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610468565b6040518082815260200191505060405180910390f35b61013b6004803603602081101561010f5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104bc565b005b3373ffffffffffffffffffffffffffffffffffffffff16600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610205576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281526020015060200191505060405180910390fd5b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054905080600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163110151515610303576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a20696e73756666696369656e742062616c616e636500000081526020015060200191505060405180910390fd5b6000600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081909090555060008273ffffffffffffffffffffffffffffffffffffffff1682604051808050600001905060006040518083038185875af1925050503d80600081146103b2576040519150601f19603f3d011682016040523d82523d6000602084013e6103b7565b606091505b50509050801515610413576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180610737603a913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5836040518082815260200191505060405180910390a250505b5b50565b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490506104b7565b919050565b3373ffffffffffffffffffffffffffffffffffffffff16600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610584576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281526020015060200191505060405180910390fd5b6000349050600081600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054019050600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050548110151515610695576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081526020015060200191505060405180910390fd5b80600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508273ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4836040518082815260200191505060405180910390a250505b5b5056fe416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d61792068617665207265766572746564a26469706673582212204b4033bac822b96f15788b1a8ee8092d84bcc776b1a95ad13bbcd1e0dd41ae1c64736f6c63430006060033';

//     // const accounts = await web3.eth.getAccounts();
//     // console.log('accounts', accounts);
//     const deployer = addresses[0];
//     console.log(deployer);
//     const options = { gas: '1000000', from: deployer };

//     const escrowContract = await new web3.eth.Contract(escrowABI);

//     escrowContract.deploy({
//         data: escrowBytecode,
//         arguments: [] // empty as the constructor in our Escrow contract has no arguments
//     }).send({
//         from : addresses[0],
//             gas : 4700000
//          })
//     .then((newContractInstance) => {
//         console.log('contract delpoyed', newContractInstance.options.address);
//     });

//     //const escrow = newContract.deploy({
//         //     data: '608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610756806100606000396000f3fe608060405260043610610051576000357c01000000000000000000000000000000000000000000000000000000009004806351cff8d91461005657806394f649dd146100a7578063f340fa011461010c575b600080fd5b34801561006257600080fd5b506100a56004803603602081101561007957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610150565b005b3480156100b357600080fd5b506100f6600480360360208110156100ca57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061043e565b6040518082815260200191505060405180910390f35b61014e6004803603602081101561012257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610487565b005b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146101f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806106c46023913960400191505060405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163110156102e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a20696e73756666696369656e742062616c616e636500000081525060200191505060405180910390fd5b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008273ffffffffffffffffffffffffffffffffffffffff168260405180600001905060006040518083038185875af1925050503d806000811461038c576040519150601f19603f3d011682016040523d82523d6000602084013e610391565b606091505b50509050806103eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a8152602001806106e7603a913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5836040518082815260200191505060405180910390a2505050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461052c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806106c46023913960400191505060405180910390fd5b6000349050600081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054019050600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481101561062c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f4164646974696f6e206f766572666c6f7700000000000000000000000000000081525060200191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4836040518082815260200191505060405180910390a250505056fe43616c6c6572206973206e6f7420746865206f776e6572206f6620636f6e7472616374416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d61792068617665207265766572746564a264697066735822122046b37a2d6e5e2aa051e4d0d44eee2a6e0f0b97921836bdaa1f6610340af411d164736f6c63430006060033',
//         //     arguments : []
//         // }).send({
//         //     from : acc0,
//         //     gas : 4700000
//         // }).then(function(newContractInstance) {
            
//         //     console.log('contract delpoyed', newContractInstance.options.address);
//         // }) ;
    
// }

// (
//     async function() {
//         await createAccounts(2);
//     }
// )();

// // var privateKeys = [
// //     '0xac5c2b3444c22d5751f19e1c540b59ab1052a7e81e8b4158d6c88f636f998134',
// //     '0x06bb471c7d947deb557a58fc013c1dc1503584c0316321dda2ec6a1a026f9b55',
// //     '0xc071b27c3fe521698c18edf4cf02e2931ef1765bd0c8f7d082920607db14e6de',
// //     '0x748971e93ca97eea8767567c416ece5a2b153785362ad20fc5f90c78dee1431b',
// //     '0x974e6e06e04109b284d24d41fce4a3f84c999a149931c3645ce35a871dbd0add'
// //   ];


// //console.log(privateKeys);
// //const deployableWeb3 = new HDWalletProvider(privateKeys, url);
// //console.log(deployableWeb3);

// //const deployerKey = '9b34d7a0297c34f3949a358212919b6624f92e28a7cd44b5c5052cee12a3b87e';
// //const deployerKey = privateKeys[0];

const url = new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/1124db5b660d4ee69af5ef1b9871e890');
const web3 = new Web3(url);

const deploy = async () => {
    var keys = [];
    var addresses = [];
    for(let i = 0; i < 2; i++) {
        const { address, privateKey } = web3.eth.accounts.create();
        keys.push(privateKey);
        //privateKeys.push(privateKey);
        addresses.push(address);

        console.log(`[${i}] { address: ${address}, privateKey: ${privateKey} } `);
    }

    console.log(keys);

    const provider = new HDWalletProvider(keys, url);
    const deployableWeb3 = new Web3(provider);
    //console.log(deployableWeb3);

    const escrowABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "payee", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "weiAmount", "type": "uint256" }], "name": "Deposited", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "payee", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "weiAmount", "type": "uint256" }], "name": "Withdrawn", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "payee", "type": "address" }], "name": "deposit", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "payee", "type": "address" }], "name": "depositsOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "payee", "type": "address" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
    const escrowBytecode = '60806040523480156100115760006000fd5b505b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b61005a565b6107a6806100696000396000f3fe6080604052600436106100385760003560e01c806351cff8d91461003e578063e3a9db1a14610091578063f340fa01146100f857610038565b60006000fd5b34801561004b5760006000fd5b5061008f600480360360208110156100635760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061013d565b005b34801561009e5760006000fd5b506100e2600480360360208110156100b65760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610468565b6040518082815260200191505060405180910390f35b61013b6004803603602081101561010f5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104bc565b005b3373ffffffffffffffffffffffffffffffffffffffff16600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610205576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281526020015060200191505060405180910390fd5b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054905080600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163110151515610303576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a20696e73756666696369656e742062616c616e636500000081526020015060200191505060405180910390fd5b6000600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081909090555060008273ffffffffffffffffffffffffffffffffffffffff1682604051808050600001905060006040518083038185875af1925050503d80600081146103b2576040519150601f19603f3d011682016040523d82523d6000602084013e6103b7565b606091505b50509050801515610413576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180610737603a913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5836040518082815260200191505060405180910390a250505b5b50565b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490506104b7565b919050565b3373ffffffffffffffffffffffffffffffffffffffff16600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610584576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281526020015060200191505060405180910390fd5b6000349050600081600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054019050600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050548110151515610695576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081526020015060200191505060405180910390fd5b80600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508273ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4836040518082815260200191505060405180910390a250505b5b5056fe416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d61792068617665207265766572746564a26469706673582212204b4033bac822b96f15788b1a8ee8092d84bcc776b1a95ad13bbcd1e0dd41ae1c64736f6c63430006060033';

     const accounts = await deployableWeb3.eth.getAccounts();
     console.log('accounts', accounts);
    const deployer = addresses[0];
    console.log(deployer);
    const options = { gas: '1000000', from: deployer };

    const escrowContract = new web3.eth.Contract(escrowABI, deployer );

    escrowContract.deploy({
        data: escrowBytecode,
        arguments: [] // empty as the constructor in our Escrow contract has no arguments
    }).send(options).then((newContractInstance) =>{
             console.log('contract delpoyed', newContractInstance.options.address);
         });

}

const deploy_Manik = async () => {
    var keys = [];
    var addresses = [];
    for(let i = 0; i < 2; i++) {
        const { address, privateKey } = await web3.eth.accounts.create();
        keys.push(privateKey);
        //privateKeys.push(privateKey);
        addresses.push(address);

        console.log(`[${i}] { address: ${address}, privateKey: ${privateKey} } `);
    }

    console.log(keys);

    //const provider = new HDWalletProvider(['9b34d7a0297c34f3949a358212919b6624f92e28a7cd44b5c5052cee12a3b87e'], url);
    const provider = new HDWalletProvider(keys, url);
    const deployableWeb3 = new Web3(provider);
    //console.log(deployableWeb3);

    const escrowABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "payee", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "weiAmount", "type": "uint256" }], "name": "Deposited", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "payee", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "weiAmount", "type": "uint256" }], "name": "Withdrawn", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "payee", "type": "address" }], "name": "deposit", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "payee", "type": "address" }], "name": "depositsOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "payee", "type": "address" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
    const escrowBytecode = '60806040523480156100115760006000fd5b505b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b61005a565b6107a6806100696000396000f3fe6080604052600436106100385760003560e01c806351cff8d91461003e578063e3a9db1a14610091578063f340fa01146100f857610038565b60006000fd5b34801561004b5760006000fd5b5061008f600480360360208110156100635760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061013d565b005b34801561009e5760006000fd5b506100e2600480360360208110156100b65760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610468565b6040518082815260200191505060405180910390f35b61013b6004803603602081101561010f5760006000fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104bc565b005b3373ffffffffffffffffffffffffffffffffffffffff16600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610205576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281526020015060200191505060405180910390fd5b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054905080600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163110151515610303576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a20696e73756666696369656e742062616c616e636500000081526020015060200191505060405180910390fd5b6000600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081909090555060008273ffffffffffffffffffffffffffffffffffffffff1682604051808050600001905060006040518083038185875af1925050503d80600081146103b2576040519150601f19603f3d011682016040523d82523d6000602084013e6103b7565b606091505b50509050801515610413576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180610737603a913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5836040518082815260200191505060405180910390a250505b5b50565b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490506104b7565b919050565b3373ffffffffffffffffffffffffffffffffffffffff16600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610584576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281526020015060200191505060405180910390fd5b6000349050600081600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054019050600160005060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050548110151515610695576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081526020015060200191505060405180910390fd5b80600160005060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190909055508273ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4836040518082815260200191505060405180910390a250505b5b5056fe416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d61792068617665207265766572746564a26469706673582212204b4033bac822b96f15788b1a8ee8092d84bcc776b1a95ad13bbcd1e0dd41ae1c64736f6c63430006060033';

     const accounts = await deployableWeb3.eth.getAccounts();
     console.log('accounts', accounts);
    const deployer = accounts[0];
    console.log(deployer);
    const options = { gas: '1000000', from: deployer };

    const escrowContract = new web3.eth.Contract(escrowABI, deployer );

    escrowContract.deploy({
        data: escrowBytecode,
        arguments: [] // empty as the constructor in our Escrow contract has no arguments
    }).send(options, (err, transactionHash) => {
        if (err) {
            throw new Error('failed to send:', err)
        }

        console.log('Contract deployment transactionHash: ' + transactionHash);
    })
    .then((contract) =>{
        console.log('Contract address: ' + contract.options.address);
        return contract;
    }) // chaining
    .catch((err) => {
        throw new Error(err);
    })

}

   

         (
                async function() {
                    await deploy_Manik();
                }
            )();

