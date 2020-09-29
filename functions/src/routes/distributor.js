const express = require('express');

const {
    addDistributor, 
    updateDistributor,
    getDistributorByID
} = require('../controller/distributor');

const router = express.Router();

router.post('/', addDistributor);
<<<<<<< HEAD
router.put( '/:id' updateDistributor);
router.get('/:id', getDistributorByID);
=======
router.put( '/:id', updateDistributor);
>>>>>>> 3b118506715c9ae3686797b5ef6b3fca7a087d00

module.exports = router;