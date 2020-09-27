const {getDb} = require('../config/firebase');

const db = getDb();
const quotations = "quotations";
const orders = "orders";

const functions = require("firebase-functions");

const create = async(quotation) => {
    await db.collection('orders').doc(quotation.id).set(quotation); 
}

const update = async(userInput) => {
    const quotation = db.collection(quotations).doc(userInput.id);
    await quotation.set(userInput, {merge : true});
}

const getQuotation = async(id) => {
    return await db.collection(quotations).doc(id).get();
}

module.exports = {
    create, 
    update,
    getQuotation
};