const {v4 : uuidv4} = require('uuid');

module.exports = class Order {

    constructor() {
        this.id = uuidv4();
        this.distributor_rating = 0;
        this.logistic_cmpy_rating = 0;
        this.status = 'awaiting pickup';
    }
}