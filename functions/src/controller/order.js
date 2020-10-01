const { v4: uuidv4 } = require('uuid');
const DeliveryOrder = require('../model/DeliveryOrder');
const { updateOrderStatus: updateOrderStatus} = require('../dao/OrderDao');
const {trackOrder:trackOrder} = require('../dao/OrderDao');
const {updateRating:updateRating} = require('../dao/OrderDao');
const {getQuotation:getQuotation} = require('../dao/OrderQuotationDao');

const { addDeliveryOrder, getInvoiceByOrderId, updateInvoice } = require('../service/orderService');

//Deprecated
//user should not be allowed to add a new order
//system should create a new order by itself
const addOrder = async (req, res) => {
    try {
        let deliveryOrder = Object.assign(req.body, new DeliveryOrder());
        await addDeliveryOrder(deliveryOrder);
        res.status(201).json({
            message: 'order added successfully'
        });
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

//update order delivery status
//update invoice with status and transactionId
// pay 10% on pickup
const updateStatus = async (req, res) => {
    try {
        let invoiceArray = [];
        let invoices = await getInvoiceByOrderId(req.body.id);
        invoices.forEach(entry => {
            if (entry.data().order_id === req.body.id) {
                invoiceArray.push(entry.data());
            }
        });
        let invoice = invoiceArray[0];
        let transaction = { id: uuidv4(), status: req.body.status };
        invoice.status = req.body.status;
        invoice.transactions.push(transaction);
        
        let deliveryOrder = await trackOrder(req.body.id);
        const orderObj = deliveryOrder.data();
        let quotation = await getQuotation(orderObj.quotationId);
        const quotationObj = quotation.data();
        let quotationPrice = quotationObj.quoted_price;

        if(req.body.status === 'pickup') {
            
            await updateOrderStatus(req.body);
            await updateInvoice(invoice);
            //escrow call here
        } else if(req.body.status === 'delivered') {
            await updateOrderStatus(req.body);
            await updateInvoice(invoice);
        } 
        
        res.status(200).send({
            id: req.body.id,
            message: `order updated succesfully to ${req.body.status}`,
            invoice: invoice
        });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

const track = async(req, res) => {
    try {
        let orderId = req.query.id;
        let order = await trackOrder(orderId);
        res.status(200).send({
            orderId : orderId,
            status : order.data().status
        })
    } catch(error) {
        res.status(500).json({error : error})
    }
}

const rateDistributor = async(req, res) => {
    try {
        let orderObj = await trackOrder(req.body.order_id);
        let orderData = orderObj.data();

        if(orderData.status !== 'delivered') {
            res.status(400).json({message : 'Order is not yet delivered. Rating cannot be updated'});
        } else if(orderData.status === 'delivered') {
            await updateRating(req.body);
            res.status(200).json({
                orderId : req.body.order_id,
                message : 'distributor rating updated successfully'
            })
        }
    } catch(error) {
        res.status(400).json({error : error});
    }
}

const rateCarrier = async(req, res) => {
    try {
        let orderObj = await trackOrder(req.body.order_id);
        let orderData = orderObj.data();

        if(orderData.status !== 'delivered') {
            res.status(400).json({message : 'Order is not yet delivered. Rating cannot be updated'});
        } else if(orderData.status === 'delivered') {
            await updateRating(req.body);
            res.status(200).json({
                orderId : req.body.order_id,
                message : 'Carrier rating updated successfully'
            })
        }
    } catch(error) {
        res.status(400).json({error : error});
    }
}

module.exports = {
    addOrder,
    updateStatus, 
    track,
    rateDistributor,
    rateCarrier
};