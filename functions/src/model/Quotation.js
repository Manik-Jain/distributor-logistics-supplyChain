const {v4 : uuidv4} = require('uuid');

module.exports = class Quotation {

    constructor() {
        this.id = uuidv4();
        this.status = 'quotation';
    }
}