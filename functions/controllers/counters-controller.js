/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint new-cap: ["error", { "capIsNewExceptions": ["Router"] }] */
const db = require("../services/database-service");
const express = require("express");
// eslint-disable-next-line object-curly-spacing
const router = express.Router();
const counterCollection = "counters";

router.get("/", async (req, res) => {
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

router.post("/", async (req, res) => {
  try {
    const counterData = {
      owner: req.user.email,
      amount: req.body.counterData.amount,
      linkedPet: req.body.counterData.linkedPet,
      trackable: req.body.counterData.trackable,
      metric: req.body.counterData.metric,
      value: 0,
    };
    await db.collection(counterCollection).doc().set(counterData);
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.patch("/:counterId", async (req, res) => {
  try {
    const counterId = req.params.counterId;
    const counterData = {
      owner: req.user.email,
      amount: req.body.counterData.amount,
      linkedPet: req.body.counterData.linkedPet,
      trackable: req.body.counterData.trackable,
      metric: req.body.counterData.metric,
      value: req.body.counterData.value,
    };
    await db.collection(counterCollection).doc(counterId).set(counterData);
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/:counterId", async (req, res) => {
  try {
    const counterId = req.params.counterId;
    console.log(counterId);
    await db.collection(counterCollection).doc(counterId).delete();
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
