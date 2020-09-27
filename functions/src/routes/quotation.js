const express = require('express');
const { 
    addQuotation, 
    updateQuotation, 
    getQuotations
} = require('../controller/quotation');

const router = express.Router();

router.post('/', addQuotation);
router.put('/', updateQuotation);
router.get('/', getQuotations);

module.exports = router;