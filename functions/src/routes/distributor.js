const express = require('express');

const {
    addDistributor, 
    updateDistributor,
    getDistributorByID
} = require('../controller/distributor');

const router = express.Router();

router.post('/', addDistributor);
router.put( '/:id', updateDistributor);
router.get('/:id', getDistributorByID);

module.exports = router;