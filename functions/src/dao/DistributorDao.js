const {getDb} = require('../config/firebase');

const db = getDb();
const distributors = "distributors";

const create = async(distributor) => {
    await db.collection(distributors).doc(distributor.id).set(distributor); 
}

const update = async(distributorId, userInput) => {
    const distrbutor = db.collection(distributors).doc(distributorId);
    await distributor.set(userInput, {merge : true});
}

module.exports = {create, update};