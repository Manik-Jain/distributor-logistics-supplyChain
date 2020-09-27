const Company = require('../model/Company.js');
const CompanyDao = require('../dao/CompanyDao.js');

var companyDao = new CompanyDao();

module.exports = class CompanyService {

    constructor(){}

    async addNewCompany(userInput) {
        try {
            let company = Object.assign(userInput, new Company());
            await companyDao.addCompany(company);
            return company.id;
        } catch(error) {
            return error;
        }
    }
}