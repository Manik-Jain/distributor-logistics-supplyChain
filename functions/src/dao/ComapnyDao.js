const {getDb} = require('../config/firebase');
const {companies} = require ('../config/const');

const db = getDb();
//const companies = "companies";

const create = async(company) => {
    await db.collection(companies).doc(company.id).set(company);
}

const update = async(companyId, userInput) => {
    const company = db.collection(companies).doc(companyId);
    await company.set(userInput, {merge : true});
}

const getAll = async() => {
    return await db.collection(companies).get();
}

const getByID = async (companyID) => {
    // asynchronously fetch from the database
    const company = await db.collection(companies).doc(companyID).get();

    return company;
};


module.exports = {create, update, getAll, getByID};