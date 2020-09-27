const express = require('express');
const { 
    updateStatus, 
    track,
    rateDistributor,
    rateCarrier
} = require('../controller/order');

const router = express.Router();

router.put('/', updateStatus);
router.get('/', track);
router.put('/rating/distributor', rateDistributor);
router.put('/rating/carrier', rateCarrier);

module.exports = router;