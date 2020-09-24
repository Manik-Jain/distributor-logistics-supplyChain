const {getDb} = require('../config/firebase');

const db = getDb();
const companies = "companies";

const create = async(company) => {
    await db.collection(companies).doc(company.id).set(company); 
}

const update = async(companyId, userInput) => {
    const company = db.collection(companies).doc(companyId);
    await company.set(userInput, {merge : true});
}

module.exports = {create, update};