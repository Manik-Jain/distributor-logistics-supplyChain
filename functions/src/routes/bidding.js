const express = require('express');
const {
    createBiddingPoll, 
    updateBiddingPoll, 
    getActiveBiddings
} = require('../controller/biddingPoll');

const router = express.Router();

router.post('/', createBiddingPoll);
router.put('/', updateBiddingPoll);
router.get('/', getActiveBiddings);

module.exports = router;