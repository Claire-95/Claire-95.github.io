/* eslint new-cap: ["error", { "capIsNewExceptions": ["Router"] }] */
const db = require("../services/database-service");
const express = require("express");
// eslint-disable-next-line object-curly-spacing
const cors = require("cors")({ origin: true });
const router = express.Router();
const petCollection = "pets";

// Get pets
router.get("/", async (req, res) => {
  cors(req, res, async (err) => {
    try {
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
      console.log(error);
      res.status(500).send(error);
    }
  });
});

// Post a Pet to database
router.post("/", async (req, res) => {
  cors(req, res, async (err) => {
    try {
      const data = JSON.parse(req.body);
      // ID SET HERE!!!
      const res = await db.collection(petCollection).doc().set(data);

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
      console.log(error);
      res.status(500).send(error);
    }
  });
});

// Delete pet
router.delete("/", async (req, res) => {
  cors(req, res, async (err) => {
    try {
      const data = JSON.parse(req.body);
      const headData = JSON.parse(req.header);
      console.log(data);
      const id = data.id;
      console.log(id);
      console.log(headData);

      const res = await db.collection("pets").doc(id).delete();

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
      console.log(error);
      res.status(500).send(error);
    }
  });
});

module.exports = router;
