const {getDb} = require('../config/firebase');

const db = getDb();
const orders = "orders";

const createOrder = async(order) => {
    await db.collection(orders).doc(order.id).set(order); 
}

const updateOrder = async(userInput) => {
    const order = db.collection(orders).doc(userInput.id);
    await order.set(userInput, {merge : true});
}

module.exports = {
    createOrder, 
    updateOrder
};