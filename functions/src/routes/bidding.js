const express = require('express');
const {
    createBiddingPoll, 
    updateBiddingPoll, 
    getActiveBiddings,
    getBiddingByID
} = require('../controller/biddingPoll');

const router = express.Router();

router.post('/', createBiddingPoll);
router.put('/', updateBiddingPoll);
router.get('/', getActiveBiddings);
router.get('/:id', getBiddingByID);

module.exports = router;