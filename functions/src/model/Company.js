const {v4 : uuidv4} = require('uuid');

module.exports = class Company {

    constructor() {
        this.id = uuidv4();
        this.successful_Orders = 0;
        this.disputed_Orders = 0;
        this.rating = 0;
      }
}