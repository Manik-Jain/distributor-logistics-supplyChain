const Company = require('../model/Company.js');
const {create:create} = require('../dao/ComapnyDao');
const {update:update} = require('../dao/ComapnyDao');
const {getAll:getAll} = require('../dao/ComapnyDao');
const {getByID:getByID} = require('../dao/ComapnyDao');

/**
 * Add a new logistics company to the system
 * 
 * The user is expected to provide the name of the comoany 
 * req.body : which should be a json containing {name : value} pair
 * The system will be default generate the other details.
 * */

const addCompany = async(req, res) => {
    try{
        let company = Object.assign(req.body, new Company()); 
        await create(company);
        res.status(201).json({
            id : company.id, message : 'company added successfully'
        });
    } catch(error) {
        res.status(400).json({error : error});
    }
}
/**
 * Update an existing logistics company to the system
 * 
 * The user is expected to change the name of the existing company
 * req.body : which should be a json containing {name : value} pair
 * */

const updateCompany = async(req, res) => {
    try{
        await update(req.params.id, req.body);
        res.status(200).json({
            id : req.params.id, message : 'company updated successfully'
        })
    } catch(error) {
        res.status(500).json({error : error});
    }
}

//view all companies

const getAllCompanies = async(req, res) => { 
    try {
        let allCompanies = [];
        const results = await getAll();
        results.forEach(element => {
            allCompanies.push(element.data());
        });        
        res.status(200).send(allCompanies);

    } catch(error) { // handle errors
        res.status(500).json({
            error: error 
        });
    }
}

/**
* view logistics company  by id 
* 
* The user is expected to provide the id
* The system will return the name, rating and id
**/
const getCompanyByID = async(req, res) => { 
    try {
        const companyID = req.params.id;
        const company = await getByID(companyID);
        
        if(!company.exists) {
            res.status(404).send(`error: user ${companyID} does not exist`);
        }

        res.status(200).send(company.data());

    } catch(error) { // handle errors
        res.status(500).json({
            error: error 
        });
    }
}

module.exports={
    addCompany, 
    updateCompany,
    getAllCompanies,
    getCompanyByID
};