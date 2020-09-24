const Company = require('../model/Company.js');
const {create:create} = require('../dao/ComapnyDao');
const {update:update} = require('../dao/ComapnyDao');

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
        await update(req.params.id, req.body);
        res.status(200).json({
            id : req.params.id, message : 'company updated successfully'
        })
    } catch(error) {
        res.status(500).json({error : error});
    }
}

//create a new bidding
const createBiddingPoll = async(req, res) => {
    try {
        let bidding = Object.assign(req.body, new Bidding());
        await createBidding(bidding);
        res.status(201).json({
            id : bidding.id, message : 'bidding added to the poll successfully'
        });
    } catch(error) {
        res.status(400).json({error : error});
    }
}

module.exports={addCompany, updateCompany, createBiddingPoll};