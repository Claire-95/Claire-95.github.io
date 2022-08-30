/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const db = require("../services/database-service");

const doc = db.collection("pets").doc();

const petObserver = doc.onSnapshot(
  (docSnapshot) => {
    console.log(`Received doc snapshot: ${docSnapshot}`);
    // ...
  },
  (err) => {
    console.log(`Encountered error: ${err}`);
  }
);

module.exports = petObserver;
