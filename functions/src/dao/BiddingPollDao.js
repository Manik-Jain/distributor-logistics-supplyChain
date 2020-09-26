const {getDb} = require('../config/firebase');

const db = getDb();
const biddingPoll = "biddingPoll";

const createBidding = async(bidding) => {
    await db.collection(biddingPoll).doc(bidding.id).set(bidding); 
}

const updateBidding = async(userInput) => {
    const bidding = db.collection(biddingPoll).doc(userInput.id);
    await bidding.set(userInput, {merge : true});
}

const getBidding = async() => {
    return await db.collection(biddingPoll).get();
}

const getBid = async(id) => {
    return await db.collection(biddingPoll).doc(id).get();
}

module.exports = {createBidding, updateBidding, getBidding, getBid};