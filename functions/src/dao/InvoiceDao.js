const {getDb} = require('../config/firebase');

const db = getDb();
const deliveryInvoices = "deliveryInvoices";

const createDeliveryInvoice = async(deliveryInvoice) => {
    await db.collection(deliveryInvoices).doc(deliveryInvoice.id).set(deliveryInvoice); 
}

const updateDeliveryInvoice = async(input) => {
    const invoice = db.collection(deliveryInvoices).doc(input.id);
    await invoice.set(input, {merge : true});
}

const getInvoice_OrderId = async(orderId) => {
    return await db.collection(deliveryInvoices).get(); 
}

const getInvoice_Id = async(id) => {
    return await db.collection(deliveryInvoices).doc(id).get();
}

module.exports = {
    createDeliveryInvoice,
    updateDeliveryInvoice,
    getInvoice_Id,
    getInvoice_OrderId
};