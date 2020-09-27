const {v4 : uuidv4} = require('uuid');

module.exports = class Bidding {

    constructor() {
        this.id = uuidv4();
        this.status = 'open';
    }
}