const {createDeliveryOrder : createDeliveryOrder} = require('../dao/OrderDao');
const {createDeliveryInvoice:createDeliveryInvoice} = require('../dao/InvoiceDao');
const {updateDeliveryInvoice:updateDeliveryInvoice} = require('../dao/InvoiceDao');
const {getInvoice_OrderId:getInvoice_OrderId} = require('../dao/InvoiceDao');
const {getInvoice_Id:getInvoice_Id} = require('../dao/InvoiceDao');

const addDeliveryOrder = async (deliveryOrder) => {
    await createDeliveryOrder(deliveryOrder);
}

const generateInvoice = async(deliveryInvoice) => {
    await createDeliveryInvoice(deliveryInvoice);
}

const getInvoiceByOrderId = async(orderId) => {
    // let invoiceArray = [];
    // const invoices = await getInvoice_OrderId(orderId);
    // invoices.forEach(entry => {
    //     if(entry.data().order_id === req.body.id) {
    //         invoiceArray.push(entry.data());
    //     }
    // })
    // return invoiceArray[0];
    return await getInvoice_OrderId(orderId);
}

const getInvoice = async(id) => {
    return await getInvoice_Id(id);
}

const updateInvoice = async(input) => {
    await updateDeliveryInvoice(input);
}

module.exports = {
    addDeliveryOrder, 
    generateInvoice,
    updateInvoice,
    getInvoiceByOrderId,
    getInvoice
};