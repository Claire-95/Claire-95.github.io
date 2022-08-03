/* eslint-disable object-curly-spacing */

const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const cors = require("cors");

// eslint-disable-next-line max-len
const authenticationMiddleware = require("./middleware/authentication-middleware");

admin.initializeApp(functions.config().firebase);

const petsController = require("./controllers/pets-controller");

// initialize express server
const main = express();

main.use(cors({ origin: true }));
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
main.use(authenticationMiddleware);

main.use("/pets", petsController);

// define google cloud function name
exports.webApi = functions.https.onRequest(main);
