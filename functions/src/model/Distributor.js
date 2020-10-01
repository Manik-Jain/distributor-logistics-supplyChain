const {v4 : uuidv4} = require('uuid');

module.exports = class Distributor {

    constructor() {
        this.id = uuidv4();
        this.rating = 0;
      }
}