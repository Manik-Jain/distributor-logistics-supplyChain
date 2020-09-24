const Company = require('../model/Company.js');
const companyDao = require('../dao/CompanyDao.js');

module.exports = class CompanyService {

    constructor(){}

    async function addNewCompany(userInput) {
        try {
            let company = Object.assign(userInput, new Company());
            await companyDao.addNewCompany(company);
            return company.id;
        } catch(error) {
            return error;
        }
    }
}