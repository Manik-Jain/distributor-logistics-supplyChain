const Web3 = require('web3');

const web3Instance = () => {
    let web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
    return web3;
}

module.exports = {
    web3Instance
}
