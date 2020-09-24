module.exports = class Company {

    constructor(id, name, area_served, freight={}){
        this.id = id;
        this.name = name;
        this.area_served = area_served;
        this.freight = freight;
        this.successful_Orders = 0;
        this.disputed_Orders = 0;
        this.rating = 0;
    }
}