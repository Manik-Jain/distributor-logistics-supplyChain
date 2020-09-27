const {v4 : uuidv4} = require('uuid');

module.exports = class Invoice {

    constructor() {
        this.id = uuidv4();
        this.status = 'generated';
        this.transactions = [];
    }
}