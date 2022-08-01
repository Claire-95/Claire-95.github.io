const express = require("express");
const cors = require("cors");
const functions = require("firebase-functions");
const app = express();
const admin = require("firebase-admin");

const bodyParser = require("body-parser");

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
const petCollection = "pets";

app.use("/api/v1", app);
app.use(bodyParser.json());
// eslint-disable-next-line object-curly-spacing
app.use(bodyParser.urlencoded({ extended: false }));

// Automatically allow cross-origin requests
// eslint-disable-next-line object-curly-spacing
app.use(cors({ origin: true }));

// Get pets
app.get("/", async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    const petQuerySnapshot = await db.collection(petCollection).get();
    const pets = [];
    petQuerySnapshot.forEach((doc) => {
      pets.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

// Post a Pet to database
app.post("/", async (req, res) => {
  try {
    const data = JSON.parse(req.body);
    // ID SET HERE!!!

    const res = await db.collection("pets").doc().set(data);

    const petQuerySnapshot = await db.collection(petCollection).get();

    const pets = [];

    petQuerySnapshot.forEach((doc) => {
      pets.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(pets);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Delete pet
app.delete("/", async (req, res) => {
  try {
    const data = JSON.parse(req.body);
    const id = data.id;
    console.log(id);

    const res = await db.collection("pets").doc(id).delete();

    const petQuerySnapshot = await db.collection(petCollection).get();

    const pets = [];

    petQuerySnapshot.forEach((doc) => {
      pets.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(pets);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

exports.webApi = functions.https.onRequest(app);
