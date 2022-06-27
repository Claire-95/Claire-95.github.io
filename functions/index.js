/* eslint-disable object-curly-spacing */
const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

// initialize express server
const app = express();
const main = express();

// initialize the database and the collection
const db = admin.firestore();
const userCollection = "users";

// add the path to receive request and set json as bodyParser to process body
main.use("/api/v1", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

// Create new user
main.get("/users", async (req, res) => {
  try {
    const userQuerySnapshot = await db.collection(userCollection).get();
    const users = [];
    userQuerySnapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// define google cloud function name
exports.webApi = functions.https.onRequest(main);
