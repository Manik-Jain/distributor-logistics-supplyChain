const functions = require('firebase-functions');
const admin = require('firebase-admin');

const db = admin.firestore();
const companies = "companies";

module.exports = class CompanyDao {

    constructor(){}

    async addCompany(company) {
        await db.collection(companies).doc(company.id).set(company);    
    }
}