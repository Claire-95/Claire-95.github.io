/* eslint-disable object-curly-spacing */

const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const functions = require("firebase-functions");

admin.initializeApp(functions.config().firebase);

const petsController = require("./controllers/pets-controller");

// initialize express server
const app = express();
const main = express();

// add the path to receive request and set json as bodyParser to process body
main.use("/api/v1", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

main.use("/pets", petsController);

// define google cloud function name
exports.webApi = functions.https.onRequest(main);
