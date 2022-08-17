/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint new-cap: ["error", { "capIsNewExceptions": ["Router"] }] */
const db = require("../services/database-service");
const express = require("express");
// eslint-disable-next-line object-curly-spacing
const route = express.Router();
const counterCollection = "counters";

route.get("/", async (req, res) => {
  try {
    if (!req.user.loggedIn) {
      res.status(401).send({});
    }
    const counterQuerySnapshot = await db.collection(counterCollection).get();
    const counters = [];
    counterQuerySnapshot.forEach((doc) => {
      counters.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    res.status(200).json(counters);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

route.post("/", async (req, res) => {
  try {
    console.log(req.user);
    console.log(req.user.email);
    req.body.owner = req.user.email;
    await db.collection(counterCollection).doc().set(req.body);
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Delete counter
route.delete("/:counterId", async (req, res) => {
  try {
    const counterId = req.params.counterId;
    await db.collection(counterCollection).doc(counterId).delete();
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = route;
