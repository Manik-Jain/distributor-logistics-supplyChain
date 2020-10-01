const Company = require('../model/Company.js');
const {create:create} = require('../dao/ComapnyDao');
const {update:update} = require('../dao/ComapnyDao');
const {getAll:getAll} = require('../dao/ComapnyDao');
const {getByID:getByID} = require('../dao/ComapnyDao');

//add a new company
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

//update an existing company
const updateCompany = async(req, res) => {
    try{
        const companyID = req.params.id;
        const company = await getByID(companyID);
        
        if(!company.exists) {
            res.status(404).send(`error: user ${companyID} does not exist`);
        } else{
            await update(companyID, req.body);
            res.status(200).json({
                id : companyID, message : 'company updated successfully'
            })
        }
        
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

//view company by id
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