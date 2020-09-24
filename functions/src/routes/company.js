const express = require('express');
const {addCompany, updateCompany} = require('../controller/company');

const router = express.Router();

router.post('/', addCompany);
router.put('/:id', updateCompany);

module.exports = router;