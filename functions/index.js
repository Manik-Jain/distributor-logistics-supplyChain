const express = require('express');
const bodyParser = require('body-parser');
const {getAPI, initApp} = require('./src/config/firebase');

initApp();

const app = express();
const main = express();

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended : false}));

const webApi = getAPI(main);
module.exports = {webApi};

const companyRoutes = require('./src/routes/company');
app.use('/company', companyRoutes);