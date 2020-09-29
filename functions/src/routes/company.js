const express = require('express');
const {
    addCompany, 
    updateCompany,
    getAllCompanies,
    getCompanyByID
} = require('../controller/company');

const router = express.Router();

router.post('/', addCompany);
router.put('/:id', updateCompany);
router.get('/', getAllCompanies);
router.get('/:id', getCompanyByID);

module.exports = router;