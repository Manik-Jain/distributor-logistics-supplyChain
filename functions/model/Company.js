module.exports = class Company {

    constructor(id, body) {
        this.id = id;
        this.name = body.name;
        this.area_served = body.area_served;
        this.freight = body.freight;
        this.successful_Orders = 0;
        this.disputed_Orders = 0;
        this.rating = 0;
      }
}