const functions = require('firebase-functions');
const admin = require('firebase-admin');

const initApp = () => {
    admin.initializeApp(functions.config().firebase);
}

const getDb = () => {
    return admin.firestore();
}

const getAPI = (main) => {
    return functions.https.onRequest(main);
}

module.exports = {
    initApp, 
    getAPI, 
    getDb
};