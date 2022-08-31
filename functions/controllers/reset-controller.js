/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint new-cap: ["error", { "capIsNewExceptions": ["Router"] }] */
const db = require("../services/database-service");
const express = require("express");
const router = express.Router();
const counterCollection = "counters";

router.post("/", async (req, res) => {
  try {
    console.log("Made it to controller");
    req.body.owner = req.user.email;
    await db.collection(counterCollection).doc().set({ value: 0 });
    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
