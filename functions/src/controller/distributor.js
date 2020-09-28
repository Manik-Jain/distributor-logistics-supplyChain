const Distributor = require('../model/distributor.js');
const {create:create} = require('../dao/DistributorDao');
const {update:update} = require('../dao/DistributorDao');

//add a new distributor
const addDistributor = async(req, res) => {
    try{
        let distributor = Object.assign(req.body, new Distributor()); 
        await create(distributor);
        res.status(201).json({
            id : distributor.id, message : 'distributor added successfully'
        });
    } catch(error) {
        res.status(400).json({error : error});
    }
}


//update an existing distributor
const updateDistributor = async(req, res) => {
    try{
        await update(req.body);
        res.status(200).json({
            id : req.params.id, message : 'distributor updated successfully'
        })
    } catch(error) {
        res.status(500).json({error : error});
    }
}


module.exports={
    addDistributor, updateDistributor
};