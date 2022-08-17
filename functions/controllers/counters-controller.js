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
    console.log(counterCollection);
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

module.exports = router;
