const {createBidding:createBidding} = require('../dao/BiddingPollDao');
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

module.exports={createBiddingPoll};