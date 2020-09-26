const {createBidding:createBidding} = require('../dao/BiddingPollDao');
const {updateBidding:updateBidding} = require('../dao/BiddingPollDao');
const {getBidding:getBidding} = require('../dao/BiddingPollDao');
const Bidding = require('../model/Bidding.js');

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

//update bidding status
//possible values ['open', 'on-hold', 'recalled', 'closed']
const updateBiddingPoll = async(req, res) => {
    try {
        let status = req.body.status;
        var allowedStatus = ['open', 'on-hold', 'recalled', 'closed'];
        if(!allowedStatus.includes(status)) {
            res.status(400).json({message : 'invalid status'});
        } 
        await updateBidding(req.body);
        res.status(200).json({
            id : req.body.id, message : 'bidding updated successfully'
        });
    } catch(error) {
        res.status(400).json({error : error});
    }
}

//fetch all the active biddings
const getActiveBiddings = async(req, res) => {
    try{
        let biddings = [];
        const results = await getBidding();
        results.forEach(element => {
            //if(element.data.status === 'open') {
                biddings.push(element.data());
            //}
        });
        res.status(200).send(biddings);
    } catch(error){
        res.status(400).json({error : error});
    }
}

module.exports={
    createBiddingPoll, 
    updateBiddingPoll, 
    getActiveBiddings
};