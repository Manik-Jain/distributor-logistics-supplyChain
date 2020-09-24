// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const {v4 : uuidv4} = require('uuid');
const app = express();
const main = express();

//API level configuration
//main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended : false}));
//admin.initializeApp(functions.config().firebase);

//initialise firebase collections
// const database= admin.firestore();
// const companies = "companies";

const Company  = require('./model/Company.js');

//enable API to accept requests
// const webApi = functions.https.onRequest(main);
// module.exports = {webApi};

//add a new Company
app.post('/company', (req, res) => {
    try {
        console.log(req.body);
        var company = new Company(uuidv4(), req.body);
          console.log(company);
        //database.collection(companies).doc(company.id).set(JSON.parse(JSON.stringify(company)));
        res.status(200).send(`Successfully added company ${company.id}`);
    } catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
})

app.listen(3000, function() {
    console.log('listening on 3000')
})