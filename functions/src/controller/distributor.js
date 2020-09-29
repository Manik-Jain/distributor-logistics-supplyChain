const Distributor = require('../model/Distributor');
const {create:create} = require('../dao/DistributorDao');
const {update:update} = require('../dao/DistributorDao');

/**
 * Add a new distributor to the system
 * 
 * The user is expected to provide the name of the distributor
 * req.body : which should be a json containing {name : value} pair
 * The system will be default generate the other details.
 * */
const addDistributor = async(req, res) => {
    try{
        let distributor = Object.assign(req.body, new Distributor()); 
        await create(distributor);
        res.status(201).json({
            id : distributor.id, 
            message : 'distributor added successfully'
        });
    } catch(error) {
        res.status(400).json({error : error});
    }
}

//update an existing distributor
const updateDistributor = async(req, res) => {
    try{
        await update(req.params.id, req.body);
        res.status(200).json({
            id : req.params.id, 
            message : 'distributor updated successfully'
        })
    } catch(error) {
        res.status(500).json({error : error});
    }
}

module.exports={
    addDistributor, 
    updateDistributor
};