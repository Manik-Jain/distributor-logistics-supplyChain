const {getDb} = require('../config/firebase');
const {distributors} = require ('../config/const');

const db = getDb();
//const distributors = "distributors";

const create = async(distributor) => {
    await db.collection(distributors).doc(distributor.id).set(distributor); 
}

const update = async(distributorId, userInput) => {
    const distributor = db.collection(distributors).doc(distributorId);
    await distributor.set(userInput, { merge : true });
}

<<<<<<< HEAD
const getByID = async (distributorID) => {
     // asynchronously fetch distributors from the database
    const distributor = await db.collection(distributors).doc(distributorId).get();

    return distrbutor;
};

module.exports = {create, update};
=======
module.exports = {
    create, 
    update
};
>>>>>>> 3b118506715c9ae3686797b5ef6b3fca7a087d00
