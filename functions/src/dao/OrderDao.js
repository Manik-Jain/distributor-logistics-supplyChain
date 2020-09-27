const {getDb} = require('../config/firebase');

const db = getDb();
const deliveryOrders = "deliveryOrders";

const createDeliveryOrder = async(deliveryOrder) => {
    await db.collection(deliveryOrders).doc(deliveryOrder.id).set(deliveryOrder); 
}

const updateOrderStatus = async(userInput) => {
    const deliveryOrder = db.collection(deliveryOrders).doc(userInput.id);
    await deliveryOrder.set(userInput, {merge : true});
}

const trackOrder = async(id) => {
    return await db.collection(deliveryOrders).doc(id).get();
}

const updateRating = async(userInput) => {
    const deliveryOrder = db.collection(deliveryOrders).doc(userInput.order_id);
    await deliveryOrder.set(userInput, {merge : true});
}

module.exports = {
    createDeliveryOrder, 
    updateOrderStatus,
    trackOrder,
    updateRating
};