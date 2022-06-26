/* eslint-disable object-curly-spacing */
const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parse");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

// initialize express server
const app = express();
const main = express();

// add the path to receive request and set json as bodyParser to process body
main.use("/api/v1", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

// initialize the database and the collection
// const db = admin.firestore();
// const userCollection = "users";

// define google cloud function name
exports.webApi = functions.https.onRequest(main);
