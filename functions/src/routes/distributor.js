const express = require('express');
const {
    addDistributor, 
    updateDistributor
} = require('../controller/distributor');

const router = express.Router();

router.post('/', addDistributor);
router.put( '/:id' updateDistributor);

module.exports = router;