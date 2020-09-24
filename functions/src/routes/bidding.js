const express = require('express');
const {createBiddingPoll} = require('../controller/biddingPoll');

const router = express.Router();

router.post('/', createBiddingPoll);
//router.get('/', getActiveBiddings);

module.exports = router;