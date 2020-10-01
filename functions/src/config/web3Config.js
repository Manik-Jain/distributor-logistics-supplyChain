const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");

const url = 'https://ropsten.infura.io/v3/1124db5b660d4ee69af5ef1b9871e890';

const web3Instance = async () => {
    let baseWeb3 = new Web3(url);
    let privateKeys = [];
    for(let i = 0; i<2; i++) {
        const { address, privateKey } = baseWeb3.eth.accounts.create();
        privateKeys.push(privateKey);
    }
    const provider = new HDWalletProvider(privateKeys, url);
    const web3 = new Web3(provider);
    return web3;
}

module.exports = {
    web3Instance
}
