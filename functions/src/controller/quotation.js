//const functions = require("firebase-functions");
const Quotation = require('../model/Quotation');
const Order = require('../model/Order');
const {create:create} = require('../dao/OrderQuotationDao');
const {update:update} = require('../dao/OrderQuotationDao');
const {getQuotation : getQuotation} = require('../dao/OrderQuotationDao');
const {createOrder : createOrder} = require('../dao/OrderDao');
const {getBid : getBid} = require('../dao/BiddingPollDao');

const functions = require('firebase-functions');

//add a new quotation to database
const addQuotation = async(req, res) => {
    try{
        const bid = await getBid(req.body.bid_id);
        if(bid.data().status !== 'open') {
            res.status(400).json({id : req.body.bid_id, message : 'Auction is not open for this id'});
        } else {
            let bidData = bid.data();
            var bidObj = {
                    bid_id : bidData.id, 
                    from : bidData.from, 
                    to : bidData.to, 
                    distributor_id : bidData.distributor_id
                };
            let quotation = Object.assign(req.body, bid.data(), new Quotation(), bidObj); 
            await create(quotation);
            res.status(201).json({
                id : quotation.id, message : 'quotation added successfully'
            });
        }
    } catch(error) {
        res.status(400).json({error : error});
    }
}

//update quotation status and create an order
const updateQuotation = async(req, res) => {
    try{
        let status = req.body.status;
        var allowedStatus = ['confirmed'];
        if(!allowedStatus.includes(status)) {
            res.status(400).json({message : 'invalid quotation status'});
        } else {
            let id = req.body.id;
            const result = await getQuotation(id);
            if(result.data().status === 'confirmed') {
                res.status(400).json({id : id, message : 'quotation already confirmed'});
            } else {
                let order = new Order();
                functions.logger.log('Order', order);
                await update(req.body);
                //await createOrder(order);
                res.status(200).json({
                    message : 'bidding updated successfully!!'
                });
            }   
        }
    } catch(error) {
        res.status(400).json({error : error});
    }
}

const getQuotations = async(req, res) => {

}

module.exports = {
    addQuotation, 
    updateQuotation, 
    getQuotations
};