/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */

const db = require("../services/database-service");
const counterCollection = "counters";

const counterResetController = async () => {
  try {
    console.log("Made it to controller");
    const counterRef = db.collection(counterCollection).doc();
    const res = await counterRef.update({ owner: "dog@gmail" });
    res.status(200).json({});
  } catch (error) {
    console.log(error);
  }
};

module.exports = counterResetController;
