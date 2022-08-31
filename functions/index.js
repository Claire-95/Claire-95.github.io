/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const cors = require("cors");
// const db = require("./services/database-service");

// eslint-disable-next-line max-len
const authenticationMiddleware = require("./middleware/authentication-middleware");

admin.initializeApp(functions.config().firebase);

const petsController = require("./controllers/pets-controller");
const countersController = require("./controllers/counters-controller");
const counterResetController = require("./controllers/reset-controller");

// initialize express server
const main = express();
const app = express();

main.use(cors({ origin: true }));
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
main.use(authenticationMiddleware);

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(authenticationMiddleware);

main.use("/pets", petsController);
main.use("/counters", countersController);

app.use("/counter", counterResetController);

// define google cloud function name
exports.webApi = functions.https.onRequest(main);

exports.scheduledFunction = functions.pubsub
  .schedule("every 5 minutes")
  .onRun(app);
