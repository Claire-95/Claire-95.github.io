/* eslint-disable object-curly-spacing */

const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const functions = require("firebase-functions");

admin.initializeApp(functions.config().firebase);

const petsController = require("./controllers/pets-controller");

// initialize express server
const main = express();

main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

main.use("/pets", petsController.router);

// define google cloud function name
exports.webApi = functions.https.onRequest(main);
