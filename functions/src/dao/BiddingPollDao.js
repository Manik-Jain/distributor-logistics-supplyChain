const {getDb} = require('../config/firebase');

const db = getDb();
const biddingPoll = "biddingPoll";

const createBidding = async(bidding) => {
    await db.collection(biddingPoll).doc(bidding.id).set(bidding); 
}

module.exports = {createBidding};